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
| 14 | 2026-09-22 | Process section: images instead of icons + a page with more detail | homepage/page | L | parked | Needs real photos per step → [[Waiting on Client]] |
| 15 | 2026-09-22 | Service options/materials — pill format like reference | page | S | confirmed | Already matches existing `.chips`/tags pattern on service.html — no change needed |
| 16 | 2026-09-23 | Header font size to match lagunapools.com.au, header full-width like that site | design | S | done | Measured live (17px nav, edge-to-edge) and matched — see [[Site Build Log]] |
| 17 | 2026-09-23 | Remove WhatsApp floating button; quote button only shows after scrolling past the hero, on the right side | feature | S | done | `.wa-float` deleted entirely; `.quote-float` moved right, fades in on scroll (reuses the sticky-hero "covered" signal) |
| 18 | 2026-09-23 | Fix the header gap left over from the theme-chooser options | bug | S | done | `.hdr2{top:46px}` (reserved for the removed demo bar) → `top:0`; dead `.theme-bar` CSS deleted |
| 19 | 2026-09-23 | Bring the scoop back at the hero/#intro seam (screenshot with arrow) | design | S | done | Was flattened for sticky-hero mode; now a top-left scoop, hero peeks through as #intro covers it |
| 20 | 2026-09-23 | Quote button should show once scrolled about halfway through the hero, not only once fully past it | feature | S | done | Trigger changed from "fully covered" to "50% of hero height" in main.js |

> [!note] Status as of 2026-09-23
> Built into **`site/`** (the new production-direction folder, not `demo/`) — see [[Site Build Log]] for exactly what changed and how it was verified. 14 of 20 done, 2 still agreed (need a real design pass), 2 parked (need client assets), 1 confirmed no-change-needed, 1 revised.

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
