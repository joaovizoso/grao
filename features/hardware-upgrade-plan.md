# Hardware Plan: Two Complete Booth Options

**Status:** discussing
**Plan tier:** Not a plan feature. Operational capex affecting delivery quality on **both** plans. Two threads touch paid add-ons: acoustic treatment overlaps the soundproof cabin (+200€) add-on, on-site printing overlaps the print-on-site (+100€) add-on.
**Proposed:** 2026-07-31 (architect-strategy, founder-requested)
**Restructured:** 2026-07-31 — this document **replaces** the previous Track A / Track B / Track C + Addendum 1 + Addendum 2 structure, at the founder's direction. The correct findings from those sections are retained below, filed under whichever option they actually inform; the tracks/addenda themselves are gone. Nothing was silently dropped that still bears on a decision — see §7 for what was retired and why.

**This is a framing and decision document. It approves no spend. Product names appear only as evidence that a market category exists (or doesn't); [procurement] does the actual sourcing and pricing pass.**

---

## 0. The reframe, and the requirement that drives it

The founder's position, adopted here as the structure of this document:

> There are exactly two feasible options, and each must be planned as a **complete, coherent system** — not a shopping list of parts that get individually mounted on a stand at the venue.
>
> **The result has to look and feel like an off-the-shelf professional product.** This carries equal weight to the technical spec.

That last requirement is the single most consequential thing in this document, because it changes *how you buy*, not just *what you buy*. A tripod, a light, a mic and a tablet bought separately and assembled correctly still look assembled. Below, the "off-the-shelf" requirement is treated as a hard spec with its own acceptance criteria (§1), and each option is judged on whether that spec is **purchasable** or only **fabricable**.

| | **Option 1 — Integrated iPad booth** | **Option 2 — Dedicated enclosed rig** |
|---|---|---|
| Compute | Existing iPad | Raspberry Pi 5 or mini-PC |
| Camera | iPad built-in (front) | Dedicated UVC camera |
| Mic | iPad built-in | Dedicated fixed-position mic |
| Light | **Ring light built into the shell** | Integrated into the housing |
| Screen | iPad | 15.6" touchscreen |
| Housing | Purpose-built iPad booth shell | One cohesive enclosure |
| Mount | Tripod / column stand | Column stand or plinth, integral to the housing |
| Software needed | **None. Runs today.** | **CLAUDE.md priority #5. Unbuilt.** |

---

## 1. "Looks off-the-shelf, not mounted-together" — as an actual spec

Decomposed, because it's otherwise unbuyable and untestable. Ranked roughly by how strongly each one signals "amateur" to a wedding guest.

1. **One visual mass.** The booth reads as a single object, not a tripod + a tablet + a light + a cable. Guests should not be able to count the components.
2. **Zero visible cables.** Not "tidy cables" — *zero*, at guest eye level. Power runs down the inside of the column or is sleeved and floor-taped behind the object, out of the guest's sightline. This is the most common single tell.
3. **One material, one finish.** Every visible surface the same matte black, same texture. Mismatched plastics (a grey tripod, a white light, a silver iPad edge) destroy the effect faster than any individual component's quality.
4. **The light is *behind a diffuser and inside the object*.** A ring light is only "integrated" if the housing is built around it. A ring light clipped onto a stand next to the iPad is the exact failure the founder is describing. Corollary: **no RGB, no colour-cycling LEDs, no visible LED dots** — white or warm-adjustable, diffused, dimmable only.
5. **No third-party branding.** No manufacturer logos, no Apple logo facing the guest if avoidable, and grao's monogram applied deliberately (vinyl/foil, correctly positioned) rather than a printed sign taped on.
6. **No OS or browser chrome.** iPad shows the booth fullscreen only — no Safari URL bar, no status bar, no notifications, no home indicator visible mid-session. Free to achieve (Guided Access + Add to Home Screen / standalone web-app display), and skipping it undoes several hundred euros of shell.
7. **No visible fasteners, clamps or adjustment knobs.** A tripod's clamp levers and a phone-holder's spring grip are strong amateur signals. Prefer a shell with an internal, hidden mount and a stand whose adjustment hardware is either concealed or absent (fixed-height column).
8. **Intentional footprint and stability.** Nothing wobbles when touched. Splayed black tripod legs read "AV equipment"; a weighted base or a fabric/branded stand skirt reads "furniture." Cheapest high-impact fix in the list.
9. **Repeatable setup.** The same object goes up the same way every time, in minutes, by one person. Improvising the assembly at the venue is how all of the above degrades in practice.

**Sourcing implication — this is the key insight:** items 1–4 (and partly 7) are what a **purpose-built shell buys you**, and are very hard to retrofit onto separately-bought parts. Items 5, 6, 8, 9 are near-free discipline that no purchase provides. So the question "must we custom-fabricate?" is really: *does a purpose-built shell exist that delivers 1–4 in the right aesthetic?* Answered per option below.

**Acceptance test for this spec (costs nothing, do it before an event, not at one):** set the booth up fully, photograph it from a standing guest's eye level and from 3m away, on a phone. If the photo is not something [marketer] would publish as a portfolio image, it fails. That photo is also the single most valuable sales asset a wedding vendor owns, so this test doubles as an output.

---

## 2. Option 1 — Integrated iPad booth

### 2.1 What the complete system consists of

| Element | Spec |
|---|---|
| **Compute + screen** | The existing iPad. Locked into single-app kiosk mode (Guided Access), booth loaded as a standalone fullscreen web app, auto-lock disabled, Do Not Disturb on. |
| **Camera** | iPad built-in front camera. No external camera — per the standing spending rule (§6.1). |
| **Mic** | iPad built-in mic array. No external mic — per the founder's definition of this option. **This is Option 1's single biggest technical risk; see §2.4.** |
| **Light** | Ring light **built into the shell**, encircling the iPad aperture. Requirements: white or bi-colour (~3200–5600K) to blend with warm venue ambience, high CRI, **dimmable**, diffused, and no RGB mode ever enabled. |
| **Housing** | Purpose-built matte-black iPad photo-booth shell, sized to the specific iPad model, with the ring light integral and internal cable routing. |
| **Mount** | Column stand or heavy tripod, ideally supplied with the shell so the joint is designed rather than adapted. Concealed hardware. Weighted base or skirt. |
| **Power** | Single mains run, sleeved, routed inside the column. iPad charges through the shell's internal cable during the event. |
| **Branding** | grao monogram in vinyl/foil on the shell face or column, in the black/white/gold system. |
| **Transport** | Flight case (most shells in this category ship with one). One-person carry, fits in the founder's car. |

Notes on what is deliberately *absent*: no printer, no capture card, no external mic, no hub, no Pi, no battery station. Option 1's value is that it is a **short parts list assembled by a manufacturer**, not by the founder.

### 2.2 Does a real market of pre-made integrated iPad ring-light shells exist? **Yes — this is a mature product category.**

This was worth checking rather than assuming, and the answer changes the recommendation. Purpose-built iPad-booth shells with the ring light **built into the head unit** are sold as a standard category by multiple specialist vendors:

- **ATA Photo Booths** (US) sells this as a product line — "Phantom Basic" (tiltable head, dimmable white LED ring, precision column alignment, integrated cable management), "Phantom Pro" (same, DSLR-capable), "Flare" (RGB-W ring — the RGB variant is off-brand for grao, see §1.4). Shipped worldwide; they ask international buyers to email first. ([ataphotobooths.com](https://www.ataphotobooths.com/shop/phantom-ipad-ringlight-photobooth-diy-shell/))
- **Foto Master** — the "Pylon iPad Booth," with vinyl-wrapped customisable panels and integrated lighting. Sold as a **turnkey package at ~$6,950**, or "bring your own" at **~$4,450** — both bundle *their* software, cloud platform and support, which grao would pay for and never use. **Wrong purchase shape for grao.** ([fotomaster.com](https://fotomaster.com/products/pylon-ipad-booth))
- **Volume/marketplace tier** — CyraTok, WideMeet, HARZHI, 360Spinbooths, plus an active Etsy category, generally **$400–800** for a shell + integrated LED ring + flight case, iPad not included, hardware-only (no software lock-in). ([Etsy iPad photo booth shells](https://www.etsy.com/market/ipad_photo_booth_shells), [360Spinbooths](https://360spinbooths.com/product/ipad-photo-booth-with-ring-led-light-ip2/), [CyraTok](https://cyratok.com/products/ipad-photo-booth-s2))
- **EU-based sellers do exist** — this **corrects** the earlier procurement finding that none could be found. [photoboothshop.eu](https://photoboothshop.eu/en/collections/photobooths) (Hulshout, Belgium) lists a wooden tablet-booth shell at **€790** (currently discounted from €1,890) and, notably, a **"Video Guestbook Photobooth" at €1,950** — literally grao's product category, EU-shipped. [photoboothstore.eu](https://www.photoboothstore.eu/) lists an all-in-one wooden booth on tripod **with integrated ring light at €4,700 ex-VAT**, free EU shipping. Prices unverified by [procurement]; treat as category evidence, not quotes.

**Conclusion: custom fabrication is NOT required for Option 1.** The off-the-shelf look is genuinely purchasable, at a price tier well below custom work. That is a materially different answer from Option 2 (§3.2), and it is the strongest single argument in Option 1's favour.

### 2.3 What still has to be got right when buying

The category existing doesn't mean any unit in it is acceptable. Hard filters for [procurement]:

- **Aesthetic filter.** Most of this market is built for the "party photo booth" look: gloss white, chrome trim, RGB rings, visible vendor logos. grao needs **matte black, white-or-warm light only, brand-neutral or rebrandable.** Expect to reject most listings on this alone. Wood-finish EU options may or may not suit the black/white/gold system — judge against the room, not the spec sheet.
- **iPad model fit — and camera placement.** The shell aperture must match the *exact* iPad model, and critically, **the front camera must sit on the edge the shell orients toward the guest.** iPad 10th-gen and later moved the front camera to the landscape (long) edge; earlier models have it on the portrait (short) edge. A portrait-oriented shell on a landscape-camera iPad puts the lens off to the side, and every guest will appear to be looking away from camera — which silently ruins the core deliverable. **Confirm the iPad's exact model and camera edge before ordering anything.** This is the €0 check that replaces the now-moot USB-C-vs-Lightning check (§7).
- **Ring light quality and control.** Dimmable to low levels (a bright ring at 40cm blinds guests and blows out faces), diffused, and — the failure mode nobody plans for — **low spill**, because the couple's own photographer or videographer will ask you to turn it off if it contaminates their frame. Brief the operator to coordinate at load-in.
- **Import cost and lead time if buying US.** A $500 shell lands in Portugal at meaningfully more after 23% IVA, duty, freight and clearance, on a multi-week timeline. Weigh against EU sellers even at a higher sticker price. [procurement] to model landed cost, not sticker.
- **Buy the shell, not the platform.** Reject anything that bundles mandatory booth software, a cloud subscription, or a licence — grao already has its app, and that bundle is most of Foto Master's price.

### 2.4 Option 1's real weakness: audio, and it is not cosmetic

Video is grao's core deliverable on **both** plans, and the deliverable is **speech**. Bad audio cannot be repaired after the event — denoising a 60-second emotional message destroys the voice along with the noise. Bad video is watchable; bad audio is not.

Option 1, by the founder's own definition, records with **the iPad's built-in mic array at roughly 60–100cm from the guest's mouth**, inside a shell that may partially occlude the mic ports, in a room with a DJ. The dominant variable in speech capture is **mic-to-mouth distance**, not capsule quality — and Option 1 fixes that distance at the far end of acceptable while removing the ability to improve it.

Compounding factors that are real at Portuguese quinta venues: hard stone/tile surfaces produce heavy reverb (a "far away in a bathroom" sound that no mic setting fixes); reception music masks speech; emotional or elderly guests speak quietly.

**This is the test that should decide between the two options, and it is free:** set the iPad in a hard-surfaced room, play music at reception volume from ~4m, have someone speak normally at the booth's intended standing distance, record 60s, and review on a phone *and* on a TV. **Pass = speech clearly intelligible throughout.** If the iPad's built-in mic fails this, Option 1 as strictly defined does not meet grao's core spec, and either the mic exception below or Option 2 becomes necessary. Nothing else in this document deserves to be decided before this test is run.

**The one place I dissent from the founder's framing — "Option 1b":** the "camera-upgrade euros go to the Pi5, not an iPad workaround" rule (§6.1) is about **cameras**, and was written because camera peripherals on iPad are awkward and platform-specific. A **mic is not in that category**: it was already established that a USB mic is **100% reusable on the Pi5 path** — arguably works better there, since Linux/ALSA offers real device selection that iPadOS denies — so there is **zero stranding risk**. Ruling it out is arguably applying the camera rule beyond its scope. The genuine counter-arguments, which may well win: a mic on a cable dangling off a clean shell **breaks the §1 "one visual mass / zero cables" spec** unless it's routed inside the housing (which a bought shell isn't designed for), and it drags in a powered USB-C PD hub (the iPad has one port; a mic occupies it and the iPad can't charge), UAC1/UAC2 class-compliance verification, and a small dev item (§6.2). **Recommendation: hold Option 1b in reserve, and let the §2.4 audio test decide whether it's needed.** Do not buy a mic pre-emptively.

### 2.5 Cost and timeline tier

- **Shell + integrated ring light:** ~€400–900 landed (volume/marketplace tier) or ~€800–2,000 (EU specialist tier). Reject the €4,000+ turnkey tier.
- **Stand:** €0–200 depending on whether the shell includes one (many do).
- **Branding vinyl/foil:** ~€50–100 local.
- **iPad, app, operator:** already owned.
- **Realistic total: ~€500–1,200.** Against a 349–599€ ticket, that is roughly a one-to-two-booking payback.
- **Timeline to usable: 2–5 weeks**, essentially all of it shipping and customs. Zero engineering time.

---

## 3. Option 2 — Dedicated enclosed rig

### 3.1 What the complete system consists of

This is CLAUDE.md's Hardware Roadmap end-state, with the founder's integration requirement applied on top.

| Element | Spec |
|---|---|
| **Compute** | Raspberry Pi 5 (4GB) or small mini-PC, running **Chromium in kiosk mode**. Mini-PC is worth pricing against the Pi: more headroom for video encoding, fewer driver surprises, often not much more expensive once a Pi's case/PSU/storage are counted. |
| **Screen** | 15.6" touchscreen, mounted flush behind the housing's front panel — bezel hidden, no visible monitor stand. |
| **Camera** | **A UVC device — not a gphoto2-tethered camera.** See §3.3. Candidates: a good UVC webcam (Obsbot Tiny 2 class, ~€369), or the founder's owned Canon EOS 600D via an HDMI capture card, subject to the caveats in §3.3. |
| **Mic** | Fixed-position directional mic (gooseneck/boom, cardioid or tighter), mounted **inside/on the housing at head height and as close to the guest as the design allows**. On Linux, real device selection works, so the iPadOS silent-fallback problem disappears. |
| **Light** | Ring or panel light integrated behind a diffuser in the front panel, encircling or flanking the camera aperture. Same spec as §2.1: white/bi-colour, high CRI, dimmable, no RGB. |
| **Housing** | One cohesive enclosure containing all of the above, with internal cable management, service access, and ventilation. **This is the hard part — see §3.2.** |
| **Mount** | Integral column/plinth, not a separate tripod. |
| **Power** | Single mains inlet on the housing. Optional Jackery-class battery for off-grid venues (only if a venue actually requires it). |
| **Printer** | Canon Selphy CP1500 via CUPS — **only if print-on-site is actually sold.** Adds a paper path, a service door and significant housing volume. |
| **Connectivity** | 4G/5G hotspot, only when a delivery/upload feature exists that needs it. |

### 3.2 Does the off-the-shelf look exist to buy for Option 2? **Effectively no — this is where custom fabrication becomes real.**

Three routes, honestly assessed:

**(a) Buy a purpose-built DSLR/kiosk photo-booth shell.** These exist in quantity — ATA "Phantom Pro," RBA T11/T12/T20R ($1,600–2,200 + US import), photoboothplace/EZ Photo Booths, and EU options at [photoboothshop.eu](https://photoboothshop.eu/en/collections/photobooths) (€1,950–9,500) and [photoboothstore.eu](https://www.photoboothstore.eu/) (€3,500–4,700). Three problems: (i) they are designed around a **Surface/laptop + DSLR + dye-sub printer**, not a Pi + 15.6" touchscreen + UVC camera, so internal fit is not guaranteed and you may be paying for volume you don't use; (ii) the aesthetic is overwhelmingly "party booth" — gloss, chrome, mirror fronts, LED trim — which **actively fights** grao's boutique black/white/gold positioning; (iii) many carry the manufacturer's own design language and branding, undercutting the Premium custom-branding selling point. **Buying an off-the-shelf shell here gets you an off-the-shelf look — just not grao's.**

**(b) Commission local Portuguese fabrication** (marcenaria / metalworker / CNC shop) to a designed spec. This is the only route that reliably produces §1 items 1–4 *in grao's design language*. It is also the only route with an unbounded cost and schedule, and it requires a design to exist first — including exact internal dimensions, which depend on components not yet chosen. Realistically a four-figure spend and a multi-week to multi-month loop with revisions.

**(c) DIY: Motedis 40×40 aluminium profile + 5mm matte black Forex panels.** Genuine strengths: exact dimensional fit, matte black surface that suits the design system better than most commercial shells, per-client rebranding by swapping a printed panel, repairable, no competitor logo, cheapest on parts (~€250–450 illustrative, unquoted — and unquotable, because no cut list can exist until contents are fixed). Motedis cuts profiles to length and ships PT in 3–6 business days. **But this route rests on an unexamined assumption — fabrication skill, tools, workspace and available weekends — and its failure mode is not "over budget," it is "looks handmade," which is the precise risk this whole exercise exists to eliminate.** A badly-finished DIY booth looks decisively more amateur than a decent bought one. **Open question for the founder, not an assumption: what fabrication experience, tools and workspace actually exist?**

**Conclusion: Option 2 cannot buy its way to "looks off-the-shelf *and* looks like grao."** It must either accept someone else's design language (route a) or pay for custom work (routes b/c). This is the inverse of Option 1, and it is the second-strongest argument in Option 1's favour.

**And the sequencing objection stands, for all three routes:** an enclosure is a container whose dimensions are defined by contents that have not been chosen or validated. Screen, camera body and lens depth, printer footprint, Pi and cabling, battery, mic reach — none are fixed. Cutting aluminium or briefing a fabricator now is choosing the box before the contents.

### 3.3 Technical facts Option 2 must be built on (carried forward, still binding)

- **Do not build the camera path on `gphoto2`.** `gphoto2` is a stills/tethered-capture protocol. It is a good answer for the photo strip (a Premium-only feature) and a **poor, fragile answer for live preview and 60-second video** — that path means `--capture-movie` piped into `v4l2loopback`, which is laggy, brittle and a known source of dropped frames. As currently written, CLAUDE.md's Hardware Roadmap line ("Canon EOS M50 Mark II via `gphoto2`") specs the flagship camera purchase to best serve a *secondary* Premium feature and worst serve the *primary both-plans* feature. **Option 2's camera should be a UVC device**, which also keeps `index.html`'s existing `getUserMedia` capture code unchanged — it only swaps the video source. *(CLAUDE.md amendment flagged for founder confirmation, not made unilaterally.)*
- **The founder-owned Canon EOS 600D: verdict unchanged — do not build on it, but it is a free fallback.** (i) gphoto2 path: `--capture-movie` on this generation yields a laggy (~0.5–5s), inconsistent-fps (~4–25fps) MJPEG preview, not real recorded video; a native onboard-record trigger (`movierecordtarget=Card`) may exist on its libgphoto2 driver but is **unverified** — a €0 `gphoto2 --list-config` check would settle it. (ii) Capture-card-as-UVC path: stock firmware HDMI carries shooting overlays; a clean feed requires **Magic Lantern**, unofficial third-party firmware, as the sole dependency of the guest-facing capture path at a wedding — a real reliability risk, not a cosmetic one. (iii) Independently, the 600D has a hard **~30-minute continuous live-view ceiling** (thermal), so as an always-on booth feed it needs manual waking roughly every 30 minutes — and the failure mode is a *silently frozen frame* while a guest talks to it. **If used at all: capture-card path only, on the Pi5/Chromium side where UVC is trivially supported, and only after an unattended multi-hour Magic Lantern bench test.** Sensor quality is genuinely far better than any webcam; that only pays off if a path delivers it cleanly, and none does yet.
- **All four `getUserMedia` call sites in `index.html` hardcode `video: { facingMode: 'user' }`** (lines 568, 704, 726, 1106 as of 2026-07-31). An external UVC camera has no `facingMode`, so the browser will score it poorly and hand back a built-in camera instead. **Option 2 requires code changes here** — relaxing `facingMode` and selecting explicitly by `deviceId`. Small, but real, and it belongs in the **priority #4 config layer** as a per-event camera/mic source setting, not hardcoded a fifth time.
- **One genuine upside worth stating:** on Chromium/Linux, known issue #2 (boomerang export via `canvas.captureStream()`) largely stops being a problem — that API is solid there. Option 2 would sidestep the bug rather than fix it, which does nothing for any iPad fallback deployment, but it is a real benefit of the platform.

### 3.4 The recurring costs Option 2 adds, which are consistently under-modelled

- **Transport.** An aluminium-and-panel booth is heavy. Does it fit, assembled or flat-packed, in the founder's car? Open question.
- **Load-in and teardown.** Portuguese quintas and historic venues have stairs, gravel, narrow doors and no lift. **One-person carry is a hard requirement and it constrains the design before aesthetics do.** Setup time eats operator hours and must fit the venue's load-in window.
- **Storage, damage and insurance** between events.
- **Fixed cost of being in the business.** Option 2 permanently raises grao's break-even.

### 3.5 Cost and timeline tier

- **Components** (Pi5/mini-PC + touchscreen + UVC camera + mic + light + power + cabling): roughly **€700–1,300**, more if an Obsbot-class camera is chosen.
- **Housing:** €800–2,000 (bought shell, aesthetic compromise) / four figures and open-ended (commissioned) / €250–450 materials plus unquantified founder labour and finish risk (DIY).
- **Printer, if print-on-site is sold:** ~€150–200 plus consumables plus housing volume.
- **Realistic total: €1,500–3,500+**, i.e. roughly **3–7× Option 1**, and requiring **6–12+ bookings to break even** before travel, consumables and time.
- **Timeline to usable: months, not weeks** — and it is not shipping-bound, it is **blocked on unbuilt software** (CLAUDE.md priority #5) *and* on an enclosure design that cannot be drawn until the contents are fixed. Those two dependencies are serial, not parallel.

---

## 4. Honest comparison

| Dimension | **Option 1 — iPad booth** | **Option 2 — Dedicated rig** |
|---|---|---|
| **Cost tier** | ~€500–1,200 | ~€1,500–3,500+ |
| **Payback** | 1–2 bookings | 6–12+ bookings |
| **Software readiness** | **Works with today's app, zero code.** Setup is Guided Access + fullscreen web app. | **Blocked on priority #5** (unbuilt): Chromium kiosk, camera `deviceId` selection, CUPS bridge if printing. Also wants priority #4 done properly first. |
| **Time to usable** | 2–5 weeks (shipping/customs) | Months (software + enclosure design + fabrication + testing) |
| **"Off-the-shelf look" — buyable?** | **Yes.** Mature product category; matte-black, brand-neutral units exist at €400–900. | **No.** Bought shells give a *party-booth* off-the-shelf look; grao's look needs commissioned or DIY fabrication. |
| **Aesthetic risk** | Low — small, simple object; less surface area to get wrong | High — a large object in the room, and the DIY failure mode is "looks handmade" |
| **Brand fit (boutique black/white/gold)** | **Better.** A refined small object on a column reads as considered, wedding-appropriate decor. Several premium video-guestbook vendors deliberately use exactly this form. | Worse by default. A large kiosk with a printer reads as **"party photo booth"** — a positioning drift away from "video guestbook," which is grao's actual category. Recoverable only with custom design spend. |
| **Audio quality** | **Weakest point.** iPad built-in mic at 60–100cm, no upgrade path within the option's definition. §2.4 test is go/no-go. | **Strongest point.** Fixed close-placed directional mic, real device selection on Linux, and a housing that can be designed acoustics-first. |
| **Image quality in dim venues** | iPad front camera + a good integrated ring light. Note: **adding light beats adding sensor** for this failure mode, and Option 1 adds light. | Better ceiling, if the camera path is resolved. Not automatically better — a cheap webcam is often *worse* in low light than an iPad. |
| **Enables paid add-ons** | Print-on-site: no (or a separate, look-breaking printer). Soundproof cabin: no. | Both. The housing can *be* the +200€ soundproof cabin's substrate and can hold the +100€ printer. |
| **Reversibility / stranding** | Shell (~€400–900) is the only stranded item if you later move to Option 2. Stand and branding carry over. | Largely stranded if grao's format changes. Enclosure is the least reusable object in the business. |
| **Operational load** | One object, minutes to set up, one-person carry, trivially. | Heavier, slower load-in, venue-access constraints, storage and maintenance. |

**A framing correction worth making explicit:** these are not "the cheap stepping stone" and "the real thing." For a **video guestbook** at boutique weddings — one guest at a time, speaking to a screen, no printing on the Basic tier — Option 1's form factor may be the *permanently correct* product, not a way-station. Option 2 is the correct answer to a **different product**: a multi-mode photo-booth-with-printing operation. Choosing Option 2 is partly choosing to become that business.

---

## 5. Recommendation

**Option 1, unambiguously — with one gate and one deliberate design constraint.**

The reasoning, in order of weight:

1. **Only Option 1 can actually buy the thing the founder is asking for.** The requirement is that it looks off-the-shelf. Option 1's category *is* off-the-shelf, at €400–900. Option 2 must either wear a competitor's party-booth aesthetic or pay for custom fabrication — and its DIY route's characteristic failure is precisely "looks handmade." **The hard requirement selects Option 1 on its own**, before cost or software readiness are even considered.
2. **Option 1 runs on today's app; Option 2 is blocked on unbuilt priority-#5 software behind an unfinished priority #4.** Bought today, Option 2 sits in a box.
3. **Option 1 is roughly one-third the cost and pays back in 1–2 bookings**, and its only stranded item if you later escalate is the shell itself.
4. **Option 1 fits the boutique positioning better**, and grao sells a *video guestbook*, not a photo booth. A large printing kiosk drifts the brand toward a category grao is deliberately not in.
5. **Option 1 attacks the actual quality complaint.** "Looks amateur in a dim venue" is a **lighting** problem far more than a sensor problem, and an integrated diffused ring light is the highest leverage-per-euro fix available. This deliberately inverts the instinct to buy a camera.

**The gate — and it is a real one, not a formality: run the §2.4 audio test before buying anything.** Option 1 is defined as no external mic, and grao's core deliverable on both plans is recorded speech. If the iPad's built-in mic cannot hold intelligible speech at reception volume in a hard-surfaced room, Option 1 as strictly defined fails grao's core spec — and the answer is then **Option 1b** (a mic routed *inside* the shell, §2.4), not Option 2. Escalating all the way to Option 2 over a microphone would be paying €2,000+ and several months to solve a €50 problem.

**The design constraint: buy Option 1 so Option 2 inherits from it.** Choose a shell whose light is bi-colour and dimmable (reusable spec knowledge), keep the branding treatment portable, and prefer a stand you'd reuse. Do not buy anything iPad-specific beyond the shell itself.

**Explicitly do not buy now, under either option:** HDMI capture card, Canon M50 Mark II, Selphy printer (until print-on-site is actually sold — print the 1200×2400 strip at a photo shop for a couple of euros to close known issue #1), Motedis profile, Forex panels, Jackery, hotspot.

**Consider renting before buying** for anything Option 2 would need — camera and lighting rental is cheap in Lisbon/Porto and converts an irreversible capex bet into a per-event opex test. If a rental at a real event visibly changes the client's reaction, that is evidence to buy on. If it doesn't, you saved thousands.

### 5.1 Does the standing spend gate still apply?

Briefly, since this has already been pressure-tested repeatedly this session and doesn't need relitigating:

**Yes — the gate still holds, and it is unchanged.** There is still no confirmed second booking, and priorities #1 and #2 remain unconfirmed on real devices (no Selphy print test, no on-device Safari boomerang test). Nothing in this restructuring is new evidence about demand; it is new evidence about *sourcing*. So this analysis does **not** authorise spend today.

**What it does change is what you prepare for.** Previously the plan carried three live tracks and an open question about whether the enclosure had to be custom-built. It now has a single answer: **when the trigger fires, buy Option 1.** That means the €0 work between now and then is narrow and concrete — run the audio test, confirm the iPad model and camera edge, review the J&C footage, and have [procurement] shortlist two or three matte-black shells with landed costs. None of that costs money, and all of it collapses the decision to a purchase order on the day a second booking is confirmed.

**Trigger to act on Option 1:** a confirmed second booking with a date, tier and venue. At that point the €500–1,200 is justified by a specific event, not by a hypothetical one.

---

## 6. Standing rules and open items

### 6.1 Spending rule (adopted policy, unchanged)

**Camera-upgrade euros go toward the Pi5/Chromium target, not toward bolting external camera hardware onto the iPad.** Linux/Chromium has mature UVC support and real device selection; an iPad-only intermediate camera rig sinks money into a platform you intend to eventually leave. **This rule is about cameras.** It is not triggered by anything today, and — per §2.4 — it should not be read as also excluding a microphone, which strands nothing.

### 6.2 Small dev items, logged not built

- **Live input-level meter on the recording screen** (Web Audio `AnalyserNode` on the same `MediaStream`; supported in Safari, no new dependency). Build **only if a mic is ever bought** (Option 1b or Option 2). Rationale: on iPadOS, audio input is an OS-controlled route — last-connected-wins, `setPreferredInput` is unreliable, and a non-class-compliant USB device is **ignored silently**. No `deviceId` constraint can defend against a knocked cable; a visible meter can, because the operator sees a dead bar *before* the guest walks away. Optionally also surface `track.getSettings()`/`track.label` in an operator-visible corner.
- **Camera/mic source selection belongs in the priority-#4 config layer**, not hardcoded. See §3.3 on `facingMode`. This is an argument for building #4 *well*, not for building it sooner.

### 6.3 Open €0 checks

| Check | Why it matters | Owner |
|---|---|---|
| **§2.4 audio test** — iPad built-in mic, reception-volume music at ~4m, hard-surfaced room, 60s, reviewed on phone and TV | **Go/no-go for Option 1 as defined.** Decides whether Option 1b (internal mic) is required. Highest-value free step available. | founder |
| **Exact iPad model + which edge the front camera is on** | Gates shell fit and, more importantly, whether guests appear to look at the lens or off to the side. | founder |
| Review J&C wedding footage against §1 and §2.4 | Says which dimension actually failed — audio, light, framing or sensor. Sharpens or cancels every purchase. Still not done. | founder |
| Confirmed second booking, with date/tier/venue | The premise under every spend argument. Nothing in the repo evidences one. | founder |
| Shortlist 2–3 matte-black iPad ring-light shells with **landed** cost (incl. IVA/duty/freight) and lead time | Turns the recommendation into an executable order. Costs nothing. | procurement |

### 6.4 Brief for [procurement]

Source against §1 and §2.1–§2.3, not against product categories, and return options with tradeoffs rather than a single pick.

- Must work with the **existing iPad, today, with zero software changes.**
- Ring light must be **integral to the shell**, dimmable, white or bi-colour, high CRI, **no RGB.**
- Must be **matte black / neutral** and brand-neutral or rebrandable — no chrome, no gloss, no vendor logos, no coloured LEDs.
- Must be **hardware-only** — reject anything bundling mandatory booth software or a cloud subscription.
- Must be **one-person transportable and set up in minutes**, in the founder's car, including stairs and gravel. Flight case preferred.
- Quote **landed cost** (IVA, duty, freight, clearance) and lead time, not sticker price. Compare EU sellers against US sellers on landed cost.
- Confirm the shell's supported iPad models against the founder's exact unit before recommending.
- Budget ceiling to be set by the founder before sourcing begins. Include a rental-vs-buy line for anything above it.

### 6.5 Trigger to revisit Option 2

Revisit when **all** of: (a) CLAUDE.md priorities #1–#4 are genuinely closed, including on-device confirmation; **and** (b) at least one of — print-on-site or the soundproof cabin has actually been sold more than once; booking volume makes the Option 1 rig the binding constraint; or a rental test at a real event demonstrated a client-perceived quality gain the iPad rig cannot reach. The `gphoto2`-vs-UVC question (§3.3) must be resolved on paper first, and the founder's fabrication capacity (§3.2c) must be an answered question rather than an assumption.

---

## 7. What was retired in this restructure, and why

Recorded so no future session re-derives or re-litigates it.

- **Track A / B / C, Addendum 1, Addendum 2 — structure removed.** Their substantive findings are preserved above: Track A's quality-leverage ranking (light > audio > framing > sensor) is now embedded in §2.4/§5; Track B's camera analysis is §3.3; Track C's enclosure analysis is §3.2. The "styled presentation layer instead of an enclosure" recommendation is **superseded** — Option 1 with a purpose-built integrated shell is that idea done properly and is strictly better.
- **"Does a brand-neutral EU shell exist?" — answered yes, correcting the earlier procurement finding of "none found."** The earlier pass searched rental providers rather than shell sellers. EU sellers exist ([photoboothshop.eu](https://photoboothshop.eu/en/collections/photobooths), Belgium; [photoboothstore.eu](https://www.photoboothstore.eu/)), alongside a large US/marketplace category.
- **"Is Safari UVC support real?" — settled and now largely moot.** Settled fact, kept for the record: **Safari on iPadOS 17+ does support external USB cameras** — they appear in `enumerateDevices()` and are selectable via `getUserMedia()`, **USB-C iPads only, no Lightning path** ([WebKit Safari 17 release notes](https://webkit.org/blog/14205/news-from-wwdc23-webkit-features-in-safari-17-beta/), corroborated by a real capture-card test on an iPad 10th gen). The earlier "unverified" status is retired. **Under the two-option framing this is now archival**, because Option 1 uses no external camera and Option 2 uses no iPad — which is why the "is the kiosk iPad USB-C or Lightning?" check has been **dropped from the €0 list** and replaced by the iPad-model/camera-edge check (§2.3), which is what actually gates a purchase now.
- **The audio-vs-video asymmetry on iPadOS — kept, because it still governs Option 1b.** USB *audio* is ~15 years old, works at the OS route level on both Lightning and USB-C, needs no browser adoption, but is **not programmatically selectable** — last-connected-wins, `setPreferredInput` unreliable, non-class-compliant devices silently ignored. USB *video* is the opposite: newer, USB-C only, but `deviceId`-selectable. Consequence, preserved in §6.2: the mitigation for a mic on iPad is a **live input-level meter**, not a `deviceId` constraint. Also preserved: a mic on a one-port iPad requires a **powered USB-C PD hub** (~€25–40) so the iPad can still charge, and the mic must be verified **UAC1/UAC2 class-compliant** before purchase (MFi certification does not imply it).
- **The "iPad has hit a wall, skip to Pi5" argument — resolved and closed.** Four of five blockers were the 600D's own, not the platform's, and the Pi5 fixes none of them. The conclusion that survived is the §6.1 spending rule.

---

## Decision log

- **2026-07-31** — **Restructured (architect-strategy, founder-directed).** The Track A/B/C + Addendum 1/2 structure is replaced by two complete-system options, on the founder's framing that hardware must be planned as coherent products rather than assembled parts, with **"must look and feel off-the-shelf" as a hard requirement of equal weight to the technical spec.** New research finding that drives the recommendation: **purpose-built iPad booth shells with integrated ring lighting are a mature product category** (ATA Photo Booths, Foto Master, and a $400–800 marketplace tier), including **EU-based sellers** — which corrects the earlier procurement conclusion that no brand-neutral EU shell could be found. **Option 1's off-the-shelf look is purchasable; Option 2's is not** (bought shells carry a party-booth aesthetic that fights grao's positioning, so grao's look requires commissioned or DIY fabrication, whose failure mode is "looks handmade"). **Recommendation: Option 1**, on the hard requirement alone, reinforced by ~1/3 the cost, zero software work vs. blocked-on-priority-#5, weeks vs. months, and better boutique brand fit. **One real gate: the §2.4 audio test** — Option 1 is defined as no external mic, and if the iPad's built-in mic can't hold intelligible speech at reception volume, the answer is Option 1b (mic routed inside the shell), not Option 2. Registered dissent from the founder's framing: the "camera euros go to Pi5" rule is about cameras and arguably shouldn't exclude a mic, which strands nothing. **Spend gate unchanged** — no confirmed second booking, priorities #1/#2 unconfirmed on device; this changes *what to prepare for*, not *whether to buy now*. Trigger to act: a confirmed second booking with date/tier/venue.
- **2026-07-31** — Evaluated (architect-strategy, founder challenge): "if any external camera is needed, the iPad's integration premise is broken — skip to Pi5." **Verdict: right rule, wrong premise.** Safari on iPadOS 17+ **does** support external UVC cameras (USB-C only); the "unverified" status was retired. On iPadOS, video is `deviceId`-selectable but audio is not, so the planned `deviceId` mic fix was withdrawn in favour of a live input-level meter. Four of five 600D blockers are the camera's, not the platform's; the Pi5 fixes none. The **"camera-upgrade euros go to the Pi5 target"** spending rule was adopted as policy. *(Findings retained in §6.1, §6.2 and §7 of the restructured document; the addendum itself is superseded.)*
- **2026-07-31** — Researched (developer, founder request): can the founder-owned Canon EOS 600D substitute for a camera purchase? Verdict: **no**, on either path — gphoto2 video capture is a laggy MJPEG-preview hack on this generation, and the HDMI-capture-card path needs unofficial Magic Lantern firmware for a clean feed, on top of a ~30-minute live-view thermal ceiling. If ever used, capture-card path only, on the Pi5/Chromium side, after an unattended multi-hour bench test. *(Retained in §3.3.)*
- **2026-07-31** — Follow-up flagged, not actioned (still open): CLAUDE.md's Hardware Roadmap line "Canon EOS M50 Mark II via `gphoto2`" needs amending to record that `gphoto2` is a stills/tethering path well-suited to the photo strip but poorly suited to live preview and 60s video. As specced, the flagship camera purchase best serves a secondary Premium feature and worst serves the primary both-plans feature. **Option 2's camera should be a UVC device.** Not edited unilaterally — for the founder to confirm.
- **2026-07-31** — Proposed (architect-strategy), original framing at founder request ahead of procurement sourcing. Core conclusions that survive the restructure: CLAUDE.md's priority-#5 rule constrains hardware-integration *code*, not the purchase of code-free operating equipment; quality leverage ranks **lighting > audio > framing/stability > sensor**, deliberately inverting the founder's stated instinct to buy a camera; mic-to-mouth distance beats capsule quality; venue reverb makes acoustics part of the audio requirement and the physical substrate of the +200€ soundproof cabin; and hardware bought to resolve founder anxiety rather than evidenced failure is the most expensive available form of reassurance. **Nothing approved to buy — founder's decision.**
