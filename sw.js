/* grao booth — service worker (offline app shell). Dependency-free.
 *
 * WHY: the booth runs as an iPad home-screen app. Without this file the app
 * cannot open with no network, which breaks "take the iPad home and let the
 * outbox drain on WiFi" (features/backend-infrastructure.md, gaps found in
 * review).
 *
 * RULES (do not relax without reading the above):
 *  - Shell (index.html, manifest, icons, any other same-origin GET):
 *    NETWORK-FIRST, cache as fallback. Online, the booth always gets the
 *    latest deployed file; the cache only answers when the network fails or
 *    is too slow. A stale cache at a wedding is worse than none.
 *  - Google Fonts (CSS + font files): stale-while-revalidate in their own cache.
 *  - Everything else is NOT intercepted: no PUT/POST, no other origins — in
 *    particular never the upload Worker. Those requests go straight to the
 *    network exactly as if this file did not exist.
 *  - No skipWaiting() / clients.claim(): a new version of THIS FILE never takes
 *    over a page mid-capture. It activates the next time the app is fully
 *    closed and reopened. index.html itself is still fresh on every online
 *    load (network-first), so content updates don't wait for that.
 *  - Never reloads or messages pages on its own.
 *
 * Bump CACHE_VERSION on every deploy that changes this file or the shell. The
 * operator panel shows it ("Versão da app").
 */
const CACHE_VERSION = '2026-10-24.1';
const SHELL_CACHE = 'grao-shell-' + CACHE_VERSION;
const FONT_CACHE = 'grao-fonts-v1'; // font URLs are content-addressed; survives shell bumps
const SHELL_FILES = [
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];
// How long a navigation waits for the network before answering from cache.
// The fetch keeps going in the background and refreshes the cache if it lands.
const NETWORK_TIMEOUT_MS = 4000;

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    // cache:'reload' bypasses the HTTP cache (GitHub Pages caches ~10 min), so
    // the precache is the deployed file, not an older HTTP-cached copy.
    // addAll is atomic: if any file fails, install fails and is retried later
    // (the previous version, if any, keeps serving).
    await cache.addAll(SHELL_FILES.map(u => new Request(u, { cache: 'reload' })));
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter(n => n.startsWith('grao-shell-') && n !== SHELL_CACHE)
      .map(n => caches.delete(n)));
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return; // PUT/POST/OPTIONS: untouched
  let url;
  try { url = new URL(req.url); } catch (e) { return; }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  if (FONT_HOSTS.includes(url.hostname)) { event.respondWith(fontSWR(event, req)); return; }
  if (url.origin !== self.location.origin) return; // other origins (upload Worker…): untouched
  if (req.headers.has('range')) return; // media range requests: let the browser handle them
  event.respondWith(networkFirst(event, req));
});

async function networkFirst(event, req) {
  const cache = await caches.open(SHELL_CACHE);
  const network = fetch(req).then(async res => {
    // Only keep complete, same-origin successes. A 404/500 must never replace
    // a good cached shell.
    if (res && res.ok && res.type === 'basic') {
      const copy = res.clone();
      await cache.put(cacheKey(req), copy).catch(() => {});
    }
    return res;
  });
  // Keep the SW alive until the background refresh finishes.
  event.waitUntil(network.catch(() => {}));
  let timer;
  const timeout = new Promise(resolve => { timer = setTimeout(resolve, NETWORK_TIMEOUT_MS, 'timeout'); });
  try {
    const res = await Promise.race([network, timeout]);
    clearTimeout(timer);
    if (res !== 'timeout' && res.ok) return res;
    const cached = await fromCache(cache, req);
    if (cached) return cached;
    return res === 'timeout' ? network : res; // nothing cached: keep waiting / pass the error through
  } catch (e) {
    clearTimeout(timer);
    const cached = await fromCache(cache, req);
    if (cached) return cached;
    throw e; // offline and never cached: the browser shows its normal error
  }
}

// Navigations to the app (e.g. '/grao/', '/grao/index.html?nowHour=1') all
// share one cache entry: the shell document.
function cacheKey(req) {
  if (req.mode === 'navigate') return new URL('./index.html', self.registration.scope).href;
  const u = new URL(req.url); u.search = ''; u.hash = '';
  return u.href;
}
async function fromCache(cache, req) {
  return (await cache.match(cacheKey(req))) || (await cache.match(req, { ignoreSearch: true })) || null;
}

async function fontSWR(event, req) {
  const cache = await caches.open(FONT_CACHE);
  const cached = await cache.match(req);
  const network = fetch(req).then(async res => {
    // Font files are CORS (status readable). The stylesheet is CORS too because
    // index.html links it with crossorigin; an opaque response (status hidden)
    // is still kept so the fonts work offline, and is replaced on the next
    // successful revalidation.
    if (res && (res.ok || res.type === 'opaque')) await cache.put(req, res.clone()).catch(() => {});
    return res;
  });
  if (cached) {
    event.waitUntil(network.catch(() => {}));
    return cached;
  }
  return network; // offline with nothing cached: the page falls back to system serif/sans
}

// The operator panel asks for the version and whether the offline copy is complete.
self.addEventListener('message', event => {
  const port = event.ports && event.ports[0];
  if (!port || !event.data || event.data.type !== 'grao-status') return;
  event.waitUntil((async () => {
    let shellReady = false, fonts = 0;
    try {
      const cache = await caches.open(SHELL_CACHE);
      const hits = await Promise.all(SHELL_FILES.map(u => cache.match(new URL(u, self.registration.scope).href)));
      shellReady = hits.every(Boolean);
      fonts = (await (await caches.open(FONT_CACHE)).keys()).length;
    } catch (e) { /* reported as not ready */ }
    port.postMessage({ version: CACHE_VERSION, shellReady, fonts });
  })());
});
