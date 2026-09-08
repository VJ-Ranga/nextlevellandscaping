# NextLevel Landscaping — Website Redesign Plan

> **Status:** draft for client/internal discussion. **Nothing is being built yet.**
> Companion doc: [BUSINESS.md](BUSINESS.md) (verified facts). Reference site studied: <https://www.lagunapools.com.au/>.
> Prepared by Cloudycode, 2026-09-08.
>
> **Client note (2026-09-08):** for the demo, use **all the current site's details as-is** — including the existing team list, taglines and copy. Don't block the demo on client confirmation; the §9 questions still get answered before the WordPress build.

---

## 0. Brief in one paragraph

NextLevel Landscaping wants a **complete redesign and restructure** of their current WordPress/Elementor site. They dislike the "boxy" template look (div-in-div blocks with background colours). They pointed to **Laguna Pools** as the feel they want: cinematic, photography-led, lots of negative space, **curved/scooped shapes instead of rectangles**, an **ambient video hero**, and unconventional heading treatment. It should feel designed and spatial — appropriate to a landscaping business — without copying Laguna. New requirement: a **"Current Work" section** where visitors see live/in-progress jobs and **what stage each one is at**, and the client can **update that stage themselves** (planned as a WordPress custom post type + stage model). Deliverable order: **HTML demo first** (real content, placeholder brand colours), then WordPress build.

---

## 1. What we learned from the reference (Laguna Pools)

The entire "not boxy" look is **one repeated device**, not a pile of effects:

| Element | Spec |
|---|---|
| **Signature shape** | One oversized **single-corner** `border-radius` (~`150px` desktop, up to `300px` on hero CTAs, `75px` for a softer version). The rounded corner **rotates** section to section (top-left → top-right → bottom-right). Wrapper is `overflow:hidden`. Applied to full-bleed photo bands. |
| **Photo bands** | Edge-to-edge media, `background-attachment: fixed` (CSS parallax), white centred heading, dark photo or `rgba(0,0,0,0.85)` scrim. |
| **Rhythm** | Alternating **dark** / **white** / **arched-photo** bands. 100–150px vertical padding. 1200px inner container. Occasional 30px "tight" bands for contrast. |
| **Headings** | All-caps, **weight 400** (not bold), `letter-spacing: normal`, `line-height: 1.0`. H1 = H2 ≈ 45px desktop / 34px mobile. Hierarchy from **size + caps + colour**, never weight. |
| **Body** | 16px / line-height 1.8, left-aligned, ~800px measure. |
| **Buttons** | **Ghost pills only** — transparent, 1–2px border, `border-radius: 30px`, `padding: 14px 36px`, 13px uppercase 500, `letter-spacing: .5px`. Hover = slide-fill. No arrows. |
| **Colour** | Near-monochrome: one dark (`#252A36`), white, near-black, greys. **No brand accent** — all colour comes from the photography. |
| **Type family** | A single humanist sans (Almarai), ~everything at weight 400. |
| **Motion** | Fade-in-on-scroll (200/400ms stagger), Swiper carousels, CSS fixed-bg parallax, sticky header that restyles after 100px. Nothing heavier (no GSAP/Lenis/AOS). |
| **Nav** | Transparent over hero, sticky, uppercase, ElementsKit mega-menu for the "types" list, off-canvas mobile drawer. |
| **Project pages** | H1 + spec block (location, type, size, price range, collaborators, materials) + awards + one narrative paragraph + uniform gallery grid → lightbox + related projects. |

**Takeaway for us:** we copy the *system* (one arch shape, band rhythm, big airy caps, ghost pills, restrained motion), not the layout. We make it NextLevel's own with a landscaping-specific spin (below).

---

## 2. Design system (demo)

Follows the Cloudycode design-first order: palette → type → buttons → spacing. Brand palette is **[client]** pending, so the system is built like Laguna's — **neutral base, colour from photography, one swappable accent token**.

### 2.1 Colour

| Token | Value (placeholder) | Use |
|---|---|---|
| `--ink` | `#1C1F1A` near-black (very dark warm green-grey) | headings, body on light |
| `--bg` | `#FAF8F4` warm off-white | default page background |
| `--surface-dark` | `#23271F` deep "soil"/olive-black | alternating dark bands, footer |
| `--muted` | `#6B6F66` | captions, meta |
| `--line` | `#E4E0D8` | hairline dividers, form borders |
| `--accent` | `#1A56DB` (Cloudycode placeholder) | **single** accent — links, active stage, small highlights. **Swap when client delivers palette.** Likely lands on a horticultural green. |
| `--scrim` | `rgba(20,22,18,0.55)` | text-over-photo overlay |

Rule: the design must still read correctly if `--accent` is changed to one value. No second or third accent. Everything colourful is a photograph.

### 2.2 Typography

- **Workhorse:** Poppins (Cloudycode demo default) — used at **weight 400** for headings (all-caps), 400/500 for body and UI. Clean, geometric, holds up in large caps.
- Optional display alternative for H1/section headers if the client wants more character: a humanist sans (e.g. *Archivo*, *Familjen Grotesk*) — decision **[client]**, Poppins is the safe default.
- **Scale (desktop / mobile):**
  | Role | Desktop | Mobile | Style |
  |---|---|---|---|
  | Display / H1 | 48px / lh 1.02 | 32px | UPPERCASE, 400, tracking 0 |
  | Section H2 | 42px | 30px | UPPERCASE, 400 |
  | H3 (cards) | 22px | 19px | UPPERCASE, 400–500 |
  | Lead paragraph | 20px / lh 1.6 | 17px | 400 |
  | Body | 16px / lh 1.8 | 16px | 400 |
  | Meta / eyebrow | 13px | 12px | UPPERCASE, 500, tracking .12em |
  | Button | 13px | 13px | UPPERCASE, 500, tracking .04em |

### 2.3 Buttons (one system, reused everywhere)

| Variant | Style |
|---|---|
| **Primary (ghost pill)** | transparent, `1.5px solid currentColor`, `border-radius: 999px`, `padding: 15px 34px`, 13px uppercase 500. Hover: fill sweeps in (`--ink` bg / `--bg` text), 250ms. |
| **On-dark** | same, `currentColor` = white. Hover fills white. |
| **Text link** | 13px uppercase 500, underline on light / no underline on dark, subtle offset on hover. Optional `→` only on "next/more" links. |
| **Icon button** | 44px circle, hairline border (mobile menu, gallery arrows, WhatsApp float). |

Disabled = 40% opacity, no pointer. One radius scale for controls: `999px` (pills), `50%` (circles), `4px` (inputs only).

### 2.4 Spacing & layout

- 8px base scale: 8 / 16 / 24 / 40 / 64 / 96 / 128.
- Section vertical padding: `96px` desktop, `56px` mobile; "statement" bands `128px`; "tight" bands `32px`.
- Inner container: `1200px` max, `24px` gutters. Text measure capped `~760px`.
- Breakpoints (Bootstrap 5 defaults): 576 / 768 / 992 / 1200 / 1400. Mobile-first.
- **Grid is a scaffold only** — visible layout is asymmetric: headings offset left, images break to the page edge, content columns are uneven (7/5, 8/4), elements overlap band boundaries by 24–64px.

### 2.5 Shape language — "the NextLevel arch" (our version of the non-boxy device)

- **One scoop corner**, `radius: clamp(64px, 12vw, 176px)`, single corner, rotated per section (TL → TR → BR → BL cycle). `overflow:hidden` wrapper.
- Applied to: hero video frame, every full-bleed photo band, featured-project images, the Current Work hero, store category images.
- **Landscaping-specific additions** (so it's not a Laguna clone):
  - **Contour lines** — a faint topographic / garden-bed contour line motif (thin SVG, `--line` colour, ~6% opacity) used as a section divider and behind numbers/stats. Echoes site plans and land contours.
  - **Arch-masked portraits** — team and testimonial photos in a tall arch (`border-radius: 50% 50% 0 0 / 18% 18% 0 0`), like a garden archway.
  - **No hard boxes**: cards have no border and no fill — they're an image + text with a hairline `--line` divider or generous gap. Where a surface is needed (forms, store items) it's `--bg` on `--surface-dark` or vice-versa, never a mid-tone grey box, and always with a scoop corner.
- **No** wave dividers, **no** blobs, **no** drop shadows (elevation comes from the photo + whitespace).

### 2.6 Motion

- Fade/slide-up on scroll, 24px travel, 200/400/600ms stagger within a group. `IntersectionObserver`, respects `prefers-reduced-motion`.
- Swiper for: testimonials, featured projects, store products, project galleries, logo marquee.
- CSS `background-attachment: fixed` parallax on photo bands (disabled on mobile / reduced-motion).
- Sticky header: transparent over hero → after 100px gains `--bg` background + shrinks, 250ms.
- Hero video: `autoplay muted loop playsinline`, poster fallback, `preload="metadata"`, pause when offscreen.
- Nothing heavier than this. No smooth-scroll hijack, no custom cursor.

---

## 3. Information architecture (restructure)

Current site → new site:

| Now | New | Change |
|---|---|---|
| Home | **Home** | Rebuilt: video hero, arch bands, Current Work teaser, stronger credibility strip |
| About | **About** | Keep content; add real team **[client]**, licence/insurance strip, process |
| Our Services (1 long page) + 8 empty stubs | **Services** overview **+ 8 real individual service pages** | Kill the empty stubs — each service gets its own page with the real copy, material lists, related projects, FAQ, quote CTA |
| Our Work `/portfolio/` | **Our Work** (Previous / completed) | Filterable grid; richer project template with spec block |
| — | **Current Work** *(new)* | Live in-progress jobs + stage tracker (Section 4) |
| Store | **Store (NextLevel Outdoors)** | Keep enquiry-only; tidy category + product templates |
| Contact (anchor only) | **Contact** *(real page)* | Form + map + hours + phone + email + Instagram; keep the short form in the footer |
| Privacy | **Privacy** | Keep, minor cleanup |

**Global nav:** Home · About · Services ▾ (mega-menu: the 8 services + "All services") · Our Work · **Current Work** · Store · Contact — plus phone + "Get a free quote" ghost pill. Footer keeps the short quote form, quick links, store links, address block, Instagram, ABN + BLD licence, hours.

**Homepage section order (proposed):**
1. Sticky transparent header
2. **Ambient video hero** — full-bleed, scoop corner, **no text on the video**; a short scroll cue
3. **Headline band** (dark) — H1 "TAKING ADELAIDE GARDENS TO THE NEXT LEVEL" + 2-line intro + 2 ghost pills, left ~55% column, contour motif right
4. **Credibility strip** — 10+ years · 4 signature transformations · BLD320507 · MLSA member · Lawn Solutions authorised distributor
5. **What we do** — the 8 services as alternating arch photo bands (image left/right, copy opposite), each linking to its page
6. **Signature projects** — Swiper of the 4 real projects, spec chips (suburb, scope)
7. **Current Work teaser** (dark) — "HAPPENING NOW" + 2–3 live jobs with a mini stage bar → Current Work page
8. **Our process** — 4 numbered circles (Consultation → Design → Execution → Aftercare)
9. **NextLevel Outdoors** store teaser — 4 category tiles, arch images
10. **Reviews** — Swiper of the 7 Google reviews, arch-masked avatars
11. **Contact band** — short form + phone + address + map, scoop corner
12. Footer

---

## 4. "Current Work" feature — detailed spec

### 4.1 Concept

A public page showing jobs **currently in progress**, each with a visible **pipeline of stages** and a highlighted **current stage**, an optional "what's happening now" note, an ETA, and a small photo set. The office can **update the current stage and note themselves** from the WordPress admin with no developer involvement. When a job finishes it converts to a normal portfolio entry.

### 4.2 Stage pipeline (proposed default — confirm with client)

`1` Consultation & Site Assessment →
`2` Design & Quote (2D/3D) →
`3` Approvals & Scheduling *(incl. council where needed)* →
`4` Site Prep & Excavation →
`5` Hardscaping — paving, retaining walls, structures →
`6` Fencing & Features →
`7` Irrigation & Services *(lighting, stormwater, drainage)* →
`8` Soft Landscaping — soil, planting, turf →
`9` Detailing & Clean-up →
`10` Handover & Aftercare ✓

Front-end shows a **stepper**: completed stages ticked, current stage filled with `--accent` + label + note, upcoming stages as hairline outlines. A derived **% complete** = current stage index ÷ total. Mobile: horizontal scroll or vertical stepper.

### 4.3 WordPress data model (recommended)

- **New CPT: `current_work`** (`Current Work`), `has_archive`, Gutenberg + featured image + gallery.
- **Fields (ACF, or native meta if avoiding ACF):**
  | Field | Type | Notes |
  |---|---|---|
  | `suburb` | text | e.g. "Prospect" |
  | `client_type` | taxonomy `client-type` | reuse existing (residential/commercial) |
  | `services_involved` | taxonomy or multi-select | links to the 8 services |
  | `start_date` | date | |
  | `est_completion` | date | drives "ETA" |
  | `current_stage` | **select** (1–10 list above) | the field the office edits |
  | `current_note` | textarea | "This week: laying travertine to the pool surround" |
  | `stage_log` | repeater → { date, stage, note, optional photo } | builds a timeline / progress feed |
  | `gallery` | gallery | progress photos |
  | `is_complete` | true/false | when true, hide from Current Work; offer 1-click "convert to portfolio" |
- **Stages source of truth:** a single PHP array (or an options-page repeater) so the label set is edited in one place and reused by the field, the stepper, and the log.
- **Optional taxonomy `project-stage`** instead of a select — only if the client wants to *filter/group* current jobs by stage on the archive. The select is simpler and enough for v1.
- **Editing UX for the office:** open the job → change `current_stage` dropdown → type `current_note` → (optional) add a `stage_log` row with a photo → Update. That's it. A short admin how-to goes in the handover doc.
- **Front end:** custom single + archive templates in the child/custom theme (not Elementor) so the stepper is a clean component. Archive = arch-image cards with a mini progress bar; single = hero + stepper + "happening now" + timeline (from `stage_log`) + gallery + related completed work + quote CTA.

### 4.4 Demo (HTML) version

- `assets/data.js` → `currentWork: [{ id, title, suburb, services:[], startDate, etaDate, stageIndex, note, updates:[{date, stage, note}], images:[] }, …]` plus a shared `STAGES` array.
- `current-work.html` renders cards; `current-work-detail.html` (or a JS-routed view) renders the stepper + timeline.
- To demonstrate the "client can update" flow: a small **"Demo: update status"** control (dropdown + note field) that live-updates the stepper and prepends a timeline entry **in memory only** (no persistence) — satisfies the "fully working UI" demo rule and shows the client exactly what their admin action does.
- 3 sample in-progress jobs with realistic Adelaide suburbs and NextLevel-typical scope (Versawall beds, travertine paving, TifTuf turf, Colorbond + slat fencing).

---

## 5. Page templates (demo)

| Page | Key sections |
|---|---|
| **Home** | Section order in §3 |
| **About** | Arch hero · "Who we are" · Mission · 3 values (contour bg) · Why choose us + licence/insurance strip · Process (4 circles) · Team (arch portraits) **[client]** · Reviews · Contact band |
| **Services (index)** | Intro · 8 services as alternating arch bands · "How we work" · quote CTA |
| **Service (×8)** | Arch hero (service photo) · description (verbatim copy) · **materials/options** list · "where we use it" · 2–3 related projects · service FAQ · quote form. Fixes the empty-stub problem. Service copy expanded from the current one-liners for the demo; final wording confirmed with client before WP. |
| **Our Work (index)** | Filter chips (client-type, service) · arch-image project grid · load-more · CTA |
| **Project (×4)** | H1 + spec block (suburb, date, services, headline materials) · narrative (verbatim) · gallery grid → lightbox · "materials used" chips · related projects · quote form |
| **Current Work (index)** | "Happening now" intro · in-progress cards w/ mini stage bar · (optional filter by stage) |
| **Current Work (detail)** | Arch hero · **stage stepper** · "this week" note · **timeline** (stage log) · progress gallery · ETA · related completed work · CTA |
| **Store** | Intro · 3 value props · 4 categories (arch tiles) · Lawn Solutions / turf range · top products (Swiper) · enquiry note · contact |
| **Product** | Image gallery · description · "P.O.A — enquire" form · related products |
| **Contact** | Split: form (full quote fields) + details (phone, email `info@…`, address, **hours [client]**, Instagram) + embedded map · footer short form stays |
| **Privacy** | Long-form legal, verbatim from current site |

Global: sticky header + mega-menu, footer with short quote form, **WhatsApp float button** (Cloudycode standard — number **[client]**), skip-link, back-to-top.

---

## 6. Demo build — stack & structure

Per Cloudycode standards:

- **Bootstrap 5** (grid/utilities scaffold only) + **custom CSS layer** carrying the whole visual language (`assets/css/style.css`, organised: tokens → base → layout → components → sections → utilities).
- **Poppins** via Google Fonts. **Font Awesome** for icons.
- **Swiper** (carousels), vanilla JS for: scroll reveal, sticky header, mega-menu, mobile drawer, gallery lightbox, form validation + success state, the **stage stepper + demo status update**, WhatsApp float.
- **No build step** — static HTML, works opened directly / on any static host.
- Content/data in **`assets/data.js`** (services, projects, current work, stages, reviews, store products, nav) so it's easy to edit and maps 1:1 to the future CPT fields.
- Imagery for the demo: pull the **real project photos** from the current site's media library + a few licensed landscaping/b-roll stock shots for the hero and empty slots. All fully working UI, no lorem-ipsum in visible copy (use verbatim business copy from BUSINESS.md).

### Proposed file tree

```
demo/
  index.html
  about.html
  services.html
  service-paving.html            (+ 7 more, or one service.html + data)
  our-work.html
  project-grandeur-on-grange.html (+ 3 more, or one project.html + data)
  current-work.html
  current-work-detail.html
  store.html
  product.html
  contact.html
  privacy.html
  assets/
    css/style.css
    js/main.js
    js/stepper.js
    data.js
    img/ (hero, services/, projects/, current/, store/, team/, icons)
    vendor/ (bootstrap, swiper, fontawesome)
```

---

## 7. WordPress build (after demo sign-off) — direction

- **Theme approach:** the current site is 100% Elementor on `hello-elementor`. For this level of custom, non-boxy design + the Current Work component, recommend a **lightweight custom child theme** (child of `hello-elementor` or a purpose-built theme) that owns:
  - the design-system CSS (single source of tokens),
  - custom templates for `service`, `portfolio`, `current_work` singles/archives,
  - the stage stepper component + logic.
  Editable marketing sections (home bands, about, store copy) can **stay in Elementor** using a tight set of global styles so editors keep their familiar workflow. Alternative (fully custom block theme) is cleaner long-term but a bigger lift and retrains the editors — **decision [client]**.
- **Keep** existing CPTs `service`, `portfolio`, `products` and taxonomies; **add** `current_work` (+ ACF fields per §4.3).
- **Forms:** keep Elementor Pro Forms + reCAPTCHA; wire the full quote form fields from BUSINESS.md §8.
- **SEO fixes:** real meta descriptions on every page (Yoast), `og:locale` → `en_AU`, `LocalBusiness` schema with `areaServed`, address, hours, `geo`, `sameAs` (Instagram), per-service and per-project schema, XML sitemap unchanged.
- **Migration hygiene (Cloudycode WP rules):** no hardcoded `localhost` in templates — root-relative `/wp-content/uploads/...` for fixed assets, search-replace tool for content URLs; after migration test live desktop **and** mobile separately (image requests, failed requests, console warnings); check for `wp_template_part` DB overrides before assuming a template change deployed; if frontend CSS is loaded into Gutenberg via `add_editor_style()`, add scoped `.editor-styles-wrapper` overrides for the sticky header / parallax / z-index layers.
- **Performance:** self-host the hero video (compressed MP4 + poster, ~2–4MB, `preload=metadata`), lazy-load images, defer non-critical JS, limit Swiper instances, cache plugin + image CDN as per host.
- **Accessibility:** semantic landmarks, one H1/page, visible focus, `prefers-reduced-motion` disables parallax + autoplay motion, video `muted` + controls fallback, colour contrast AA against the final palette, form labels + error announcements, mega-menu keyboard-operable.

---

## 8. Suggested build split (sub-agents)

Each sub-agent gets: this plan, BUSINESS.md, the shared `assets/css/style.css` tokens + `assets/data.js` schema (built first), and a "match the design system exactly" instruction.

| Agent | Scope | Depends on |
|---|---|---|
| **A — Design system + shell** | `style.css` (tokens → components), shared header/mega-menu/footer, WhatsApp float, scroll-reveal + sticky JS, `data.js` skeleton | — |
| **B — Home + About** | `index.html`, `about.html` | A |
| **C — Services** | `services.html` + 8 service pages (or `service.html` + data), service FAQ | A |
| **D — Work + Current Work** | `our-work.html`, project template ×4, `current-work.html`, `current-work-detail.html`, `stepper.js`, demo status-update control | A |
| **E — Store + Contact + QA** | `store.html`, `product.html`, `contact.html`, `privacy.html`, form validation, full responsive + a11y + cross-page QA pass | A–D |

Interfaces are the CSS tokens and the `data.js` schema — agents don't touch each other's files.

---

## 9. Open questions for the client

1. **Brand palette + logo** — biggest blocker for final polish. Demo uses neutral + `#1A56DB` placeholder; expecting a green.
2. **Hero video** — do they have drone/site footage? If not, approve stock b-roll for the demo.
3. **Current Work stages** — confirm the 10-stage pipeline in §4.2 (names, order, count). Do they want visitors to see the ETA date, or just "on track / delayed"?
4. **Current Work editing** — confirm ACF is acceptable (recommended) vs native meta boxes.
5. **Real team** — demo will use the current site's team list as-is (per client note); confirm/replace real names, roles and photos before the WP build.
6. **Services** — is the 8-service list final? Individual service pages (recommended) vs one long page?
7. **Store** — stay enquiry-only, or plan for WooCommerce later?
8. **Trading hours**, **WhatsApp number**, **Google Business Profile / Facebook URLs**.
9. **Theme approach** for the WP build — custom child theme + keep Elementor for content (recommended) vs full custom block theme.
10. **Experience claim** — "over a decade" or "decades"? Any real founding year to cite?
11. **Typeface** — Poppins (default) or a more editorial humanist sans for headings?

---

## 10. Next steps

1. Client reviews this plan + `BUSINESS.md`; answers §9.
2. Lock the design system (palette placeholder confirmed, type, shape device).
3. Build `assets/css/style.css` + `data.js` + shell (Agent A).
4. Build pages (Agents B–E), review the demo.
5. Client sign-off on the demo → WordPress build per §7.
