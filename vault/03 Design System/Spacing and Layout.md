---
tags: [design, tokens]
---

# Spacing & Layout

- **Base:** 8px scale — 8 / 16 / 24 / 40 / 64 / 96 / 128.
- **Band padding:** `--pad-band 96px` · `--pad-band-lg 128px` · `--pad-band-sm 32px` (smaller on mobile).
- **Container:** `--container 1200px`, `--gutter 24px`. Text measure ~760px.
- **Breakpoints:** Bootstrap 5 — 576 / 768 / 992 / 1200 / 1400 (+ custom 520/640/760/900 in CSS). Mobile-first; tested to 320px.
- **Grid = scaffold only.** Visible layout asymmetric: offset headings, full-bleed images, uneven columns (7/5, 8/4).
- **Arch radii (base):** `--r-arch clamp(64px,12vw,176px)`, `--r-arch-sm clamp(40px,8vw,88px)`. Carbon uses `--v2-scoop` → [[Scoop Curve]].
- Bands: `.band`, `.band--dark`, `.band--lg`, `.band--tight`, `.contour`, `.strip-band`.
