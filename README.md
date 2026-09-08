# NextLevel Landscaping — website redesign

Redesign project for [nextlevellandscaping.com.au](https://nextlevellandscaping.com.au/) (Adelaide landscape design & construction).

## Live demo

**https://vj-ranga.github.io/nextlevellandscaping/**

The homepage demo (`/demo`) is deployed to GitHub Pages automatically on every push to `main`
via [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

## Contents

| Path | What |
|---|---|
| [`BUSINESS.md`](BUSINESS.md) | Verified business profile — full crawl of the live site |
| [`REDESIGN-PLAN.md`](REDESIGN-PLAN.md) | Design system, IA, Current Work stage-tracker spec, page templates, build plan |
| `demo/` | Working HTML homepage demo |

## Demo — stack & structure

Static HTML, no build step.

```
demo/
  index.html
  assets/
    css/style.css      design system + all component styles
    js/main.js          rendering, sliders, scroll reveal, form validation
    data.js             all page content (maps 1:1 to the planned WordPress CPT fields)
    img/                local, compressed imagery
    video/hero.mp4      compressed ambient hero clip
```

- Poppins + Font Awesome + Swiper (CDN), everything else hand-rolled.
- Design language: alternating light/dark bands, one oversized "scoop" corner rotated
  section to section, all-caps weight-400 headings, ghost-pill buttons, fade-in on scroll.
- **Current Work** section shows live in-progress jobs with a stage stepper — the feature
  that will become a `current_work` custom post type in the WordPress build.

Brand colours are placeholders (`--accent: #1A56DB`) pending the client's palette.

## Run locally

```bash
cd demo && python3 -m http.server 8000
# open http://localhost:8000
```
