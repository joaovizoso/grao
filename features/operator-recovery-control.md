# Operator Recovery/Reset Control

**Status:** deferred
**Plan tier:** Not client-facing — internal operator tooling, doesn't map to Basic/Premium.
**Proposed:** 2026-07-31 (architect-strategy)

## Summary

A discreet, operator-only control (long-press corner, hidden gesture) to force-reset a stuck screen, skip a jammed capture, or bypass a broken auto-timer without reloading the whole page mid-event.

## Why it's deferred (devil's advocate — architect-strategy)

After exactly one live event, there's no evidence yet of which failure modes actually needed manual recovery beyond "reload the page" (which already works, given the flat single-page-app structure). Building bespoke recovery UI now designs for guessed failure modes rather than observed ones. It's cheap to add later, incrementally, once a second or third real event surfaces an actual recurring "I wish I could reset X" moment for the operator.

## Trigger to revisit

An operator reports a specific recurring recovery need at a future event.

## Decision log

- 2026-07-31 — Proposed, deferred.
