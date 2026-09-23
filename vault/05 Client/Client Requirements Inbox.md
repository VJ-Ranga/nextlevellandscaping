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
| 4 | 2026-09-22 | Change Our Work / Current Work layout — no square grid, asymmetric | homepage | L | agreed | Real design/layout pass, not done yet — see [[Homepage Sections]] |
| 5 | 2026-09-22 | Remove the Our Store section | homepage | M | done | Homepage `#store` band removed; `store.html` page itself kept |
| 6 | 2026-09-22 | Contact/Free Quote form: Name, Email\*, Phone\*, Suburb\*, Budget (5 bands)\*, Description | feature | M | done | |
| 7 | 2026-09-22 | Remove Walkways service | content | S | done | 8 services → 7 |
| 8 | 2026-09-22 | Subtle light contour lines in dark sections only, not in opening/start section | design | S | done | Removed from `#intro`; still on #projects/#reviews |
| 9 | 2026-09-22 | Portfolio layout like reference image but avoid rectangular shapes — curved design throughout | homepage/page | L | agreed | Not done yet. Reference: asymmetric masonry grid, softened to curved edges |
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

> [!note] Status as of 2026-09-23
> Built into **`site/`** (the new production-direction folder, not `demo/`) — see [[Site Build Log]] for exactly what changed and how it was verified. **25 of 30 done**, 2 still agreed (need a real design pass: the asymmetric Our Work / portfolio layout), 1 parked (per-service PDFs), 1 confirmed no-change-needed. One carries an accepted accessibility risk (#23, hero pause button). Requirement #14 is built but still wants real step photography. Both `site/` and `demo/` are now live at the GitHub Pages URL (#30).
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
