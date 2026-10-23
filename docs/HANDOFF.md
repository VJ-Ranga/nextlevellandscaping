# NextLevel Landscaping — handoff for Claude Code (cloud)

Read this first. It replaces the Obsidian vault, which lives only on VJ's machine
(`~/Documents/obsidian-data/clients/next-level-landscaping/`). Updated 2026-10-23 (afternoon).

## The project
- Cloudycode client: NextLevel Landscaping, Adelaide SA — landscape design & construction (paving, retaining walls, fencing, turf, irrigation, design) + commercial work. Licensed builder BLD320507, MLSA member.
- Full redesign of their WordPress/Elementor site. Style reference: Laguna Pools (cinematic, photo-led, big single-corner "scoop" curves, video hero). Theme = **Carbon** (`style-carbon-soft-v2.css`).
- **End goal:** sign off the HTML design → **convert to WordPress** with an editable backend (theme approach: block theme — to confirm) → launch → handover.
- **Current stage: Phase 5 — UI finalising.**

## Repo layout
- `site/` — **the real build. Edit here.** 13 static pages, Bootstrap 5 + Font Awesome + Poppins + Swiper. Content in `site/assets/data.js`.
- `demo/` — copy of `site/` plus an options bar (`demo-bar.js`, `demo-variants.css`) letting the client compare header font sizes (F/G). **Mirror every `site/` change into `demo/`** (copy shared CSS/JS; edit HTML in both).
- Shared header/footer for sub-pages: `site/assets/js/partials.js`. **The homepage (`index.html`) has its own inline header AND footer** — edit both places.
- Extra CSS layers appended to `site/assets/css/style.css` (Stage 02 V2 blocks at the end), `hero-final.css` (homepage hero), theme file `style-carbon-soft-v2.css` loads after `style.css` (same-specificity rules there win — use `body` / more specific selectors to override).
- **Cache-busting:** bump the `?v=` on every changed CSS/JS link in all pages (site + demo), or the client sees old files.

## Deploy (GitHub Pages)
- Live: https://vj-ranga.github.io/nextlevellandscaping/site/ (and `/demo/`). Served from the `gh-pages` branch, which is a separate history containing copies of `site/` + `demo/` + a landing `index.html`.
- After pushing `main`: check out `origin/gh-pages` in a worktree, replace `site/` and `demo/` with `git archive HEAD site demo`, commit "Deploy: site/ + demo/", push to `gh-pages` (normal push, no force). Wait ~1 min, verify with curl.

## Working rules (from VJ — follow strictly)
- **Do not edit anything until VJ says to.** When asked to "check" or "tell me", only report. Log requirements; build only on a clear go.
- Follow the numbering of the client requirement list exactly (#72, #78…). Don't invent your own numbering.
- Verify every visual change in a browser at desktop **and** mobile before saying it's done; say plainly what was and wasn't checked.
- After building: commit, push `main`, deploy `gh-pages`, then tell VJ to hard-refresh.
- Never add `Co-Authored-By` to commits.
- Don't push the client photo folder `images/` (not in the repo; public repo). Compress any image/video before adding it.
- Settled design decisions — don't change without asking: hero A3+B2+D2 (text right, one fixed button); slide arrows = bare chevron, **square** light box on **hover only**; footer = E5 "Contour footer"; header nav 18px / top row 14.5px; contour lines opacity .05; pipe-separated service tags; curved outer corner on service photos.

## To do now (Phase 5) — updated 2026-10-23

**Old feedback is closed.** Rounds #1–#71 are all done; #10 is closed (covered by the A3 hero choice). Only the latest items below matter.

### Build first — #78 Our Process: Residential | Commercial tabs ✅ READY
- Add a Residential | Commercial switch near the top of `process.html` (under the page hero). Make it linkable: `process.html#commercial`.
- **Residential side: keep everything exactly as it is** (4 steps, step detail, 10 build stages, CTA).
- Commercial side, using the client copy at the bottom of this file: label + heading + intro → "Ways to engage us" (4 cards) → the 8 stages as a numbered vertical stage list (title · one-line summary · "What happens") — **not a wide table**, must work on mobile → CTA.
- CTA buttons: "Send a tender or EOI" → `contact.html` for now (commercial form #79 doesn't exist yet); "Request our compliance pack" → `compliance.html` (built next; until then leave it pointing there).
- Tabs must be keyboard-accessible (proper tab roles or buttons + aria). Mirror into `demo/`.

### Build second — #72 Safety, Quality & Compliance page ✅ READY (with placeholders)
- New `compliance.html` from the client copy below (12 sections; follow their "Developer note" lines).
- Placeholders: stand-in hero photo until the client sends "crew in PPE beside an excavator"; show **all 9** safety points (their note says 8); **leave out the Saint Ignatius College / RSPCA SA proof line** until the client OKs naming them; policies as a plain list (no PDFs yet).
- Buttons → `contact.html` for now. Add a footer link to the page (menu placement waits for #74).

### Needs answers first — don't build yet
- **#79 Commercial enquiry form** on Contact — both new pages link to it. Waiting on fields + which email it goes to.
- **#74 Menu reorganisation** — write a proposal only. Current header: top row = About · Our Process · Reviews · FAQ (plain links, **no About dropdown**); main row = Our Work · Current Work | logo | Services ▾ · Contact. It is 2 + logo + 2, so a 5th main item breaks the balance — account for that.

### Waiting on client content — don't build yet
- **#73 Commercial Work landing page** — ✅ DRAFT built 2026-10-23 (`commercial.html`, footer link "Commercial Work"): RSPCA SA (O'Halloran Hill) featured with client photos, Saint Ignatius (text), Penfield before/after, compliance tiles, ways to engage, CTA. Names/photos to be confirmed by the client.
- **#75 Sub-services** — NOT a menu/submenu. On each `service.html`, a section copying the homepage **"What we do"** section (numbered list left; photo + title + description + tags right, switching on hover/click). Waiting on the sub-service list per service.
- **#76 Certificate logos** — ✅ built 2026-10-23: official MLSA, Lawn Solutions Australia and CITB SA logos in `assets/img/brand/certs/`, shown in the homepage `#credline` strip (4 columns; CITB added as a 4th credential).

### Still placeholders on the live site
Facebook links (`#`), the 5 guide PDFs in `assets/downloads/`. Client sign-off still pending on the process-section design and the stock hero video.

## Later phases
6 UI sign-off → 7 WordPress build (CPTs `service` + sub-services, `portfolio`, `current_work` with stages; forms; SEO schema; performance) → 8 QA & launch → 9 handover.

---

## Client copy — Safety, Quality & Compliance page
NextLevel Landscaping

### Website – Safety, Quality & Compliance Page
Content suggestions for the web developer · 18 October 2026

### Page copy

#### 1. Hero
Heading: Safe, compliant and accountable on every site
Subheading: Licensed, insured and run under a documented WHS system, so builders, councils, schools and facility managers can engage us with confidence.
Buttons: Request our compliance pack · Talk to us about a project
> [!note] Developer note: Photo of crew in PPE working beside an excavator, with site fencing in view.

#### 2. At a glance
> [!note] Developer note: Four tiles in a row (stacked on mobile).
- $20 million public liability insurance
- Licensed builder BLD320507 (SA)
- Member of Master Landscapers SA
- Registered with CITB South Australia

#### 3. Introduction
Much of our work happens where people live, learn and work: operating schools, animal shelters, council spaces and occupied homes. Safety and compliance are planned before we arrive, not added on site.
Our team brings decades of combined experience across landscape construction, plant operation, site supervision, quality control and health and safety. Every project has a central point of contact and senior oversight from first site visit to handover.

#### 4. Licences and registrations

| Credential | Details |
|---|---|
| Building work contractor licence | BLD320507, Consumer and Business Services SA |
| Licence conditions held | Retaining walls; fencing (excluding brick, pool and masonry); stormwater; concrete path paving; brick and segmental paving  |
| Industry membership | Master Landscapers Association of South Australia |
| Training registration | Construction Industry Training Board (CITB) South Australia |
| Supplier prequalification | Registered on contractor platforms used by principal contractors, including Felix, Rapid Global, Ventia and ICN |
| Legal entity | Adelaide Express Services Pty Ltd trading as NextLevel Landscaping, ABN 15 642 563 513 |

#### 5. Insurance
We carry insurance suited to commercial and institutional work. Current certificates of currency are available on request.

| Cover | Details |
|---|---|
| Public liability | $20 million |
| Workers compensation | ReturnToWorkSA  |
| Motor vehicles and plant | All vehicles and earthmoving equipment comprehensively insured |

#### 6. How we manage safety
> [!note] Developer note: Card grid, two columns on desktop. Same eight points as the capability statement, so both say the same thing.
- Safe Work Method Statements. Task-specific SWMS for high-risk work such as excavation, trenching and plant operation, reviewed with the crew before work starts.
- Site inductions. Every worker and subcontractor is inducted to site rules, hazards, access routes and emergency arrangements.
- Plant pre-start checks. Our excavators, Bobcats, Kanga loaders and vehicles are inspected each day before use, using a documented pre-start checklist.
- Principal contractor requirements. We work within the safety systems of builders and head contractors, including their inductions, permits to work and site rules.
- Live-site controls. Access, noise, plant movement and public-safety controls are planned around school timetables and facility operations.
- Underground services checks. Before any excavation we lodge a Before You Dig Australia enquiry and review the asset plans with the crew. Services are located and marked on site before digging starts.
- Incident and hazard reporting. Hazards, near misses and incidents are reported, recorded and passed to the client or head contractor promptly.
- Director oversight. A director oversees our WHS system and reviews it as the business and our project types change.
- PPE and competency. Crews wear PPE suited to the task, and plant is operated only by people who hold the relevant tickets.

#### 7. Working on live sites
Schools, community facilities and animal shelters stay open while we work. We plan the job around the people using the site.
- Work zones fenced and signed, with clear separation from students, staff, the public and animals
- Deliveries and heavy plant scheduled outside peak times where possible
- Staged delivery, so areas can be handed back and used while the next stage proceeds
- Underground services identified through Before You Dig Australia before any excavation starts
- Retained trees protected with tree protection zones, and care taken around existing services and drainage
- One point of contact for the site manager or facilities team
> [!note] Developer note: Proof line under the list:
At Saint Ignatius College we delivered landscaping across several stages on an operating campus. At RSPCA South Australia we built animal shelters, a 375m jump-proof fence, Large animal shelter and new grounds while the site continued to care for animals.

#### 8. Subcontractors
We self-perform most of our landscaping work with our own crews and plant. Where a specialist trade is needed, subcontractors work under our WHS requirements.
- Licence, insurance and SWMS checked before they start on site
- Inducted to the site and to our safety expectations
- Supervised by our team, with the work checked against the scope

#### 9. Quality and handover
- Design to delivery under one roof. Our in-house landscape architect produces 2D and 3D designs, and the same team builds them, so the design intent carries through to site.
- Director-led quality checks at key stages, not only at the end.
- Clear handover: a final walk-through with the client, plus plant and irrigation care guidance.
- Local supply: we buy South Australian products where available.

#### 10. Our policies.
- Work Health and Safety Policy 
- Modern Slavery Policy 
- Quality Policy 
- Environmental Policy 

#### 11. Compliance documents on request
Procurement and contracts teams can request our compliance pack, which includes:
- Certificates of currency for public liability, workers compensation and vehicles and plant
- Building work contractor licence
- WHS policy and sample SWMS
- Modern slavery policy
- Capability statement and project references

#### 12. Call to action
Heading: Need our documents for prequalification or a tender?
Text: Tell us about your project and we'll send our compliance pack, usually within one business day.
Button: Request our compliance pack (links to the commercial enquiry form on the Contact page)

---

## Client copy — Our Process: Commercial pathway

### Page copy

#### Section heading and intro
Label: Commercial projects
Heading: How we work with builders, councils and project teams
Intro: Commercial work runs to your procurement process, not ours. Whether you invite us to tender, request a quote or want early input on a design, you get a clear price, the documents you need, and one point of contact from first enquiry to the end of the defects period.

#### Ways to engage us
- Invite us to tender. Send your RFQ, RFT or EOI documents and we'll respond within your timeframe, complete and compliant.
- Request a quote. For smaller packages or direct engagement, we'll inspect the site and provide an itemised quote.
- Add us to your panel or platform. We're set up for supplier prequalification and can complete your onboarding requirements.
- Involve us early. Our in-house landscape architect can help develop the design, budget and staging before you go to market.

#### Our commercial process

| Stage | Brief description | What happens |
|---|---|---|
| 1. Prequalification and registration | We get approved as your supplier before the work comes up. | We supply our capability statement, licence, insurance certificates, WHS documents and company details, and complete your supplier or subcontractor prequalification. |
| 2. Invitation and Expression of Interest | You tell us about the opportunity and we confirm we're the right fit. | We review your EOI or invitation and respond with relevant experience, resources and availability. If a package isn't the right fit, we'll tell you early. |
| 3. Site inspection and document review | We understand the scope fully before we price it. | We attend site meetings or inspections, review drawings and specifications, and raise RFIs on anything unclear so every bidder works from the same information. |
| 4. Tender or quote submission | You receive a complete price you can compare like for like. | An itemised price with clear inclusions and exclusions, a proposed programme and staging, methodology, and the compliance documents your tender requires. Value-engineered alternatives are offered as separate options. |
| 5. Clarification, negotiation and award | We finalise the scope and terms so there are no surprises. | We answer tender clarifications, attend interviews and work through scope or programme adjustments. On award, we review and sign the contract or subcontract and lodge current certificates of currency. |
| 6. Mobilisation | Everything is in place before we arrive on site. | We attend the pre-start meeting, confirm the programme, submit site-specific SWMS, lodge Before You Dig Australia enquiries, complete site inductions and submit material samples for approval. Long-lead materials and plant are ordered and booked. |
| 7. Delivery and reporting | We build to programme and keep you informed. | Work proceeds in agreed stages with quality checks at hold points. You receive regular progress updates and photos. Variations are priced and approved in writing before work starts, and progress claims are submitted on the agreed schedule. |
| 8. Practical completion, handover and defects period | We finish properly and stay responsible after handover. | We complete a joint inspection, close out any defects and hand over as-built information, warranties, and plant and irrigation care guidance. We remain responsible through the defects liability period, and can provide ongoing maintenance or plant establishment if required. |

#### Call to action
Heading: Have a tender, EOI or package to price?
Text: Send us your documents or tell us about the project. We'll confirm whether it's a fit and what we need from you.
Buttons: Send a tender or EOI (links to the commercial enquiry form) · Request our compliance pack (links to the Safety, Quality & Compliance page)

### Developer notes and items to confirm
Add this as a second pathway on the existing Our Process page, with a Residential | Commercial toggle or tabs near the top, as the consultant's document recommends. The residential four steps stay as they are.
