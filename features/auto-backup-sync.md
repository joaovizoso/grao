# Auto-backup/Sync of Captures During the Event

**Status:** superseded (2026-10-23) — see [backend-infrastructure.md](backend-infrastructure.md) Phase 1
**Plan tier:** Not a plan differentiator — operational reliability, would sit under both plans.
**Proposed:** 2026-07-31 (architect-strategy)

## Summary

After each capture, silently copy the file to a second location (a phone acting as a local network drop, or a cloud folder) so a full iPad/card failure mid-event doesn't lose every guest's message.

## Why it's deferred (devil's advocate — architect-strategy)

Classic "solving a problem you don't have evidence of yet." One wedding has run and nothing was lost. The cheaper, zero-code fix is an operator process (manually copy the downloads folder to a second drive at intervals). Building network/cloud sync adds a live dependency (venue WiFi) to a booth whose core design principle is "download locally, no backend" — trading a rare catastrophic-loss risk for a more common one (flaky uploads mid-capture, guest thinks it saved and it didn't — the exact worst-case `CLAUDE.md` warns against).

## Trigger to revisit

An actual data-loss incident happens, or an operator reports the manual-copy process as unworkable in practice.

## Decision log

- 2026-07-31 — Proposed, deferred. Recommended mitigation in the meantime is a documented operator process, not new code.
- 2026-10-23 — Superseded. The founder reported the local-download flow failing in practice (Safari save prompt on every capture, storage filling up). Phase 1 of backend-infrastructure.md — a local outbox in IndexedDB with verified upload to R2, deleting local copies only after confirmed upload — delivers what this file intended, without the "guest thinks it saved and it didn't" risk this file warned about.
