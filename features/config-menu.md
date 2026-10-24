# Config menu (hidden operator settings screen)

**Status:** proposed — founder-specified 2026-10-23; not approved to build yet
**Plan tier:** Internal operator tooling. It is the concrete form of CLAUDE.md Development Priority #4 (admin/config layer), at "level 2" (an in-app editor, not just a config block in the file).
**Proposed:** 2026-10-23 (founder)

## What the founder asked for

A configuration screen inside the booth app, reached with a secret trigger so no icon is visible on the welcome screen. In it the operator sets, per event:

- the couple's names
- the colour palette, as a multiple choice of curated presets
- the plan: Basic or Premium
- the question set, kept as a file in the repo
- uploaded images (logo, the thank-you screen image, etc.)
- video duration
- `eventCode`, derived from the names + date

## Palette presets (from the `frontend-design` skill)

Each preset is grounded in a real Portuguese wedding setting and defines the same role tokens. All five were checked programmatically for contrast (zero failures) and rendered in the real app at 1366×1024.

| Preset | Setting | ground | ink | inkSoft | inkFaint | accent | accentPressed | accentPale | accentFaint | camera |
|---|---|---|---|---|---|---|---|---|---|---|
| **Quinta** (current) | olive, stone, linen | `#f7f4ef` | `#3a3028` | `#6b5d50` | `#a89880` | `#5a6b4a` | `#7a8f67` | `#c8d4be` | `#edf0e9` | `#1c2218` |
| **Azulejo** | cobalt on lime-wash | `#f6f6f3` | `#1c2433` | `#4b5567` | `#9aa3b3` | `#2a4a8b` | `#3d5fa3` | `#c5d1ea` | `#e9eef8` | `#121a29` |
| **Douro** | port wine and schist | `#f4f1ec` | `#2f2523` | `#67564f` | `#ad9c95` | `#6b2737` | `#874052` | `#e3c8cc` | `#f4e9ea` | `#1d1214` |
| **Sintra** | mauve and mist | `#f4f3f5` | `#27212c` | `#5d5465` | `#a69cad` | `#57425f` | `#725b7a` | `#d8cddd` | `#f0ebf2` | `#1a141d` |
| **Atlântico** | sea-green and sand | `#f2f3f1` | `#18292b` | `#4a5c5e` | `#95a4a5` | `#2b5c61` | `#3f767b` | `#c3d8d9` | `#e6f0f0` | `#0f1c1e` |

Contrast results (WCAG ratio; thresholds in brackets):

| Preset | white on accent (4.5) | ink on ground (7) | inkSoft on ground (4.5) | accent on ground (4.5) | pale on accent (3) | pale on camera (4.5) | white on pressed (3) |
|---|---|---|---|---|---|---|---|
| Quinta | 5.8 | 11.7 | 5.8 | 5.3 | 3.7 | 10.5 | 3.5 |
| Azulejo | 8.6 | 14.4 | 6.9 | 7.9 | 5.6 | 11.3 | 6.2 |
| Douro | 10.7 | 13.2 | 6.2 | 9.5 | 6.8 | 11.7 | 7.3 |
| Sintra | 8.9 | 14.2 | 6.5 | 8.1 | 5.8 | 11.8 | 6.0 |
| Atlântico | 7.5 | 13.6 | 6.3 | 6.7 | 5.0 | 11.7 | 5.1 |

A dark "Gala" preset (black-tie evening) was considered and left out: on a dark ground the buttons would need dark text on a light accent, which needs an extra `--on-accent` token and its own contrast pass. Possible later addition.

## Design decisions and open points

1. **Secret access.** The kiosk is an iPad with no keyboard, so a keypress can't be the trigger. Use a touch gesture (e.g. five quick taps on the monogram, or a long press in a corner) **plus a PIN**, since a curious guest will eventually find any gesture. Keep a keyboard shortcut as well, for setting up on a laptop.
2. **Where the config lives.** On the device, in IndexedDB, next to the upload outbox from [backend-infrastructure.md](backend-infrastructure.md). Same trap the architect flagged for the outbox: **the home-screen app and a Safari tab on the same URL have separate storage.** Configure from inside the home-screen app, or the settings won't be there.
3. **Questions as JSON, not YAML.** Browsers have no built-in YAML parser; YAML would need a library, which breaks the no-dependencies rule. Question sets live in the repo as `questions/*.json` and the menu picks one. Reading them uses `fetch()`, which works when the app is hosted (e.g. GitHub Pages) but not when opened as a local `file://`. A browser can't write back to the repo, so editing questions in the menu saves on the device only.
4. **Uploaded images** (logo, thank-you image) are stored on the device in IndexedDB, downscaled on import. This replaces the dog portrait that is currently hardcoded into `index.html` as a data URI.
5. **`eventCode`** = accent-stripped slug of names + date, e.g. `joao-constanca-2026-06-14`. Fine as a folder name, but it's guessable, so it must never be the thing that authorises uploads. The architect's spec already uses a separate per-event upload token plus a date-limited allowlist on the Worker, which covers this.
6. **~~Plan gating vs the pricing table.~~ RESOLVED 2026-10-24: personalisation (names, palette, logo/images) is available on BOTH plans; nothing is gated in the menu.** The pricing table in CLAUDE.md and any marketing copy were updated/need updating to match. (Original note:) Per CLAUDE.md, "custom branding (monogram, colours, event names)" is Premium-only. Taken literally, a Basic event can't choose names, palette or logo. **Founder decision needed:** gate those fields in the menu, or decide names are always allowed and only palette/logo are Premium.
7. **Theming needs a refactor first.** The tokens are named after colours (`--green`, `--brown`), so a blue preset would set `--green` to blue. Rename to roles (`--accent`, `--ink`, `--ground`, …). And the sage colour is hardcoded about 29 times outside `:root` (SVG `fill`/`stroke` attributes, the canvas that draws the printed strip), plus about 20 derived `rgba()` values. All of these must read the tokens. The canvas can read them with `getComputedStyle`. Translucent washes can use `color-mix()`, which needs Safari 16.2+, fine on the iPad Air M3.
8. **Architecture shift.** CLAUDE.md's convention is one HTML file per event. With this menu it becomes one app plus per-event config. That's what Priority #4 asks for, but CLAUDE.md must be updated when it's built.
9. **Relationship to the backend spec.** The architect specified a single `const EVENT = { code, uploadEnabled, uploadEndpoint, uploadToken }` block. This menu becomes the editor for that same object, so the two are compatible. The upload token entered in the menu and stored on the device is better than keeping it in the repo's HTML.

## Decision log

- **2026-10-23** — Founder specified the menu. Five palette presets produced with the `frontend-design` skill, contrast-checked (all pass) and rendered in the app. Open decisions recorded above, notably the Basic/Premium gating of branding fields and the token refactor prerequisite. Not approved to build.
- **2026-10-24** — Founder decided personalisation is available on both Basic and Premium (resolves open point 6). Role-based colour tokens (prerequisite) are being built overnight; the menu itself is next.
- **2026-10-24** — Prerequisite done: all theme colours flow from role tokens (`--accent`, `--accent-pressed`, `--accent-pale`, `--accent-faint`, `--ground`, `--ink`, `--ink-soft`, `--ink-faint`, `--camera`); verified pixel-identical to before (washes ≤2/255 from `color-mix` blending) and by injecting the Azulejo palette. Applying a preset is now a `:root` override. `EVENT.videoDurationSec` also exists. The menu UI itself is not built.
