# QR Code + Remote Recording

**Status:** discussing
**Plan tier:** Premium — already listed as a sold line item ("QR code + remote recordings") on the pricing table, but not implemented in code.
**Proposed:** 2026-07-31 (architect-strategy, during a founder-requested feature discussion)

> **Architecture note (2026-07-31):** the backend this feature needs (presigned-upload-URL serverless function + cloud bucket) has been consolidated into [features/backend-infrastructure.md](backend-infrastructure.md), which unifies it with two other asks (file-hosting for gallery delivery, instant guest-facing share after photo/boomerang capture) that turned out to need the exact same primitive. **backend-infrastructure.md is now the source of truth for the shared backend shape, security/GDPR risk discussion, and build sequencing** — this file's scope narrows to what's specific to remote recording itself (the trimmed capture page, mapping an event code/QR link to an upload session). Do not build a separate bucket/function for this feature; it should consume the same backend as the other two consumers once/if that's built.

## Summary

Guest scans a QR code at the venue and records their video message on their own phone instead of queuing at the booth; the clip should land in the same place as booth-captured content for the couple's eventual delivery.

## Why it's on the list at all (devil's advocate — architect-strategy)

This is the one candidate with a genuine business risk independent of feature enthusiasm: it's already being sold to Premium clients as a feature that doesn't exist in the app. Building it means giving grao its first backend (upload endpoint + storage + reconciling remote clips with an event/session) — a direct break from the "no backend" architecture, and a much bigger lift than anything else discussed. Before committing: has any actual Premium client asked for or needed this, or is it still just a pricing-page bullet with no tested demand? Building server infrastructure speculatively, off the back of one wedding, is the "scale execution ahead of evidence" trap the founder playbook warns about.

This gate is unchanged by the backend-infrastructure.md consolidation — confirming real Premium demand is still the prerequisite for building this specific consumer, independent of whether the shared backend gets built for the file-hosting/delivery use case first.

## Feasibility (developer)

The real complexity isn't the QR code — it's that "the same gallery" doesn't exist yet; delivery today is manual (operator hands off files after the event). Smallest honest MVP: QR → per-event upload → files land in one cloud folder, same manual hand-off model as today, just via cloud instead of a USB stick.

What's specific to this feature (beyond the shared backend primitive covered in backend-infrastructure.md):
- A trimmed static page reusing the existing `getUserMedia`/`MediaRecorder` capture logic (no countdown chrome, no photo/boomerang modes, no admin).
- Mapping the QR-embedded event code to a valid upload session/target folder in the shared bucket.

Rough sizing: a few focused days, not a rewrite, *on top of* the shared backend primitive existing already — this is no longer "build a backend from scratch," it's "build the fourth consumer of one" if backend-infrastructure.md's #1 slice (file hosting for delivery) ships first. See backend-infrastructure.md for the full security/GDPR review requirement and recommended build sequencing (does not jump CLAUDE.md's existing priority queue).

## Decision log

- 2026-07-31 — Proposed and shortlisted for discussion (not approved to build). Gate before building: confirm a real Premium booking actually needs this, and get an architecture/security review done first.
- 2026-07-31 — Consolidated with two related backend asks (file-hosting delivery, instant guest share) into [backend-infrastructure.md](backend-infrastructure.md) as the unified architecture; this file's scope narrowed accordingly. Demand-confirmation gate unchanged.
