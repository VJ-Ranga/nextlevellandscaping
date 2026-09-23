---
tags: [build, ia]
updated: 2026-09-23
---

# Sitemap & Pages

**All 15 pages now built** in `site/` (the production folder). `demo/` is frozen and not part of this.

> [!important] Every nav item is its own page
> Client rule (2026-09-23): **no menu item may point at a homepage anchor.** "Our Process" and "Reviews" were the last two (`index.html#process` / `index.html#reviews`) — both are now real pages. If a nav item is ever added, it needs a page, not an anchor.

| Live site now | New site | File | Status |
|---|---|---|---|
| Home | Home | `index.html` | ✅ → [[Homepage Sections]] |
| About | About | `about.html` | ✅ (team placeholder → [[Team]]) |
| Our Services (1 long page) | **Services index** | `services.html` | ✅ **new 2026-09-23** — all 7 services as alternating image rows |
| 8 empty `/service/*` stubs | Service detail | `service.html?slug=` | ✅ template, 7 services |
| Our Work `/portfolio/` | Our Work | `our-work.html` | ✅ |
| — | Project detail | `project.html?slug=` | ✅ gallery + lightbox |
| — | **Current Work** (new) | `current-work.html` | ✅ → [[Current Work Feature]] |
| — | Current job detail | `current-work-detail.html?slug=` | ✅ vertical stepper + timeline |
| Store | Store (NextLevel Outdoors) | `store.html` | ✅ tiles now link through to product pages |
| Store products (thin) | **Product detail** | `product.html?slug=` | ✅ **new 2026-09-23** — enquiry-only, P.O.A, no cart |
| — | **FAQ** | `faq.html` | ✅ **new 2026-09-23** — competitive gap, see [[Market Gaps]] |
| Contact (anchor only) | **Contact page** | `contact.html` | ✅ **new 2026-09-23** — real page, full quote form |
| — | **Our Process** | `process.html` | ✅ **new 2026-09-23** — 4 steps in depth + the 10-stage pipeline, links to Current Work |
| Testimonials (home only) | **Reviews** | `reviews.html` | ✅ **new 2026-09-23** — all 7 Google reviews in full (homepage clamps them to 6 lines) |
| Privacy | Privacy & Security | `privacy.html` | ✅ |

## Nav (current, as built) — every item is a real page
Single centred header (`.hdr2`) — the classic header was deleted from `site/` entirely.
- **Utility row:** About · Our Process · Reviews · FAQ · Store · phone · Instagram
- **Main row:** Services · Our Work | logo | Current Work · Contact
- **Drawer (mobile):** Services · Our Work · Current Work · Our Process · Store · About · Reviews · FAQ · Contact
- **Footer EXPLORE:** Services · Our Work · Current Work · Our Process · Store · About · Reviews · FAQ · Contact
- All "Get a free quote" CTAs across the site now point at `contact.html` (they previously went to the `index.html#contact` anchor).
- **Footer STORE:** the 4 categories, each linking to `product.html?slug=`
- Shared chrome on sub-pages injected by `assets/js/partials.js`; `index.html` carries its own copy inline (keep the two in sync when changing nav).

## Global
Skip link · fixed centred header (opaque on scroll) · mobile drawer · floating "Get a Free Quote" (right side, appears ~halfway through hero, → `contact.html`) · flat full-width footer · lightbox.

> [!warning] Removed, deliberately
> - **WhatsApp float** — removed at client request 2026-09-23.
> - **Hero pause button** — removed at client request 2026-09-23. That was the WCAG 2.2.2 (Level A) control for the looping hero video. `prefers-reduced-motion` is still honoured, but there is no longer a visible pause mechanism. **Accepted risk — revisit before launch.** See [[Standards - Accessibility SEO Privacy]].

## Still not built (deliberate — need client input, not effort)
- Investment/pricing guide — commercially sensitive, client decision ([[Open Questions]] #12)
- Render → built showcase — needs the client's actual 2D/3D files ([[Open Questions]] #14)
- Service-area / suburbs page — needs the confirmed suburb list
- Per-service document downloads — needs real PDFs ([[Client Requirements Inbox]] #13)
