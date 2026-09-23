---
tags: [build, tech]
updated: 2026-09-23
---

# Tech Stack & Deploy

## `site/` (the production build — start here)
- Static HTML, no build step. Custom CSS grid system, **Poppins**, **Font Awesome 6.5.1**, **Swiper 11** (CDN).
- CSS: `style.css` (base system, shared components) + `style-carbon-soft-v2.css` (the Carbon theme — the only one that ships). No switcher, no other theme files.
- JS: `main.js` (rendering, interactions), `partials.js` (shared header/drawer/footer on every sub-page except `index.html`, which carries its own inline copy — **keep both in sync when nav changes**).
- Content: `assets/data.js` — one source, 11 arrays (`services`, `projects`, `process`, `storeProducts`, `faqs`, `reviews`, …). See [[Content Data Model]].
- 13 pages (down from 15 — `store.html`/`product.html` removed 2026-09-23, see [[Site Build Log]] Round 20). See [[Sitemap and Pages]] for the full list.
- **Cache-buster `?v=<unix-timestamp>` on every CSS/JS link, every page.** Bump it after any CSS/JS edit — stale caching has cost real debugging time repeatedly. One command:
  ```bash
  cd site && T=$(date +%s) && sed -i "s/v=[0-9]\{10\}/v=$T/g" *.html
  ```
- Run local: `cd site && python3 -m http.server 8000`

## `demo/` (frozen reference — do not build here)
- Same stack, plus `theme.js` and 4 extra theme CSS files (`style-nocturne.css`, `style-blueprint.css`, olive/carbon-lime variants inside `style.css`) behind a switcher bar.
- Kept only as a parts-bin — pull an individual section out and re-skin it into `site/` if the client likes something from another theme. Never edit `demo/` to "fix" it; changes happen in `site/`.
- Run local: `cd demo && python3 -m http.server 8000`

## Deploy — GitHub Pages
- Repo: github.com/VJ-Ranga/nextlevellandscaping (**public**).
- Live at **https://vj-ranga.github.io/nextlevellandscaping/** — since 2026-09-23 this serves **both** builds plus a landing page:
  - `/` — small `noindex` landing page, links to both
  - `/site/` — the real build
  - `/demo/` — the theme reference

### How the `gh-pages` branch works now
> [!warning] Not a subtree split anymore
> `gh-pages` used to be `git subtree split --prefix demo`. As of 2026-09-23 it's a **standalone orphan history** — copies of `site/` and `demo/` committed fresh in a scratch folder and force-pushed. It shares no history with `main`. **The old subtree command no longer updates it.**

To redeploy after `site/` (or `demo/`) changes:
```bash
# from a scratch/temp folder, NOT inside the repo working tree
rm -rf ghp && mkdir ghp && cd ghp
cp -r /path/to/repo/site ./site
cp -r /path/to/repo/demo ./demo
touch .nojekyll
# recreate index.html landing page (see git history of gh-pages for the last version)
git init -q && git checkout -q -b gh-pages
git add -A && git commit -q -m "Deploy: site/ + demo/"
git remote add origin https://github.com/VJ-Ranga/nextlevellandscaping.git
git push -f origin gh-pages
```
GitHub Pages takes ~10–60s to rebuild after the push — verify with `curl` before telling the client it's live:
```bash
curl -s -o /dev/null -w "%{http_code}\n" https://vj-ranga.github.io/nextlevellandscaping/site/index.html
```
- Large pushes sometimes 408 — retry.
- No Actions workflow (token lacks `workflow` scope) — don't add a `pages.yml` reference to the README, it was stale before and got removed.
- `main` branch is untouched by any of this — only `gh-pages` changes.

## Helpers used
OpenCode agents generated `demo/`'s extra theme CSS files from prompt specs (`PROMPT-*.md` in repo root) — historical, not part of the `site/` build.
