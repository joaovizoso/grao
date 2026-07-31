# grao — Wedding & Events Video Guestbook Booth

## Project Overview

grao is a self-service video guestbook booth for weddings and events in Portugal. Guests record short video messages, take B&W photo strips, or shoot boomerangs at a kiosk; an operator is always present to help guests; the couple/client receives all captured content after the event.

The first live test is João & Constança's wedding — the app currently ships as a bespoke single-page booth for that event (`joao-constanca-booth.html`), but the codebase is meant to grow into a reusable, per-client configurable product (see Business Context and Development Priorities below).

**Goal for Claude:** favor small, safe, dependency-free changes that keep the booth reliable in front of real guests with an operator standing next to a tablet — not clever abstractions. This runs unattended-ish at someone's wedding; a crash mid-recording is a real loss (a guest's only take).

## Agent Team

grao is run by a solo founder using Claude as infrastructure, per Anthropic's Founder's Playbook model: the founder orchestrates specialized agents rather than doing every function personally. Four project subagents live in `.claude/agents/`:

- **`developer`** — all hands-on-code work on `index.html`/`joao-constanca-booth.html`: bug fixes, features, eventual hardware-integration code.
- **`marketer`** — positioning, pricing-page copy, content, and competitor research for the Portuguese wedding/events vendor market.
- **`procurement`** — sourcing and pricing the physical hardware kit (Pi 5, camera, printer, frame, power, connectivity), budget tracking, vendor comms.
- **`architect-strategy`** — technical architecture decisions and business/product strategy; a devil's-advocate thinking partner that pressure-tests plans before `developer` builds them or the founder commits money.

Each agent's own file has its full scope and guardrails. The playbook's core discipline applies across all of them: define architecture/scope *before* building, keep a written record of decisions (this file), and use the strategy agent as an adversarial check rather than a rubber stamp — grao is still MVP/early-Launch stage (one validated wedding so far), so don't let any agent scale execution ahead of actual booking evidence.

**Model tiering (expensive-to-plan, cheap-to-iterate):** `architect-strategy` runs on an expensive/capable model (pinned in its frontmatter) since its whole job is high-stakes reasoning and devil's-advocate pressure-testing. `developer` and `procurement` default to a cheap/fast model for routine, mechanical work, but both are explicitly instructed to flag back rather than push through when a task is actually a disguised hard case (Safari/iOS-specific behavior, security/data-handling, or a real architectural tradeoff) — the session should then re-invoke them with a stronger model. `marketer` isn't pinned, since its work genuinely spans both tiers (deep competitive/positioning research vs. routine content batches); the invoking session picks the model per task. Recurring cloud routines (see below) follow the same split. Don't extend this to mean "always use the cheapest model" — the point is matching cost to stakes, not minimizing spend at the expense of a bug reaching a real wedding.

**Read [STATUS.md](STATUS.md) at the start of any session.** It's the live dashboard of known-issue and proposed-feature state — CLAUDE.md is the stable architecture/context doc and doesn't get rewritten every session, so STATUS.md (plus the per-feature files under `features/`) is the fast, current answer to "what's actually going on" instead of re-deriving it from conversation history.

## Current Architecture

- **Single HTML file app.** No build step, no bundler, no package.json, no frameworks (no React/Vue/jQuery). Everything — HTML, CSS, JS — lives in one `.html` file per client/event (e.g. `joao-constanca-booth.html`).
- **Runtime target:** Safari on iPad (the actual kiosk browser today) and/or hosted as a static page on GitHub Pages. Safari/iOS quirks are first-class constraints, not edge cases — see Known Issues.
- **No backend.** All capture, processing, and file generation happens client-side in the browser via `getUserMedia`, `MediaRecorder`, and `<canvas>`. There is currently no server component, no database, and no upload — output files are downloaded locally (to the iPad, or to whatever device is capturing) for the operator to collect after the event.
- **Screen flow (5 screens, 6 for the Video path), all within one page, shown/hidden via JS state:**
  1. **Welcome** — mode selection (Video / Photo strip / Boomerang)
  2. **Instructions** — brief explanation of the chosen mode
  3. **Countdown** — pre-capture countdown
  4. **Recording/Capture** — the actual video recording, photo sequence, or boomerang capture
  5. **Video Review** (Video mode only) — guest watches their take back, can Retry or Save; auto-saves after a 10s countdown if untouched. Photo strip and boomerang modes skip straight to Thank you.
  6. **Thank you** — confirmation screen, auto-returns to Welcome after 5s so the booth is ready for the next guest without operator intervention

### Modes

| Mode | Button size | Behavior |
|---|---|---|
| **Video** | Large (primary) | 5s pre-roll countdown showing the question, 60s recording, 3 rotating questions (cycles per guest/session), followed by a Review/Retry screen before saving, auto-downloads as `.webm` |
| **Photo strip** | Small (secondary) | 3 photos, 3→2→1 countdown per shot, 800ms pause between shots, converted to B&W, portrait 3:4 crop per photo, laid out as a double strip (2 identical strips side by side with a dashed cut line) at 1800×1200px — sized for Canon Selphy CP1500 printing — downloads as `.jpg` |
| **Boomerang** | Small (secondary) | Records 1.5s at 20fps, builds a forward+reverse ping-pong cycle repeated to fill 10s, plays back via a canvas render loop for on-screen preview, exports via `captureStream()` + `MediaRecorder` with MP4/H.264 tried before WebM, try/catch + watchdog around the recorder lifecycle, and a visible alert if export isn't supported or silently fails (see Known Issues #2 — still unconfirmed on a real Safari/iPad device) |

### Design System

- **Colors:**
  - Black: `#0a0a0a`
  - White: `#ffffff` (base white; confirm exact token in file if a warmer white is used)
  - Gold accent: `#c8a96e`
  - Grays: supporting neutral palette for secondary text/borders
- **Typography:**
  - Display font: **Cormorant Garamond** (headings, monogram, romantic/editorial feel)
  - Body font: **Jost** (UI copy, instructions, buttons)
- **Motifs:**
  - Botanical corner ornaments on screens (decorative SVG/illustration elements in the corners)
  - Couple monogram (e.g. "J&C") with rotating circular text around it — this is per-event/per-client branding and will need to be parameterized (see Feature Flags / Premium)

When touching CSS or markup, preserve this visual language — it's a wedding product, not a generic web app. Elegant, minimal, high-contrast black/white/gold. Avoid introducing generic UI-kit look and feel.

## Known Issues (fix in context, don't silently paper over)

Live status for these also lives in [STATUS.md](STATUS.md) — check there first for the current state before assuming this list is current; it drifted out of sync with the code once already (corrected 2026-07-31).

1. ~~Photo strip downloads landscape instead of portrait.~~ **FIXED — verified in code, 2026-07-31.**
   `downloadStrip` now composites onto a `1200×2400` portrait canvas (was `1800×1200` landscape), with `PHOTO_W = PHOTO_H * 0.75` slots and a proper cover-crop in `drawCover` matching `capturePhoto`'s 3:4 crop. Not yet confirmed on an actual Canon Selphy CP1500 print — do a real print test before treating this as fully closed.

2. **Boomerang export on Safari iOS is MITIGATED, not confirmed fixed.**
   `downloadBoomerang` now tries MP4/H.264 mime types before WebM and shows a visible alert if no `captureStream`/`MediaRecorder` support exists — real progress, no longer hard-coded Chrome-only. It still fundamentally depends on `canvas.captureStream()`, the exact API this issue originally flagged as unreliable on Safari; none of the alternate architectures (frame-level `MediaRecorder` off the raw stream, GIF/APNG, post-event reconstruction) were adopted. **Fixed 2026-07-31:** `new MediaRecorder(...)` and `.start()` are now wrapped in try/catch, `onerror` is handled, and a watchdog timeout (sized off the render loop's known frame count/pacing) fires if `onstop` never arrives — any of these failure paths now show a visible alert and reset the UI (stop button spinner, restore preview) instead of leaving the guest on a stuck "A processar…" button. An empty-`chunks` case in `onstop` (recorder ran but produced zero data) is also now treated as a failure with the same alert, rather than downloading/emailing an empty file. This closes the silent-failure gap in code, but it is **still unconfirmed on a real device**: nobody has verified on the kiosk iPad's actual Safari version that `captureStream()`-based export produces a playable file end-to-end. That underlying architectural question (whether `captureStream()` is the right approach on Safari at all, vs. one of the alternatives above) is unchanged by this fix — an on-device Safari/iPad test is still required before this issue can be closed.

3. **Video recording duration is hardcoded (now 60s, was 15s) — still not configurable.**
   Groundwork for the plan/config system (priority #3 below) is still open. Also newly documented: there is now a video review/retry screen between Recording and Thank you (guest watches their take, can Retry or Save, auto-saves after a 10s countdown if untouched) — the 5-screen model further down is stale for the video path specifically; it's effectively 6 screens there.

4. **No admin/config panel.**
   Confirmed still absent — `QUESTIONS` is a hardcoded array, no config object exists anywhere in the file.

Do not "fix" these by hiding the feature or adding a try/catch that swallows the failure silently — guests and the operator need to know if a capture didn't work, ideally before the guest walks away.

## Feature Flags per Plan

The product is sold as two plans; the app should eventually gate features by an event's plan/config rather than the current one-off-per-wedding approach:

| Feature | Basic (349€ + VAT) | Premium (599€ + VAT) |
|---|---|---|
| Video (3 fixed questions) | ✓ | ✓ |
| Operator included | ✓ | ✓ |
| Unlimited/custom questions | — | ✓ |
| Photo strip | — | ✓ |
| Boomerang | — | ✓ |
| Edited compilation (post-event) | — | ✓ |
| Custom branding (monogram, colors, event names) | — | ✓ |
| QR code + remote recordings | — | ✓ |
| Private digital gallery | ✓ | ✓ |

Add-ons (both plans): print on site (+100€), soundproof cabin (+200€). Travel included up to 50km, +0.40€/km beyond.

When building the eventual config/admin layer, model this as an explicit config object (e.g. `{ plan: 'basic' | 'premium', features: { photoStrip: bool, boomerang: bool, unlimitedQuestions: bool, customBranding: bool, qrRemote: bool }, questions: [...], videoDurationSec: number, language: 'pt' | 'en', copy: {...} }`) rather than scattering plan checks through the capture code. The `language`/`copy` keys are a placeholder reserved for [features/multilingual-ui.md](features/multilingual-ui.md) — don't build the actual toggle or extract strings yet, just don't design the object in a way that would preclude it later. Until that config layer exists, keep per-client customization to duplicating/editing the single HTML file — don't build a premature abstraction for a config system that has no consumer yet.

## Hardware Roadmap

Currently the booth runs on an iPad in Safari (or wherever the HTML is opened). The planned physical kiosk build:

- **Compute:** Raspberry Pi 5 (4GB), running Chromium in kiosk mode (note: this shifts the primary target browser from Safari/iOS to Chromium/Linux for the physical kiosk — but Safari/iOS support should be kept working as long as iPad remains a fallback/secondary deployment target)
- **Display:** 15.6" touchscreen monitor (InnoView or ELECROW)
- **Camera:** Canon EOS M50 Mark II mirrorless via `gphoto2`, OR Obsbot Tiny 2 webcam as a simpler `getUserMedia`-compatible alternative
- **Mic:** Maono AU-GM10 USB gooseneck mic
- **Printer:** Canon Selphy CP1500 via CUPS on Linux (this is why the photo strip is sized 1200×2400px portrait)
- **Enclosure:** Modular aluminium frame (40×40mm profiles, Motedis system) with 5mm black matte Forex panels
- **Power:** Jackery 240Wh power bank, for fully portable/off-grid setups
- **Connectivity:** 4G/5G hotspot (TP-Link M7350)

**iPad camera/audio reality check (2026-07-31):** Safari on iPadOS 17+ *does* support external USB (UVC) cameras — they appear in `enumerateDevices()` and are selectable via `getUserMedia()` alongside the built-in cameras (USB-C iPads only; Lightning has no path). But `index.html`'s four `getUserMedia` call sites all hardcode `facingMode: 'user'`, so plugging in a UVC camera today would still pull the built-in front camera — camera source selection is unbuilt and belongs in the priority #4 config layer, not assumed to work for free. External USB *audio* is the opposite story: OS-level support since early iOS, but no reliable app-level way to pick which USB mic gets used (iPadOS routes to the last-connected input; a non-class-compliant device is silently ignored) — so the real external-mic risk isn't compatibility, it's a knocked cable silently falling back to the built-in mic. Mitigate with a visible input-level meter, not a device-ID constraint.

**Camera-upgrade spending rule:** if/when a camera upgrade actually happens, that money should go toward the Pi5/Chromium target above, not toward bolting external camera hardware onto the iPad — Linux/Chromium has mature, full UVC driver support and sidesteps gphoto2/Magic-Lantern-era workarounds entirely. This rule isn't triggered by anything today (no confirmed next booking, priority #4 still open) — it's guidance for whenever hardware spend is actually justified, not a signal to accelerate the Pi5 rebuild now.

Implication for the app: once camera capture moves from `getUserMedia` (webcam/Obsbot) to `gphoto2` (Canon EOS M50), and printing moves from "download a JPG" to "send to CUPS," the app will need a local backend (Python/Node) to bridge the browser UI to hardware it can't reach directly. Don't build that bridge speculatively — the current getUserMedia + download flow should keep working standalone until that hardware integration is actually being wired up.

## Development Priorities (in order)

1. **Fix the photo strip portrait/landscape bug.** This directly breaks a paid (Premium) feature and produces bad prints.
2. **Fix or replace boomerang export on Safari iOS**, since Safari/iPad is the current real-world deployment target — a Chrome-only export path means boomerang doesn't actually work in the field today.
3. **Make video recording duration configurable** (not hardcoded 15s), as groundwork for the plan/config system.
4. **Design and build a minimal admin/config layer** — at minimum, ability to set questions, video duration, and which features (photo strip / boomerang / branding) are enabled per client, without hand-editing the HTML each time.
5. **Hardware integration** (gphoto2 camera, CUPS printing, Raspberry Pi kiosk mode) — later-stage, only once the browser-side app is stable and the first real event(s) have validated the software.

Don't jump ahead to later priorities (e.g. building hardware integration code) while known bugs from earlier priorities are open, unless the user explicitly asks to.

## Coding Conventions

- **No frameworks, no build tools, no npm dependencies.** Plain HTML/CSS/JS in a single file. Do not introduce React, Vue, bundlers (Webpack/Vite), or npm packages unless the user explicitly decides to change this architecture.
- **Single-file per client/event.** The pattern today is one `.html` file per wedding/event (e.g. `joao-constanca-booth.html`). Until a config-driven multi-client system exists, treat each event's HTML file as its own artifact — don't silently merge or refactor them into a shared module structure without being asked.
- **Safari/iOS first.** The kiosk runs in Safari on iPad today. Any new use of browser APIs (`MediaRecorder`, `captureStream`, canvas, `getUserMedia`) must be checked against Safari/iOS support, not just Chrome. If a feature only works in Chrome, that's a bug (see Known Issues #2), not an acceptable trade-off, unless explicitly scoped to the future Chromium-on-Pi kiosk.
- **No silent fallbacks that hide failure from the guest/operator.** If a capture, export, or download can fail (e.g. unsupported API), surface that clearly (visible message/alert) rather than failing silently — a guest who thinks they recorded a message but didn't is the worst-case outcome for this product.
- **Keep the visual design system intact** (colors, fonts, ornaments, monogram) when editing UI — see Design System above.
- **Avoid premature abstraction.** Don't build the admin/config system, multi-tenant architecture, or backend before it's actually needed — the priorities list above says when. Three near-duplicate HTML files is currently fine; a config-driven templating system is not yet.

## Business Context (why decisions look the way they do)

- This is a **service business**, not a SaaS product yet — grao is sold per-event (Basic 349€+VAT / Premium 599€+VAT) with an operator physically present, not a self-serve kiosk left unattended. Design decisions should assume a human operator is nearby to help a confused guest or restart a stuck capture — the UI doesn't need to defend against every possible user error as if unsupervised.
- **Photo strip, boomerang, unlimited questions, branding, and QR/remote recording are Premium-only** — when adding features, keep in mind whether they should be gated, even before the gating mechanism itself exists.
- **Print-on-site and soundproof cabin are paid add-ons** (+100€ / +200€) on top of either plan — they are not plan-differentiators, they're independent upsells.
- **The couple/client gets all content after the event** via a private digital gallery (both plans) — there is currently no in-app upload/delivery mechanism described; assume delivery happens out-of-band (manual transfer) until told otherwise.
- **João & Constança's wedding is the first real test event** — the current HTML file and its hardcoded monogram/questions/branding reflect that specific event, not a generic template yet. Treat it as the reference implementation to generalize from, not as throwaway code.
