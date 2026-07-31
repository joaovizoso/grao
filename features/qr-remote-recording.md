# QR Code + Remote Recording

**Status:** discussing
**Plan tier:** Premium — already listed as a sold line item ("QR code + remote recordings") on the pricing table, but not implemented in code.
**Proposed:** 2026-07-31 (architect-strategy, during a founder-requested feature discussion)

## Summary

Guest scans a QR code at the venue and records their video message on their own phone instead of queuing at the booth; the clip should land in the same place as booth-captured content for the couple's eventual delivery.

## Why it's on the list at all (devil's advocate — architect-strategy)

This is the one candidate with a genuine business risk independent of feature enthusiasm: it's already being sold to Premium clients as a feature that doesn't exist in the app. Building it means giving grao its first backend (upload endpoint + storage + reconciling remote clips with an event/session) — a direct break from the "no backend" architecture, and a much bigger lift than anything else discussed. Before committing: has any actual Premium client asked for or needed this, or is it still just a pricing-page bullet with no tested demand? Building server infrastructure speculatively, off the back of one wedding, is the "scale execution ahead of evidence" trap the founder playbook warns about.

## Feasibility (developer)

The real complexity isn't the QR code — it's that "the same gallery" doesn't exist yet; delivery today is manual (operator hands off files after the event). Smallest honest MVP: QR → per-event upload → files land in one cloud folder, same manual hand-off model as today, just via cloud instead of a USB stick.

Minimal architecture that avoids a full server:
- A trimmed static page reusing the existing `getUserMedia`/`MediaRecorder` capture logic (no countdown chrome, no photo/boomerang modes, no admin).
- One serverless function (e.g. Cloudflare Worker) that, given an event code from the QR link, issues a short-lived presigned upload URL into a cloud bucket (R2/S3-compatible). The function never touches video bytes — the guest's browser uploads directly.
- One bucket, per-event-code folders.

Rough sizing: a few focused days, not a rewrite. Explicit caveat: this is grao's first real break from "no backend," changes the trust model (unsupervised guest device vs. operator-supervised kiosk), and raises new data-handling questions (retention, consent, endpoint abuse). Needs a security review and an architecture note from architect-strategy before developer builds it — this should not be scoped as "just add a QR code."

## Decision log

- 2026-07-31 — Proposed and shortlisted for discussion (not approved to build). Gate before building: confirm a real Premium booking actually needs this, and get an architecture/security review done first.
