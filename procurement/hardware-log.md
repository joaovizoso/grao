# Hardware Reference Pricing Log

**Date of this pass:** 2026-07-31
**Prepared by:** procurement, against [features/hardware-upgrade-plan.md](../features/hardware-upgrade-plan.md) (architect-strategy's framing, 2026-07-31)
**Status:** Reference pricing only. **No vendor contacted, no order placed, nothing purchased.** No confirmed next booking exists yet per STATUS.md/the architect's framing — this is capex planning, not a shopping list to execute today.

This file establishes the running hardware-pricing log pattern; future procurement passes should append a new dated section below rather than overwriting this one, so prices can be diffed over time.

## How to read the tracks

- **Track A — buy-now candidates.** Usable with the current iPad rig today, no software changes (one flagged exception, see A.3). These are the only items this pass treats as "could actually be bought soon," and even these are gated on the architect's €0 evidence steps (review J&C footage, confirm a real next booking, run the mic device test below) before spending anything.
- **Track B — reference only, not recommended yet.** Dedicated camera path. Stranded on unbuilt Priority #5 software; do not buy.
- **Track C — reference only, not recommended yet.** Booth enclosure, bought or DIY. Architect recommends a styled presentation layer instead for now; priced here anyway per founder's explicit request for full reference numbers.

Every price below is dated and sourced. Where an automated fetch was blocked by anti-bot/JS rendering on the retailer's page (noted explicitly per item), I've given a market-rate estimate from comparable listings instead of inventing a precise figure — flagged as **[estimate, not confirmed]** and should be re-verified on the actual product page before any purchase decision.

---

## Track A — buy-now candidates

### A.1 Tripod / support

Requirement per architect's brief: rigid, repeatable framing, adjustable for standing/seated/child height, does not read as an amateur tripod visibly in frame.

| Option | Price | Source / date | Notes |
|---|---|---|---|
| **Manfrotto Befree (kit w/ head)** | €199.99 list, **€119.97 on sale** | [Worten.pt](https://www.worten.pt/fotografia-e-drones/tripes-e-estabilizadores/tripes/kit-tripe-manfrotto-befree-5559834), checked 2026-07-31 | Max height 144cm, 1.4kg, 4kg payload. Reputable brand, black, folds compact — clears the "doesn't look amateur" bar (this is the line professional videographers actually use). Worten is a PT retailer, B2B invoice (fatura com IVA) available at checkout, in-stock/PT delivery. |
| **Manfrotto Compact Action (MKCOMPACTACN-BK)** | **~€49–90 [estimate, not confirmed]** | [Amazon.es listing](https://www.amazon.es/Manfrotto-Compact-Action-Tr%C3%ADpode-completo/dp/B00K0P047E) — page price not extractable via automated fetch (JS-rendered), figure taken from cross-referenced customer/price-tracker mentions, checked 2026-07-31 | Cheaper Manfrotto line, lower max payload (2kg) and height reach — plausible for an iPad but tighter margin for standing-height framing across varied guest heights. Amazon.es ships to PT, VAT invoice available. **Re-check exact price on the live page before buying — this number is not fetch-confirmed.** |
| **Generic/no-name adjustable tripod (~€25–35 class)** | Not itemized here | — | Explicitly not recommended: this is the category the architect's amateur-tell checklist calls out ("a consumer tripod with a visible clamp"). Skip even though cheapest. |

**Recommendation for costing purposes: Manfrotto Befree kit, €119.97 (Worten.pt, sale price, 2026-07-31 — verify sale is still live at purchase time).**

### A.2 Lighting

Architect's framing: lighting is the top leverage point for low-light quality, ahead of a camera/sensor upgrade, because a controlled key light solves the noise-floor problem a large sensor solves at 10x the cost — and it's usable today with zero software changes.

| Option | Price | Source / date | Notes |
|---|---|---|---|
| **Neewer dual LED panel kit (2x panel + mini tripods + color filters)** | **~€40–60 [estimate, not confirmed]** | [Worten.pt product page](https://www.worten.pt/produtos/painel-led-iluminador-neewer-fotografia-e-video-com-tripes-e-filtros-2-unidades-mrkean-0810038370132) found via search, checked 2026-07-31; exact price blocked by anti-bot 403 on fetch. Spec confirmed via search snippet: 66 LEDs, ~1000 lumens, 5600K, 10–100% dimmable, USB (5V/2A) powered, height 22.5cm–1.16m. | Dimmable and battery/USB-powered (matches the "independent of venue lighting" requirement); fixed 5600K only (no bi-color/CCT adjustment to blend with warm venue ambience) — a real limitation against the architect's requirement that colour temperature should be adjustable to match warm reception lighting rather than fight it. Two units gives redundancy/fill+key. |
| **Neewer/Viltrox bi-color CRI95+ single panel (e.g. NL-116AI or VL-162T class)** | **$110–160 (~€100–150) [US pricing, estimate]** | [Amazon.com listings](https://www.amazon.com/3200K-5600K-Photography-Recording-Streaming-NL-116AI/dp/B0D9W57M4Y), checked 2026-07-31 — no PT/EU retailer price found in this pass | Adjustable 3200–5600K (blends with warm venue tungsten/LED), CRI95+, USB-C powered — better spec fit to the architect's "blend with venue ambience, high colour accuracy" requirement than the fixed-5600K Neewer kit above. Not found on a PT retailer in this search; would likely need Amazon.de/.es ordering, still EU-shipped so no import duty, but price not PT-confirmed. |

**Recommendation for costing purposes: budget ~€50–80 for a single small dimmable, ideally bi-color, on-camera/panel light. Confirm exact SKU and PT/EU price before buying — this category has many near-identical rebadged panels at different price points and the CCT-adjustable spec matters more here than brand.** Per the brief: this beats a sensor/camera upgrade on leverage-per-euro because the failure mode (dim venue reception lighting) is a lighting problem, not a sensor problem.

### A.3 External mic — flagged pre-purchase test required

**Do not buy a mic before running the test below.** Per architect-strategy's framing: Safari on iPad does not expose a device picker for `getUserMedia`, and iOS may not default to an external USB/USB-C mic as the recording input. If it silently defaults to the iPad's built-in mic in a noisy reception, nobody finds out until after the wedding — the exact silent-failure class CLAUDE.md treats as worst-case.

**The €0 test to run first (developer, not procurement):** plug any USB-C class-compliant mic already at hand (or borrow one) into the actual kiosk iPad, load the booth in Safari, record 15 seconds with the mic covered/uncovered to make the source audibly obvious, and confirm from the resulting file which mic captured. If Safari defaults to the wrong device, the fix (an `enumerateDevices`/`deviceId` constraint) is small but must be known before money is committed.

| Option | Price | Source / date | Notes |
|---|---|---|---|
| **Maono AU-GM10 gooseneck mic** (already named in CLAUDE.md's Hardware Roadmap for the future Pi5 kiosk) | **~€25–35 [estimate; India/US listings only found, ₹899–1199 / rebadged variants, no direct EU price confirmed]** | [Amazon.in](https://www.amazon.in/MAONO-AU-GM10-Condenser-Microphone-Conference/dp/B08BZST39C), spec cross-check via search, checked 2026-07-31 | **Correction to earlier assumption worth flagging:** this mic connects via **USB-C** (ships with a USB-A-to-C cable), not USB-A-only as might be assumed — meaning it is plausibly the same mic for both the Track A iPad test *and* the eventual Track B Pi5 kiosk, a genuine two-track fit if the Safari test passes. Fixed gooseneck mount also suits the architect's "fixed, known, close mic-to-mouth distance beats capsule quality" requirement directly. **This should be the first unit bought for the device test, precisely because it isn't a single-use purchase if it works.** |
| **Saramonic SmartMic5 UC** (USB-C micro-shotgun, marketed explicitly for iPad Pro/Air USB-C) | **~$75 (was $99) (~€70) [US pricing, no EU price found]** | [Adorama](https://www.adorama.com/saramonic-smartmic5uc-unidirectional-micro-shotgun-microphone-usb-c/p/sarsmamic5uc), checked 2026-07-31 | Purpose-built for iPad USB-C, directional. Higher spec/price than the Maono; better fit if the fixed gooseneck mount isn't practical for the booth's physical layout, worse fit against the architect's "fixed-position mount beats anything handheld/clip-adjacent" preference since this is camera/device-mounted rather than boom-mounted. |
| **Comica CVM-VS09TC** (USB-C cardioid shotgun) | **~$79 (~€75) [US pricing, no EU price found]** | [B&H](https://www.bhphotovideo.com/c/product/1552613-REG/comica_audio_cvm_vs09_tc_cardioid_smartphone_microphone_for.html), checked 2026-07-31 | Similar category/price to the Saramonic; no PT/EU retailer found stocking it in this pass, would likely ship from a non-EU seller — check import VAT before ordering. |

**Recommendation for costing purposes: buy the Maono AU-GM10 (~€30) first and run the developer device test before buying anything else in this category** — it's the cheapest option, doubles as roadmap hardware if it works, and answers the compatibility question the other two options don't (a shotgun mounted on the iPad itself doesn't test the fixed-gooseneck placement the architect actually recommends).

### Track A running subtotal (buy-now candidates, if founder proceeds after the €0 evidence steps)

| Item | Price (best estimate) | Confidence |
|---|---|---|
| Manfrotto Befree tripod kit | €119.97 | Confirmed, Worten.pt, 2026-07-31 |
| Lighting (single dimmable panel, spec TBD) | ~€50–80 | Estimate — confirm SKU/price before buying |
| Maono AU-GM10 mic (for device test) | ~€25–35 | Estimate — no PT/EU retailer price confirmed |
| **Track A total (before device test outcome)** | **~€195–235** | Mixed confidence — re-price lighting and mic on live retailer pages before committing |

This is consistent with the architect's framing of Track A as "low-hundreds of euros against a 349–599€ ticket" — well inside a one-booking payback.

---

## Track B — reference only, not recommended to buy

Per the architect's framing: a dedicated camera bought today produces no better output at the next booking (the iPad path can't use it without unbuilt software), and `gphoto2` is a stills/tethering protocol poorly suited to grao's primary both-plans feature (60s video), better suited to the Premium-only photo strip. **These two options are not equivalent "camera" line items — presented separately below, priced for forward planning only.**

### B.1 Canon EOS M50 Mark II (roadmap's named body, gphoto2 path)

| Retailer | Price | Source / date | Notes |
|---|---|---|---|
| Worten.pt, Fnac.pt, PCComponentes.pt, Auchan.pt (kit w/ EF-M 15-45mm lens) | **Price not extracted this pass** — pages exist and are in-stock at all four PT retailers, but automated fetch was blocked (403/410) on every attempt | [Worten.pt](https://www.worten.pt/produtos/maquina-fotografica-canon-eos-m50-mark-ii-ef-m-15-45-aps-c-7389573), [Fnac.pt](https://www.fnac.pt/Canon-EOS-M50-Mark-II-EF-M-15-45mm-f-3-5-6-3-IS-STM-Preto-Camara-Fotografica-Digital-Camara-CSC-Mirrorless/a8529754), [PCComponentes.pt](https://www.pccomponentes.pt/canon-m50-mark-ii-241mp-wifi-preta-objetiva-15-45mm-f35-63-is-stm), checked 2026-07-31 | This body + kit lens has held roughly **€650–800** at PT retailers through 2025 based on general market tracking; **treat as an unconfirmed estimate, not a quote** — the exact current figure needs a manual page visit since none of the four retailer pages would render a price through automated fetch. All four are PT-based, B2B invoice capable, no import duty (EU stock). |
| Refurbed.pt (refurbished) | Listed "up to 40% cheaper than new" | [Refurbed.pt](https://www.refurbed.pt/p/canon-eos-m50-mark-ii-black/), checked 2026-07-31 | Worth checking directly if Track B is ever greenlit — refurbished mirrorless is a reasonable way to de-risk a purchase that per the architect may need re-specifying anyway (see gphoto2 caveat below). |

**Critical caveat carried over from the architect's framing, not procurement's own judgment:** `gphoto2` tethers as a stills/capture protocol. Live-preview video recording over it means `--capture-movie` piped into `v4l2loopback` — laggy and fragile, a poor fit for grao's 60-second **both-plans** video feature. It's a good fit for the Premium-only photo strip. **This is an architecture question, not a pricing question — flagging that CLAUDE.md's Hardware Roadmap line naming the M50 II may need amending before this camera is bought for the reason the roadmap currently states.** Loop in architect-strategy/developer before treating this body as "the" camera decision.

### B.2 Obsbot Tiny 2 (getUserMedia-compatible alternative)

| Retailer | Price | Source / date | Notes |
|---|---|---|---|
| Obsbot official EU store | **€369 (VAT included)** | [obsbot.com/store](https://www.obsbot.com/store/products/tiny-2), checked 2026-07-31 | Confirmed EU-priced, VAT-inclusive listing, 3–5 working day delivery stated on the page (destination not PT-specific but store serves EU). B2B invoicing needs confirming directly with Obsbot at order time. |
| Obsbot Tiny 2 (Prime Day low, US) | **$229 (historic low, was $329)** | [Yanko Design](https://www.yankodesign.com/2026/06/19/obsbot-ai-cameras-are-on-sale-for-prime-day-2026-and-the-tiny-2-webcam-just-hit-its-lowest-price-ever/), [The Gadgeteer](https://the-gadgeteer.com/2026/06/24/obsbot-prime-day-2026-the-tiny-3-drops-to-296-and-the-tiny-2-hits-a-historic-low/), both checked 2026-07-31 | US promotional price (~€210 at spot FX) — not orderable at that price from Portugal without a US intermediary, and would incur import VAT/duties + shipping that likely erase the saving vs. the EU store price. Reference only. |

**Fit note (not procurement's call to resolve, but worth surfacing alongside price):** the Obsbot is `getUserMedia`-compatible out of the box — no new hardware-bridge software needed, unlike the M50 II's `gphoto2`/CUPS-style integration. If/when Track B is revisited, the Obsbot is the closer fit to what already runs today (`joao-constanca-booth.html`'s existing capture code), while the M50 II requires the backend bridge CLAUDE.md flags as not-yet-built. This is exactly the kind of camera tradeoff the procurement brief says not to resolve alone — flagging for architect-strategy/developer, consistent with the M50-II gphoto2 caveat above.

### B.3 Canon EOS 600D (founder-owned — €0, reference feasibility only)

The founder already owns this body (2011 APS-C DSLR, "Rebel T3i") and asked whether it can substitute for B.1/B.2 rather than buying either. Full research and verdict logged in [features/hardware-upgrade-plan.md](../features/hardware-upgrade-plan.md#addendum-canon-eos-600d-founder-owned-feasibility-research---2026-07-31) (developer, 2026-07-31) — summary here for the pricing table:

| Integration path | Feasibility verdict |
|---|---|
| **gphoto2 tethering** | Stills: fine, well-supported. Video: `--capture-movie` on this generation is a laggy (~0.5–5s), low/inconsistent-fps (~4–25fps) MJPEG preview hack, not real recorded video — unusable for the 60s guest-message feature. A proper onboard-record trigger (`movierecordtarget=Card`) may exist on this camera generation but is **unverified** for the 600D's specific gphoto2 driver — needs an on-device `gphoto2 --list-config` check, not assumed. Same architectural problem the architect already flagged for the M50 II, arguably worse. |
| **HDMI capture card as UVC webcam** | Stock firmware has overlay-cluttered HDMI, not a clean feed — clean output requires **Magic Lantern** (unofficial third-party firmware), a real reliability risk for unattended wedding-day use. Safari on iPadOS 17+ **does** support external UVC cameras via `enumerateDevices()` and `getUserMedia()` on **USB-C iPads only** (confirmed by WebKit's Safari 17 release notes and corroborated by real-world capture-card test on iPad 10th gen; see Addendum 2 §2.1 in features/hardware-upgrade-plan.md). However, this does not make the 600D viable for this rig without resolving Magic Lantern's reliability (a real risk for unattended use) and the 600D's own ~30-minute live-view thermal ceiling, both of which are camera-specific problems, not platform incompatibility. |
| **Image quality (either path)** | APS-C sensor + real lens would meaningfully outperform the iPad camera and Obsbot Tiny 2 in low light — but only if an integration path delivers that output cleanly, which neither path does today without the unresolved items above. |

> **Safari UVC support correction — 2026-07-31, per Addendum 2 §2.1 of features/hardware-upgrade-plan.md:** The original HDMI row (superseded above) claimed Safari UVC support was "unverified" — i.e., it might not work in Safari on iPadOS. This has been corrected: WebKit's own Safari 17 release notes explicitly confirm "WebKit now supports USB cameras on iPadOS 17" and that they are "included in the output of `enumerateDevices()` and selectable with `getUserMedia()`" on USB-C iPads. Independently corroborated by a real-world test of a USB video capture device on an iPad 10th gen, iPadOS 17, in Safari. The original "unverified" status is retired. The overall recommendation — "do not buy a capture card for the iPad" — stands, but the reasoning has changed from "platform incompatibility" to "camera-specific problems (Magic Lantern reliability, thermal ceiling) and economics (camera upgrade euros belong to the Pi5 target per the spending rule in Addendum 2 §2.4)," not compatibility grounds. Updated 2026-07-31 for clarity about what changed and why.

**Verdict: not usable on the current iPad/Safari rig today. Not automatically better-suited to the future Pi5/Chromium kiosk either, but the HDMI-capture-card path becomes low-risk on that future desktop-class OS (no iPadOS/Safari gate) if Magic Lantern's clean-HDMI output proves reliable on the bench.** Recommended action before any capture-card purchase: (1) **€0 test:** bench-test Magic Lantern's clean-HDMI-out stability over several unattended hours before relying on it at a live event; (2) **€0 check:** confirm whether the kiosk iPad is USB-C or Lightning (this gates whether the UVC path is even compatible with the specific iPad hardware). If pursued at all, slot this camera into Track B's camera role via the HDMI-capture-card path only (not gphoto2) — ahead of spending on B.1/B.2 — once Track B is actually greenlit.

**Price: €0 (already owned).** Does not change the standing recommendation against buying Track B hardware now.

### Track B running total (reference only)

| Item | Price | Confidence |
|---|---|---|
| Canon EOS M50 Mark II + kit lens | ~€650–800 [unconfirmed estimate] | Low — re-check live retailer price |
| Obsbot Tiny 2 | €369 | Confirmed, obsbot.com, 2026-07-31 |
| Canon EOS 600D (founder-owned) | €0 — but not usable today on either integration path without unresolved prerequisites (Magic Lantern bench-reliability test; camera-specific thermal ceiling; 30-min live-view limit) | See B.3 verdict above |

Neither recommended for purchase now. Both priced for forward planning only, per the architect's trigger conditions (Priorities #1–4 genuinely closed, plus a rental-validated quality gain, print-on-site actually sold, or booking volume making the iPad rig the binding constraint).

---

## Track C — reference only, not recommended to buy or build yet

Architect's recommendation: skip both paths for now in favour of a styled presentation layer (backdrop/plinth/signage/cable management) that doesn't lock in dimensions before Track B is decided. Priced below anyway per founder's request for full reference numbers.

### C.1 Pre-made photo-booth/kiosk shell (buy path)

| Vendor | Price | Source / date | Notes |
|---|---|---|---|
| RBA Photo Booths (US manufacturer) — Beautipad iPad shell | **$1,300** | [rbaphotobooths.com](https://www.rbaphotobooths.com/collections/rba-photo-booth-shell-for-sale), checked 2026-07-31 | Purpose-built for an iPad-in-a-shell format, closest fit to grao's current iPad rig of anything found. **US-based — add import VAT (23% IVA) + customs duty + international freight + customs clearance time on top of sticker price; realistic landed cost likely $1,300 + ~€400–600 in duty/VAT/freight, and several weeks' lead time.** Not brand-neutral (RBA branding/aesthetic, described by the architect as "party" aesthetic that fights grao's boutique positioning) — would need to confirm rebrandability. |
| RBA — T11/T12/T20R DSLR-style shells | $1,600–2,200 | Same source, same date | Built for DSLR + ring-light "party photo booth" aesthetic (mirror/LED trim options) — the architect's flagged mismatch with grao's black/white/gold boutique positioning is visually obvious on these models. Not a good aesthetic fit regardless of price. |
| EU-based brand-neutral matte shell | **Not found in this pass** | Searched (Flashmat.pt, Photo Booth Europe, 360-photo-booth.com), checked 2026-07-31 | The PT/EU results returned were photo-booth **rental service providers** (e.g. Flashmat), not enclosure manufacturers selling shells outright — no EU-based seller of a brand-neutral, rebrandable matte shell was found. This directly confirms the architect's open question in the framing doc: **no evidence yet that a matte, EU-shipped, brand-neutral shell exists at a competitive price** — the bought-shell path currently only has US options with the import-cost and aesthetic problems above. |

### C.2 DIY: Motedis 40×40mm aluminium frame + 5mm black matte Forex panels

| Component | Price | Source / date | Notes |
|---|---|---|---|
| Motedis 40×40 B-type (slot 10) aluminium profile | **Price not extracted — page renders "xx,xx€" placeholders through automated fetch** on both motedis.com and motedis.pt | [motedis.com](https://www.motedis.com/en/Profile-40x40-B-type-slot-10), [motedis.pt](https://www.motedis.pt/es/Perfil-40x40-Tipo-B-ranura-10mm), checked 2026-07-31 | Confirmed: cut-to-length available 50mm–1980mm (or up to 6000mm for large-customer orders), standard stock lengths at 500/1000/1500/1980mm price better than custom cuts, delivery "3–6 business days Ex Works." Motedis ships to PT (site redirects EU customers to their .pt storefront) and issues proper VAT invoices. **Rough market-rate estimate for this profile class: €12–18/meter [estimate, not confirmed] — visit the live Motedis.pt configurator and add actual booth dimensions before costing this seriously**, since price also depends on corner brackets (~€1–3 each), T-nuts (~€0.20–0.50 each), and end caps, all sold separately. |
| 5mm black matte Forex (PVC foam board) panels | **Price not extracted** — found a PT-based supplier but page didn't render pricing | [Moldiber](https://moldiber.com/pt/pvc-espumado-forex/) (PT/ES supplier, comercial@moldiber.com, +34 976 503 252), checked 2026-07-31; also [Modulor.de](https://www.modulor.de/en/forex-color-pvc-foam-board-coloured-5-0-x-1560-x-3050-mm-black-ral-9004-qm.html) stocks black 5mm Forex in large sheets (1560×3050mm) | **Rough market-rate estimate: €20–35/m² for 5mm black matte Forex cut to size [estimate, not confirmed]** based on comparable listings for this board class; large full sheets (1560×3050mm ≈ 4.76m²) from a supplier like Modulor would work out cheaper per m² than small cut-to-size orders but require in-house cutting. **A concrete quote requires knowing the booth's actual panel dimensions — which per the architect's core objection don't exist yet, because Track B's contents (screen size, camera body, printer footprint) aren't decided.** This is the practical proof of the architect's sequencing point, not just a theoretical one: procurement cannot even fully price the DIY materials list without Track B being resolved first. |
| **Rough DIY total, illustrative only** | **~€250–450** for a modest single-person booth frame (a few meters of profile + connectors + a handful of Forex panels) | Derived from the estimates above, not vendor-quoted | **Do not treat this as a real budget number.** It's an order-of-magnitude placeholder assembled from unconfirmed per-unit estimates against an undefined bill of materials (no cut list exists because no dimensions exist). A real quote needs a designed cut list first. |

### Lead time comparison

| Path | Lead time |
|---|---|
| RBA pre-made shell (US) | Manufacturing + international freight + PT customs clearance — realistically **3–6 weeks**, not confirmed by vendor |
| Motedis DIY materials | **3–6 business days Ex Works** (vendor-stated) for the aluminium once a cut list exists, plus separate lead time for Forex panels and, per the architect's point, whatever time fabrication (drilling, cutting, finishing) actually takes — unquantified since no cut list exists |

Both paths confirm the architect's recommendation to defer Track C: the bought shell is slow, expensive to land, and aesthetically mismatched; the DIY path can't even be fully priced yet because it has no dimensions to price against.

---

## Summary by track

| Track | Recommendation this pass | Approx. cost if proceeding |
|---|---|---|
| **A — tripod, lighting, mic** | Buy-now candidate, gated on the architect's €0 evidence steps (J&C footage review, confirmed next booking, Safari mic device test) | ~€195–235 (mixed confidence, see item notes) |
| **B — camera (M50 II, Obsbot Tiny 2, or founder-owned 600D)** | Reference only, do not buy/deploy | €0 (600D, owned but not usable today on either integration path — see B.3) to €369 (Obsbot, confirmed) to ~€650–800 (M50 II, unconfirmed estimate) |
| **C — enclosure (bought or DIY)** | Reference only, do not buy or build; architect recommends a styled presentation layer instead | $1,300–2,200 (bought, US, + import costs) or ~€250–450 (DIY, illustrative placeholder only — no real BOM exists) |

## Open items for a future pricing pass

- Re-confirm the Canon EOS M50 Mark II PT retail price directly (all four retailer pages blocked automated price extraction this pass).
- Get a live Motedis.pt configurator quote once/if Track B dimensions exist.
- Get a direct quote from Moldiber (PT/ES Forex supplier) rather than estimating.
- Confirm whether any EU-based photo-booth shell manufacturer sells a brand-neutral matte shell (none found this pass; only US party-aesthetic shells and PT/EU rental-service providers, which are not the same thing as a shell for sale).
- Re-price the lighting and mic categories on live PT/EU retailer pages before any purchase — several figures in Track A are cross-referenced estimates, not fetch-confirmed prices, and this is the one track actually being considered for near-term spend.
- Canon EOS 600D (B.3): Run one €0 feasibility test before any capture-card spend — bench-test Magic Lantern's clean-HDMI-out reliability over several unattended hours to ensure it doesn't crash mid-recording (a wedding-day failure mode). Also check the 600D's specific libgphoto2 driver for `movierecordtarget` support (`gphoto2 --list-config`) before assuming the gphoto2-video path is even theoretically viable. Separately: confirm whether the kiosk iPad is USB-C or Lightning (the UVC path only works on USB-C; Lightning closes this option entirely).
