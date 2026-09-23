---
tags: [build, standards]
---

# Standards (2025–26)

## Performance — Core Web Vitals
LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 at p75 real mobile users.

## Accessibility — WCAG 2.2 AA
AHRC upgraded recommendation to 2.2 AA (Apr 2025); binds via **Disability Discrimination Act 1992 s24**.
| Item | Status |
|---|---|
| 2.2.2 pause for video/carousel | ❌ **FAILING — accepted risk.** The hero pause button was removed at the client's request 2026-09-23. The hero video still autoplays and loops with no user-accessible pause, which is a **Level A** failure (binds via Disability Discrimination Act s24). `prefers-reduced-motion` is still honoured. **Revisit before launch** — options: bring the control back in a quieter style, or make the hero a non-looping/poster-first treatment. |
| 2.4.1 skip link | ✅ |
| Contrast | ✅ 0 failures all themes |
| 2.5.8 Target Size Minimum (24×24, **AA**) | ✅ audited across all 13 pages at 375px 2026-09-23 — was failing (footer links 20px, breadcrumbs 16px, Instagram icon 23×12px), fixed via `style.css` §40. 0 failures now. |
| Text size ≥11px | ✅ strip captions + mobile quote-float raised to the `.72rem` eyebrow token 2026-09-23 |
| Horizontal overflow | ✅ 0 across 13 pages × 375/768/1024px |
| Focus visible | ✅ lime on dark / olive on light |
| img width/height | ⚠ partial (strip has dims) |
| reduced-motion → static hero | ✅ fixed 2026-09-23 — the video is paused on load under `prefers-reduced-motion`, and the headline carousel stops too. (This nearly regressed when the pause button was removed: the handling lived inside the button's `if (!btn) return;` block. Rewritten to stand alone.) |

## SEO
- `LandscapingBusiness` schema ✅ (add `openingHoursSpecification` once hours known).
- **Don't** mark up own testimonials with Review/aggregateRating.
- FAQPage schema deprecated May 2026 — FAQ *content* still helps AI extraction.
- AI search: plain extractable text, answers under question headings, name + location in text.
- **Google Business Profile ≈ 32% of local pack ranking**; website ≈ 19% → set up GBP as service-area business.

## Conversion
- Target 5–7 form fields (current = 4).
- Phone leads convert ~46% → phone-first, sticky mobile Call + Quote bar (only WhatsApp float now).
- Banded budget with "not sure yet", at the end.
- Investment guide = bands tied to real projects + cost drivers. Never flat "from $X" (ACL risk).

## Privacy / legal
- Statutory tort for serious invasions of privacy from **10 June 2025**, regardless of $3m exemption.
- Self-host fonts (offshore IP transfer).
- ACL/ACCC: no invented testimonials, jobs or before/after.
- Check if SA CBS requires licence number in advertising (verify cbs.sa.gov.au).
