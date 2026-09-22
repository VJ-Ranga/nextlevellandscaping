# Demo2 Three Visual Versions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a separate `demo2/` static website with a focused eight-section homepage and three selectable visual directions, without modifying the existing `demo/`.

**Architecture:** `demo2/` will use the existing static HTML approach. One `data.js` file owns business content, `partials.js` owns shared navigation/footer, `main.js` owns rendering and interactions, and one base stylesheet plus three scoped theme stylesheets provide the visual alternatives. The theme switcher will persist the selected version in `localStorage`, matching the current demo's comparison workflow.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Bootstrap 5 grid/utilities, Font Awesome, Poppins, Swiper CDN. No build step.

## Global Constraints

- Keep all new work inside `demo2/`; do not modify files under `demo/`.
- Use the existing verified facts and copy from `BUSINESS.md` and the existing `data.js`.
- Use a centred header in all three versions.
- Keep the homepage to exactly eight content sections plus shared header/footer.
- Use balanced asymmetrical image corners selectively, not on every card or section.
- Version 2 must use the Carbon Soft direction immediately after the hero.
- Keep the demo fully functional when opened from a static host or local file server.
- Respect keyboard focus and `prefers-reduced-motion`.

---

### Task 1: Create demo2 shell and content model

**Files:**
- Create: `demo2/index.html`
- Create: `demo2/assets/data.js`
- Create: `demo2/assets/js/partials.js`
- Create: `demo2/assets/img/` references using existing project assets copied into `demo2/assets/img/`

**Interfaces:**
- `window.NLL2` provides `services`, `projects`, `currentWork`, `stages`, `reviews`, `store`, and `process` arrays.
- `partials.js` inserts the shared header, mobile drawer, footer, and WhatsApp link before `main.js` runs.

- [ ] **Step 1: Define the eight-section content contract**

Use these section IDs in `index.html`: `hero`, `trust`, `services`, `feature`, `current-work`, `method`, `proof`, and `contact`. Put all repeated content in `window.NLL2`; do not duplicate project or service copy in rendering logic.

- [ ] **Step 2: Build the centred navigation shell**

Create a centred desktop navigation with links to the eight homepage anchors, `Our Work`, and `Current Work`. Add a mobile drawer, phone CTA, free-quote CTA, and accessible labels.

- [ ] **Step 3: Copy only required local imagery**

Copy or reference the existing local images needed for the hero, services, featured project, current work, and store teaser. Ensure every image has meaningful alt text and no reference points outside `demo2/`.

- [ ] **Step 4: Verify the shell statically**

Check every image and script path against the `demo2/` tree and confirm the page contains one H1 and the eight required section IDs.

### Task 2: Implement the shared layout and three theme styles

**Files:**
- Create: `demo2/assets/css/style.css`
- Create: `demo2/assets/css/theme-carbon-soft.css`
- Create: `demo2/assets/css/theme-plan.css`
- Create: `demo2/assets/css/theme-nocturne.css`
- Create: `demo2/assets/js/theme.js`

**Interfaces:**
- Themes are selected by `html[data-theme="carbon-soft"]`, `html[data-theme="plan"]`, or `html[data-theme="nocturne"]`.
- `theme.js` stores the selected theme under `nll-demo2-theme` and updates `aria-pressed` on theme buttons.

- [ ] **Step 1: Add base tokens and responsive rules**

Define tokens for background, ink, muted text, rule, accent, radius, container width, and section spacing. Use a 1200px maximum container, mobile-first breakpoints, visible focus styles, and a reduced-motion media query.

- [ ] **Step 2: Add selective image shape utilities**

Create `.shape-tl`, `.shape-tr`, `.shape-bl`, and `.shape-br` utilities using one large corner radius. Apply them only to hero, feature, and selected editorial images. Keep project cards mostly square.

- [ ] **Step 3: Implement Carbon Soft as the default**

Use charcoal and soft off-white as the main surfaces, lime as the single accent, centred header, quiet rules, and the screenshot-inspired asymmetrical image crop. The trust section directly after the hero must be Carbon Soft and contain the positioning statement plus credentials.

- [ ] **Step 4: Implement Plan as a distinct alternative**

Use a continuous paper ground, technical labels, hairline guides, and restrained olive/lime marks. Keep the same content and section order while changing only presentation.

- [ ] **Step 5: Implement Nocturne as a distinct alternative**

Use a continuous near-black ground, off-white type, catalogue-style serif display headings, photography-led contrast, and minimal rules. Do not introduce additional accent colours.

- [ ] **Step 6: Implement the theme comparison bar**

Add three labelled buttons with swatches, keyboard operation, persisted selection, and `aria-pressed`. Default to Carbon Soft and avoid exposing internal theme names in user-facing copy beyond the comparison controls.

### Task 3: Build the eight homepage sections and interactions

**Files:**
- Modify: `demo2/index.html`
- Create: `demo2/assets/js/main.js`

**Interfaces:**
- `main.js` reads `window.NLL2` and renders into `#service-list`, `#feature-project`, `#current-work-list`, `#review-list`, and `#store-list`.
- Form submission displays a local demo success state and never claims that a message was sent to the business.

- [ ] **Step 1: Build the hero section**

Use an ambient video with poster fallback, one concise H1, one primary quote CTA, one secondary work CTA, and a scroll cue. Pause video when offscreen and disable motion behavior under reduced-motion.

- [ ] **Step 2: Build the trust section**

Combine the business statement, 10+ years claim, BLD320507, MLSA, Lawn Solutions Australia, and South Australian ownership into one focused section. Do not repeat a separate stats band.

- [ ] **Step 3: Build the services explorer**

Render all eight services from data. Desktop uses a list plus one changing image/details panel; mobile uses accessible click-to-open accordions. Every service action links to a meaningful `#contact` quote intent or the future service route, never `#`.

- [ ] **Step 4: Build the featured transformation**

Combine before/after comparison, one featured project, selected scope details, and a link to `our-work.html` into one editorial section. The comparison control must support pointer/touch dragging and keyboard arrows.

- [ ] **Step 5: Build Current Work**

Render three active jobs with current stage, percentage, ETA, note, and compact progress bars. Link each job to `current-work-detail.html?slug=...` and keep the stage source in one `stages` array.

- [ ] **Step 6: Build method and credibility**

Combine the four process steps with a short “why choose us” statement, licence, local ownership, and managed-trades/council-approval proof without creating a second statistics section.

- [ ] **Step 7: Build proof and store teaser**

Use a Swiper review rail followed by a compact NextLevel Outdoors category strip. Keep the store enquiry-only and link the CTA to `#contact`.

- [ ] **Step 8: Build contact and footer**

Use the existing quote fields, accessible validation, phone/email/address/Instagram details, explicit trading-hours pending label, privacy link, and WhatsApp CTA.

### Task 4: Add supporting demo pages and shared behavior

**Files:**
- Create: `demo2/our-work.html`
- Create: `demo2/project.html`
- Create: `demo2/current-work.html`
- Create: `demo2/current-work-detail.html`
- Modify: `demo2/assets/js/main.js`

**Interfaces:**
- Project pages resolve a project using `?slug=` from `NLL2.projects`.
- Current Work detail pages resolve a job using `?slug=` from `NLL2.currentWork`.
- All supporting pages use the same `partials.js`, data schema, theme switcher, lightbox, and theme styles.

- [ ] **Step 1: Port the project index and filtering**

Render project cards from data and make filter buttons actually filter by suburb/service/tag. Keep an accessible empty state if no projects match.

- [ ] **Step 2: Port project detail and lightbox**

Render project metadata, narrative, scope, gallery, related projects, and keyboard-operable lightbox from the selected slug.

- [ ] **Step 3: Port Current Work index and detail**

Render the stage pipeline, completion percentage, current note, timeline, gallery, and fallback behavior for an unknown slug.

- [ ] **Step 4: Verify cross-page relative paths**

Check that shared assets resolve from each page directory level and that every navigation link works within `demo2/`.

### Task 5: Responsive, accessibility, and content QA

**Files:**
- Modify: `demo2/index.html`
- Modify: `demo2/our-work.html`
- Modify: `demo2/project.html`
- Modify: `demo2/current-work.html`
- Modify: `demo2/current-work-detail.html`
- Modify: `demo2/assets/css/style.css`
- Modify: `demo2/assets/js/main.js`

- [ ] **Step 1: Run static consistency checks**

Confirm one H1 per page, no `href="#"` placeholders, no missing local image references, no missing script/style references, and no duplicated business claims that conflict with `BUSINESS.md`.

- [ ] **Step 2: Check responsive layouts**

Review 1440px, 1024px, 768px, and 390px widths. Confirm centred navigation collapses correctly, image curves do not crop important content, progress bars remain readable, and forms fit without horizontal scrolling.

- [ ] **Step 3: Check keyboard and reduced motion behavior**

Tab through navigation, theme buttons, service controls, sliders, filters, lightbox, form, and Current Work links. Confirm focus is visible and reduced-motion removes autoplay/reveal/parallax transitions.

- [ ] **Step 4: Check content and conversion flow**

Verify the main CTA appears in hero, trust, feature, Current Work, and contact areas, and all quote actions reach the contact form or telephone link.

- [ ] **Step 5: Record remaining client inputs**

Keep the final brand palette, real team details, trading hours, hero footage approval, WhatsApp confirmation, Current Work photos, and final service list clearly marked as client-provided inputs in `demo2/README.md`.

### Task 6: Document and hand off demo2

**Files:**
- Create: `demo2/README.md`
- Modify: `README.md`

- [ ] **Step 1: Document local run instructions**

Document `python3 -m http.server 8000` from the project root and the URL `/demo2/`.

- [ ] **Step 2: Document the three visual versions**

Explain Carbon Soft, Plan, and Nocturne, identify Carbon Soft as the recommended direction, and explain that the theme picker persists in the browser.

- [ ] **Step 3: Document editable data**

Explain that `demo2/assets/data.js` is the only demo content source and identify the arrays used by each section.

- [ ] **Step 4: Verify the final file tree**

Confirm all demo2 files are present, the original `demo/` is unchanged, and no generated or secret files are included.
