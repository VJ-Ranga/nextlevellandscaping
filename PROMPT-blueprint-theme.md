# Task: write ONE CSS file — the "Blueprint" theme

Create exactly this file, and NOTHING else:

    demo/assets/css/style-blueprint.css

Do not modify any other file. Do not touch index.html, style.css, style-plan.css,
style-nocturne.css, or any JS. Overwrite the placeholder that is already at that path.

---

## Context

This is the homepage + inner pages for **NextLevel Landscaping**, an Adelaide
landscape design-and-build company. The site already has five visual styles, each a
CSS file scoped under a `[data-theme="…"]` attribute on `<html>`. You are writing a
sixth, called **Blueprint**, activated by `[data-theme="blueprint"]`.

**EVERY selector you write must be prefixed with `[data-theme="blueprint"]`**
(or `html[data-theme="blueprint"]` for specificity) so it can never leak into the
other five styles. The only unscoped things allowed in the file are `@media` /
`@supports` wrappers and comments.

Two of the existing styles are your source material — read them first:

- `demo/assets/css/style-plan.css`  — the STRUCTURE you are keeping
- `demo/assets/css/style-nocturne.css` — the PALETTE you are keeping

Also read `demo/assets/css/style.css` (the base design system all themes override)
and `demo/index.html` (the markup you are styling).

---

## What Blueprint is

**Plan's architectural-drawing structure, rendered in Nocturne's dark palette,
with deliberate section-to-section tonal variation so it never reads as one flat
slab.** The client's exact words: they like Plan's fonts and line style, they like
Nocturne's colour, but "it's boring if we use the same colour for all sections —
combine both carefully."

### KEEP from Plan (style-plan.css)

1. **Numbered margin-index labels.** Each `main > .band` shows a small label in a
   narrow left column — `01 — OVERVIEW`, `02 — SERVICES`, … — driven by a CSS
   counter (`counter-reset` on `main`, `counter-increment` per band) plus a
   per-section `--bp-label` string. Sticky in the margin on desktop, collapses to a
   stacked label under ~900px. Copy Plan's mechanism; use the SAME label text Plan
   uses (Overview / Services / Selected Work / Site Record / Current Work / Method /
   Clients / Practice / Supply / Enquiry — check style-plan.css lines ~244-254 and
   the per-page `--plan-label` inline styles on the inner pages… you set your own
   `--bp-label` values, one per id, matching Plan's naming).
3. **Section separation is ONE full-bleed 1px hairline rule per band. Nothing else.**
   No boxes, no filled panels, no border-radius on containers, no box-shadows, no
   alternating light/dark bands as blocks.
4. **Faint vertical drawing guides** — a container-width repeating-linear-gradient
   of ~6 vertical lines at very low opacity, `z-index:0`, behind the content, must
   not reduce text contrast. Fewer guides (~3) under 640px. Plan repurposes the
   `.contour::before` slot for this — do the same, and neutralise `.contour`
   (image, opacity, any `invert()` filter).
5. **Monospace technical voice.** A system monospace stack
   (`ui-monospace, "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace`)
   for every label, eyebrow, stat figure caption, card metadata, chip, form label,
   footer text — uppercase, ~0.16-0.18em letter-spacing. This is the single biggest
   thing that stops the page reading as a template. Headings and body stay in
   Poppins (already loaded) at weight 400.
6. **No box-ish devices.** `.proc__num` circles → bare large monospace numerals
   (hide the icon). `.rev-avatar` → a square hairline monogram, not a filled badge.
   `.stepper` → 2px square ticks with a lime "now". `.chips li` → caption text
   divided by 1px vertical rules, no pill. Cards (`.cw-card`, `.store-card`,
   `.proj-card`, `.rev-card`) → ruled rows: image + text divided by hairlines, no
   fill / radius / shadow.
7. **Buttons & fields.** `.btn-ghost` and `.btn-ghost--fill` → square (0 radius),
   hairline border, `--fill` variant filled with lime and dark text. Kill the
   `::before` fill-sweep. Text links (`.tlink`) → underlined with a small tick.
   Form inputs → underlined field, not a box, with a lime focus rule.
8. **Footer** ends with a thin dashed "scale bar" detail (Plan does this via
   `.footer-bar::before`).

### KEEP from Nocturne (style-nocturne.css)

9. **Warm near-black palette.** Base ground around `#101109` (very slightly warm /
   green, never pure `#000`). Off-white text `#F2F1E9`. Secondary text `#A9A99C`
   (~7.9:1). Captions `#8A8A7E` (~5.4:1). Hairlines `rgba(255,255,255,0.14)`.
   UI borders `rgba(255,255,255,0.42)` (~3.6:1). Lime `#C2E807` (~13:1 on the
   ground — safe as small text here). Error `#FF6B5B`.
10. **Photography is the light source.** Apply a warm luminous lift to every image
    and the hero video: `filter: saturate(1.06) contrast(1.04) brightness(1.05)`,
    a stronger lift on hover. Images run edge-to-edge where the base allows.
11. **Re-point the base tokens** (`--bg`, `--surface-dark`, `--surface-dark-2`,
    `--ink`, `--muted`, `--line`, `--line-dark`, `--muted-dark`, plus the
    `--accent-*` / `--accent-ink-*` pairs and `--btn-radius` / `--h-weight` /
    `--r-*` radii → 0) so most inherited rules resolve correctly without fighting
    them one by one. Neutralise every `.band--dark` so it becomes the same ground
    with light text (class-doubled selectors that outrank the base AND the
    `[data-hero="sticky"]` opacity rules).

### THE NEW PART — section tonal variation (this is why it's not just "Plan in dark")

The page must NOT be one uniform `#101109` from top to bottom. Give it a **3-step
warm tonal scale mapped to section role**, applied per section id (explicit, like
Plan's labels — do not rely on nth-child):

    --bp-ink-1: #0C0D07   /* darkest  — the deepest sheet          */
    --bp-ink-2: #101109   /* base     — most sections               */
    --bp-ink-3: #16150E   /* lifted   — the "act now" sections      */

Mapping (adjust hex slightly if you find something better, keep 3 steps, keep the
differences SUBTLE — this is tonal shift, not contrast):

| section id        | ground     |
|-------------------|------------|
| `#intro`          | ink-1      |
| `#services`       | ink-2      |
| `#projects`       | ink-1      |
| `#project-strip`  | ink-1 (full-bleed photo band — let images dominate) |
| `#current`        | ink-2      |
| `#process`        | ink-3      |
| `#reviews`        | ink-2      |
| `#about`          | ink-1      |
| `#store`          | ink-3      |
| `#contact`        | ink-3      |
| `.site-footer`    | ink-1      |

The hairline rule between two same-tone sections still reads because of the guides
and the label; between different tones it also gives a soft step. Additionally:
give `#projects` and `#current` a **thin lime tick at the left edge of their
margin label** slightly longer than the others, so the two "proof" sections carry
a subtle marker. Keep every other use of lime to a single small mark.

---

## The markup you are styling (do not change it)

`main` direct children, in order:
`.hero` · `#intro.band.band--dark.headline.contour` ·
`#services.band` · `#projects.band.band--dark.contour` ·
`#project-strip.band.band--dark.strip-band` · `#current.band` ·
`#process.band.band--dark` · `#reviews.band.contour` ·
`#about.band.band--dark.contour` · `#store.band` · `#contact.band.band--lg`

`#intro` has an inner `.intro-grid` (`.intro-copy` + `.intro-figures` holding
`.statline#stats`) and a full-width `.credline#credline` strip below it — both must
work in your theme (label + hairline + tonal ground; keep the split/stacked layouts
the base provides, just restyle).

Component classes generated by JS that you must restyle (you cannot change their
HTML): `.statline`/`.stat-n`, `.credline`, `.svc-explorer`/`.svc-left`/`.svc-list`/
`.svc-item`/`.svc-item__no`/`.svc-item__name`/`.svc-item__go`/`.svc-stage`/
`.svc-figure`/`.svc-copy`, `.proj-card`/`.proj-card__meta`, `.cw-card` &
`.cw-card__meta`/`__stage`/`__note`/`.stepper`, `.proc`/`.proc__num`,
`.store-card`, `.strip`/`.strip__nav`/`.strip__cap`, `.rev-card`/`.rev-avatar`/
`.rev-card__who`, `.field input`/`textarea`, `.btn-ghost`(+`--fill`), `.chips li`,
`.tlink`, `.media`, `.section-head`, `.eyebrow`, `.lead`, `.skip-link`,
`.hero-pause`, `.hero-car`/`.hero-slide`, `.site-header`, `.hdr2` (two header
variants — support BOTH), `.site-footer`, `.drawer`. Leave `.theme-bar` alone
(demo control).

Also support: `[data-layout="classic"]` and `[data-layout="centred"]`;
`[data-hero="static"]` and `[data-hero="sticky"]` (in sticky mode every band must
be opaque so the pinned video can't bleed through — your grounds handle this);
`[data-intro="split"]` and `[data-intro="stacked"]`.

---

## Requirements

- Every selector scoped under `[data-theme="blueprint"]`.
- Palette + the 3 ink steps as `:root`-level custom properties near the top,
  actually declared as `html[data-theme="blueprint"]{ … }`, so they're easy to tune.
- Responsive to 320px. Margin-label column collapses under ~900px.
- Accessibility: body text ≥4.5:1, non-text/UI borders ≥3:1, visible
  `:focus-visible` (lime, ≥2px), honour `prefers-reduced-motion` (kill image
  transforms, hero cue animation, any reveal transform). Form fields clearly
  visible on the dark ground.
- No `@import`. Plain CSS only. No preprocessor syntax. No keyframes needed.
- Comment the file in clear sections.

## Before you finish, verify and report

1. `python3 -c "s=open('demo/assets/css/style-blueprint.css').read(); print('braces', s.count('{'), s.count('}'))"` — must balance.
2. Parse every selector (strip comments first); count how many comma-separated
   selector parts do NOT contain `[data-theme="blueprint"]` — must be **0** apart
   from `@media`/`@supports` wrappers. Report the number.
3. Report: file path, line count, brace check, scoping check (the 0), and a short
   bullet list of the specific decisions you made — especially the final ink-step
   hex values and which section got which.
