# NextLevel Landscaping — website redesign

Redesign project for [nextlevellandscaping.com.au](https://nextlevellandscaping.com.au/) (Adelaide landscape design & construction), by Cloudycode.

## Two folders — know which one you're in

| Path | What | Status |
|---|---|---|
| **`site/`** | **The real build.** One locked design, 15 pages. Everything live happens here. | active |
| `demo/` | Copy of `site/` plus an options bar for client choices (H, P, L, M, K, C) | active; mirror `site/` changes here |

The client picked **Carbon** (`carbon-soft-v2`) with the centred header, sticky hero and split intro. `site/` hardcodes exactly that — no theme switcher, no alternate looks.

## Documentation

Most of the thinking lives in the Obsidian vault, outside this repo. See [`VAULT.md`](VAULT.md) for its location.

| Path | What |
|---|---|
| Vault `00 Home.md` | **Start here.** Business facts, competitor research, design rules, build logs, client requirements |
| Vault `03 Design System/Style Guide.md` | **The design rulebook.** Values pulled from the live CSS. If you change a token, update it here too |
| Vault `05 Client/Client Requirements Inbox.md` | Every client request, its status, and where it landed |
| Vault `04 Website Build/Site Build Log.md` | What changed each round and how it was verified |
| Vault `04 Website Build/WordPress Plan.md` | WordPress build direction |
| [`docs/HANDOFF.md`](docs/HANDOFF.md) | Short handoff for sessions without the vault |
| Vault `Project Docs/` | Business profile and the original redesign plan (partly superseded) |

## `site/` — stack & structure

Static HTML, no build step.

```
site/
  index.html  services.html  service.html?slug=  our-work.html  project.html?slug=
  current-work.html  current-work-detail.html?slug=  process.html  commercial.html
  compliance.html  about.html  reviews.html  faq.html  contact.html  privacy.html
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
cd site && python3 -m http.server 8500
# open http://localhost:8500  (ports 8500+ only; 80xx-83xx are Local WP sites)
```

## Deploy

**Live:** https://vj-ranga.github.io/nextlevellandscaping/ — a small landing page linking `/site/` (the real build) and `/demo/` (the client options version), both served in full.

`gh-pages` is a **standalone history**, not a subtree split — it shares no commits with `main`. To redeploy after changing `site/` or `demo/`, copy the current folders into a scratch directory, commit fresh, and force-push:

```bash
rm -rf /tmp/ghp && mkdir /tmp/ghp && cd /tmp/ghp
cp -r /path/to/repo/site ./site
cp -r /path/to/repo/demo ./demo
touch .nojekyll
# add an index.html landing page — see gh-pages branch history for the current one
git init -q && git checkout -q -b gh-pages
git add -A && git commit -q -m "Deploy: site/ + demo/"
git remote add origin https://github.com/VJ-Ranga/nextlevellandscaping.git
git push -f origin gh-pages
```

GitHub Pages takes ~10–60s to rebuild — verify with `curl` before calling it live. No Actions workflow (the token lacks `workflow` scope). Large pushes occasionally 408 — retry. `main` is never touched by this.

## Next phase

Once `site/` is signed off, port to WordPress using the **core block editor**, no page builder and no pro plugins, with a custom core plugin and theme. Fully in WordPress is recommended over an Astro front end; not yet confirmed. See the vault's `04 Website Build/WordPress Plan.md`.
