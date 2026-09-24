# Our Work Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild production `our-work.html` as a responsive, metadata-driven 12-tile editorial mosaic while retaining the existing image-strip carousel.

**Architecture:** `our-work.html` owns semantic filter controls, mosaic mount, and strip mount. Inline page JavaScript derives 12 render items from the four real `window.NLL.projects`, using explicit gallery/image metadata and project links. Scoped portfolio CSS in `style-carbon-soft-v2.css` controls grid spans, single-corner scoops, responsive stacking, focus states, and captions without new dependencies.

**Tech Stack:** Static HTML, existing `data.js`, vanilla JavaScript, existing Swiper 11, CSS Grid, existing Carbon Soft v2 tokens.

## Global Constraints

- Edit production `site/` only; never edit `demo/` or `demo2/`.
- Use only local image assets and verified project facts from `window.NLL.projects` / `projectStrip`.
- Keep Poppins, two grounds, lime/olive tokens, no shadows/blobs/waves, and no rounded-everything.
- Keep exactly one H1, visible captions, meaningful alt text, keyboard-focusable links, filters, lightbox, and bottom horizontal carousel.
- Do not add dependencies.
- Use one new cache-buster on every CSS/JS/data asset reference across all 15 site HTML pages.
- Append dated build-log entry.
- Run required static verification before reporting.

### Task 1: Define and render mosaic data

**Files:**
- Modify: `site/our-work.html`
- Modify: `site/assets/data.js` only if a clean explicit tile definition is needed

**Interfaces:**
- Consumes: `window.NLL.projects`, each project `gallery`, `name`, `suburb`, `slug`, `tags`.
- Produces: `#work-grid` containing 10–12 linked `.work-tile` articles, each linked to `project.html?slug=<real slug>`.

- [ ] Build explicit tile plan with four real projects repeated at varied gallery images, sizes, and crops; do not label repeated tiles as separate projects.
- [ ] Render project name, suburb, and a concise project-derived caption on every tile.
- [ ] Preserve `#filterbar`, `#strip`, lightbox markup, and existing script initialization order.
- [ ] Make filter buttons select real project tags and hide/show complete grid items without breaking grid placement.

### Task 2: Add editorial mosaic styling

**Files:**
- Modify: `site/assets/css/style-carbon-soft-v2.css`

**Interfaces:**
- Consumes: `.work-grid`, `.work-tile`, `.work-tile__media`, `.work-tile__caption`, `data-project-tags`.
- Produces: desktop asymmetric CSS Grid, tablet two-column fallback, mobile one-column stack with controlled crop ratios and selective one-corner scoops.

- [ ] Replace old two-column work-card rules with scoped mosaic rules.
- [ ] Use only existing Carbon tokens and hairlines; no shadow or new accent.
- [ ] Add visible hover/focus treatment and reduced-motion-safe image transitions.
- [ ] Ensure image `aspect-ratio`, width/height metadata, object-fit crops, and no horizontal overflow.

### Task 3: Cache-bust and document

**Files:**
- Modify: all 15 `site/*.html` pages containing CSS/JS/data query references
- Modify: `vault/04 Website Build/Site Build Log.md`

- [ ] Replace all existing site asset query versions with one new timestamp.
- [ ] Append dated entry covering asymmetric redesign, repeated-data strategy, cache-buster, and static verification.
- [ ] Confirm no demo files changed.

### Task 4: Verify

- [ ] Run `node --check` for all site JavaScript files.
- [ ] Check all 15 site pages use one identical new cache-buster for CSS/JS/data references.
- [ ] Check exactly one H1, no `href="#"`, all new image paths exist, 10–12 mosaic items, and strip remains present.
- [ ] Inspect `git diff --check` and `git status --short`.
