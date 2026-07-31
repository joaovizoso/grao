# Hardware Upgrade: Tripod, Camera/Mic AV Quality, and Booth Enclosure

**Status:** discussing
**Plan tier:** Not a plan feature. Operational capex affecting delivery quality on **both** plans. Two threads touch paid add-ons: audio isolation overlaps the soundproof cabin (+200€) add-on, and on-site printing overlaps the print-on-site (+100€) add-on.
**Proposed:** 2026-07-31 (architect-strategy, founder-requested)

**This is a framing document for [procurement] to source against. It deliberately names no products, brands, or models, and approves no spend. Every purchase decision below is the founder's call.**

## Summary

The founder wants to start buying physical hardware to move grao from "iPad on something" toward a real kiosk: a tripod/support, a camera+mic setup that survives dim, noisy venues without looking amateur, and a booth enclosure (bought or DIY).

The critical move in this document is **splitting that into three independent tracks that have been getting bundled as one "hardware" decision**, because they have completely different dependencies on the software queue:

| Track | What it is | Software work required | Usable at the next booking? |
|---|---|---|---|
| **A — AV quality of the current iPad rig** | Support/stand, lighting, mic, cable & finish discipline, styled presentation | ~None (one small caveat, see A.3) | Yes, immediately |
| **B — Full kiosk rebuild** | Pi 5, touchscreen, dedicated camera via `gphoto2`, Selphy via CUPS, power, hotspot | **Priority #5** — unbuilt, correctly last in the queue | No. Bought now, it sits in a box. |
| **C — Booth enclosure** | Motedis aluminium + Forex DIY, or a bought shell | None directly, but its *dimensions* are defined by Track B's contents | Only as an empty box around an iPad |

**Recommendation in one line: pursue Track A now, scoped and small; do a €0 evidence step before spending anything; do not buy Track B; defer Track C and replace it for now with a "styled presentation layer" rather than a built enclosure.**

---

## 1. Sequencing vs. the software queue

### The distinction the founder is right to draw

CLAUDE.md's Development Priorities put hardware integration last, and STATUS.md confirms priorities #1–#4 are not closed (issue #2 mitigated-not-confirmed, #3 partial, #4 fully open). Read carelessly, that says "buy no hardware." That reading is wrong, and the founder's instinct to separate the two is correct.

**Priority #5 is a constraint on writing hardware-integration *code*, not a moratorium on owning physical objects.** A tripod requires zero lines of code. A light requires zero lines of code. These are operating equipment for a service business, in the same category as a car and a folding table — they are not product features and they do not belong in the software priority queue at all. Applying "wait until the config layer exists" to a tripod is queue discipline misapplied as an excuse.

Track B is the opposite case, and this is where the distinction bites hardest.

### Why Track B fails on its own terms right now

Not "it's not our turn yet" — it genuinely does not deliver value if bought today:

- **A dedicated mirrorless camera bought today produces no better output at the next booking.** The iPad path reaches it only as a USB/UVC device or via HDMI-capture-plus-a-host-that-isn't-an-iPad. You would spend camera money and shoot the same iPad footage.
- **A serious technical warning about the roadmap itself:** CLAUDE.md's Hardware Roadmap lists "Canon EOS M50 Mark II via `gphoto2`." `gphoto2` is fundamentally a **stills/tethered-capture** protocol. It is a good answer for the photo strip (a Premium-only feature). It is a *poor and fragile* answer for live preview and 60-second video recording — that path means `--capture-movie` piped into a `v4l2loopback` device, which is laggy, brittle, and a known source of dropped frames. **Video is grao's core feature on both plans.** So the flagship camera purchase, as currently specced, best serves a secondary Premium feature and worst serves the primary one. That needs resolving on paper before any camera is bought, and it is an amendment CLAUDE.md's Hardware Roadmap should carry (logged below as a follow-up, not made unilaterally here).
- **Printing:** the Selphy is genuinely needed *eventually* — issue #1's portrait fix is still unconfirmed on a real print. But you do not buy a printer to test a bug. Export the 1200×2400 strip and have it printed at a photo shop at 10×15cm for a couple of euros. Buy the printer when print-on-site is actually sold to a client.

### Where Track A's "zero software" claim has one crack — flag before purchase

Adding an external mic (and any external camera) to an iPad is *usually* plug-and-play, but not guaranteed to be zero-code:

- iOS may or may not route a USB/Lightning audio device as the default input for `getUserMedia` in Safari, and Safari does not expose a device picker the way Chrome does. If the default isn't the external mic, the booth will happily record 60 seconds of the iPad's built-in mic in a noisy room and nobody will know until after the wedding — **exactly the silent-failure class CLAUDE.md treats as worst-case.**
- External USB cameras on iPad require a USB-C iPad on a recent iPadOS; an older/Lightning iPad closes that door entirely.

**Action, and it costs €0: before authorising any mic purchase, have [developer] run a device test — plug in whatever USB-C audio input is at hand, load the booth in Safari on the actual kiosk iPad, record 15 seconds, and confirm from the file which mic was captured.** If Safari doesn't default to it, the fix is small (an `enumerateDevices`/`deviceId` constraint plus an operator-facing device confirmation) and is a natural first tenant of the future admin/config layer — but it must be known *before* money is committed, not after.

> **Superseded in part — see Addendum 2 (2026-07-31), §2.2–2.3.** The external-camera-on-iPad question is now resolved (it works, USB-C iPads only). The proposed `deviceId`-constraint fix for the mic is **withdrawn**: on iPadOS, audio input is an OS-controlled route that is not programmatically selectable. The replacement mitigation is a live input-level meter. The device test itself is downgraded from a pre-purchase blocker to a pre-event check on the unit actually bought.

### The cost of doing nothing

Weighing this honestly, as instructed, rather than defaulting to "wait":

Showing up to the next paid booking with a visibly improvised rig has three real costs — the client's perception at the moment they're deciding whether to recommend grao, the reusable marketing asset (photos of the booth in situ are the single most important sales asset a wedding vendor has, and marketer cannot promote a rig that photographs badly), and, most concretely, **unusable audio is unrecoverable**. A grainy video is a mediocre keepsake; a video where the DJ drowns out a grandmother's message is a refund conversation. Track A spend is low-hundreds of euros against a 349–599€ ticket — it pays back inside one booking and is not stranded if grao stops tomorrow (a light, a mic and a stand resell or repurpose). Track B is thousands, stranded on unbuilt software, against a business with one completed event.

That asymmetry is the whole argument. **Buy the cheap, reversible, immediately-usable things. Don't buy the expensive, irreversible, software-blocked things.**

---

## 2. The quality bar: what "doesn't look amateur" actually decomposes into

Requirements framing only — [procurement] picks products against this.

Ranked by leverage-per-euro, which is **deliberately the reverse of the founder's instinct.** The ask was "a camera+mic that holds up in low light." The single most effective answer to low light is not a sensor — it is **adding light**. A large-sensor camera is the expensive way to solve a problem a controlled key light solves for a fraction of the cost, and the camera route is the one blocked on Track B.

### 2.1 Lighting (highest leverage, lowest cost, most overlooked)

- **Requirement:** a continuous, soft, dimmable, front-ish key light on the guest's face that is *independent of the venue's lighting*, with high colour accuracy (skin tones must not go green/magenta) and adjustable colour temperature so it blends with warm venue ambience rather than fighting it. Battery operation preferred for venue-flexible placement.
- **Failure modes at a real wedding:** the venue dims for dinner and the booth footage falls apart; coloured DJ uplighting turns faces purple; a bare hard light source produces harsh shadows and shine that read instantly as "webcam under a lamp"; the light is too bright and blinds guests or blows out faces.
- **The failure mode nobody plans for:** the couple's photographer or videographer asks you to turn it off, because your light is spilling into their frame. This is common and it happens at the worst moment. Requirement: tight control of spill (dimmable, directional, physically low-profile), and an operator briefed to coordinate with the venue's other AV vendors at load-in.
- **Brand constraint, not a technical one:** it must not look like a film set parked in the corner of a wedding. A naked light on a black tripod is itself an amateur tell. Integration into the booth's presentation is a requirement, not a finish.
- **Note for the photo strip:** B&W output is forgiving of white balance but *unforgiving of noise*. Light helps the strip more than it helps colour video.

### 2.2 Audio (probably the actual make-or-break; where the founder should over-invest relative to instinct)

Video is the core deliverable on both plans, and the deliverable is **speech**. Bad audio cannot be fixed after the event — denoising a 60-second emotional message destroys the voice along with the noise. Bad video is watchable; bad audio is not.

- **The dominant variable is microphone-to-mouth distance, not microphone price.** Halving the distance beats almost any upgrade in capsule quality. This is the requirement that should drive the physical design: a mic at a *fixed, known, close* distance to where the guest's head will be.
- **Therefore:** favour a fixed-position directional mic (gooseneck/boom mounted to the booth structure at head height) over anything guests must hold, wear, or clip on. Handheld/worn mics introduce handling noise, inconsistent levels, fumbling, hygiene, and one more thing the operator resets between guests.
- **Requirements:** directional pickup (cardioid/supercardioid class) oriented at the guest and rejecting the room behind it; sufficient clean gain without hiss; consistent, repeatable placement so levels are predictable across 100 guests; physical isolation from knocks and from vibration transmitted through the booth structure.
- **Failure modes:** DJ bass and music masking speech; hard-surfaced Portuguese quinta halls producing heavy reverb (a "far away in a bathroom" sound, which is a *reflection* problem no mic solves on its own); quiet or emotional guests speaking below the noise floor; two people recording together at different distances; outdoor wind.
- **The reverb point matters more than it sounds:** it argues that acoustic treatment (soft surfaces near the guest, a partial physical barrier between the guest and the direct sound path from the speakers) is part of the *audio* requirement — which is the same problem as the enclosure in §3, and is literally the productised +200€ soundproof cabin add-on. **Audio quality, enclosure design, and a paid add-on are one problem, not three.**
- **Acceptance criterion, set before buying:** speech remains clearly intelligible with reception-volume music playing from a speaker ~4m away. Test this, don't assume it.

### 2.3 Framing and stability

- **Requirement:** a rigid support that holds a fixed, level, repeatable framing at roughly standing eye height, that also works for seated guests and children; heavily over-rated for the payload it carries; markable/lockable so the operator can restore exact framing after a knock; with a footprint and weighting that survives a crowded room and a dancefloor crowd late in the night; and full strain relief on every cable.
- **Failure modes:** the tilted-horizon, low-angle "propped on a table" look; heads cropped at the top of frame; framing drifting between guests so the post-event compilation looks incoherent (this directly degrades the Premium edited-compilation deliverable); the whole thing knocked over at 1am.
- **Consistency is the professional tell here.** Amateur setups produce 100 clips framed 100 slightly different ways. A locked-off, identical frame across every guest is what makes the compilation look directed.

### 2.4 Camera / sensor (real, but last in leverage — and largely Track B)

- **What actually matters:** sensor area and lens aperture determine the noise floor; megapixels are irrelevant. Equally important and usually forgotten: the ability to **lock** exposure, white balance and focus so the image doesn't pump and hunt as people walk past — auto-everything drifting mid-message is a strong amateur tell. Plus flicker/banding immunity under LED and disco lighting.
- **Honest warning for the iPad path:** a cheap USB webcam is very often *worse* in low light than the iPad's own camera — small sensor, aggressive noise reduction, smeary output. "Buy an external camera" is not automatically an upgrade. If Track A includes any camera at all, it must clear a measurably-better-than-the-iPad bar in a dim room, tested before purchase. Otherwise the honest answer is: keep the iPad camera, and spend the money on light.

### 2.5 The amateur-tell checklist (use as a pre-event review, costs nothing)

Visible gaffer tape and loose cabling; power bricks on the floor; a consumer tripod with a visible clamp; a bare light on a stand; mismatched black plastics; the iPad showing Safari chrome, a URL bar, a status bar or a notification; anything that wobbles when touched; a printed A4 sign; and the grao-specific one — **the booth reading as generic party-rental equipment rather than as something coordinated with the couple's decor.** Wedding guests judge on decor coherence, not spec sheets.

### 2.6 The acceptance test, defined before any purchase

A dress rehearsal in deliberately worst-realistic conditions: a dim room, music at reception volume from ~4m, a guest speaking normally at the booth position. Review the result on a phone *and* on a TV. Pass/fail criteria written down in advance. This test is also how you decide whether a proposed purchase is actually needed, rather than buying and hoping.

---

## 3. Booth enclosure: buy vs. DIY vs. neither

### Pressure-testing the specced DIY (Motedis 40×40 aluminium + 5mm matte black Forex)

Genuine strengths, and they are not small: exact dimensional fit around whatever hardware ends up inside; a matte-black modular surface that suits the black/white/gold design system far better than most commercial shells; per-client rebranding by swapping a printed panel (which serves the Premium custom-branding tier); repairable; no competitor's logo on it; and materially cheaper than a bought shell on parts alone.

**But the decisive objection is sequencing, and it applies to bought shells equally: an enclosure is a container whose dimensions are defined by contents that have not been chosen or validated.** Screen size, camera body and lens depth, printer footprint, Pi and cabling, battery, mic reach — all Track B, all unbuilt, and §1 just raised a live question about whether the specced camera is even the right one for grao's primary feature. **Cutting aluminium to length now is choosing the box before the contents.** Built today, it wraps an iPad and is an expensive way to hold a tablet.

Three further costs that are consistently under-modelled and are *recurring*, not one-off:

- **Transport.** Does an assembled or flat-packed aluminium booth fit in the founder's car? An aluminium-and-panel booth is heavy. Open question.
- **Load-in and teardown.** Setup time at the venue eats operator hours and must fit the venue's load-in window — and Portuguese quintas and historic venues have stairs, gravel, narrow doors, and no lift. A one-person carry is a hard requirement, and it constrains the design before aesthetics do.
- **Storage, damage, insurance** between events.

And the DIY route rests on an assumption nobody has stated: **fabrication skill, tools, and workspace.** Motedis cuts profiles to length, which removes the hardest step — but drilling, tapping, panel cutting, cable management and *finish quality* remain, and this is the trap: **a badly-executed DIY booth looks decisively more amateur than a decent bought one.** The failure mode of DIY is not "it costs more than expected," it is "it looks handmade," which is the exact risk this whole exercise exists to remove. **Flagging explicitly as an open question for the founder, not an assumption: what fabrication experience, tools and workspace actually exist, and how many weekends are genuinely available before the next booking?**

### Pressure-testing the bought shell

Most commercial photo-booth shells are built for a different product (DSLR + ring light + dye-sub printer, "party" aesthetic — mirror booths, LED trim, chrome, white gloss). That aesthetic actively fights grao's boutique/elegant positioning, and many cannot be rebranded per client, which undercuts a Premium selling point. Speed and predictable finish are the real arguments in their favour. Worth [procurement] checking, as a question rather than a foregone conclusion: does an EU-available, brand-neutral matte shell exist that accepts grao's monogram, ships in time, and doesn't cost more than DIY materials plus honestly-valued founder time?

### Recommendation: neither, yet — build a "styled presentation layer" instead

The third option that isn't on the founder's list, and the one I'd actually pursue: **skip the enclosure entirely for now and spend a small amount on presentation.** A well-chosen pedestal/plinth or elegant stand, a backdrop or drape, brand-consistent signage, and ruthless cable and power discipline — in the black/white/gold system — gets most of the perceived-quality jump at a fraction of the cost and time, works with the iPad rig *today*, and is not invalidated by any later Track B decision.

Two supporting arguments. First, at weddings **perceived quality is dominated by whether the setup looks intentional and coordinated with the room**, not by whether it is a monolithic box — a tasteful small object on a plinth reads as more premium than a big generic kiosk, which is precisely the positioning several high-end video/audio-guestbook vendors have chosen deliberately. Worth asking [marketer] to confirm against the Portuguese market rather than taking my word for it. Second, an enclosure is the *only* item here that is essentially unusable if grao's format changes — and with one completed event, the format is not yet fixed.

Deferring also lets the enclosure absorb the §2.2 finding when it is finally built: designed around acoustics from the start (guest-adjacent soft surfaces, a partial barrier blocking the direct sound path from the speakers), it stops being just a box and becomes the physical substrate of the +200€ soundproof cabin add-on — a revenue line, not just a cost line. That is a better enclosure than one built now around an undecided camera.

---

## 4. Devil's-advocate take

### The premise is doing unexamined work: is there a confirmed next booking?

"The next booking" appears throughout this brief, and nothing in the repo evidences it. **Before any spend: is there a signed second booking, with a date?**

If no, this is capex for a hypothetical client, and the correct action is to spend the money on getting a second booking instead of on equipment for one. If yes, then **its date, plan tier, and venue drive every single specification here** and the shopping list should be written against that specific event, not against "a wedding." Note especially: **Basic (349€) includes neither photo strip nor boomerang** — a Basic booking needs no printer, and its entire quality burden is video and audio. Half of Track B is irrelevant to a Basic event.

### The €0 step that should happen before any euro is spent

**Review the actual footage from João & Constança's wedding.** It is free evidence sitting on a disk right now, and it will say precisely which of §2's four dimensions actually failed — whether the real problem was audio, light, framing, or sensor. Every purchase decision below gets sharper, and probably cheaper, after an hour of watching those files with §2 as a scoring sheet.

This also tests whether "looks amateur" is *signal or anxiety*. Did a guest, client, or the venue's photographer actually comment? Was the footage reviewed and found wanting? Or is this the founder's own discomfort, which is real but is not the same evidence and does not justify the same spend. **Buying hardware to resolve founder anxiety is the most expensive available form of reassurance.**

Two related gaps worth naming: STATUS.md shows we have not confirmed the *software* worked end-to-end on-device (boomerang export unverified on real Safari, portrait strip unverified on a real print). Spending on hardware while unable to confirm the existing capture pipeline produces good files at all is investing in the wrong layer. And the +200€ soundproof cabin has never been sold or built — **do not build an enclosure to fulfil an add-on nobody has purchased.**

### The instrument the founder hasn't considered: rent before buying

Renting a camera, lens, or lighting kit for the next event is cheap in Lisbon/Porto and converts an irreversible capex bet into a per-event opex test. This is the right way to answer "does a proper camera actually change what the client perceives?" without committing thousands to a body whose integration path is unbuilt and, per §1, possibly mis-specced for grao's primary feature. If a rental at one event visibly changes the output and the client reaction, that is real evidence to buy on. If it doesn't, you saved thousands. **Strongly recommended specifically for Track B.**

### The financial frame

At 349–599€ per event, hardware amortises over bookings. A low-hundreds Track A kit pays back inside one booking and is reversible/resellable. A full Track B plus enclosure build runs into the thousands, needs high-single-digit events just to break even before travel, consumables and time, and permanently raises the fixed cost of *being in this business* — before there is evidence the business books repeatably. That is the definition of scaling execution ahead of evidence.

### Smallest justified purchase that removes the "looks amateur" risk at the next booking

1. **€0 first:** review J&C footage against §2; confirm the next booking exists, with tier and venue; have [developer] run the Safari external-mic device test (§1).
2. **Buy (Track A, scoped):** a rigid, repeatable-framing support; one soft, dimmable, high-CRI light; one directional mic mountable at a fixed close distance; a cable-and-finish discipline kit (matte sleeving, weights, tape, power management); and a styled presentation layer (plinth/backdrop/signage) in the brand palette. Procurement to price against the constraints in §5.
3. **Do not buy now:** Pi 5, touchscreen, dedicated mirrorless camera, Selphy (unless print-on-site is actually sold for the next event), Motedis frame and panels, large battery station, hotspot. Revisit each against its own trigger below.
4. **Venue-dependent exception:** if the next venue is outdoors or power-limited, modest portable power and long-run cabling move into Track A on necessity, not ambition.

---

## 5. Brief for [procurement]

Source against §2's requirements, not against product categories, and return options with tradeoffs rather than a single pick. Hard constraints to respect:

- Must work with the **existing iPad rig, today**, with no new software (subject to the §1 device test).
- Must be **transportable and set up by one person**, in the founder's car, including stairs and gravel.
- Must be **matte black / neutral** and consistent with the black/white/gold design system — no visible branding, no chrome, no gloss, no coloured LEDs.
- Must be **available in Portugal in time for the next booking's date** (which needs confirming first).
- Budget ceiling to be set by the founder before sourcing begins.
- Include a rental-vs-buy line for anything above the founder's ceiling, per §4.

---

## Trigger to revisit (deferred items)

- **Track B (Pi 5, dedicated camera, Selphy/CUPS, touchscreen, power, hotspot):** revisit when (a) CLAUDE.md priorities #1–#4 are genuinely closed, including on-device confirmation, **and** (b) at least one of — a rental test at a real event demonstrated a visible client-perceived quality gain; print-on-site was actually sold; or booking volume makes the iPad rig the binding constraint. The `gphoto2`-for-video question in §1 must be resolved on paper first.
- **Track C (enclosure, DIY or bought):** revisit when Track B's contents are decided and validated, so the box is designed around known dimensions — **and** when the founder's fabrication capacity is an answered question rather than an assumption. Bring it forward early only if the soundproof cabin add-on is actually sold, in which case design it acoustics-first.
- **Any camera purchase:** gated on the §2.4 bar (measurably better than the iPad in a dim room, verified before purchase) and on resolving the stills-vs-video integration question.

## Addendum: Canon EOS 600D (founder-owned) feasibility research — 2026-07-31

**Question:** the founder already owns a Canon EOS 600D ("Rebel T3i," 2011 APS-C DSLR). Can it substitute for the priced Track B camera options (Obsbot Tiny 2 €369, Canon EOS M50 Mark II ~€650–800) instead of buying either? Researched (not guessed) against two distinct integration paths, per founder request, since a wrong answer here risks sending money at a capture card or cable that doesn't actually work.

### Path 1 — gphoto2 tethering

- **Stills:** the 600D is a mature, well-supported gphoto2 body. Not in question, and would be a genuinely good, free option for the Premium-only photo strip if/when Track B is ever built.
- **Video/live view is the problem.** The only thing `gphoto2 --capture-movie` gives on a body of this generation is an MJPEG live-preview-frame grab — not real recorded video. Real-world reports across this camera generation (600D/650D/1100D) describe ~0.5–5s lag and inconsistent, low frame rates (roughly 4–25fps depending on pipeline), described as "stuttery." That's unusable both as a live guest-facing preview and as the source for a 60-second recorded keepsake message.
- gphoto2 does have a proper "trigger the camera's own onboard recording to SD card" mechanism (`--set-config movierecordtarget=Card`), documented by the gphoto2 project as available on Canon DSLRs from roughly the "7D and later" generation. The 600D (2011) postdates the 7D (2009) and shares its era's menu/firmware lineage, so it's *plausible* the 600D exposes this config — but I found no source explicitly confirming `movierecordtarget` is present in the 600D's specific libgphoto2 camera driver, and this is a per-model driver detail, not a strict release-date rule. **Unverified — must be checked with a €0 test (`gphoto2 --list-config` with the camera connected) before this path is treated as viable, not assumed from the "7D and later" generation claim.**
- Even in the best case, this path means: no live self-view during recording (or a separate, laggy MJPEG feed if one is wanted), record N seconds onto the SD card, then pull the file off with `--wait-event-and-download`. That's real added latency and complexity per guest, and it's a bigger software lift than the current roadmap assumes — consistent with, not a rebuttal of, the architect's existing flag (in the Decision log below) that gphoto2 is a poor fit for grao's both-plans video feature.
- **Verdict, Path 1:** does not solve the problem the architect already flagged for the M50 II — if anything it's a worse candidate for it, since the 600D is an older generation with no confirmed native movie-record support in gphoto2, and (see Path 2) no clean HDMI fallback either. Fine for photo-strip-only tethering; does not fix live video.

### Path 2 — HDMI-out + USB capture card as a plain UVC webcam (no gphoto2/backend involved)

- **Clean feed on stock firmware: no.** Canon has historically restricted clean/overlay-free HDMI output to specific bodies (later DSLRs from roughly the 5D Mark III era onward, and specific mirrorless bodies — notably the EOS M50 Mark II *is* confirmed clean-HDMI-capable per a dedicated tracking source). The 600D/T3i is not on that list; stock HDMI-out in live view carries shooting info and AF-box overlays. **Getting a clean feed requires Magic Lantern, unofficial third-party firmware.** Flagging this exactly as scoped: running unofficial firmware as the one dependency for the guest-facing video-capture path is a real, non-hypothetical reliability risk for equipment expected to run unattended at someone's wedding — a crash or quirky behavior here is a silent-failure risk class, not a cosmetic one.
- **The single most important fact in this whole question — Safari/iPadOS support for external UVC devices:** iPadOS 17+ added OS-level UVC support (external webcams/capture cards can be recognized system-wide on **USB-C iPads only** — Lightning iPads cannot do this at all, full stop). But every confirmed source found describes **native apps** (FaceTime, dedicated capture-card apps built on AVFoundation) explicitly adopting a new API — Apple's own WWDC session on this is literally titled "Support external cameras in your iPadOS app," which implies deliberate per-app adoption rather than something every camera consumer, including WebKit/Safari's `getUserMedia`, automatically inherits. **I found no source — Apple documentation, WebKit bug tracker, or developer/forum test report — that confirms or denies whether Safari's `getUserMedia`/`enumerateDevices` actually surfaces a UVC capture card as a selectable camera on iPadOS.** This is exactly the class of "genuinely new Safari/iOS API behavior not confident about" that should be tested, not guessed through, before any purchase. **Do not buy a capture card on the assumption this works in Safari — verify it on-device first**, and confirm the actual kiosk iPad has USB-C (a Lightning iPad closes this path entirely, independent of everything else).

  > **CORRECTED by Addendum 2 (2026-07-31), §2.1 — this paragraph is superseded.** A first-party source does exist and was found: WebKit's own Safari 17 release notes state external USB cameras are included in `enumerateDevices()` and selectable with `getUserMedia()` on iPadOS 17+. Independently corroborated by a real-world capture-card test on an iPad 10th gen. Safari UVC support is **confirmed working**, not unverified. The USB-C-only constraint stands.

- **All-day reliability:** the 600D has a hard ~30-minute continuous live-view/recording ceiling (thermal protection, shared across most photo-first DSLRs of this era, on top of ordinary auto-power-off). A Canon ACK-E8-compatible dummy-battery + AC adapter kit is cheap (~€15–25 on the aftermarket) and solves battery-swapping for a multi-hour event, but it does **not** remove the 30-minute live-view ceiling. Used as an always-on UVC webcam feed at a reception, the feed would need manual waking (half-press shutter) roughly every 30 minutes — a real recurring operator task, not "set and forget," and the specific failure mode (feed silently freezes, a guest talks to a frozen frame) is exactly the invisible-failure class this project treats as worst-case.

### Image/video quality, independent of integration path

Not in serious doubt: an APS-C sensor from 2011 paired with a real lens (especially a fast prime) has an order of magnitude more sensor area than an iPad's built-in camera or the Obsbot Tiny 2's small sensor, and will produce meaningfully better low-light performance, background separation and skin tones. **But this only pays off if an integration path delivers that sensor's output cleanly** — the gphoto2 MJPEG preview hack (Path 1) is low-res, laggy and heavily compressed enough to plausibly erase most of that advantage, and Path 2's quality is entirely contingent on resolving the clean-HDMI and Safari-UVC unknowns above first. A better sensor with no working delivery path is not a quality upgrade at all — it's a paperweight with a lens mount.

### Final verdict

- **Not usable on the current iPad/Safari rig today**, on either path, without unresolved and materially risky prerequisites (unofficial Magic Lantern firmware for Path 2's clean feed, plus an unverified — not confirmed absent, just unverified — Safari UVC capability that may not exist at all).
- **Not automatically a better fit for the future Pi5/Chromium kiosk either**, unless the gphoto2 `movierecordtarget` question is answered favorably on the bench (untested) for Path 1. Path 2, however, becomes materially lower-risk once/if the Pi5/Chromium-on-Linux kiosk is built: an HDMI capture card is an unambiguous, well-supported UVC device on any desktop-class OS (no iPadOS gate at all), so the *only* remaining risk at that point is the Magic-Lantern-for-clean-HDMI reliability question, which a platform change does not remove.
- **Recommendation: do not pursue this camera on the current iPad/Safari rig.** If it's used at all, defer it to the Pi5/Chromium rebuild (Track B), and only via **Path 2** (HDMI capture card as a plain UVC webcam), not Path 1 (gphoto2). Path 2 keeps `index.html`'s existing `getUserMedia`-based capture code completely unchanged on a Pi5/Chromium kiosk — it only swaps the video source — rather than building the fragile gphoto2 movie-capture bridge the architect already flagged as a poor fit for the both-plans video feature. Treat Magic Lantern's clean-HDMI reliability as its own go/no-go gate: bench-test it unattended for several hours before ever taking this rig to a real event. If it proves unreliable, use the 600D for stills/photo-strip tethering only (a genuine gphoto2 strength) and leave its live-view/video path unused.
- **Do not buy a capture card or HDMI cable yet.** Two €0 tests should happen first, cheapest/most-decisive first: (1) confirm whether Safari on the actual iPad model in service can even enumerate a UVC capture card via `getUserMedia` — this alone decides whether Path 2 is relevant to the *current* rig at all or is Pi5-only, and only needs a borrowed/cheap capture card to test; (2) if pursuing the Pi5 path regardless, bench-test Magic Lantern's clean-HDMI-out for reliability before relying on it at a live event.

  > **Partially superseded by Addendum 2, §2.1 and §2.6.** Test (1) is no longer needed — the answer is documented and confirmed (Safari does enumerate UVC devices, USB-C iPads only). The *conclusion* "do not buy a capture card" **stands**, but on economic grounds (any camera-upgrade euro belongs to the Pi5 target, and the 600D still needs Magic Lantern) rather than compatibility grounds. Test (2) is unchanged and still required if this camera is ever used. A new €0 item replaces test (1): confirm whether the kiosk iPad is USB-C or Lightning.

- **This does not change the existing Track B recommendation above (do not buy Track B hardware now).** It adds the 600D as a free candidate to slot into Path 2's camera role whenever Track B is actually greenlit, ahead of spending on the Obsbot Tiny 2 or M50 II for that role — the 600D + a capture card would likely be a stronger, cheaper sensor once/if Track B's software prerequisites are actually built and validated.

## Addendum 2: "If we need an external camera at all, skip the iPad and go straight to Pi5" — founder challenge, evaluated — 2026-07-31

**The founder's argument, stated fairly:** the iPad was chosen because camera + mic + screen are integrated in one device — no cabling, no drivers, it just works. The 600D research (Addendum 1) showed every external-camera path is either bad (gphoto2) or of unconfirmed Safari compatibility (capture-card-as-UVC). Therefore the integration premise is already broken; therefore don't bolt peripherals onto an iPad that was never designed for them — go straight to the Pi5 + monitor target CLAUDE.md already specs, which has mature UVC drivers and runs Chromium.

**Verdict: the founder's spending rule is right; the technical premise it rests on is wrong.** Right answer, wrong reason — and the wrong reason matters, because acting on it would have retired the iPad rig prematurely.

### 2.1 The load-bearing factual correction: Safari on iPadOS *does* support external UVC cameras

Addendum 1 recorded this as "unverified — no source found either way." That was too pessimistic; a first-party source exists and was found on a direct search of WebKit's own release notes.

- **WebKit, "News from WWDC23: WebKit Features in Safari 17 beta," verbatim:** *"WebKit now supports USB cameras on iPadOS 17. When a USB camera is attached to an iPad, it's included in the output of `enumerateDevices()` and is selectable with `getUserMedia()` along with the built-in cameras."* (https://webkit.org/blog/14205/news-from-wwdc23-webkit-features-in-safari-17-beta/)
- **Independently corroborated by a real-world test of exactly grao's use case:** a USB-C **video capture device** on an iPad (10th gen), iPadOS 17, tested against the standard WebRTC `getUserMedia` device-selection sample in Safari. The capture card appeared as a selectable `"USB Video"` source, its audio channel as `"USB Digital Audio"`, and the feed rendered (colour bars, with no HDMI source attached). (https://qiita.com/youtoy/items/40f4c1b9b996d91aff3e)

So WebKit did adopt external cameras at the web-API level; this is not a native-app-only capability, and it is three years old, not new. **Hard constraint that survives: USB-C iPads only. A Lightning iPad cannot do this at all, full stop.** Confirming the kiosk iPad's connector is now the single most load-bearing €0 fact outstanding in this whole document.

**Correcting the record:** Addendum 1's "unverified Safari UVC support," and procurement's B.3 row repeating it, are both superseded. The founder's premise that external-camera-on-iPad has "unconfirmed compatibility" is no longer true.

### 2.2 The asymmetry the founder should have been asked about: USB audio vs. USB video on iPadOS

The question was whether external USB *audio* is meaningfully more mature/native on iPadOS than external USB *video*. **Yes — the asymmetry is real, it is large, and it runs in the direction assumed** (audio is older and more native). But it does **not** produce the founder's conclusion, because the video side turned out to work anyway.

| | External USB **audio** (mic) | External USB **video** (UVC camera) |
|---|---|---|
| Supported since | iOS ~4 era via the iPad Camera Connection Kit; Lightning-to-USB adapters documented back to iOS 8/9. Roughly 15 years old. | iPadOS 17 (2023). Three years old. |
| Mechanism | **System audio route.** iOS handles UAC1/UAC2 class-compliant devices at the Core Audio / `AVAudioSession` level. Any app that asks for "the microphone" — including Safari's `getUserMedia` — gets whatever route the OS has selected. **No per-app or per-browser adoption required.** | **A capture API.** Required deliberate adoption by each camera consumer; WebKit did adopt it (§2.1), but that was a choice, not automatic inheritance. |
| Connector | Works on **Lightning and USB-C** iPads. (Lightning needs the *powered* Lightning-to-USB 3 Camera Adapter, not the cheap non-powered one.) | **USB-C iPads only.** No Lightning path exists. |
| Can grao's code choose the device? | **No.** See §2.3 — this is worse than the plan assumed. | **Yes.** WebKit explicitly states external cameras are "selectable with `getUserMedia()`" — i.e. `deviceId` selection works for video. |

**The practical consequence, and it inverts §1's assumption:** on iPadOS, *video* device selection is programmatically controllable and *audio* device selection is not. §1 and procurement's A.3 both assumed the opposite — that a mic problem would be fixable with "a small `enumerateDevices`/`deviceId` constraint." **That mitigation is unlikely to work on iOS and is withdrawn from the plan.**

### 2.3 The real mic risk is not compatibility — it is the silent-fallback failure mode

The mic will almost certainly *work*. The danger is what happens when it doesn't, and here iOS is actively hostile:

- **iOS routes audio to the most recently connected USB input and gives apps no reliable programmatic override.** Apple's own developer forums document `setPreferredInput()` failing to override this with multiple USB mics attached; the sanctioned iOS 26 answer, `AVInputPickerInteraction`, is a *user-facing picker*, not automatic selection. A web page has strictly less control than the native app in that thread. (https://developer.apple.com/forums/thread/791869)
- **A non-class-compliant USB device is ignored silently** — no error, no notification, iOS simply keeps using the built-in mic. Verify UAC1/UAC2 class compliance *before* purchase; MFi certification does **not** imply it.
- The concrete failure mode is therefore: cable knocked out, hub browns out, or a non-compliant mic plugged in → **iOS silently falls back to the built-in mic and the booth records 60 seconds of room noise with no error surfaced.** This is exactly CLAUDE.md's designated worst case, and no `deviceId` constraint can defend against it.

**Corrected mitigation — the right fix is a UI affordance, not a constraint:** a **live input-level meter on the recording screen** (Web Audio `AnalyserNode` on the same `MediaStream`; fully supported in Safari, no new dependency, no new file). The operator sees the bar move when a guest speaks, and a dead bar is visible *before* the guest walks away. Optionally also read `track.getSettings()` / `track.label` after `getUserMedia` and show the active input name in an operator-visible corner. **This is a small dev item and should be built only if and when a mic is actually bought** — it is not a reason to move anything up the queue.

**Missing procurement line item this exposes:** a USB-C iPad has **one port**. A USB mic occupies it, so the iPad cannot charge during an all-day event. A mic purchase therefore silently requires a **powered USB-C hub with PD passthrough** (~€25–40), and that hub then becomes a link in the silent-fallback chain above. Track A's ~€195–235 subtotal is missing this. Flagged for [procurement].

### 2.4 Where the founder is right, and where the reasoning over-generalises

**The missing nuance:** the founder generalised from *"this specific 15-year-old DSLR is awkward to attach to an iPad"* to *"the iPad platform can't take external cameras."* Those are different claims, and the second is false. Decomposing Addendum 1's blockers by whose fault each actually is:

| Blocker | Is it the iPad's fault? | Does moving to Pi5 fix it? |
|---|---|---|
| gphoto2 video is a laggy MJPEG hack on this camera generation | No — gphoto2's and the 600D's | **No.** Identical on Linux. |
| 600D needs Magic Lantern (unofficial firmware) for a clean HDMI feed | No — the 600D's | **No.** The limitation travels with the camera. |
| 600D's ~30-min live-view thermal ceiling | No — the 600D's | **No.** |
| "Safari UVC support unconfirmed" | **Was** the iPad's — now retired, it works | Moot. |
| Lightning iPad cannot take a UVC camera at all | Yes | Yes — but so would buying a USB-C iPad |

**Only one of the five blockers was ever the platform's, and it has now been retired. Three of the four remaining are the 600D's own, and the Pi5 fixes none of them.** That is the core error in the argument: it treats a bad-camera problem as a bad-platform problem, and then buys a new platform to solve it.

**Where the founder is nonetheless right, on economics rather than compatibility:** if a real external-camera investment is ever justified, spending it on an iPad-only intermediate rig (capture card + powered hub + Magic Lantern risk) sinks money into a platform you intend to abandon, plus a wedding-day reliability risk, to reach a way-station. **The rule "camera-upgrade euros go toward the Pi5 target, not an iPad workaround" stands and should be adopted as policy.** It simply isn't triggered by anything yet.

### 2.5 The reframe: three configurations, and a decision that doesn't need making yet

The axis the founder proposed — "incrementally upgrade the iPad" vs. "go straight to Pi5" — is not the real axis. The real axis is **what is the video source**, and there are three configurations, not two:

| Config | Video source | Status | Blocked on |
|---|---|---|---|
| **1. iPad, built-in camera + external mic** | iPad camera | **Viable today.** Confirmed platform support on both legs. | Nothing. This is Track A exactly as originally scoped. |
| **2. iPad + external UVC camera (webcam or capture card) + mic** | UVC device | **Technically viable** on a USB-C iPad (§2.1), but needs a powered hub, and for the 600D specifically, Magic Lantern — which I would still refuse for wedding-day use. Also not zero-code (below). | Nothing technical. Blocked on *justification*. |
| **3. Pi5 + monitor + UVC camera + mic** | UVC device | The roadmap target. Mature drivers, real device selection, no iPadOS gates. | CLAUDE.md priority #5. Real capex. Unbuilt software. |

**Code fact relevant to config 2, so nobody assumes it is plug-and-play:** all four `getUserMedia` call sites in `index.html` (lines 568, 704, 726, 1106) request `video: { facingMode: 'user', ... }`. An external UVC camera has no `facingMode`, so Safari will score it poorly against that preference and almost certainly hand back the built-in front camera instead. **Config 2 requires code changes** — relaxing `facingMode` and selecting explicitly by `deviceId` (which, per §2.2, *does* work for video on iPadOS). Small, but real, and it is precisely the kind of per-event setting that belongs in the priority-#4 config layer rather than being hardcoded a fifth time.

**Track A stays coherent either way, and that is the point.** Config 1 is Track A untouched. And critically, **Track A's spend is not contingent on which configuration eventually wins:**

| Track A item | Reusable on the Pi5 path? | Notes |
|---|---|---|
| **Light** | **100%** | Photons do not care what is recording them. Zero stranding risk. |
| **Mic** (Maono AU-GM10 class) | **100%, arguably better there** | Already CLAUDE.md's named roadmap mic. Linux/ALSA has mature UAC support *and* real device selection, which iPadOS denies (§2.2). Zero stranding risk. |
| **Tripod** (Manfrotto Befree class, 4kg payload) | **~90%** | A 1/4"-20 thread is indifferent to whether an iPad (~0.5kg) or a 600D + lens (~1kg) is on it. It will *not* carry a 15.6" monitor + Pi as a kiosk stand — that is a plinth job — but on the Pi5 path the camera is still a separately mounted object, so the tripod keeps a role. Residual risk: a fully integrated enclosure could eventually absorb the camera mount and strand it. ~€120 at risk in the worst case; acceptable. |
| **Styled presentation layer** (plinth, backdrop, signage, cable discipline) | **100%** | Deliberately chosen in §3 for exactly this property. |

**So the direct answer to "what is safe to buy no matter how this resolves" is: everything currently on the Track A list.** Nothing in it was ever contingent on the iPad-vs-Pi5 question. The founder's insight puts no Track A euro at risk. The item that *would* be contingent — a capture card — was never on the Track A list and should stay off it.

### 2.6 Updated recommendation

**Does this change near-term spend? No. It removes a phantom blocker, adds one missing accessory, adds one explicit no-buy, and corrects one planned software mitigation.**

1. **Track A shopping list: unchanged** — tripod, light, mic, styled presentation layer. All confirmed reusable on any path (§2.5). Still gated on the same €0 evidence steps; above all, **review the J&C footage before buying anything.**
2. **Add to Track A if a mic is bought:** a powered USB-C hub with PD passthrough (~€25–40), plus explicit verification of UAC1/UAC2 class compliance on whichever mic is chosen. Both are new hard requirements from §2.3, not nice-to-haves.
3. **Explicit no-buy, adopting the founder's rule:** **do not buy an HDMI capture card to bolt onto the iPad.** Note carefully that this is *not* because it wouldn't work — §2.1 shows a capture card is precisely what was tested working on iPad Safari. It is because (a) the 600D cannot feed it a clean signal without unofficial firmware, and (b) any genuine camera-upgrade euro belongs to the Pi5 target, not an intermediate rig. Same conclusion as Addendum 1, sounder reasoning.
4. **Withdraw the planned `deviceId`-constraint mic fix** from §1 and procurement's A.3; replace with the live input-level meter (§2.3). Build only if a mic is bought.
5. **Downgrade the pre-purchase mic device test** from "blocker before any purchase" to "run on the unit you buy, before the event." Platform support is confirmed; what remains is per-unit behaviour, a ten-minute check.
6. **Promote the connector check to the top €0 item:** is the kiosk iPad USB-C or Lightning? It gates config 2 entirely and changes nothing about config 1. Cost: looking at the iPad.
7. **Still do not buy Track B or Track C.** Unchanged.

### 2.7 Does this change CLAUDE.md's priority ordering? No — and the finding argues against acceleration

Explicitly, since this was asked:

- **The finding *extends* the iPad rig's runway rather than ending it.** The founder's reasoning concluded the iPad had hit a wall; the wall isn't there. A platform with a confirmed upgrade path held in reserve is a reason to **defer** the Pi5 harder, not to bring it forward.
- **Nothing else has moved.** Priority #4 (admin/config) is fully open. #1 is unconfirmed on a real print, #2 unconfirmed on a real device. There is **still no confirmed second booking** — which means this entire external-camera debate concerns a purchase whose *need* has never been established. Per §2, lighting outranks sensor for the actual complaint ("looks amateur in dim venues"), and nobody has yet reviewed the J&C footage to find out which dimension actually failed.
- **This is therefore a clarification, not a re-prioritisation:** *if/when* camera hardware investment is ever justified, go straight to Pi5. That sentence changes no dates and moves nothing up the queue.
- **One genuine follow-up for priority #4, logged not built:** camera `deviceId` selection is now a real per-event setting on both iPadOS and Chromium. When the config layer is designed, the config object should carry the video/audio source selection rather than hardcoding `facingMode: 'user'` a fifth time. That is an argument for building #4 *well*, not for building it sooner.

**Recommended CLAUDE.md amendments (flagged, not made unilaterally — founder to confirm):** (a) record under Coding Conventions / Hardware Roadmap that Safari on iPadOS 17+ supports external UVC cameras via `enumerateDevices()`/`getUserMedia()` on **USB-C iPads only**, and that on iPadOS **video** input is `deviceId`-selectable while **audio** input is not (OS-controlled route, last-connected-wins, no reliable programmatic override, non-class-compliant devices ignored silently); (b) record the "camera-upgrade euros go to the Pi5 target, not an iPad workaround" spending rule. Both exist to stop a future session re-deriving this from scratch or repeating the now-retired "unverified" claim.

## Decision log

- **2026-07-31** — Evaluated (architect-strategy, founder challenge): "if any external camera is needed, the iPad's integration premise is broken — skip to Pi5." **Verdict: right rule, wrong premise.** Research correction — Safari on iPadOS 17+ **does** support external UVC cameras via `enumerateDevices()`/`getUserMedia()` (first-party WebKit release note, corroborated by a real capture-card test on an iPad 10th gen), USB-C iPads only; Addendum 1's "unverified" status is retired. The audio-vs-video asymmetry is real (USB audio is ~15 years old, route-level, works on Lightning too, needs no browser adoption; UVC video is 2023, USB-C-only, needed WebKit adoption) but does not support the founder's conclusion, since both now work in Safari. **It does invert one planned mitigation:** on iPadOS, video is `deviceId`-selectable but audio is *not* (OS route, last-connected-wins, `setPreferredInput` unreliable, non-class-compliant devices ignored silently) — so §1/A.3's "small `deviceId` constraint" mic fix is withdrawn and replaced by a live input-level meter, to be built only if a mic is bought. Four of the five 600D blockers are the *camera's*, not the *platform's*, and the Pi5 fixes none of them. All Track A items confirmed reusable regardless of path (light/mic 100%, tripod ~90%, presentation layer 100%). Net effect on spend: Track A unchanged; **add** a powered USB-C PD hub (~€25–40) and UAC class-compliance verification if a mic is bought; **do not** buy a capture card for the iPad (adopting the founder's spending rule, on economics not compatibility); the connector check (USB-C vs Lightning) is promoted to the top €0 item. **No change to CLAUDE.md priority ordering** — the finding extends the iPad's runway and argues for deferring Pi5 harder, and there is still no confirmed second booking. Two CLAUDE.md amendments flagged for founder confirmation, not made unilaterally. Full detail in Addendum 2.
- **2026-07-31** — Researched (developer, founder request): does the founder's already-owned Canon EOS 600D substitute for a Track B camera purchase? Verdict: not usable on the current iPad/Safari rig on either integration path (gphoto2 video capture is a laggy MJPEG-preview hack on this generation, not real recording; HDMI-capture-card-as-UVC-webcam requires unofficial Magic Lantern firmware for a clean feed *and* has unverified — not confirmed absent, but unverified — Safari/iPadOS `getUserMedia` support for external UVC devices). If used at all, defer to the future Pi5/Chromium rebuild via the HDMI-capture-card path only, not gphoto2. Two €0 tests recommended before any capture-card purchase: Safari UVC enumeration test on the actual kiosk iPad, and a Magic Lantern clean-HDMI bench-reliability test. Does not change the standing recommendation against buying Track B hardware now. Full detail above. *(Partially corrected 2026-07-31 by Addendum 2: the Safari UVC question is now resolved as **supported**, so that €0 test is no longer needed; the "don't buy a capture card" conclusion stands on economic grounds instead.)*
- **2026-07-31** — Proposed (architect-strategy), at founder request, ahead of procurement sourcing. Core conclusion: hardware is three independent tracks, not one decision, and CLAUDE.md's priority-#5 rule constrains hardware-integration *code*, not the purchase of code-free operating equipment. Recommended: proceed with Track A (AV quality of the current iPad rig) scoped small, after a €0 evidence step (review J&C footage; confirm the next booking; developer device test for external mic on Safari). Recommended against Track B (stranded on unbuilt software; produces no better output today) and against Track C now (a container for undecided contents), substituting a low-cost styled presentation layer. Ranked quality leverage as lighting > audio > framing/stability > sensor, deliberately inverting the founder's stated instinct. **Nothing approved to buy — founder's decision.**
- **2026-07-31** — Follow-up flagged, not actioned: CLAUDE.md's Hardware Roadmap line "Canon EOS M50 Mark II via `gphoto2`" needs amending to record that `gphoto2` is a stills/tethering path well-suited to the photo strip but poorly suited to live preview and 60s video recording (which would require `--capture-movie` into `v4l2loopback`). As specced, the flagship camera purchase best serves a secondary Premium feature and worst serves the primary both-plans feature. Not edited unilaterally — raising for the founder to confirm before it becomes a documented architectural decision.
