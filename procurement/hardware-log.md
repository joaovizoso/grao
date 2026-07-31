# Hardware Reference Pricing Log

**Date of this pass:** 2026-07-31
**Prepared by:** procurement, against [features/hardware-upgrade-plan.md](../features/hardware-upgrade-plan.md) (architect-strategy's restructured Option 1 / Option 2 framing, 2026-07-31)
**Status:** Reference pricing only. **No vendor contacted, no order placed, nothing purchased.** Per STATUS.md and the hardware plan, there is still no confirmed second booking — this is capex planning against a trigger condition, not a shopping list to execute today.

**Restructure note (2026-07-31):** This file previously used a Track A / Track B / Track C structure mirroring the now-retired plan document. Per the founder's direction, it is fully rewritten below into the same **Option 1 (iPad-based) / Option 2 (dedicated rig)** framing as the plan, each priced as one coherent kit rather than a scattered parts list. Nothing from the prior pass was silently dropped — figures that still hold (Obsbot Tiny 2, Canon M50 II, mic, panel light) are carried forward with their original sourcing dates; anything re-checked live this pass is dated 2026-07-31 again and marked as such.

---

## At a glance

| | **Option 1 — iPad shell** (recommended) | **Option 2 — dedicated rig** (reference only) |
|---|---|---|
| **Total cost, best estimate** | **~€500–1,300** as a complete kit — see gap flag below, no single in-stock listing confirms the low end today | **~€1,500–3,500+** DIY-housed, or **~€3,500–6,500+** bought-shell-housed (and still the wrong aesthetic even then) |
| **Lead time** | 2–5 weeks (EU shipping), faster if a PT/EU seller has stock; unconfirmed for the specific SKU that meets spec (see below) | Months — not shipping-bound, blocked on unbuilt software and an enclosure that can't be designed until contents are fixed |
| **Software readiness** | Works today, zero code changes (`index.html` as-is) | Blocked on CLAUDE.md priority #5 (hardware bridge), and wants priority #4 (config layer) done first |
| **Brand fit (boutique black/white/gold)** | Better — small, refined object; matte-black/neutral units exist in the category | Worse by default — every bought all-in-one shell found this pass is RGB-lit, sheet-metal/wood-grain, and reads as generic "party photo booth," not "video guestbook" |
| **Meets founder's "off-the-shelf, not RGB, integrated light" bar today, in stock, at the two named sellers?** | **No — flagged, not silently substituted.** See §1.2. | **No.** Confirmed by direct product data below, not assumed. |

---

## 1. Option 1 — iPad-based booth

### 1.1 What's being priced

Per the plan: the existing iPad in a purpose-built shell with a ring light **integrated into the shell**, on a stand (separate or supplied), using the iPad's own camera and mic. No external camera. External mic is **explicitly not priced as a certainty** — it's gated on the founder's free audio test (plan §2.4/§5); if that test fails, "Option 1b" (an internal USB mic) becomes a candidate, priced separately below for reference only.

### 1.2 Direct findings — photoboothshop.eu and photoboothstore.eu, checked 2026-07-31

**photoboothshop.eu (Hulshout, Belgium)** — three iPad-shell products found on live product pages:

| Product | Price | Ring light | Stand | Material/finish | Stock | iPad fit | Meets founder's bar? |
|---|---|---|---|---|---|---|---|
| **iPad Booth Standard** | €1,190 (list €1,200) | **Integrated** — 19" swivel & lift ringlite | **Yes, integral** (swivel/lift column) | White or black shell, ~23kg, 2 faceplates fit "most iPad models" (not model-specific) | **Sold out** at last check | Generic faceplate fit — not confirmed against a specific iPad generation | **Closest structural fit** (light + stand in one purchase) but the ring light is **RGB**, which fails the founder's explicit no-RGB requirement as sold, and it's currently unavailable to buy |
| **Video Gastenboek (Guestbook) Photobooth** | €1,950 (VAT incl.) | **Not integrated — not present.** Product copy makes no mention of a ring light; it ships with a phone-style handset instead | **Not included** | Not detailed beyond handset colour options | 1 in stock | Built specifically for 12.9" iPad Pro M2; **iPad not included** | Closest **name** match to grao's product category, but **fails the core "integrated ring light" spec outright** — buying this would still require sourcing and mounting a separate light, which reintroduces exactly the "assembled parts" look Option 1 exists to avoid |
| **PB5 Vintage iPad Booth** | Not confirmed — product page 404'd on direct fetch this pass; price not recoverable via search | Light **not integrated** — product copy describes "a base for external lighting equipment," i.e. bring your own | Unclear | **Solid red oak** — a wood finish, not matte black | Unclear | 12.9" iPad Pro / 13" iPad Pro (V2) | Wood finish and non-integrated light fail two of the founder's explicit filters independently of price |

**photoboothstore.eu** — checked 2026-07-31. **No standalone iPad-shell product found at all.** Their relevant listing is the "All-In-One Photo Booth Set 1" at €4,700 ex-VAT — but that's a full mini-PC-based kiosk (13.3" touch display, mini-PC, camera, printer, ring light, wooden tripod shell), not an iPad shell. It's priced under Option 2 below (§2.2) as a bought-shell reference point instead, since it isn't a candidate for this option at all.

### 1.3 The explicit gap — flagged, not papered over

**Neither of the two named EU sellers currently has, in stock, a matte-black-or-brand-neutral, non-RGB, integrated-ring-light iPad shell that meets the founder's stated bar.** The one unit that structurally matches the requirement (iPad Booth Standard: integrated light + integral stand, one purchase) is RGB and sold out. The one that matches grao's product category by name (Video Guestbook Photobooth) has no integrated light at all and no stand — buying it would mean sourcing a separate light and stand, which is precisely the "shopping list of parts" problem this option is supposed to solve, not the coherent single-purchase kit the founder asked for.

Two live paths forward, neither purchasable today at the stated bar:

1. **Ask photoboothshop.eu directly** (draft below, §1.6) when the iPad Booth Standard restocks, and whether its ring light has a fixed white/warm-only mode (RGB-capable hardware run permanently in white mode may satisfy the founder's actual requirement — "no RGB mode ever enabled" — even if the unit is nominally an "RGB" product; this needs the vendor's confirmation, not an assumption).
2. **Fall back to the marketplace tier** (Etsy/CyraTok/WideMeet/360Spinbooths-class listings) that architect-strategy's own research already identified as the ~€400–800 category with non-RGB, matte-black, brand-neutral units and no bundled software. **Procurement has not independently re-verified a specific live listing, price, or stock status in this category this pass** — that verification is the concrete next step, not a number to treat as confirmed today.

### 1.4 Stand / tripod question

- iPad Booth Standard: stand is **integral** to the unit — no separate purchase, if bought.
- Video Guestbook Photobooth: **no stand included** — would need a separate stand/tripod purchase on top of the €1,950, which (combined with no integrated light) moves this specific product further from "one coherent purchase," not closer.
- PB5 Vintage: unclear from available product copy; treat as unresolved.
- **Net: only the RGB, currently-sold-out iPad Booth Standard resolves stand + light as part of one purchase today.** This is the practical proof of the gap in §1.3.

### 1.5 Required founder input before ordering anything

**Confirm the exact iPad model, and which physical edge its front camera sits on**, before ordering any shell (10th-gen and later moved the front camera to the landscape/long edge; earlier models have it on the portrait/short edge). None of the listings above can be validated against the correct aperture position without this — it's a founder-owned €0 check, not something procurement can resolve from a product page.

### 1.6 Draft — vendor email to photoboothshop.eu

> Subject: iPad Booth Standard — restock timing and ring-light colour mode
>
> Hello,
>
> I'm evaluating the iPad Booth Standard for a wedding video-guestbook booth in Portugal, and have two questions before I can decide whether it fits:
>
> 1. It currently shows as sold out — do you have a restock date, and can I pre-order for the next batch?
> 2. Can the integrated ring light be fixed to a plain white or warm-white output only (i.e. disable the RGB colour-cycling mode permanently), or is colour-cycling the only mode available?
>
> Separately: does the unit ship with a VAT invoice suitable for a Portuguese business (IVA-compliant fatura), and what's the landed cost/lead time to mainland Portugal?
>
> Thank you,
> [founder name], grao

### 1.7 Branding and external mic — carried forward, not re-priced

- **Branding vinyl/foil monogram:** ~€50–100 locally (Portuguese sign shops) — unchanged estimate, no new sourcing needed this pass.
- **External mic (Option 1b, contingency only):** Maono AU-GM10-class USB mic, ~€25–35 (no confirmed EU retail price found in this or the prior pass — only US/India listings), plus a ~€25–40 powered USB-C PD hub so the iPad can still charge. **Not priced as part of the Option 1 total** — it's contingent on the founder's audio test failing, per the plan's explicit instruction not to price this as a certainty.

### 1.8 VAT / invoicing note

photoboothshop.eu is Belgium-based (EU). For an intra-EU B2B purchase, if grao has a valid Portuguese VAT number registered for intra-community transactions (VIES), the Belgian seller may zero-rate the invoice under the reverse-charge mechanism, with grao self-assessing 23% Portuguese IVA. If grao is not VIES-registered (e.g. trading under a simplified regime), the seller may instead charge Belgian VAT at checkout. **Confirm actual treatment with an accountant/Finanças before ordering** — this changes the real landed cost by double digits of euros either way, and neither seller's product page addresses it.

### 1.9 Option 1 total — "as it would actually ship"

Two honest scenarios, since no single confirmed in-stock listing meets the bar today:

- **If iPad Booth Standard restocks and the vendor confirms a fixed-white light mode:** €1,190 (shell + integrated light + stand) + ~€75 branding ≈ **~€1,265**, EU-to-EU shipping (no import duty), lead time unconfirmed for this SKU while sold out (a comparable in-stock photoboothshop.eu listing quoted ~14 days).
- **If falling back to the marketplace tier (Etsy/CyraTok-class):** architect's own estimate of ~€400–800 landed still stands as the working number, but it is **not yet backed by a procurement-verified live listing, price, or PT shipping check** — that's the concrete next research task, not a total to commit to.

**Best current single estimate, consistent with the architect's plan: ~€500–1,300.** The material finding of this pass is not the number — it's that **neither named EU seller currently has the exact spec-meeting unit in stock**, so this range is not yet anchored to one purchasable listing the way the founder asked for. Closing that gap (vendor reply, or a verified marketplace listing) is this file's top open item.

---

## 2. Option 2 — dedicated rig (reference only, not recommended near-term)

Per the plan: blocked on CLAUDE.md priority #5 (unbuilt hardware bridge) regardless of price. Priced here purely as a comparison point, per the founder's request for full reference numbers — **not a near-term recommendation.**

### 2.1 Camera — carry forward the Obsbot vs. Canon M50 tradeoff, unresolved

| Camera | Price | Source/date | Note |
|---|---|---|---|
| **Obsbot Tiny 2** | €369 (VAT incl.) | [obsbot.com/store](https://www.obsbot.com/store/products/tiny-2), confirmed 2026-07-31 | UVC/`getUserMedia`-compatible out of the box — no new backend bridge needed, keeps today's capture code path unchanged. |
| **Canon EOS M50 Mark II** (kit lens) | ~€650–800 [unconfirmed PT estimate, not re-checked this pass] | PT retailer pages (Worten/Fnac/PCComponentes) blocked automated price extraction in the prior pass; not re-attempted this pass since Option 2 remains non-near-term | `gphoto2` is a stills/tethering protocol — good for the Premium-only photo strip, **poorly suited to grao's primary 60s video feature** per architect's finding. |

**This is exactly the kind of tradeoff flagged at the top of procurement's brief as beyond a pure price comparison** — it has real integration-complexity consequences for developer (backend bridge vs. none), not just a €300–400 sticker difference. Not resolved here; loop in developer/architect-strategy before treating either as decided.

### 2.2 Bought all-in-one shells — direct evidence of the aesthetic mismatch, from the same two named sellers

| Product | Seller | Price | What it is | Why it doesn't fit grao's look |
|---|---|---|---|---|
| **T1 Photobooth** | photoboothshop.eu | €2,995 | 15.6" touchscreen, DSLR Canon camera, dedicated PC (i5/Ryzen 7), ring light **+ RGB light strip**, printer drawer, 35kg, ~14-day delivery, bundled demo Lumabooth software | Sheet metal with a **wood-grain motif** housing, RGB lighting, and bundled software grao doesn't want — fails the "buy the shell, not the platform" filter and the no-RGB filter both |
| **T2 Photobooth** | photoboothshop.eu | €2,495 | 15.6" touchscreen, mini-PC (i7/Ryzen 7), **built-in RGB + ring-fill light**, optional Canon R100, printer tray, 35kg, ~2-week delivery | Sheet steel construction, RGB lighting, bundled Lumabooth demo software — same two failures as T1 |
| **All-In-One Photo Booth Set 1** | photoboothstore.eu | €4,700 ex-VAT (was €5,000) | 13.3" touch display, mini-PC, camera, printer, integrated ring light, wooden tripod shell | Wood-finish "party booth" aesthetic, and a 13.3" screen (smaller than the CLAUDE.md-specced 15.6") bundled with a fixed hardware/software combo grao would need to partially discard |

**These three confirm the architect's finding directly, from live product data rather than assumption: every bought all-in-one shell found this pass is RGB-lit, sheet-metal/steel or wood-grain finished, and bundles a software platform grao doesn't need.** None meets the founder's boutique black/white/gold bar as bought. This leaves commissioned fabrication or the DIY Motedis+Forex path as the only routes to the right aesthetic — consistent with, and now further evidenced beyond, the plan's conclusion.

### 2.3 Self-assembled component kit (if the DIY/commissioned housing route were taken)

| Component | Price | Source/date | Note |
|---|---|---|---|
| Raspberry Pi 5 (4GB) + case/PSU/SD | ~€70–95 board + ~€30–40 accessories [estimate, not confirmed] | Raspberry Pi Foundation's own 2026 pricing-change announcements note memory-driven price rises across the 4GB+ lineup; no exact current PT/EU retail figure was extractable this pass (kubii.com page didn't render a price via fetch) | Re-check kubii.com or a PT electronics distributor directly before costing precisely. |
| 15.6" capacitive touchscreen (HDMI) | **€186.62 incl. VAT / €149.30 ex-VAT** | [RaspberryPi.dk](https://raspberrypi.dk/en/product/15-6-capacitive-touch-screen-lcd-hdmi-ips/) (Denmark, EU), confirmed 2026-07-31 | Better-sourced than the CLAUDE.md-named InnoView/ELECROW candidates — neither could be pinned to a confirmed EU/PT retail price this pass (only found USD listings, e.g. ELECROW CrowVi ~$129, not VAT-inclusive or PT-shipping-confirmed). Re-price InnoView/ELECROW directly if Option 2 is ever greenlit. |
| Camera | €369 (Obsbot) or ~€650–800 (M50 II, unconfirmed) | See §2.1 | — |
| Mic (Maono AU-GM10-class) | ~€25–35 [estimate, not confirmed] | No EU retail price found in this or the prior pass — only US/India listings | Same gap as Option 1's contingency mic pricing. |
| Light (bi-colour dimmable panel) | ~€50–150 | Carried forward from prior pass, not re-priced this round | Depends on CCT-adjustable spec chosen. |
| Printer (Selphy CP1500, only if print-on-site sold) | ~€150–200 + consumables | Carried forward, not re-priced this pass | Adds housing volume and a service door regardless of sensor/compute choice. |

### 2.4 Housing — three routes, none precisely costable yet

- **(a) Bought shell:** €2,495–4,700+ per §2.2 — wrong aesthetic at any of these price points.
- **(b) Commissioned Portuguese fabrication:** open-ended, realistically four figures, multi-week-to-multi-month, and requires a design that doesn't exist yet.
- **(c) DIY Motedis 40×40 + 5mm Forex:** ~€250–450 illustrative only — **not a real bill of materials**, because no cut list exists until final component dimensions (screen, camera body, printer footprint) are fixed. This is the same sequencing problem the architect flagged: you can't cost a box before you've chosen its contents.

### 2.5 Option 2 total reference range

- **Components only** (Pi5 + screen + camera + mic + light + cabling): roughly **€700–1,300** (Obsbot path) or **~€1,000–1,600** (M50 II path).
- **Plus housing:** +€2,495–4,700 (bought, wrong aesthetic) / +€250–450 materials-only, labour/finish risk unquantified (DIY) / open-ended four figures (commissioned).
- **Total reference range: ~€1,500–3,500+ if DIY-housed, or ~€3,500–6,500+ if bought-shell-housed** (and still not matching grao's aesthetic even at that higher price). **Clearly not recommended near-term** — blocked on CLAUDE.md priority #5 (unbuilt hardware bridge) regardless of budget, and wants priority #4 (config layer) closed first.

---

## 3. Open items for the next procurement pass

- **Top priority:** verify a specific, in-stock, matte-black/brand-neutral, non-RGB, integrated-ring-light iPad shell in the ~€400–800 marketplace tier (Etsy/CyraTok/WideMeet/360Spinbooths-class) with a live price, stock check, and shipping-to-Portugal quote — this is the gap flagged in §1.3 and the single most valuable thing this file is missing.
- Send the draft email in §1.6 to photoboothshop.eu re: iPad Booth Standard restock timing and fixed-white light mode; log the reply here when it arrives.
- Confirm exact IVA/VAT treatment for an EU B2B purchase from Belgium (reverse charge vs. Belgian VAT at checkout) with an accountant before any Option 1 order.
- Re-confirm Canon EOS M50 Mark II PT retail price directly (blocked by anti-bot pages in two passes now).
- Re-price Raspberry Pi 5 (4GB), Maono AU-GM10, and InnoView/ELECROW 15.6" touchscreens on live PT/EU retailer pages if Option 2 is ever actually greenlit — none of these are near-term spend today, so they were not chased further than a market-rate estimate this pass.
- Confirm the founder's exact iPad model and front-camera edge (§1.5) — required before any Option 1 order regardless of which shell is chosen.
