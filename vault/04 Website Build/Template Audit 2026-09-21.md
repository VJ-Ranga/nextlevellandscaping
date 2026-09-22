---
tags: [build, audit]
date: 2026-09-21
---

# Template Audit — 2026-09-21

Fresh read of `demo/` before client requirements arrive.

## Inventory
9 pages: `index` (393 lines), `about`, `service`, `our-work`, `project`, `current-work`, `current-work-detail`, `store`, `privacy`. 6 themes, 3 layout toggles. Homepage 8 sections → [[Homepage Sections]].

## Solid
- Real content everywhere (verbatim business copy, 4 real projects, 7 real reviews).
- Skip link, hero pause, context-aware colour, 0 contrast failures, LandscapingBusiness schema, meta description, `lang="en-AU"`.
- Everything data-driven from `data.js`.

## Issues / to flag
1. **Current Work jobs are fictional** and not labelled placeholder on the page → add label or replace ([[Current Work Feature]]).
2. **Hero video** = real-estate stock clip with "AVAILABLE / BUILDER SPECIAL" sign — client picked it, flag for swap.
3. Store tile photos are generic stock.
4. `.hero__tag h2` uses inline style; hero has an H2 before the page H1 (H1 is in #intro) — fine for a11y but check heading order.
5. Footer "Store" links point to `#store` anchor, not `store.html` categories.
6. Contact form 4 fields — no suburb / service / budget / photo upload (research recommends).
7. No map embed; trading hours "to be confirmed".
8. WhatsApp float uses the main mobile number — unconfirmed.
9. "10+ years" / "over a decade" claim unverified.
10. `product.html`, `contact.html`, services index not built.
11. Store bookend corners (`--v2-scoop-card`) still live — client may have asked to remove.
12. README stale: mentions `#1A56DB` placeholder + Actions workflow that doesn't exist.
13. Demo-only files to strip for prod: `theme.js`, theme bar, unused theme CSS.
14. Performance TODOs: AVIF/WebP, self-host fonts, mobile video, reduced-motion poster.
15. Repo is **public** and git history holds uncompressed originals.
