---
tags: [build, data]
---

# Content Data Model — `demo/assets/data.js`

All homepage/sub-page content lives in `window.NLL` so it's easy to update and maps 1:1 to future WP fields.

| Key | Shape | WP target |
|---|---|---|
| `heroSlides[]` | `{line, cta, href}` | theme option / Elementor |
| `stats[]` | `{value, suffix, label}` | theme option |
| `credentials[]` | `{icon, text}` | theme option |
| `services[]` | `{no, slug, name, icon, desc, tags[], img}` | CPT `service` |
| `projects[]` | `{slug, name, suburb, date, blurb, tags[], img, scope[], narrative, gallery[]}` | CPT `portfolio` |
| `stages[]` | 10 strings | PHP array / options |
| `currentWork[]` | see [[Current Work Feature]] | CPT `current_work` |
| `projectStrip[]` | `{img, w, h, cap}` (real dims → Swiper width fix) | gallery field |
| `store[]` | `{name, desc, img}` | tax `product-category` |
| `process[]` | `{no, icon, name, desc, img, w, h, alt}` | theme option |
| `reviews[]` | `{name, text}` | CPT or plain block (no Review schema) |
| `storeProducts[]` | `{slug, cat, name, img, blurb, detail[]}` | CPT `products` |
| `faqs[]` | `{q, a, confirm?}` | CPT or ACF repeater — `confirm` renders a visible draft flag |

Rendering + interactions: `assets/js/main.js` (lightbox, drawer, hero carousel, count-up, services explorer, Swipers, reveal, form validation, stepper). Shared chrome: `assets/js/partials.js`.

> [!note] `process[]` images (2026-09-23)
> Steps are **photo-led**, not icon-led — client's call. `img`/`w`/`h`/`alt` drive it; `icon` is kept as the fallback (a step with no `img` still renders the old icon medallion, in both `main.js` and `process.html`).
> The four photos are **real NextLevel work used illustratively** — none is a photo of the step itself, because no consultation/crew/build-in-progress photography exists yet. Swapping in proper step photos means changing only these four `img`/`w`/`h`/`alt` values. → [[Waiting on Client]]
