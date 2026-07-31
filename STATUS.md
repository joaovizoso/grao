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
| Hardware: complete booth system (Option 1 iPad shell vs. Option 2 dedicated rig) | 🟡 Discussing | Operational capex, both plans (Option 2 also touches soundproof-cabin + print-on-site add-ons) | [features/hardware-upgrade-plan.md](features/hardware-upgrade-plan.md) — **fully restructured 2026-07-31: the Track A/B/C + Addendum 1/2 structure is replaced by two complete-system options**, per the founder's requirement that the booth must look and feel like an off-the-shelf product, not parts mounted together. **Recommendation: Option 1** (existing iPad in a purpose-built shell with an *integrated* ring light, on a stand; built-in camera/mic; ~€500–1,200; runs on today's app with zero code; 2–5 weeks). Key new finding: **integrated iPad ring-light booth shells are a real, mature product category with EU sellers** — correcting the earlier "no brand-neutral EU shell found" conclusion — so Option 1's off-the-shelf look is *purchasable*, while **Option 2's is not** (bought kiosk shells carry a party-booth aesthetic that fights grao's positioning; grao's look needs commissioned or DIY fabrication). Option 2 (Pi5/mini-PC + UVC camera + mic + light + screen in one housing) is ~€1,500–3,500+, blocked on unbuilt priority-#5 software *and* an enclosure that can't be designed until contents are fixed — months, not weeks. **One real gate on Option 1: the §2.4 audio test** (iPad built-in mic vs. reception-volume music) — if it fails, the answer is Option 1b (mic routed inside the shell), not Option 2. **Nothing approved to buy; spend gate unchanged** (no confirmed second booking, issues #1/#2 unconfirmed on device) — this changes *what to prepare for*, not *whether to buy now*. |
| Backend infrastructure (file hosting + instant guest share) | 🟡 Discussing | Cross-cutting (delivery: both plans; instant share: Premium-adjacent) | [features/backend-infrastructure.md](features/backend-infrastructure.md) |
| QR code + remote recording | 🟡 Discussing | Premium (already sold, unbuilt) | [features/qr-remote-recording.md](features/qr-remote-recording.md) — architecture now consolidated into backend-infrastructure.md |
| Multi-language guest UI (PT/EN) | ⚪ Deferred | Basic+/Premium | [features/multilingual-ui.md](features/multilingual-ui.md) |
| Auto-backup/sync during event | ⚪ Deferred | Internal/reliability | [features/auto-backup-sync.md](features/auto-backup-sync.md) |
| Live gallery / reception slideshow | ⚪ Deferred | New upsell | [features/live-gallery-slideshow.md](features/live-gallery-slideshow.md) |
| Operator recovery control | ⚪ Deferred | Internal tooling | [features/operator-recovery-control.md](features/operator-recovery-control.md) |

## Open €0 checks (no spend, blocking hardware decisions)

| Check | Why it matters | Owner |
|---|---|---|
| **Audio test: iPad built-in mic vs. reception-volume music** (~4m away, hard-surfaced room, 60s, reviewed on phone + TV) | **Go/no-go for Option 1 as defined** (no external mic). Decides whether Option 1b — a mic routed inside the shell — is required. Highest-value free step available. See §2.4 of the hardware plan. | founder |
| **Exact iPad model, and which edge the front camera sits on** | Gates shell fit, and more importantly whether guests appear to look *at* the lens or off to the side (10th-gen+ moved the front camera to the landscape edge). Replaces the now-moot USB-C-vs-Lightning check, which only mattered for external cameras on iPad — neither option uses one. | founder |
| Review J&C wedding footage against the quality rubric (§1 / §2.4 of the hardware plan) | Determines whether the real gap is audio, light, framing or sensor — sharpens or cancels every purchase. Still not done. | founder |
| Shortlist 2–3 matte-black iPad ring-light shells with **landed** cost (incl. IVA/duty/freight) and lead time | Turns the Option 1 recommendation into an executable order the day a booking is confirmed. Costs nothing. | procurement |
| Is there a confirmed second booking, with date/tier/venue? | The premise under every hardware spend argument, and the trigger to actually buy Option 1. Nothing in the repo evidences one. | founder |

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
