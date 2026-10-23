// grao booth — upload Worker (Phase 1, features/backend-infrastructure.md)
//
// Dependency-free. Paste this whole file into the Cloudflare dashboard editor
// (Workers & Pages → your Worker → Edit code). No wrangler, no npm.
//
// One job: accept a single capture from the booth and stream it into R2,
// verified. There are deliberately NO list or read endpoints.
//
//   PUT /u/{eventCode}/{YYYYMMDD-HHMMSS}-{mode}-{captureId}.{ext}
//   Headers: X-Upload-Token, Content-Type, Content-Length, X-Content-SHA256 (hex)
//   → 201 { status:"stored", key, size, sha256 }   new object, checksum validated by R2
//   → 200 { status:"exists", key, size, sha256 }   same bytes already stored (retry)
//   → 4xx/5xx { status:"error", error }            booth keeps its local copy
//
// Configuration (Worker → Settings → Variables and Secrets / Bindings):
//   BOOTH_BUCKET    R2 bucket binding (EU jurisdiction bucket)
//   UPLOAD_TOKEN    Secret. Must equal EVENT.uploadToken in the booth HTML. Rotate per event.
//   ALLOWED_ORIGIN  Text. Booth origin, e.g. https://joaovizoso.github.io (comma-separate several)
//   ALLOWED_EVENTS  Text. eventCode=YYYY-MM-DD pairs, comma-separated,
//                   e.g. joao-constanca-20261114=2026-11-14
//   WINDOW_DAYS     Text, optional. Days before/after the event date uploads are accepted (default 2).
//
// See worker/README.md for step-by-step setup.

const MAX_BYTES = 100 * 1024 * 1024; // Workers request-body limit (Free/Pro plans)
const TYPES = { mp4: 'video/mp4', webm: 'video/webm', jpg: 'image/jpeg' }; // ext → only allowed content-type
const EVENT_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const FILE_RE = /^(\d{8})-(\d{6})-(video|photo|boomerang)-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\.(mp4|webm|jpg)$/;
const SHA_RE = /^[0-9a-f]{64}$/;
const DAY_MS = 24 * 60 * 60 * 1000;

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allowedOrigins = String(env.ALLOWED_ORIGIN || '').split(',').map(s => s.trim()).filter(Boolean);
    const originOk = allowedOrigins.includes(origin);
    const cors = originOk ? {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-Upload-Token, X-Content-SHA256',
      'Access-Control-Max-Age': '600',
      'Vary': 'Origin',
    } : { 'Vary': 'Origin' };
    const reply = (code, obj) => new Response(JSON.stringify(obj), {
      status: code,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...cors },
    });
    const fail = (code, error) => reply(code, { status: 'error', error });

    try {
      if (request.method === 'OPTIONS') {
        return originOk ? new Response(null, { status: 204, headers: cors }) : fail(403, 'origin not allowed');
      }
      if (request.method !== 'PUT') return fail(405, 'method not allowed');
      // CORS stops other websites using a guest's browser; the token below is
      // what actually stops everyone else.
      if (!originOk) return fail(403, 'origin not allowed');
      if (!env.BOOTH_BUCKET) return fail(500, 'worker misconfigured: BOOTH_BUCKET binding missing');
      if (!env.UPLOAD_TOKEN) return fail(500, 'worker misconfigured: UPLOAD_TOKEN secret missing');

      // ── Path: /u/{eventCode}/{file} ──
      const parts = new URL(request.url).pathname.split('/');
      if (parts.length !== 4 || parts[0] !== '' || parts[1] !== 'u') return fail(404, 'not found');
      let eventCode, file;
      try { eventCode = decodeURIComponent(parts[2]); file = decodeURIComponent(parts[3]); }
      catch (e) { return fail(400, 'bad path encoding'); }
      if (eventCode.length > 80 || !EVENT_RE.test(eventCode)) return fail(400, 'bad event code');
      const m = FILE_RE.exec(file);
      if (!m) return fail(400, 'bad key');
      const ext = m[5];

      // ── Token ──
      if (!(await sameSecret(request.headers.get('X-Upload-Token') || '', env.UPLOAD_TOKEN))) {
        return fail(401, 'bad token');
      }

      // ── Event allowlist + date window ──
      const events = parseEvents(env.ALLOWED_EVENTS);
      const date = events.get(eventCode);
      if (!date) return fail(403, 'event not allowed');
      const wd = parseInt(env.WINDOW_DAYS, 10);
      const windowDays = Number.isFinite(wd) && wd >= 0 ? wd : 2;
      const start = date - windowDays * DAY_MS;
      const end = date + (windowDays + 1) * DAY_MS; // through the end of the last day (UTC)
      const now = Date.now();
      if (now < start || now >= end) return fail(403, 'event upload window closed');

      // ── Content type, size, checksum ──
      const contentType = (request.headers.get('Content-Type') || '').split(';')[0].trim().toLowerCase();
      if (contentType !== TYPES[ext]) return fail(415, 'content type not allowed for .' + ext);
      const lenHeader = request.headers.get('Content-Length');
      if (lenHeader == null || !/^\d+$/.test(lenHeader)) return fail(411, 'content-length required');
      const size = Number(lenHeader);
      if (size <= 0) return fail(400, 'empty body');
      if (size > MAX_BYTES) return fail(413, 'too large');
      const sha256 = (request.headers.get('X-Content-SHA256') || '').toLowerCase();
      if (!SHA_RE.test(sha256)) return fail(400, 'X-Content-SHA256 must be 64 hex chars');
      if (!request.body) return fail(400, 'empty body');

      const key = eventCode + '/' + file;

      // ── Idempotency: already stored? ──
      const existing = await env.BOOTH_BUCKET.head(key);
      if (existing) {
        const existingSha = storedSha256(existing);
        if (existing.size === size && existingSha === sha256) {
          return reply(200, { status: 'exists', key, size: existing.size, sha256: existingSha });
        }
        // Never overwrite a different object under the same key.
        return fail(409, 'key exists with different content');
      }

      // ── Streamed, checksum-validated write ──
      // R2 recomputes SHA-256 over the bytes it receives and rejects the put if
      // it differs from the one supplied (passed as an ArrayBuffer to avoid any
      // hex/base64 ambiguity in the string form).
      let obj;
      try {
        obj = await env.BOOTH_BUCKET.put(key, request.body, {
          sha256: hexToBuf(sha256),
          httpMetadata: { contentType },
          // Also kept as metadata: only ever written by a put that R2 validated.
          customMetadata: { source: 'grao-booth', event: eventCode, sha256 },
        });
      } catch (e) {
        return fail(422, 'rejected by storage (checksum or body mismatch): ' + String((e && e.message) || e).slice(0, 200));
      }
      if (!obj) return fail(500, 'storage did not store the object');

      // Belt and braces: confirm from what R2 reports, not from what we were told.
      const storedSha = storedSha256(obj);
      if (obj.size !== size || storedSha !== sha256) {
        return fail(500, 'stored object failed verification');
      }
      return reply(201, { status: 'stored', key, size: obj.size, sha256: storedSha });
    } catch (e) {
      return fail(500, 'internal error');
    }
  },
};

function parseEvents(raw) {
  const map = new Map();
  for (const pair of String(raw || '').split(',')) {
    const [code, day] = pair.split('=').map(s => (s || '').trim());
    if (!code || !/^\d{4}-\d{2}-\d{2}$/.test(day || '')) continue;
    const t = Date.parse(day + 'T00:00:00Z');
    if (!Number.isNaN(t)) map.set(code, t);
  }
  return map;
}

// SHA-256 as R2 reports it; falls back to our metadata copy, which exists only
// on objects whose put() was validated against that same checksum.
function storedSha256(obj) {
  const fromR2 = bufToHex(obj.checksums && obj.checksums.sha256);
  if (fromR2) return fromR2;
  return (obj.customMetadata && obj.customMetadata.sha256) || '';
}

function bufToHex(buf) {
  if (!buf) return '';
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function hexToBuf(hex) {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
  return out.buffer;
}

// Constant-time comparison (compares SHA-256 digests, so lengths always match).
async function sameSecret(given, expected) {
  const enc = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest('SHA-256', enc.encode(given)),
    crypto.subtle.digest('SHA-256', enc.encode(String(expected))),
  ]);
  const x = new Uint8Array(a), y = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0 && given.length > 0;
}
