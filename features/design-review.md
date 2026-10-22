# Design review — booth UI (`index.html`)

**Status:** 🟡 Partially applied — 6 of 8 findings fixed in code; 2 open
**Reviewed:** 2026-10-22, using the `frontend-design` skill (`.claude/skills/frontend-design`)
**Target device:** iPad Air M3 13" (~1366×1024 landscape)

## The finding that mattered most: CLAUDE.md documented a palette that does not exist

CLAUDE.md's Design System section specified **black `#0a0a0a` + white + gold
`#c8a96e`**. The code has never contained a black or a gold token. The real
palette is **cream `#f7f4ef` + sage green `#5a6b4a` + warm brown `#3a3028`**.

This mattered beyond tidiness: every agent (and every session) reasoned about
grao's design from wrong tokens. **Fixed in CLAUDE.md 2026-10-22**, with the
real tokens, their roles, and a note not to reintroduce black/gold.

Side effect worth recording: an earlier read of this session flagged grao as
matching the "cream + serif + terracotta accent" "AI-generated design" tell. With
the *real* palette (sage green, not terracotta/gold) **that concern does not
apply** — the palette is genre-appropriate and distinctive. The alarm came from
the stale doc, not the product.

## Device context changed mid-review

The founder confirmed the kiosk iPad is an **iPad Air M3 13"**, not the iPad
mini 7 considered earlier. That inverts the layout problem: the hardcoded pixel
widths were too *small* for a 13" screen, not too large. The Air M3 also has its
front camera on the **landscape edge**, which confirms landscape mounting — and
the app's `flex-row` layouts were already landscape-first, so that aligns.

## Findings

### Fixed in code (2026-10-22)

1. **Hardcoded pixel dimensions didn't use the 13" canvas.** `320px` buttons,
   `360px` step lists, `420px` video, `48px` titles. Converted to a `clamp()`
   fluid scale tuned for ~1366px landscape with floors for smaller screens and
   portrait. Shared tokens added to `:root`: `--btn-main-w`, `--btn-small-w`,
   `--label-sm`, `--label-md`, `--body-md`.

2. **Tracked-out ALL-CAPS on ~14 elements at 11–12px with 4–5px letter-spacing.**
   Both the commonest generated-design tell *and* a real legibility failure for
   the actual context: read at arm's length, in a dim venue, often by elderly
   guests. Sizes raised to the label tokens, tracking cut to 2–3px. The worst
   case — `"Deixa a tua memória"`, the most emotional line on the welcome screen,
   rendered as `D E I X A  A  T U A  M E M Ó R I A` — is now display italic,
   matching the question treatment that carries the product's voice.

3. **The "Repetir" button failed contrast and had no affordance.** It used
   `--brown-light #a89880` on `--cream #f7f4ef` (~2.3:1, fails WCAG) at 11px
   uppercase with no border or underline. This is a real action a guest needs
   after a bad take. Now `--brown-mid` (~5.3:1) at `--label-md` with a bottom
   rule. Same fix applied to `.video-review-hint` and `.thanks-countdown`.

4. **Emoji used as icons for the three primary actions.** 🎬 📸 🔁 sat next to
   bespoke botanical SVG ornaments and a hand-drawn monogram. Worse than
   inconsistent: rendering confirmed the boomerang glyph comes out **bright
   orange** against the sage palette — a colour accident, not a style choice.
   Replaced with inline stroked SVG (`stroke-width:1.25`, `currentColor`) that
   inherits the button's colour.

5. **No `prefers-reduced-motion` support**, with two perpetual decorative
   animations (the monogram rotating on a 30s infinite loop, the heart pulsing
   on a 2s loop). Added a reduce block that stops the decorative motion but
   **keeps the recording indicator pulsing** — that one carries real state,
   telling a guest they're live.

6. **No visible keyboard focus.** Added `:focus-visible` rings (touch-first
   kiosk, but an operator may pair a keyboard and it costs nothing unused).

7. **Copy leaked system language into guest-facing text.** `"As fotos ficam numa
   strip para descarregar"` describes what the software does, not what the guest
   gets, and mixes English jargon into Portuguese UI. Now `"As três fotos ficam
   juntas numa tira"`. The `"Photo strip"` eyebrow → `"Tira de fotos"`;
   `"descarregar o vídeo"` → `"ficar com o teu boomerang"`. Deliberately avoids
   promising the guest a physical print, since print-on-site is a paid add-on.

### Open

8. **Vertical composition doesn't use the 13" canvas.** Confirmed by rendering:
   content clusters in the middle band with ~300px of dead space above and below
   on both the welcome and instruction screens. The type scale now fits the
   device; the *composition* still doesn't. Needs a deliberate pass, not another
   size bump.

9. **The `"Video guestbook"` eyebrow** is still tracked-out caps and still
   English. Left alone deliberately — "video guestbook" is grao's category
   positioning, so changing it is a brand call for the founder, not a design fix.

## Standing guidance that came out of this

- **The hero is the question** — Cormorant italic over the live camera. That's
  the product's emotional core. Boldness was previously spread across six
  competing focal points (rotating monogram, 110–160px numerals, full-bleed
  camera, pulsing heart, cut-line strip). Keep everything else quiet. Recorded in
  CLAUDE.md § Design System.
- `--brown-light` is **decorative only** — never text, never controls.
- **Never emoji.** Inline stroked SVG only.

## Verification
Rendered at 1366×1024 (deviceScaleFactor 2) via Playwright/Chromium with a fake
camera device, screenshotting welcome, both instruction screens, video review,
strip and thanks. Not yet checked on the real iPad Air M3 in Safari — the CSS
uses only `clamp()`, custom properties and `:focus-visible`, all long-supported
in Safari, but **an on-device pass is still owed**, alongside the one already
outstanding for known issues #1 and #2.

## Decision log
- **2026-10-22** — Review run with the `frontend-design` skill. CLAUDE.md's
  palette corrected (never was black/gold). Findings 1–7 applied to
  `index.html`; 8–9 left open. Device target set to iPad Air M3 13" landscape.
