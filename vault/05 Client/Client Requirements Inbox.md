---
tags: [client, requirements]
status: in progress
---

# Client Requirements Inbox

Paste every end-client requirement here as it arrives. One row each. Then triage → [[Decisions Log]].

| # | Date | Requirement (client's words) | Area | Impact | Status | Note |
|---|---|---|---|---|---|---|
| 1 | 2026-09-22 | Preferred theme — Carbon, Centred Header, Sticky Hero, Split Intro | design | S | done | Locked as the only state in `site/` — no switcher |
| 2 | 2026-09-22 | Logo larger on welcome page, slightly smaller on other pages (still larger than current); full-colour on welcome, B&W elsewhere | design | S | done | CSS grayscale filter, not a real B&W export — good enough for now, revisit if client wants the real asset |
| 3 | 2026-09-22 | Menu items need more visibility — larger font, thin white line between items | design | S | done | |
| 4 | 2026-09-22 | Change Our Work / Current Work layout — no square grid, asymmetric | homepage | L | done | Asymmetric 12-tile mosaic built (Site Build Log Round 13, prior session), then redesigned again to a moodboard-style grid per #31 (this session) |
| 5 | 2026-09-22 | Remove the Our Store section | homepage | M | done | Homepage `#store` band removed; `store.html` page itself kept at the time — **superseded 2026-09-23, see #37: the whole Store page was later removed entirely** |
| 6 | 2026-09-22 | Contact/Free Quote form: Name, Email\*, Phone\*, Suburb\*, Budget (5 bands)\*, Description | feature | M | done | |
| 7 | 2026-09-22 | Remove Walkways service | content | S | done | 8 services → 7 |
| 8 | 2026-09-22 | Subtle light contour lines in dark sections only, not in opening/start section | design | S | done | Removed from `#intro`; still on #projects/#reviews — **superseded 2026-09-24, see #46: client now wants it back on `#intro` at 10%** |
| 9 | 2026-09-22 | Portfolio layout like reference image but avoid rectangular shapes — curved design throughout | homepage/page | L | superseded | The "curved edges" direction was not carried forward — the later moodboard reference the client supplied (#31) uses plain rectangular tiles with square corners, and that's what got built. Flagging this in case the curved-edge preference still stands and just wasn't restated |
| 10 | 2026-09-22 | Welcome/intro notes align right, reduce font size | homepage | S | agreed | Not done yet |
| 11 | 2026-09-22 | Scroll-down: add arrowhead, keep same animation | design | S | done | |
| 12 | 2026-09-22 | Floating "Get a Free Quote" button | feature | S | done | Revised 2026-09-23 — see #17 |
| 13 | 2026-09-22 | Option to download documents in each service section | page | L | parked | Needs real PDF assets from client → [[Waiting on Client]] |
| 14 | 2026-09-22 | Process section: images instead of icons + a page with more detail | homepage/page | L | done | Detail page = `process.html` (Round 10). Photo-led steps built 2026-09-23 (Round 11) using real NextLevel work as illustrative stand-ins — **proper step photography still wanted** → [[Waiting on Client]] |
| 15 | 2026-09-22 | Service options/materials — pill format like reference | page | S | confirmed | Already matches existing `.chips`/tags pattern on service.html — no change needed |
| 16 | 2026-09-23 | Header font size to match lagunapools.com.au, header full-width like that site | design | S | done | Measured live (17px nav, edge-to-edge) and matched — see [[Site Build Log]] |
| 17 | 2026-09-23 | Remove WhatsApp floating button; quote button only shows after scrolling past the hero, on the right side | feature | S | done | `.wa-float` deleted entirely; `.quote-float` moved right, fades in on scroll (reuses the sticky-hero "covered" signal) |
| 18 | 2026-09-23 | Fix the header gap left over from the theme-chooser options | bug | S | done | `.hdr2{top:46px}` (reserved for the removed demo bar) → `top:0`; dead `.theme-bar` CSS deleted |
| 19 | 2026-09-23 | Bring the scoop back at the hero/#intro seam (screenshot with arrow) | design | S | done | Was flattened for sticky-hero mode; now a top-left scoop, hero peeks through as #intro covers it |
| 20 | 2026-09-23 | Quote button should show once scrolled about halfway through the hero, not only once fully past it | feature | S | done | Trigger changed from "fully covered" to "50% of hero height" in main.js |
| 21 | 2026-09-23 | Match Laguna's scoop boldness — "that section uses 300px, can we use that" | design | M | done | `--v2-scoop` ceiling 150px→300px, floor raised so it stays bold on tablet/mobile too (was tapering to 44px). See [[Site Build Log]] Round 4 |

> [!bug] Found while checking #21, not client-requested
> Sticky header wasn't going opaque on scroll on any page — video showed through the nav permanently. Fixed same session, see [[Site Build Log]] Round 4.

| 22 | 2026-09-23 | Footer full-width like lagunapools.com.au, no scoop for now — "use something then we can finalise that" | design | S | done (placeholder) | Flat + full-width, matched to Laguna's own footer (also flat, also full-width). Explicitly interim — footer design itself still open |
| 23 | 2026-09-23 | Remove the hero "Pause background video" button | design | S | done ⚠ | **Creates a WCAG 2.2.2 Level A failure** — looping hero video now has no pause control. Accepted risk, flagged to revisit before launch. See [[Standards - Accessibility SEO Privacy]] |
| 24 | 2026-09-23 | Finish the full sitemap — build all remaining pages | page | L | done | 4 new pages: `contact.html`, `services.html`, `product.html`, `faq.html`. All 13 pages now built + verified. See [[Sitemap and Pages]] and [[Site Build Log]] Round 6 |
| 25 | 2026-09-23 | Footer should be **normal width, not full width** | design | S | done | Reverses the #22 placeholder. Header stays full-width, footer back to the 1200px container |
| 26 | 2026-09-23 | Check header/footer + all section heights on tablet + mobile | bug | M | done | Footer was 1257px on mobile (1.5× viewport) — now 976px. Header consistent across all 13 pages. Top sections consistent. See [[Site Build Log]] Round 8 |
| 27 | 2026-09-23 | Invisible white box on the store page — "why white area white font?" | bug | S | done | `.ba-note` built its background from `--bg`, which isn't flipped in dark bands → white text on white panel. Was on 4 pages. See [[Site Build Log]] Round 9 |
| 28 | 2026-09-23 | Every menu option needs its own separate page | page | M | done | "Our Process" and "Reviews" were homepage anchors — both now real pages. 15 pages total. See [[Site Build Log]] Round 10 |
| 29 | 2026-09-23 | "How we work" — use images instead of icons | design | M | done | Photo-led steps on both the homepage and `process.html`. Images are real NextLevel work used illustratively; `icon` kept as fallback. See [[Site Build Log]] Round 11 |
| 30 | 2026-09-23 | Show both `site` and `demo` on the GitHub Pages link | build | S | done | `gh-pages` rebuilt as a landing page + `/site/` + `/demo/`. See [[Site Build Log]] Round 12, [[Tech Stack and Deploy]] |
| 31 | 2026-09-23 | Redesign Our Work into a moodboard-style grid — tight photo mosaic, mixed tile sizes, dark-gradient overlay captions on only some tiles (reference image supplied) | page | L | done | Replaced the Round-13 12-tile row-dense mosaic with a fixed 4-col/5-row explicit grid; overlay captions on 7 of 12 tiles. See [[Site Build Log]] Round 14 |
| 32 | 2026-09-23 | Remove the All/Residential/Paving/Retaining walls/Fencing/Turf filter bar above the Our Work grid | page | S | done | Filter bar + note line + dead filter JS removed. See [[Site Build Log]] Round 15 |
| 33 | 2026-09-23 | Make the "In the field" photo strip edge-to-edge with no gaps (Instagram-grid reference supplied); give the closing "Have a space in mind?" CTA a background photo + dark gradient so it doesn't blend into the footer | page | M | done | Strip: `spaceBetween:0`, square corners, full-bleed. CTA: `north-haven.jpg` backdrop + gradient overlay. See [[Site Build Log]] Round 17 |
| 34 | 2026-09-23 | Remove the "In the field" heading and all its surrounding space — just the image strip, no label, no gap | page | S | done | `.strip-head` block deleted, section padding zeroed. See [[Site Build Log]] Round 18 |
| 35 | 2026-09-23 | Hide the "Have a space in mind?" closing CTA on Our Work for now — may want it back later | page | S | done (hidden, not deleted) | Wrapped in an HTML comment rather than removed. See [[Site Build Log]] Round 19 |
| 36 | 2026-09-23 | Remove the Store page and the "Store location" (shop-front framing of the address) from the whole site; keep the office address itself, just not as a walk-in shop | site-wide | L | done | Deleted `store.html`/`product.html`, all nav/footer links, `store`/`storeProducts` data. Every "Shop 1/41 Woodlands Terrace" reworded to "1/41 Woodlands Terrace"; Contact's closing band reframed "Visit us" → "Our office". See [[Site Build Log]] Round 20 |
| 37 | 2026-09-23 | Hide the floating "Get a Free Quote" button on the Contact page, and once the footer is in view on any page | feature | S | done | Button omitted entirely on `contact.html`; scroll-toggle now also checks the footer's position. See [[Site Build Log]] Round 21 |
| 38 | 2026-09-23 | Footer looks ugly / EXPLORE list too long after Store was removed — cap it at 4-5 links, add another column | design | S | done | Split into EXPLORE (5) + a new SUPPORT column (Reviews/FAQ/Contact), restoring the footer's 4-column grid. See [[Site Build Log]] Round 22 |
| 39 | 2026-09-23 | Add a dropdown under the header's "Services" nav item listing the individual services; the single-service page looks "really ugly" and needs work | design/page | L | done | Hover/focus dropdown (7 services + "All Services"). `service.html` fully redesigned: flat subhero (was the only page with a dimmed 28%-opacity photo hero), full-bright photo row, dropped the sparse sidebar, upgraded the "All services" quick-nav. See [[Site Build Log]] Round 23 |
| 40 | 2026-09-23 | Remove the "All Services" list from the single-service page (useless); show Related Work as a slider like the homepage's Our Work carousel, for when there are more than 3 | page | M | done | `.svc-all` section removed; Related Work now uses the same `.proj-swiper`/`.proj-card` carousel as the homepage's "Signature transformations" section. See [[Site Build Log]] Round 24 |
| 41 | 2026-09-23 | Remove the "Get Started" closing CTA band just added to the single-service page | page | S | done | Reverses part of #40 — the button in the Options & Materials section already covers this. See [[Site Build Log]] Round 25 |
| 42 | 2026-09-23 | Every homepage section needs the same, more generous padding — sections feel cramped, want a cleaner/premium spacing | design | M | done | Measured first — `#intro`/`#contact` were sitting at the bare base padding while scoop-reserving sections were already much taller. Bumped the shared `--pad-band`/`--pad-band-lg` tokens (96→128px / 128→160px) so every band scales together. See [[Site Build Log]] Round 26, [[Style Guide]] §3 |
| 43 | 2026-09-24 | Use the client's own contour drawing (`changed clint/Drawing1.dwg`) as the background on the dark areas only, 50% opacity, instead of the invented wave pattern | design | M | done | PDF→optimised SVG (38KB), `.contour::before` swapped, light bands cleared. See [[Site Build Log]] Round 28 |
| 44 | 2026-09-24 | Tablet + mobile header: hamburger menu sits in the middle — should be at the right edge (screenshot with arrows; "most important thing") | bug | S | done | 3-col header grid left an empty middle column once the nav was hidden; now 2-col, phone/Instagram right-aligned. See [[Site Build Log]] Round 29 |
| 45 | 2026-09-24 | Check what else can be added to the top bar; check mobile/tablet responsiveness of header, footer and top areas | bug/design | M | done | 110-check audit (11 pages × 10 widths). Fixed: service page sideways scroll, 320px contact overflow, tap targets >768px. Top bar has ~435–849px free on desktop. See [[Site Build Log]] Round 30 |
| 47 | 2026-09-24 | Mobile + tablet pass only (320–992px): review every page top-to-bottom at 375 and 768 — spacing, crops, wrapping, carousels, Our Work mosaic, footer, Services dropdown/drawer, scoop curves, contour legibility. Desktop untouched | design/bug | L | done (review pass) | Fixed invisible dark-band headings, dim subhero lead, mosaic captions covering photos, sub-11px text, intro stats stack, note-panel contrast, drawer a11y. `#current` height flagged for client. See [[Site Build Log]] Round 32 |
| 48 | 2026-09-24 | Show the full-bleed photo slider on the Services page and on each individual service page, with photos meaningful for that service | page | M | done | Curated `serviceStrip` per service in data.js; strip on `service.html` (per service) and `services.html` (mixed). Irrigation/maintenance photo sets are best-fit stand-ins → [[Waiting on Client]]. See [[Site Build Log]] Round 33 |
| 46 | 2026-09-24 | Contour background not showing in the homepage's second section; make it only ~10% opacity — visible but not overpowering | design | S | done | Opacity .5→.1 sitewide on dark bands; `contour` class added to `#intro` (deliberately removed there under #8 — client now wants it in that section). See [[Site Build Log]] Round 31 |

> [!bug] Found during this session, not client-requested
> - Round 16: the Our Work mosaic's `grid-auto-flow:dense` layout left an unfillable gap and a floating orphan tile — client spotted it, root-caused to dense auto-placement not tiling irregular spans perfectly, fixed with an explicit hand-tiled grid.
> - Round 17: a CSS specificity conflict silently reset the new CTA background's `background-size` back to `auto` (an existing `.band.band--dark` rule outranked it) — fixed with a more specific selector.
> - Round 23/24: Round 16/17's mosaic-only grid rules were scoped too broadly (`.work-grid` class instead of `#work-grid` id), which was silently squashing the unrelated "Related Work" card rows on `service.html` and `project.html` down to ~113px tall. Rescoped to the id so only Our Work's mosaic is affected.
> - Round 23: `service.html` had a Swiper stylesheet link but never loaded the Swiper JS bundle, so its own carousel silently did nothing until added.

> [!note] Status as of 2026-09-23 (end of session)
> Built into **`site/`** (the production-direction folder, not `demo/`) — see [[Site Build Log]] for exactly what changed and how it was verified. **38 of 42 done**, 1 still agreed (#10, welcome/intro copy alignment), 1 parked (#13, per-service PDFs), 1 confirmed no-change-needed (#15), 1 superseded (#9, curved-edge portfolio direction — flag to the client if that preference still stands). One done item carries an accepted accessibility risk (#23, hero pause button). Requirement #14 is built but still wants real step photography.
>
> **Deploy status:** #31–#35 (Our Work mosaic redesign through hiding the closing CTA) are committed and pushed to `main`, and `gh-pages` was redeployed to match — live at the GitHub Pages URL. #36–#42 (Store removal, quote-button footer behaviour, footer column split, Services dropdown + service page redesign, padding pass) are built and verified locally but **not yet committed to `main` or redeployed to `gh-pages`** — both are pending an explicit "commit"/"push"/"redeploy" instruction, per this session's working pattern of asking before pushing.
>
> **Open, awaiting a client decision:** `#current` is 2239px tall on mobile (2.75 viewports) — shortening it means removing content from their most-differentiated section, so it wasn't touched. See [[Site Build Log]] Round 8.

**Area:** content · design · homepage · page · feature · store · SEO · WordPress
**Impact:** S (text/data.js) · M (CSS/section) · L (new page/feature)
**Status:** new → agreed → in progress → done · or parked

## Quick map — where each change lands
- Text, services, projects, reviews, jobs → `site/assets/data.js` ([[Content Data Model]])
- Colours, curves, spacing → `site/assets/css/style-carbon-soft-v2.css` ([[Colour Palette]], [[Scoop Curve]])
- Section order / new section → `site/index.html` + main.js ([[Homepage Sections]])
- Header/footer on sub-pages → `site/assets/js/partials.js`
- Per-page layout → that page's HTML
- `demo/` is frozen — only pull individual sections from it, never build there again
| 49 | 2026-09-24 | Standalone sitemap document with 3 map types (hierarchy tree, visitor-flow map, page inventory) to show the client the site structure; printable to PDF | page | M | done | New `sitemap/` folder (index.html + assets/sitemap-data.js single data source); `site/` and `demo/` untouched. See [[Site Build Log]] Round 34 |
| 50 | 2026-09-26 | "What we do" (`#services`) has too much space top and bottom — reduce both by 100px | design | S | done | `#services` padding-top/bottom −100px above 640px only (mobile unchanged, would go too tight). `--pad-band` untouched. See [[Site Build Log]] Round 35 |
| 51 | 2026-09-26 | Homepage: every section exactly 120px top and 120px bottom — no more, no less | design | M | done | New `--pad-home:120px`, homepage-only (`body.pg-home`) per-band overrides; covered/tucked bands reserve 120px + scoop so the *visible* gap is 120. Supersedes #50's `#services` −100px rule (removed). Photo strip left at 0 (full-bleed). See [[Site Build Log]] Round 36 |
