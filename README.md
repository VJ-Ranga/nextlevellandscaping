# NextLevel Landscaping — website redesign

Redesign project for [nextlevellandscaping.com.au](https://nextlevellandscaping.com.au/) (Adelaide landscape design & construction), by Cloudycode.

## Two folders — know which one you're in

| Path | What | Status |
|---|---|---|
| **`site/`** | **The real build.** One locked design, 15 pages. Everything live happens here. | active |
| `demo/` | The multi-theme options showcase (6 themes + switcher) originally shown to the client | **frozen** — parts-bin only |

The client picked **Carbon** (`carbon-soft-v2`) with the centred header, sticky hero and split intro. `site/` hardcodes exactly that — no theme switcher, no alternate looks.

`demo/` is kept only so individual sections can be lifted out of the other themes and re-skinned into `site/`. Don't build there.

## Documentation

Most of the thinking lives in the Obsidian vault, not in these root files.

| Path | What |
|---|---|
| **`vault/`** | **Obsidian vault — start at `00 Home.md`.** Business facts, competitor research, the design system rulebook, build logs, and the client requirements tracker |
| [`vault/03 Design System/Style Guide.md`](vault/03%20Design%20System/Style%20Guide.md) | **The design rulebook.** Values pulled from the live CSS. If you change a token, update it here too |
| [`vault/05 Client/Client Requirements Inbox.md`](vault/05%20Client/Client%20Requirements%20Inbox.md) | Every client request, its status, and where it landed |
| [`vault/04 Website Build/Site Build Log.md`](vault/04%20Website%20Build/Site%20Build%20Log.md) | What changed each round and how it was verified |
| [`BUSINESS.md`](BUSINESS.md) | Verified business profile — full crawl of the live site |
| [`REDESIGN-PLAN.md`](REDESIGN-PLAN.md) | Original plan (Sept 2026). Partly superseded — the vault is current |
| [`RESEARCH-REPORT.md`](RESEARCH-REPORT.md) | 19 AU landscaping sites + 15 premium studios + 2025–26 standards |

## `site/` — stack & structure

Static HTML, no build step.

```
site/
  index.html  services.html  service.html?slug=  our-work.html  project.html?slug=
  current-work.html  current-work-detail.html?slug=  process.html  store.html
  product.html?slug=  about.html  reviews.html  faq.html  contact.html  privacy.html
  assets/
    css/style.css                  base design system + components
    css/style-carbon-soft-v2.css   the Carbon theme (the only one that ships)
    js/main.js                     rendering, sliders, scroll reveal, form validation
    js/partials.js                 shared header/drawer/footer, injected on every sub-page
    data.js                        all content (maps 1:1 to the planned WordPress CPT fields)
    img/  video/                   local, compressed media
```

- Poppins + Font Awesome + Swiper (CDN), everything else hand-rolled.
- Design language: alternating light/dark bands, one oversized **"scoop"** corner rotated section to section, all-caps weight-400 headings, ghost-pill buttons, fade-in on scroll.
- **Current Work** shows live in-progress jobs with a stage stepper — no AU competitor does this. Becomes a `current_work` CPT in the WordPress build.
- Brand palette comes from the real logo: lime `#C2E807`, olive `#5A6428`, near-black `#17190F`, warm off-white `#F2F2EC`.

### Two things to know before editing

- **Bump the `?v=` cache-buster** in every page's asset links after changing CSS/JS, or you'll debug a stale file. This has cost real time more than once.
- `index.html` carries its own copy of the header/drawer/footer inline; every other page gets it from `partials.js`. **Change nav in both.**

## Run locally

```bash
cd site && python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

GitHub Pages serves the **`gh-pages`** branch, which is a subtree split of `demo/` — i.e. the Pages site is still the old multi-theme demo, **not `site/`**. There is no Actions workflow (the token lacks `workflow` scope).

```bash
git subtree split --prefix demo -b gh-pages && git push -f origin gh-pages && git branch -D gh-pages
```

To publish `site/` instead, swap `--prefix demo` for `--prefix site`. Large pushes occasionally 408 — retry.

## Next phase

Once `site/` is signed off, port to WordPress using **only the core block editor** (no page builder). See `vault/04 Website Build/WordPress Plan.md`.
