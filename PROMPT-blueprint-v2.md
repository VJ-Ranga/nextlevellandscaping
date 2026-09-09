# Task: REWRITE one CSS file — "Blueprint" theme, version 2

Overwrite exactly this file, and nothing else:

    demo/assets/css/style-blueprint.css

Do NOT modify any other file. Replace the ENTIRE current contents.

---

## Why this is a rewrite

The current `style-blueprint.css` used **Plan's** drawing-sheet structure (a
`170px margin-label + minmax(0,1fr)` grid on every section) over a **dark** palette.
The client has now asked for the opposite recipe:

> "Use **Nocturne's** style with **Plan's font**, and the colour is **white**.
>  Do the 'What we do' and 'Current work' sections in that pattern."

So Blueprint v2 =
**Nocturne's layout/structure  +  Plan's monospace typography  +  a LIGHT (white) ground.**

Read these three files first:
- `demo/assets/css/style-nocturne.css`  — the STRUCTURE you are keeping (invert its
  colour, keep its anatomy)
- `demo/assets/css/style-plan.css`       — take ONLY the typographic system from here
- `demo/assets/css/style.css`            — the base all themes override
- `demo/index.html`                      — the markup you are styling

Every selector you write MUST be prefixed with `html[data-theme="blueprint"]` or
`[data-theme="blueprint"]`. The only unscoped things allowed are `@media` /
`@supports` wrappers and comments. The demo `.theme-bar` must be left untouched.

---

## KEEP from Nocturne (structure — this is the skeleton)

1. **Flat, full-width sections.** Every `main > .band` is a simple block with a
   centred container. **NO per-section grid, NO sticky margin-label column** — that
   grid is exactly what broke the projects carousel last time (a Swiper inside a
   `minmax(0,1fr)` grid track computed 16000px-wide slides). Nocturne does not do
   this; neither does v2.
2. **One full-bleed 1px hairline rule between sections** as the only divider.
   (On a light ground the hairline is a dark alpha — see palette.)
3. **Ruled-row cards.** `.cw-card`, `.store-card`, `.proj-card`, `.rev-card` lose
   every background / border-radius / shadow and become typographic rows divided by
   hairlines — copy Nocturne's `.cw-card` / `.store-card` grid-row structure and its
   `.proj-card` / `.rev-card` "hairline above, no decoration" treatment.
4. **The services explorer ("What we do")** — keep Nocturne's `.svc-explorer` /
   `.svc-list` / `.svc-item` / `.svc-figure` layout (list left, sticky image right on
   desktop; accordion under 900px). Active/hover item gets the accent.
5. **"Current work"** — keep Nocturne's `.cw-card` ruled-row + `.stepper` as small
   square ticks (a filled tick for "now"), `.cw-card__meta` / `__stage` / `__note`
   as small captions.
6. **Reviews** — `.rev-card` ruled row, `.rev-avatar` a small square monogram (not a
   filled badge), `.rev-card__who` caption.
7. **`.proc__num`** — bare numeral, no circle. `.chips li` — caption text divided by
   thin vertical rules, no pill. `.stepper` — 2px square ticks.
8. **Buttons** — square (0 radius), hairline border; `--fill` variant filled with
   lime and dark text. Kill the `::before` fill-sweep. `.tlink` underlined + tick.
   Form `input`/`textarea` — underlined field, not a box, accent focus rule.
9. **Photography** — clean, edge-to-edge where the base allows. Do NOT apply
   Nocturne's warm "glow" brightness filter (that was to make images pop on black).
   A very slight `contrast(1.03)` at most; a subtle lift on hover is fine.
10. **Footer** — same ruled structure; end it with a thin dashed rule ("scale bar")
    like Plan's `.footer-bar::before`.
11. **`prefers-reduced-motion`** — kill image transforms, hero cue animation,
    reveal transforms.
12. Support both headers (`.site-header`, `.hdr2`), both `[data-hero]` values (in
    `sticky` mode every band must be opaque — your solid light ground handles it),
    and both `[data-intro="split"|"stacked"]`.

## KEEP from Plan (typography ONLY)

13. **The system monospace technical voice.** A stack:
    `ui-monospace,"SFMono-Regular",Menlo,Consolas,"Liberation Mono",monospace`
    carries EVERY: `.eyebrow`, card `__meta`, `.stat-n` figures + their captions,
    `.credline`, `.chips li`, `.field label`, `.svc-item__no`, `.proj-card__meta`,
    `.cw-card__meta`/`__stage`, `.strip__cap`, footer text, breadcrumb, section
    labels — uppercase, letter-spacing ~0.16em. This mono voice is the single thing
    that makes it read as "Blueprint" and not just "Nocturne in white".
14. **Headings + body stay in Poppins** (already loaded), weight 400. Do NOT bring
    Nocturne's Georgia serif — the client asked for Plan's font, and Plan keeps the
    sans for headings.
15. **A small section label per band.** Nocturne has none; add a lightweight one:
    a `::before` on `main > .band > .container`, a CSS counter
    (`counter-reset` on `main`, `counter-increment` per band) plus a per-id
    `--bp-label` string, rendered as a **normal block heading above the section
    content** (NOT sticky, NOT in a side column). Format: `01 — WHAT WE DO`.
    Use these labels by id:
    `#intro`→"Overview", `#services`→"What We Do", `#projects`→"Selected Work",
    `#project-strip`→"Site Record", `#current`→"Current Work", `#process`→"Method",
    `#reviews`→"Clients", `#about`→"Practice", `#store`→"Supply", `#contact`→"Enquiry".
    A short lime tick (a 2px top border on the label, ~28px wide) is the one place
    lime touches the light ground.

## THE PALETTE — light / white (this is the "combine color (white)" part)

    --bp-paper : #FFFFFF          /* the ground — clean white */
    --bp-paper-2: #F6F5F0         /* optional: a barely-warm inset for 1-2 sections
                                     so it is not clinically flat; see tonal map */
    --bp-ink   : #16180F          /* near-black text          ~16:1 on paper */
    --bp-muted : #5C6152          /* secondary copy           ~6:1  */
    --bp-faint : #7A7E6E          /* captions / meta          ~4.6:1 — verify >=4.5 */
    --bp-rule  : rgba(22,24,15,.16)   /* hairlines */
    --bp-rule-ui: rgba(22,24,15,.42)  /* interactive borders  >=3:1 */
    --bp-lime  : #C2E807          /* FILLS and small MARKS ONLY — never as text on
                                     paper (1.4:1, fails). */
    --bp-lime-ink: #3E4A16        /* olive — use THIS for any accent *text* on paper
                                     (~8.9:1). --accent-light must resolve to this. */
    --bp-error : #A6301B          /* form errors, >=4.5 on paper */

Re-point the base tokens so inherited rules resolve:
`--bg`, `--surface-dark`, `--surface-dark-2` → `--bp-paper` (the whole page is one
ground; neutralise every `.band--dark` to paper with dark text, using class-doubled
selectors that outrank the base AND the `[data-hero="sticky"]` opacity rules).
`--ink` → `--bp-ink`; `--muted`/`--muted-dark` → `--bp-muted`;
`--line`/`--line-dark` → `--bp-rule`.
`--accent` / `--accent-light` / `--accent-dark` → context: on the paper ground use
`--bp-lime-ink` for text; `--accent-ink` / `--accent-ink-light` / `--accent-ink-dark`
→ `#16180F` (dark text that sits ON a lime fill). `--btn-radius` → 0.
Zero out `--r-arch*`, `--r-scoop`, `--r-cover`, `--r-footer-scoop`.
Neutralise `.contour` (image, opacity, any invert filter).

### Optional subtle tonal map (so pure white is not monotonous)
Give 2-3 sections the `--bp-paper-2` warm inset instead of pure white, applied per
id (explicit, not nth-child). Suggested: `#projects` and `#reviews` on `--bp-paper-2`,
everything else on `--bp-paper`. Keep the difference barely perceptible — this is a
whisper, not a stripe. If it looks better fully uniform, you may skip this and put
one line of comment saying so.

---

## Components you MUST restyle (JS-generated, markup is fixed)

`.statline`/`.stat-n`, `.credline`, `.svc-explorer`/`.svc-left`/`.svc-list`/
`.svc-item`/`.svc-item__no`/`.svc-item__name`/`.svc-item__go`/`.svc-stage`/
`.svc-figure`/`.svc-copy`, `.proj-card`/`.proj-card__meta` (in a Swiper),
`.cw-card`+`.cw-card__meta`/`__stage`/`__note`/`.stepper`, `.proc`/`.proc__num`,
`.store-card`, `.strip`/`.strip__nav`/`.strip__cap`, `.rev-card`/`.rev-avatar`/
`.rev-card__who`, `.field input`/`textarea`, `.btn-ghost`(+`--fill`), `.chips li`,
`.tlink`, `.media`, `.section-head`, `.eyebrow`, `.lead`, `.skip-link`,
`.hero-pause`, `.hero-car`/`.hero-slide`, `.site-header`/`.hdr2`, `.site-footer`,
`.drawer`, plus the `#intro` `.intro-grid` / `.intro-copy` / `.intro-figures` /
`.statline` / `.credline` (support the split + stacked intro layouts the base
provides — restyle, don't relayout).

## Requirements

- Palette + tokens declared near the top inside `html[data-theme="blueprint"]{ … }`.
- Responsive to 320px.
- Accessibility: body text >=4.5:1 on paper, UI borders >=3:1, visible
  `:focus-visible` (use `--bp-lime-ink`, >=2px), reduced-motion honoured, form
  fields clearly bounded on white.
- No `@import`. Plain CSS only. Comment the file in clear sections.

## Verify + report before you finish

1. `python3 -c "s=open('demo/assets/css/style-blueprint.css').read();print('braces',s.count('{'),s.count('}'))"` — must balance.
2. Strip comments, parse every selector, count comma-separated parts NOT containing
   `data-theme="blueprint"` — must be **0** apart from `@media`/`@supports`. Report it.
3. Report: file path, line count, brace count, the 0, and a short bullet list of
   your decisions — especially: did you keep the tonal `--bp-paper-2` inset or go
   fully uniform white, and the final `--bp-faint` hex + its measured contrast on
   `#FFFFFF`.
