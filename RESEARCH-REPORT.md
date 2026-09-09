# Landscaping Website Research & Standards Audit

**Date:** 9 September 2026 · **For:** NextLevel Landscaping redesign
**Method:** three parallel research agents — (1) 19 Australian landscaping sites incl. 12 Adelaide competitors, (2) 15 premium/global landscape studios, (3) 2025–26 web standards. Plus a direct audit of our own demo build.

---

## 1. The headline finding: two playbooks that contradict each other

| | Premium studios (n=15) | AU landscaping market (n=19) |
|---|---|---|
| Homepage length | **2–9 sections** | **~11 sections** (modal) |
| FAQ on homepage | 0 of Tier A/B studios | 16% — but **both** of the two best SA sites have one |
| Licence number | Never shown | 11% — and it's the top-trust SA site that shows it |
| Reviews | 0–4, text only, no stars | 32%, star ratings normal |
| Suburb lists | Omit; name city once in footer | 37% |
| Budget field on form | **0 of 15** ask | Present on SA trade sites |
| Opening move | The **work** | A **benefit claim + phone number** |

**These aren't in conflict — they describe two different businesses.**

Eckersley, COS Design and Marcus Barnett are *design-only studios* selling on reputation to clients who already know them. Their homepages are 2–4 sections of pure photography. They deliberately omit the stat bar, star ratings, free-quote form and suburb list, because **each of those helps a price-comparing buyer and repels a design-led one.** Removing them is the design work.

NextLevel is not that business. It is an **Adelaide design-and-build contractor with a retail shop**, competing for people typing "landscaping Adelaide" into Google. Structurally it is Future Landscapes and Arvion, not Eckersley.

### The resolution — and it's what the client's own reference already does

**Laguna Pools is 18 sections.** Visually editorial; structurally a conversion site — awards-forward, FAQ, stat counts, guarantees. It is closer to MetroGreenscape than to Eckersley.

So when the client says "make it like Laguna," they mean the **photography, typography and calm** — not the section count. The target is:

> **Premium visual language on a trade information architecture.**

This matters because it settles an argument I got wrong: "premium" and "has an FAQ" are not opposites.

---

## 2. What Australian landscaping sites actually do

### Frequency across 19 AU design-build homepages

| Section | % |
|---|---|
| Hero with headline | 100% |
| Footer with phone + address | 100% |
| About / positioning blurb | 95% |
| Explicit hero CTA button | 89% |
| Services block | 84% |
| Trust/credential element somewhere | 79% |
| Portfolio on homepage | 74% |
| "Why choose us" bullets | 47% |
| Service areas / suburbs | 37% |
| Testimonials | 32% |
| Association logos (MLSA/LDI/AILA) | 32% |
| Awards | 26% |
| **Process steps** | **21%** |
| Contact form on homepage | 16% |
| **FAQ** | **16%** |
| Licence number published | 11% |
| **2D/3D renders displayed** | **5%** |
| **Warranty period stated** | **5%** |
| **Any dollar figure** | **5%** |

### The modal order (SA trade sites)

`Hero → who we are → services grid (4–5) → portfolio (suburb-tagged) → why choose us → [process] → [testimonials] → [FAQ] → trust logos → closing CTA → footer`

**Nav inversion worth noting:** trade/SEO sites lead `Home → Services`. Design studios lead `Projects → Practice` and often drop "Home" entirely. CTA wording splits the same way — trade sites say *"Get a free quote"* (32%), studios say *"Enquire"* (26%).

### What the best sites do that the average don't

- **Arvion** — 5 named process steps ending in *"Detailed Fixed Quote"* and *"Final Walkthrough & Handover"*; 7-question FAQ answering cost, timeline, council; **12-month workmanship guarantee**. The only site treating buyer anxiety as a design problem.
- **Future Landscapes** (best SA trust density) — names the owner, publishes **BLD 343194**, real Google reviews, charges **$150 for the consult** (qualifies leads), lists actual suburbs.
- **Outhouse** — *quantifies* credibility ("39 Gold medals") and uses institutional testimonials (a children's hospital, a grammar school) a competitor can't fake.
- **Harrison's** — tags every project card with the services delivered, turning the portfolio into a services proof-grid.

---

## 3. The opportunity: what nobody in AU landscaping does

Out of 19 sites — and these map almost exactly onto NextLevel's real differentiators:

| Gap | Sites doing it | NextLevel's position |
|---|---|---|
| **Live / in-progress work** | **0 / 19** | Current Work tracker has *no precedent in AU landscaping* |
| **Video hero** | **0 / 19** | Already built |
| **Showing 2D/3D renders** | 1 / 19 (a design-only firm) | Their #1 stated differentiator — and they show none |
| **Cost guidance** | 1 / 19 ($150 consult fee) | Most-searched unanswered question in the category |
| **Warranty period** | 1 / 19 | Cheap to state, nobody does |
| **Before/after slider** | **0 / 19** | Built then removed — revisit with real photos |
| **Retail store integrated** | **0 / 19** | They *have* a store; in SA, landscapers and garden centres are always separate sites |

**Strongest of these: render → build.** Their entire pitch is "see it in 2D & 3D before you commit," and no competitor shows the artefact. A side-by-side of the render and the finished photo would stand alone in this market.

**Nuance on Current Work:** premium studios that show live work (Peachy Green's "In Progress" nav item, Nathan Burkett's "In Progress" filter) present it as **portfolio in a different tense** — renders and photos, project names only — *not* as a status dashboard. Our stage-tracker is more transparent but less premium. That's a deliberate trade, not an oversight; worth a client decision.

---

## 4. 2025–26 standards — and where our demo currently fails

### Thresholds that apply

- **Core Web Vitals:** LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1, at the **75th percentile of real mobile users**. INP replaced FID in March 2024 and remains current; no new metric for 2025/26.
- **Accessibility:** **WCAG 2.2 Level AA.** The Australian Human Rights Commission **upgraded its recommendation to 2.2 AA in April 2025**. This binds via the **Disability Discrimination Act 1992 s24**, which covers private businesses. *(The European Accessibility Act does not apply — no EU consumers.)*
- **Privacy:** the **statutory tort for serious invasions of privacy commenced 10 June 2025** and applies **regardless of the $3m small-business exemption**.

### Audit of our build — verified, not assumed

| # | Issue | Severity |
|---|---|---|
| 1 | **Looping hero video has no pause control** — WCAG **2.2.2 Pause/Stop/Hide is Level A**: any auto-moving content >5s needs a user-accessible pause. Same applies to the 6s headline carousel (hover-pause doesn't count — no keyboard/touch path). | **A-level failure** |
| 2 | **No skip link** (2.4.1 Level A) | **A-level failure** |
| 3 | **Zero images have `width`/`height`** — 0 of 15. Primary CLS defence missing. | High |
| 4 | **No `fetchpriority="high"` on the hero poster**; poster must be the LCP element, never the video | High |
| 5 | **4.8 MB video autoplays on mobile** — guidance is ≤2 MB mobile and **don't autoplay on mobile at all** | High |
| 6 | **All 40 images are JPEG** — AVIF/WebP would cut 30–50% on photographic content | Medium |
| 7 | **Fonts loaded from Google CDN** — self-host for speed *and* privacy (offshore transfer of IPs) | Medium |
| 8 | **No structured data at all** — no `LandscapingBusiness`, `Organization`, `BreadcrumbList` | High (SEO) |
| 9 | Video still autoplays under `prefers-reduced-motion` — should serve poster only | Medium |

**Content integrity flag:** the three Current Work entries (Prospect, Henley Beach, Burnside) are **invented**. Under the **ACL/ACCC**, testimonials and representations must be genuine — enforcement is active (PhotobookShop penalised for undisclosed influencer reviews, 2024–25). These must be clearly marked placeholder and must not survive into production. Same for any before/after pair.

### SEO specifics that change our plan

- **`LandscapingBusiness`** is the correct schema subtype (under `HomeAndConstructionBusiness`). Required: `name`, `address`. Add `geo` (5 decimal places), `telephone`, `openingHoursSpecification`, `areaServed`, `sameAs`, `image`.
- **Do NOT mark up our own testimonials with `Review`/`aggregateRating`** — self-serving review markup is a known penalty risk. Display as plain HTML.
- **FAQPage schema was deprecated May 2026 and rich results removed June 2026.** FAQ *content* still matters for AI extraction; FAQ *schema* no longer earns anything.
- **AI search:** Google's own docs state there is **no special schema or optimisation** for AI Overviews. What helps is plain, extractable text — direct answers immediately under question-shaped headings, business name and location in text, facts not baked into images.
- **Google Business Profile is ~32% of local pack ranking; the website is ~19%.** Set GBP up as a service-area business with the street address hidden (a visible home-office address is a common suspension trigger).

### Conversion evidence (the one area with weak data — flagged honestly)

- **Grounded (Baymard, large-sample):** industry average is 11.3 form fields; users visibly baulk at 10–15+. Critically — **field count matters far more than step count.** Target **5–7 fields**. Our current form has 4. Good.
- **Grounded (Invoca home-services benchmarks):** **phone leads convert at ~46%** vs ~7.8% overall. Sub-5-minute response gives a ~41.5% booking rate. → **Design phone-first**: sticky mobile bar with Call + Quote. We have a WhatsApp float but **no call button**.
- **Budget field:** include it — as a **banded select with a "not sure yet" escape**, at the *final* step. Premium studios omit it, but for $10k–$100k jobs the volume/quality trade is correct. This overrides the premium-studio finding.
- **Discard:** all multi-step form uplift figures (300%, 86%, 38–62%) are vendor marketing with no methodology. Do not repeat them to the client.
- **Pricing:** publish an **investment guide** — typical bands tied to real completed projects plus cost drivers. Never a flat "from $X" (misleading conduct risk under ACL for work needing site inspection).

---

## 5. Revised recommendation

**Homepage — 12 sections** (between the premium 2–9 and Laguna's 18, weighted to the AU evidence):

1. Hero — video + one identity sentence + primary CTA
2. **Trust strip above the fold** — MLSA · BLD320507 · insured · years · Google rating *(beats the 74% who bury this)*
3. Services — 6 cards
4. Featured projects — suburb + year + services tagged *(Harrison's/Secret Gardens formula)*
5. **Design artefact: render → built** *(1/19 do this — their #1 differentiator)*
6. Process — 5 steps ending in *fixed quote* and *handover* *(Arvion's formula)*
7. **Current Work** *(0/19 — unique)*
8. Reviews — real Google reviews, no invented ones
9. **Investment guide** — bands + cost drivers *(1/19)*
10. **Garden store band** — hours + location *(0/19 integrate retail)*
11. FAQ — 6–8: cost, timeline, council, design fee, warranty, service area
12. Contact — 5–7 fields incl. suburb, banded budget, photo upload

**Corrections to what I told you earlier:**
- "14 sections is too many" — **wrong**. AU modal is ~11, Laguna is 18.
- "Move Process to #5" — **wrong**. Only 21% have it; keep it lower (band 6).
- "FAQ and Service Areas may not belong" — **wrong**. The two strongest SA competitors both have FAQs.
- Stat bar / count-up numbers — premium research calls this a downmarket tell; AU evidence says a trust strip *does* work. **Keep it, but as credentials (licence, membership, insured, years), not vanity metrics.**

---

## 6. Open questions for the client

1. **Current Work: tracker or portfolio?** Stage-tracker is unique and more transparent; "In Progress" gallery is more premium. Their call.
2. **Investment guide** — will they publish cost bands? Biggest differentiator available, but commercially sensitive.
3. **Warranty period** — do they offer one? Stating it puts them ahead of 18/19 competitors.
4. **Consult fee** — Future charges $150 to qualify leads. Worth considering.
5. **Render assets** — do they have 2D/3D files they can show alongside finished photos?
6. **Store hours** — still missing, and garden-centre visitors actively search for them.
7. **CBS licensing** — confirm whether SA mandates the licence number in advertising *(sa.gov.au blocked our research; verify with cbs.sa.gov.au)*.
