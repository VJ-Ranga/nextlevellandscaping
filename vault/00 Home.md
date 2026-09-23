---
tags: [moc]
updated: 2026-09-23
---

# NextLevel Landscaping — Project Vault

Cloudycode client project. Full redesign + restructure of <https://nextlevellandscaping.com.au/> (Adelaide landscape design & construction + garden store).

- **Live preview:** <https://vj-ranga.github.io/nextlevellandscaping/> — landing page linking both builds:
  - **[/site/](https://vj-ranga.github.io/nextlevellandscaping/site/)** — the real build (13 pages — Store/product pages removed 2026-09-23). ⚠ the deployed `gh-pages` copy currently only reflects work through [[Site Build Log]] Round 19 — Rounds 20–26 are built and verified locally but not yet committed/redeployed.
  - **[/demo/](https://vj-ranga.github.io/nextlevellandscaping/demo/)** — the 6-theme reference
- **Repo:** github.com/VJ-Ranga/nextlevellandscaping
- **Two folders:**
  - `demo/` — the multi-theme options showcase (6 themes, switcher). Frozen — a parts-bin to pull sections from, never build production here again.
  - **`site/`** — the real build. Single locked look (Carbon, Centred header, Sticky hero, Split intro, no switcher). **13 pages, every nav item its own page**, 42 client requirements logged (38 done). This is what ships. See [[Sitemap and Pages]].
- **Stage (2026-09-23):** `site/` complete and both builds deployed as of Round 19; a further large round of changes (Rounds 20–26 — Store removal, Services nav dropdown, single-service page redesign, sitewide spacing pass) is built and verified locally but awaiting an explicit commit/push/redeploy instruction. See [[Site Build Log]] and [[Tech Stack and Deploy]] for how the deploy actually works now (it changed — not a subtree split anymore).

> [!tip] Where to start
> New client requirements go in [[Client Requirements Inbox]]. Every change we agree goes in [[Decisions Log]].

## 01 Business — facts
- [[Business Profile]] — identity, ABN, licence, contact
- [[Services]] — the 8 services + materials
- [[Portfolio Projects]] — 4 real completed jobs
- [[Reviews]] — 7 Google reviews (verbatim)
- [[Team]] — ⚠ placeholder names
- [[Store - NextLevel Outdoors]]
- [[Current Site Problems]] — what's wrong with the live site today

## 02 Competitors & market
- [[Competitor Overview]] — 19 AU sites + 15 premium studios, the big picture
- [[Market Gaps]] — what nobody does (our advantage)
- [[Laguna Pools]] — client's own style reference
- Adelaide: [[Future Landscapes]] · [[Arvion Construction]] · [[Mr B's Landscaping]] · [[Unearthed Landscaping]] · [[Adelaide Outdoor Landscapers]] · [[Structural Landscapers Adelaide]] · [[Visual Landscape Gardening]] · [[Muster Landscapes]] · [[Adelaide Innovative Landscaping]] · [[Yergan Landscaping]] · [[Landscaping Adelaide (Gardener SA)]] · [[Catnik Design Studio]]
- Interstate: [[Harrison's Landscaping]] · [[Outhouse Design]] · [[Rolling Stone Landscapes]] · [[COS Design]] · [[Nathan Burkett]] · [[Utopia Landscape Design]] · [[Design Scapes]]
- [[Premium Studios]] — Eckersley, Peachy Green, Secret Gardens, etc.
- [[Outside Ideas]]

## 03 Design system — the style we are building
- [[Style Guide]] ⭐ — **the rulebook.** One consolidated source of truth, pulled from the live `site/` CSS. Start here.
- [[Design Direction]] — "premium visuals on trade IA", anti-boxy
- [[Colour Palette]] · [[Typography]] · [[Buttons]] · [[Spacing and Layout]]
- [[Scoop Curve]] — Carbon theme signature move + corner map
- [[Motion]] · [[Demo Themes]]

## 04 Website build
- [[Site Build Log]] ⭐ — the `site/` build (current production direction)
- [[Sitemap and Pages]] · [[Homepage Sections]]
- [[Current Work Feature]] — the stage tracker (unique in market)
- [[Content Data Model]] — `data.js`
- [[Tech Stack and Deploy]] · [[WordPress Plan]]
- [[Standards - Accessibility SEO Privacy]]
- [[Template Audit 2026-09-21]] — fresh check of the HTML template
- [[Build Log]]

## 05 Client
- [[Client Requirements Inbox]] ← **next step**
- [[Open Questions]] · [[Waiting on Client]] · [[Decisions Log]]
