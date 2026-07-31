# grao — Project Status

Live tracking of in-flight work: known-issue state and proposed-feature state. This file is the fast-read status dashboard — `CLAUDE.md` stays the stable architecture/business-context doc, `features/*.md` hold full detail per idea. Update this file (and the linked file) whenever a status changes; don't let it drift the way `CLAUDE.md`'s Known Issues section did.

**Last updated:** 2026-07-31

## Known issues (see `CLAUDE.md` § Known Issues for full technical detail)

| # | Issue | Status | Notes |
|---|---|---|---|
| 1 | Photo strip portrait/landscape bug | ✅ Fixed (code-verified) | Strip canvas now 1200×2400 portrait, proper crop-to-fill. Not yet confirmed on a real Selphy CP1500 print. |
| 2 | Boomerang export broken on Safari iOS | 🟡 Mitigated, not confirmed | Now tries MP4 before WebM; still depends on `captureStream()`. `MediaRecorder` construction/`.start()` now wrapped in try/catch + a render-duration-based watchdog timeout, with a visible alert and UI reset on any failure (2026-07-31) — silent-failure gap closed in code. Still needs an actual on-device Safari/iPad test confirming exported files play back correctly; the underlying `captureStream()` dependency is unchanged. |
| 3 | Video duration hardcoded | 🟡 Partially addressed | Now 60s (was 15s), still not configurable. Undocumented review/retry screen added (6th screen, between Recording and Thank you). |
| 4 | No admin/config panel | 🔴 Open | Confirmed absent in code — `QUESTIONS` is a hardcoded array, no config object exists. Note (2026-07-31): camera/mic source selection is now a known future tenant of this config layer — all four `getUserMedia` call sites hardcode `facingMode: 'user'`. |

## Proposed features

| Feature | Status | Plan tier | File |
|---|---|---|---|
| Hardware upgrade (tripod / AV quality / booth enclosure) | 🟡 Discussing | Operational capex, both plans (touches soundproof-cabin + print-on-site add-ons) | [features/hardware-upgrade-plan.md](features/hardware-upgrade-plan.md) — framing doc for procurement; nothing approved to buy. **Addendum 2 (2026-07-31) corrects a key fact: Safari on iPadOS 17+ *does* support external UVC cameras (USB-C iPads only) — the "unverified" blocker is retired.** Track A (tripod/light/mic/presentation) unchanged and confirmed reusable on any future path; add a powered USB-C PD hub if a mic is bought; do **not** buy a capture card for the iPad — camera-upgrade euros go to the Pi5 target. On iPadOS, video input is `deviceId`-selectable but audio is not, so the planned mic `deviceId` fix is withdrawn in favour of a live input-level meter. **No change to priority ordering.** |
| Backend infrastructure (file hosting + instant guest share) | 🟡 Discussing | Cross-cutting (delivery: both plans; instant share: Premium-adjacent) | [features/backend-infrastructure.md](features/backend-infrastructure.md) |
| QR code + remote recording | 🟡 Discussing | Premium (already sold, unbuilt) | [features/qr-remote-recording.md](features/qr-remote-recording.md) — architecture now consolidated into backend-infrastructure.md |
| Multi-language guest UI (PT/EN) | ⚪ Deferred | Basic+/Premium | [features/multilingual-ui.md](features/multilingual-ui.md) |
| Auto-backup/sync during event | ⚪ Deferred | Internal/reliability | [features/auto-backup-sync.md](features/auto-backup-sync.md) |
| Live gallery / reception slideshow | ⚪ Deferred | New upsell | [features/live-gallery-slideshow.md](features/live-gallery-slideshow.md) |
| Operator recovery control | ⚪ Deferred | Internal tooling | [features/operator-recovery-control.md](features/operator-recovery-control.md) |

## Open €0 checks (no spend, blocking hardware decisions)

| Check | Why it matters | Owner |
|---|---|---|
| Is the kiosk iPad USB-C or Lightning? | Gates external-camera capability entirely (UVC is USB-C-only). Changes nothing if staying on the iPad's built-in camera. Cost: looking at the iPad. | founder |
| Review J&C wedding footage against the quality rubric (§2 of the hardware plan) | Determines whether the real gap is audio, light, framing or sensor — sharpens or cancels every Track A purchase. Still not done; still the highest-value free step available. | founder |
| Is there a confirmed second booking, with date/tier/venue? | The premise under every hardware spend argument. Nothing in the repo evidences one. | founder |

## Status legend

- 🔴 Open — not started
- 🟡 In progress / partially done / under active discussion (see file for which)
- 🟢 Approved — decided to build, not started yet
- ✅ Fixed / Shipped — done; check notes for any remaining field-confirmation step before fully closing
- ⚪ Deferred — discussed, deliberately not building now; file states the trigger condition to revisit
- ⛔ Rejected — considered and decided against

## How to use this file

- Read this file first at the start of any grao work session (dev, strategy, marketing, procurement) — it's the fast path to "what's actually going on," instead of re-deriving it from conversation history or re-reading the whole codebase.
- When a feature or issue changes state, update its row here **and** append a dated entry to its own file under `features/` (bugs get their update in `CLAUDE.md`'s Known Issues section instead, since they don't have their own file).
- New feature ideas get a new file under `features/` (even at `proposed`/`discussing` status, before any decision to build) and a new row here.
