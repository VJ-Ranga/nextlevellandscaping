---
tags: [build, tech]
---

# Tech Stack & Deploy

## Demo
- Static HTML, no build step. Bootstrap-style grid in custom CSS, **Poppins**, **Font Awesome 6.5.1**, **Swiper 11** (CDN).
- CSS: `style.css` (base system + carbon-soft/olive/carbon themes, ~1160 lines) · `style-carbon-soft-v2.css` (~720) · `style-nocturne.css` · `style-blueprint.css`. Every theme file fully scoped under `html[data-theme="…"]`.
- JS: `main.js`, `partials.js`, `theme.js` (demo only).
- Assets: img 8.3 MB (compressed from 16), `video/hero.mp4` 4.8 MB + poster. Cache-buster `?v=` on assets.
- Schema: `LandscapingBusiness` JSON-LD on index.

## Deploy
- Repo: github.com/VJ-Ranga/nextlevellandscaping (**public**).
- GitHub Pages from **`gh-pages`** branch = subtree split of `demo/`:
```bash
git subtree split --prefix demo -b gh-pages && git push -f origin gh-pages && git branch -D gh-pages
```
- Large pushes sometimes 408 — retry. No Actions workflow (token lacks `workflow` scope) — README claim of `pages.yml` is stale.
- Run local: `cd demo && python3 -m http.server 8000`.

## Helpers used
OpenCode agents generated theme CSS files from prompt specs (`PROMPT-*.md` in repo root).
