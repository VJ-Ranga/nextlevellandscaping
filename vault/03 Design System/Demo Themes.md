---
tags: [design, demo]
---

# Demo Themes (switcher — remove for production)

Demo bar above header, `assets/js/theme.js`, saved in localStorage (`nll-theme`, `nll-layout`, `nll-hero`, `nll-intro`). Each page has an inline pre-paint bootstrap with the same defaults.

| Chip label | id | CSS | Look |
|---|---|---|---|
| **Carbon** ⭐ default | `carbon-soft-v2` | `style-carbon-soft-v2.css` | near-black + off-white + lime, [[Scoop Curve]] everywhere |
| Carbon soft | `carbon-soft` | `style.css` | same palette, scoop on Our Work only |
| Olive | `brand` | `style.css` | olive bands, lime accent |
| Carbon lime | `carbon` | `style.css` | near-black + white, square buttons, no curves |
| Nocturne | `nocturne` | `style-nocturne.css` | continuous dark gallery ground |
| Blueprint | `blueprint` | `style-blueprint.css` | Nocturne palette + Plan mono font, drawing-sheet feel |

Removed: Slate blue, Plan.

## Layout toggles (defaults in bold)
- Header: Classic / **Centred** (`.hdr2`, logo centred, two-line)
- Hero: **Static** / Sticky (next band slides over pinned video)
- Intro: Split / **Stacked**

Also exists: `demo2/` — separate 3-version demo (Carbon Soft / Plan / Nocturne, 8 sections incl. before/after). Not deployed; superseded by `demo/`.
