# Demo2 — Three Visual Versions

A standalone demo for NextLevel Landscaping with a focused eight-section homepage and three selectable visual directions.

## Run locally

```bash
# from the project root
python3 -m http.server 8000
# open http://localhost:8000/demo2/
```

## The three visual versions

| Theme | Character |
|-------|-----------|
| **Carbon Soft** *(default, recommended)* | Charcoal and off-white surfaces, lime accent, pill buttons, scoop corners. Quiet, architectural, modern. |
| **Plan** | Continuous paper ground, monospace technical labels, hairline guides, olive/lime marks. Reads like an architect's site plan. |
| **Nocturne** | Continuous near-black ground, off-white type, serif display headings, photography-led contrast. Gallery catalogue at night. |

The theme picker persists in `localStorage` under the key `nll-demo2-theme`.

## Homepage sections

1. **Hero** — ambient video with scroll cue
2. **Trust** — positioning statement, experience, credentials, stats
3. **Services** — interactive explorer (desktop list+image, mobile accordions)
4. **Feature** — before/after slider + featured project details
5. **Current Work** — live jobs with stage stepper
6. **Method** — four-step process + why choose us
7. **Proof** — review carousel, store teaser, and project image strip (combined)
8. **Contact** — form + details + footer

## Supporting pages

- `our-work.html` — project index with filter bar
- `project.html?slug=...` — project detail with gallery + lightbox
- `current-work.html` — current work index
- `current-work-detail.html?slug=...` — stage stepper + timeline + gallery

## Editable data

All content lives in `assets/data.js` (`window.NLL2`). Arrays used by each section:

| Section | Data key |
|---------|----------|
| Hero | `hero` |
| Trust | `trust`, `credentials`, `stats` |
| Services | `services` |
| Feature | `feature` |
| Current Work | `currentWork`, `stages` |
| Method | `process` |
| Proof | `reviews` |
| Store | `store` |
| Projects (sub-pages) | `projects` |
| Image strip | `projectStrip` |

## Architecture

- `assets/data.js` — single content source
- `assets/js/partials.js` — shared header, drawer, footer, WhatsApp
- `assets/js/main.js` — rendering + interactions
- `assets/js/theme.js` — theme switcher
- `assets/css/style.css` — base design system (Carbon Soft default)
- `assets/css/theme-plan.css` — Plan theme overrides
- `assets/css/theme-nocturne.css` — Nocturne theme overrides

## Waiting on client

- [ ] Brand colour palette + logo files
- [ ] Hero video footage
- [ ] Trading hours
- [ ] WhatsApp number
- [ ] Real team list + photos
- [ ] Current Work photos + live details
- [ ] Confirm 8-service list is final
