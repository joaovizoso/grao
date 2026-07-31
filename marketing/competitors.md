# grao — Competitive Landscape Research

Research pass covering (1) the Portuguese photo/video/boomerang-booth market for weddings, and (2) Voast (US), a category-relevant video guest book company, studied specifically as a reference point for grao's open backend/instant-delivery architecture question. All findings below are sourced from public marketing copy (websites, directories, press) — none of this is first-hand product testing, so treat performance/reliability claims ("instant," "immediate") with the same skepticism we'd apply to grao's own copy.

---

## 1. Portugal

The Portuguese market splits into four rough categories. grao doesn't map cleanly onto any single one of them today, which is itself worth noting before the competitor list.

1. **Commodity photobooth rental** — the largest, most crowded segment. Priced by hours of coverage, not by feature tier. Entertainment/novelty positioning (props, backdrops, instant prints, "diversão garantida").
2. **Audio guest book** — emotional-keepsake positioning, voice-only, simple hardware (a vintage phone), lower price floor, no video/visual memory.
3. **360°/spin video booths** — novelty and social-media-shareability positioning, aimed at the "wow moment" during the party rather than a reflective keepsake.
4. **Software-only guestbook platforms** — global, not Portugal-specific, QR-code + cloud based, no physical booth required. Not a direct competitor for the in-person booth business, but relevant to the backend question below.

### Commodity photobooth rental

**Flashmat** (Lisbon & Porto, national coverage)
- Modes: classic photo booth, GIF/animated booth ("Ringbooth"), studio-quality DSLR photos.
- Pricing: not published; quote-only.
- Positioning: premium/established — markets itself as "official photobooth of the Santo António weddings" for 3 years running, and lists corporate clients (Mercedes-Benz, Google, Chanel, Microsoft, L'Oréal) as social proof. This is closer to a boutique-adjacent brand than a generic rental, at least in how it markets itself.
- Backend-relevant features: **instant photo delivery by email and Facebook**, sub-15-second wireless printing, social-hashtag collection.

**PhotoLand** (Lisboa, Porto, Cascais, national)
- Modes: classic photos, GIFs, boomerangs, DSLR Canon quality, instant prints, custom backdrops/props.
- Pricing: not published.
- Positioning: fun/entertainment ("diversão garantida para todos"), professional-quality framing.
- Backend-relevant features: instant social-media content, personalized hashtags — no explicit QR code or dedicated gallery platform found.

**Saídos da Caixa** (Lisboa/Mafra)
- Modes: professional photobooth with customization options.
- Pricing: not published (blog content, no price list found).
- Positioning: professional/premium framing in blog content ("worth the price").

**SmileBox** (Lisboa, Porto, national)
- Modes: standard photobooth, brand/identity customization.
- Pricing: not published.
- Positioning: flexible/customizable branding for parties and corporate events; general entertainment framing.

**Aquarela Mágica** (pricing anchor — published price list, useful as a category benchmark)
- Pricing: **450€ (4h) / 550€ (8h) / 650€ (12h)** — hourly-block pricing model.
- This confirms the commodity segment is priced by duration of coverage, not by feature/output tier. grao's flat per-event fee (349€/599€ regardless of hours, gated by feature set) is a genuinely different mental model for a couple to evaluate, not just a different number.

**VMF Digital / Zaask / casamentos.pt** — these are directories/marketplaces (80+ listed partners on VMF Digital alone) rather than competitors themselves. Relevant mainly as a channel note: this is where couples currently shop for photobooths, and where grao is likely not yet listed.

### 360°/video-spin booths

**click'aí**, **Muita Giro**, **Video Booth 360** (Localiza-me) — all offer a rotating-camera 360° video booth (slow-motion spin videos), typically bundled with a standard photobooth and/or an "audiobook." Positioning is unambiguously entertainment/novelty rather than keepsake — the pitch is the spectacle of the spin, not the emotional content of a message. One product description claims videos are "shared immediately... without requiring internet" (edge/local delivery, not cloud) — plausible for a 360 rig but unverified. No pricing published for any of these.

### Audio guest book (closest keepsake-positioning competitor)

**Vieira Events**
- Modes: audio guest book (vintage rotary-style phone), no video capture. Newer wedding-consulting/vendor-coordination service.
- Pricing: **from 275€** (specific tiers not published).
- Positioning: explicitly emotional-keepsake ("guard the voices of your most special day") with a novelty/fun layer on top. Uses celebrity name-drops (Cristina Ferreira, Mariana Monteiro, Marisa Liz) as social proof — a well-established brand in the PT wedding-vendor space specifically for this format.
- Backend-relevant features: none found — audio files delivered after the event, no digital gallery, QR, or remote submission mentioned.

**Mode Studio**
- Modes: audio guest book, mirror photobooth (3D/neon), "Vogue magazine" editorial photobooth, wedding content-creator/documentary service.
- Pricing: not published.
- Positioning: premium/glamour language ("sophistication," "immersive"), broader service menu than a single-format booth.
- Backend-relevant features: none found on the page reviewed.

### Destination-wedding / expat-targeted (English-language market)

**Memory Box** (Algarve)
- Modes: photobooth with **Deluxe** (color, props) and **Glam** (B&W, no props, white backdrop, "elegant vibes") tiers, plus a boomerang booth.
- Pricing: not published, tiered by package name only.
- Positioning: explicitly premium/boutique — "LUXE Collection," English-native site clearly built for the international/destination-wedding couple booking an Algarve venue, not a Portuguese-language local couple.
- Backend-relevant features: **online gallery after the event**, and for the boomerang booth specifically, guests can "instantly view & share" and have content **sent right to their mobile device**. This is a live, marketed instant-delivery claim, not just a roadmap item.

### Software-only / global reference (not Portugal-specific, but relevant to the backend question)

**Guestbook.tv**
- Not a physical booth vendor — a cloud SaaS product accessible via any smartphone/tablet browser, no app required. Supports Portuguese as a UI language, so it's reachable by PT couples, though there's no evidence it has meaningful presence in the PT wedding-vendor ecosystem specifically.
- Pricing: freemium (free tier: 1 video + up to 100 photos/messages from 10 guests), paid one-time-payment tiers not detailed on the page reviewed.
- Backend-relevant features (this is the important part for grao): **QR-code access, live/real-time cloud gallery, TV/Chromecast sync for live slideshow display during the event, video message support, moderation/approval queue, printable PDF export.** This is essentially the fully-built version of the "QR code + remote recordings" feature grao already lists as Premium — except grao's version today has no backend behind it (per CLAUDE.md, delivery is manual/out-of-band), while this exists as a shipped, monetized product globally.

### Devil's advocate — the two strongest cases for a couple choosing a competitor over grao

**Case for Memory Box over grao:** If the wedding is a destination wedding in the Algarve with a meaningfully international guest list (which is a real and growing segment of the PT wedding market), Memory Box is already speaking the couple's language — literally (English-native site) and stylistically (luxury/"LUXE" framing pitched at exactly this buyer). It has a proven multi-year presence in that specific regional niche, a named tiered product (Deluxe/Glam) that's easy to compare against other Algarve vendors, and — critically — it already delivers the exact feature grao is still debating whether to build: guests get their boomerang on their phone before they leave the venue, and the couple gets an online gallery afterward, with no dependency on manual file transfer. A destination-wedding couple planning remotely, who wants confidence the tech "just works" without relying on an operator's laptop and a post-event Dropbox link, has a legible reason to pick the vendor who already ships that experience over a single-wedding-old newcomer, however nicer grao's monogram is.

**Case for Flashmat over grao:** Flashmat has done the thing grao hasn't yet — accumulate years of visible social proof (a named recurring civic event, recognizable corporate logos) that de-risks the "will this actually work at my wedding" question for a planner or couple who has never heard of either company. It also already ships instant email/Facebook delivery, meaning the "guest walks away with the content instantly" expectation is already met, not promised. For a couple or planner optimizing for lowest perceived risk — proven vendor, proven format (classic photobooth, which every guest already understands instantly, versus grao's less-familiar "sit down and answer a personalized video question" format), and no dependency on an operator explaining a new interaction pattern — Flashmat is the safer, more legible choice, especially at the lower end of a wedding budget where a couple isn't going to think hard about differentiation.

Neither of these arguments is a reason to abandon grao's positioning — they're reasons to be honest that "elegant design + operator presence" is not, by itself, a complete answer to "why not the incumbent," and that the instant-delivery gap specifically (see synthesis below) is a real, not hypothetical, competitive vulnerability.

---

## 2. Voast (US)

Identity confirmed via multiple independent sources (PartySlate, WeddingWire, The Knot, Green Wedding Shoes, and Voast's own sites raiseavoast.com / voast.co, Seattle, WA) — this is "Voast: The Video Guest Book," which markets itself as **"the original video guest book company."** This is the right company for the category comparison (self-described video guest book, not a generic photobooth rental or an unrelated business using the same name).

**What they offer:**
- A self-contained video kiosk (tripod, ring light, 1080p camera, touchscreen) shipped to the couple by mail **two days before the event**, set up by the couple/venue in under 5 minutes — **no operator, fully unattended, self-service.** This is the single biggest structural difference from grao: Voast is a DIY-shipped product, grao is a staffed service.
- Up to 6 customizable prompts guests respond to on camera ("story prompts": favorite memories, newlywed advice, silly questions).
- A photo booth feature has been added to the same kiosk (photo capture after the video message).
- After the event, the couple ships the kiosk back in a prepaid return case.

**Pricing:** Not published on-site — contact/quote-only, consistent with the PT competitors above. The only concrete number found is a **$1,490 valuation** cited for a full rental package in a giveaway/promotional context (not necessarily the standard retail price). Third-party sources note the broader "video guest book" product category (including lower-end consumer devices, not company-attended services) spans roughly $7–$1,500, which isn't a reliable Voast-specific price point — flagging this as a weak, unverified data point rather than treating it as Voast's actual price list.

**Positioning:** Budget-conscious alternative to a wedding videographer ("skip the open mic," capture "living memories" when "a videographer is out of reach, budget-wise"). The brand name itself is "VIDEO + TOAST." This is squarely keepsake/emotional positioning, similar to grao's, but explicitly framed against *videography* as the alternative being displaced, not against other photobooth vendors — a different competitive frame than any PT competitor above uses.

**Post-capture delivery experience (the part most relevant to grao's backend decision):**
- **Footage uploads to cloud storage immediately** during the event — not batched or delivered later from a local device.
- **Guests can opt to receive their own individual clip via SMS immediately after recording it**, before they've even left the reception.
- Two edit tiers: a **"Story Edit"** (~3-minute professionally edited compilation, included as standard) and a paid upgrade **"Pro Edit"** (up to 20 hours with a dedicated editor, custom branding/soundtrack, direct editor communication).
- Couple receives: **all raw clips + the edited video** as digital files, a shareable digital link (framed explicitly for social media sharing), and an optional physical "Video Book" — a small screen/player device pre-loaded with the guest messages, shipped as a keepsake object.
- Turnaround: edited deliverables promised within roughly 30 days of the booth being returned.

**Why this matters as a reference, not a template to copy:** Voast can offer instant cloud upload + guest-side SMS delivery + a 30-day edit pipeline because it operates one owned, repeatable hardware/software stack across every booking — the backend is amortized across their whole business, not built per-event. grao today is the opposite: one bespoke HTML file per wedding, no backend, no upload, files handed over manually by an operator after the event. That's not a criticism of grao's MVP stage — it's the correct sequencing for a one-wedding-old service business — but it means Voast's guest experience (get your own clip on your phone before you leave the party) is a real, already-shipped category expectation, not a speculative nice-to-have grao would be first to invent.

---

## Synthesis

### What's genuinely differentiated about grao today (evidenced, not just asserted)

- **No Portuguese competitor found combines grao's exact format**: a personalized, plan-gated video-message guestbook (fixed or unlimited custom questions) bundled with an optional B&W photo strip and boomerang, sold as a flat per-event fee tiered by feature set (Basic/Premium) rather than by hours of coverage. The commodity photobooth market (Flashmat, PhotoLand, SmileBox, Aquarela Mágica, etc.) prices by duration; the audio-guestbook players (Vieira Events, Mode Studio) don't do video at all; the 360-spin booths (click'aí, Muita Giro) are novelty-first with no personalized-question format. grao's specific combination is a real white space in the PT market, at least among what's publicly discoverable.
- **Design system as differentiator holds up under scrutiny.** None of the PT competitors reviewed lean into a coherent black/white/gold, serif+sans, monogram-and-botanical visual identity positioned as "boutique add-on to the wedding" the way grao's CLAUDE.md describes. The commodity segment's marketing language (props, backdrops, "diversão garantida," hashtags) reads as party-entertainment, not as an extension of the wedding's own design language. This is a legitimate, defensible differentiation angle to keep leaning on in copy.
- **Operator-present model is a real structural difference from at least one meaningful global reference point (Voast)**, and grao's "your guests are never alone with the tech" framing is not just marketing spin — it's true relative to a self-shipped, unattended kiosk model. Worth continuing to use this contrast explicitly in copy aimed at couples worried about "what if it breaks / what if guests don't understand it."

### Capability gap that is now evidenced by competitor behavior, not just founder intuition — flagged specifically for the backend/architecture decision

This is the one finding that should directly inform the `architect-strategy` conversation about adding a backend for file hosting and instant sharing:

**"Guest gets their own content on their phone before they leave the venue" is already a live, marketed feature among competitors in and adjacent to grao's category — it is not an untested idea grao would be pioneering.** Evidence, ranked by how directly comparable it is to grao's product:
1. **Voast (US, direct category peer — video guest book):** immediate cloud upload during the event + optional SMS delivery of the guest's own clip right after recording it.
2. **Memory Box (PT, direct competitor, boomerang specifically):** "instantly view & share" + "sent right to their mobile device," plus a separate post-event online gallery for the couple.
3. **Flashmat (PT, adjacent — photobooth):** instant email/Facebook delivery of photos.
4. **Guestbook.tv (global, software-only):** a fully productized QR-code + live cloud gallery + real-time display layer, sold as a freemium SaaS — i.e., the exact "QR code + remote recordings" feature grao already lists as a Premium line item exists today as a mature, monetized, general-purpose product, which grao's own version does not yet have any backend behind.

Taken together, this is reasonably strong evidence (multiple independent competitors, not one outlier) that couples and guests already expect some form of instant or near-instant digital delivery in this product category, and that grao's current fully-manual, out-of-band delivery model (per CLAUDE.md: operator collects files, couple gets a gallery "after the event," no upload mechanism today) is behind category norms rather than ahead of them.

**Two caveats to apply before this evidence turns into a roadmap decision:**
- All of these claims come from vendor marketing copy, not independent testing — "instant" and "immediate" are unverified performance claims, and it's plausible some (e.g., the 360-booth "shared immediately without requiring internet" claim) rely on local/edge delivery rather than a true backend, or on bolted-on third-party apps (e.g., QR-to-upload tools like Fotify/WedUploader that PT vendors sometimes use as an add-on rather than owned infrastructure). Don't treat "competitors say instant" as equivalent to "competitors have proven this reliably at scale."
- Per CLAUDE.md's own priority ordering, grao currently has two known, more urgent defects — the photo strip landscape/portrait bug and the Safari/iPad boomerang export failure — that directly break paid Premium features today. This competitive gap is real evidence that a backend/instant-delivery layer is *worth scoping eventually*, but it is not a reason to jump ahead of priorities 1–3 (fix photo strip, fix or replace boomerang export, make video duration configurable) to priority 5 (hardware/backend integration). The founder-playbook discipline here is: this finding should raise the priority of *eventually* building the backend once the config layer (priority 4) exists, not justify skipping the open bugs to chase a competitor-inspired feature.
- Also worth separating two related-but-distinct backend asks that this research surfaces: (a) **guest-facing instant delivery** (a nice-to-have shareability feature, evidenced above as a market expectation) versus (b) **couple-facing gallery delivery** (both grao plans already promise a "private digital gallery," and it's worth an internal check on whether that promise is currently being fulfilled by manual file transfer or genuinely needs backend infrastructure to keep being credible as bookings scale past one wedding).

No pricing changes and no ad-spend proposals are included in this document, per scope.
