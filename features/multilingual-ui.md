# Multi-language Guest UI (PT/EN toggle)

**Status:** deferred
**Plan tier:** Basic+ (cheap to offer either tier) or bundled into Premium custom branding.
**Proposed:** 2026-07-31 (architect-strategy)

## Summary

Portugal is a real destination-wedding market; a language toggle (at minimum PT/EN) on the welcome/instructions copy would serve international couples and guests.

## Why it's deferred (devil's advocate — architect-strategy)

Good idea in the wrong sequence. Hardcoding a second language into the current single-file-per-event pattern means duplicating every string across N files, right before the config layer (`CLAUDE.md` priority #4) is supposed to introduce the structure that should carry copy/language too. Building this now means redoing it once the config system lands. Also: no destination-wedding client has been booked yet — this anticipates a market segment rather than responding to one.

## Feasibility (developer)

Free to defer entirely — there's no config object yet to get the shape wrong. When priority #4 (config/admin layer) is actually built, its object just needs a `language: 'pt' | 'en'` key and a `copy: {...}` map. Zero-cost action to take now: leave a one-line note in `CLAUDE.md`'s config sketch so whoever builds the config layer doesn't forget it. Don't start extracting inline Portuguese strings into a strings map today — that's building infrastructure for a layer that doesn't exist yet.

## Trigger to revisit

The config/admin layer (priority #4) is being built, or a destination-wedding booking creates real demand — whichever comes first.

## Decision log

- 2026-07-31 — Proposed, deferred. No code action needed now beyond noting the config sketch.
