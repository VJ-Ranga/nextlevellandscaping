# Task: write ONE new CSS file — theme "Carbon soft v2"

Create exactly this file, nothing else:

    demo/assets/css/style-carbon-soft-v2.css

Do NOT modify any other file. Overwrite the placeholder already at that path.

Every selector MUST start with `html[data-theme="carbon-soft-v2"]` or
`[data-theme="carbon-soft-v2"]`. The only unscoped things allowed are `@media` /
`@supports` wrappers and comments. Leave the demo `.theme-bar` untouched.

---

## What this is

**Carbon soft v2 = the existing "Carbon soft" theme, turned into a work of art by
making ONE design move its whole identity: a large single-corner "scoop" curve on
every section, the corner rotating section to section, so each band sweeps up out
of the one above it.**

The client already loves this on the "Our Work" band (a `border-radius:150px 0 0 0`
single top-left sweep, `margin-top` negative pull). v2 makes that the rhythm of the
entire page — hero, every content band, and the footer.

### Read first
- `demo/assets/css/style.css` — the base system. Find the `[data-theme="carbon-soft"]`
  token block and the section-42 rule (`--r-ow`, `[data-theme="carbon-soft"] #projects`)
  — v2 keeps carbon-soft's PALETTE and typography and generalises that one rule.
- `demo/index.html` — the markup. The homepage is now **8 content sections** in this
  order (all direct children of `<main>`), which you must style:
  `#intro` (dark) · `#services` (light) · `#projects` (dark; contains a folded-in
  `.strip-band.strip-inline#project-strip` near its end) · `#current` (light) ·
  `#reviews` (dark) · `#process` (light) · `#store` (dark) · `#contact` (light `band--lg`).
  Plus `.hero` above and `.site-footer` below.

## Palette + type (inherit from Carbon soft — restate as tokens)

    --v2-ground   : #F2F2EC   /* warm light ground for the light bands */
    --v2-night    : #17190F   /* near-black for the dark bands          */
    --v2-ink      : #17190F   /* text on light                          */
    --v2-on-night : #F2F2EC   /* text on dark                           */
    --v2-muted    : #6E7265   /* secondary on light  (verify >=4.5:1)   */
    --v2-muted-nt : rgba(242,242,236,.72)  /* secondary on dark        */
    --v2-line     : rgba(23,25,15,.14)     /* hairline on light        */
    --v2-line-nt  : rgba(242,242,236,.16)  /* hairline on dark         */
    --v2-lime     : #C2E807   /* fills + marks; NEVER text on light (1.4:1) */
    --v2-lime-ink : #3E4A16   /* olive — accent TEXT on light (~8.9:1)  */

Re-point the base tokens so inherited rules resolve: `--bg`→`--v2-ground`,
`--surface-dark`/`--surface-dark-2`→`--v2-night`, `--ink`→`--v2-ink`,
`--muted`/`--muted-dark`→context, `--line`/`--line-dark`→context. Make
`--accent`/`--accent-light`/`--accent-dark` context-aware: `--v2-lime-ink` on light
bands, `--v2-lime` on dark bands; `--accent-ink*` = `#17190F`.
Keep carbon-soft's `--h-weight:400` and pill button radius (`--btn-radius:999px`).

Dark bands (`#intro`, `#projects`, `#reviews`, `#store`, `.hero`, `.site-footer`)
get `--v2-night` background + `--v2-on-night` text + the night hairline/muted, via
class-doubled selectors that also win over the base `[data-hero="sticky"]` opacity
rules. Light bands keep `--v2-ground`.

## THE SIGNATURE MOVE — rotating single-corner scoop

Define one radius token:

    html[data-theme="carbon-soft-v2"]{ --v2-scoop: clamp(56px, 11vw, 150px); }
    @media(max-width:640px){ html[data-theme="carbon-soft-v2"]{ --v2-scoop: 44px; } }

Apply to EVERY `main > .band` (and adapt for `.hero` bottom edge + `.site-footer`
top edge):

- `position:relative; z-index:1;`
- a SINGLE rounded corner of `var(--v2-scoop)`, the corner rotating per section so
  the page reads as a hand-drawn ribbon, not a repeated stamp. Use a 4-step cycle
  on the TOP corners as the section sweeps up out of the previous band:
  `#intro` → `0 0 0 0` (it meets the hero; hero owns the curve, see below)
  `#services`  → `var(--v2-scoop) 0 0 0`   (top-left)
  `#projects`  → `0 var(--v2-scoop) 0 0`   (top-right)
  `#current`   → `var(--v2-scoop) 0 0 0`
  `#reviews`   → `0 var(--v2-scoop) 0 0`
  `#process`   → `var(--v2-scoop) 0 0 0`
  `#store`     → `0 var(--v2-scoop) 0 0`
  `#contact`   → `var(--v2-scoop) var(--v2-scoop) 0 0`  (both — it is the closer)
- `margin-top: calc(-1 * var(--v2-scoop));` so the band physically overlaps and
  rises out of the one above.
- `padding-top: calc(var(--pad-band) + var(--v2-scoop) * .45);` so content clears
  the curve.
- the band ABOVE each scoop needs `padding-bottom: calc(var(--pad-band) + var(--v2-scoop))`
  so it has room to be pulled into. Apply to `#services`,`#projects` (its inner
  content, not the folded strip),`#current`,`#reviews`,`#process`,`#store`.
- if a band uses `.contour::before`, give it `border-radius:inherit` so the texture
  clips to the curve.
- `overflow` may stay visible; the border-radius clips the background paint anyway.
  If a Swiper section (`#projects`, `#current`, `#reviews`) shows a clipped shadow,
  add `overflow:clip` on that section only (not `hidden` — it breaks sticky).

### Hero
Give `.hero .hero__media` (or `.hero` itself) a **bottom** single-corner sweep —
`border-radius: 0 0 0 var(--v2-scoop)` (bottom-left, matching the client's
screenshot where the scroll-cue sits in the curve). No negative margin on the hero.

### Footer
`.site-footer` gets `border-radius: var(--v2-scoop) 0 0 0` (top-left),
`margin-top: calc(-1 * var(--v2-scoop))`, and `#contact` gets extra bottom padding
to be pulled into. Footer is on `--v2-night`.

### The folded image strip
`.strip-inline#project-strip` lives INSIDE `#projects`. Do NOT give it its own
scoop or negative margin — it's a full-bleed band within the dark projects section.
Just make sure its `.strip` Swiper, `.strip__nav`, `.strip__cap` read on the night
ground (off-white text, lime marks).

## Everything else
Keep carbon-soft's component look: cards keep a subtle treatment (not the Blueprint
ruled-row — this theme is soft, not technical), pill buttons, weight-400 all-caps
headings. Context-flip card text/rules for the dark vs light bands. Support both
headers (`.site-header`,`.hdr2`), both `[data-hero]` (sticky: every band already
has an explicit bg), both `[data-intro]`.

Components to check read correctly on BOTH grounds: `.statline`/`.stat-n`,
`.credline`, `.svc-explorer` & children, `.proj-card`+meta, `.cw-card`+`.stepper`,
`.proc`/`.proc__num`, `.store-card`, `.rev-card`/`.rev-avatar`, `.chips li`,
`.field input`/`textarea`, `.btn-ghost`(+`--fill`), `.tlink`, `.media`,
`.section-head`, `.eyebrow`, `.lead`, `.skip-link`, `.hero-pause`,
`.strip`/`.strip__nav`/`.strip__cap`, `.swiper-controls button`.

## Requirements
- Responsive to 320px; scoop drops to 44px under 640px.
- Accessibility: text >=4.5:1 on its ground, UI borders >=3:1, visible
  `:focus-visible` (lime on dark, olive on light, >=2px), honour
  `prefers-reduced-motion` (no reveal transforms, no hero cue anim).
- No `@import`. Plain CSS. Comment in clear sections.

## Verify + report
1. brace balance.
2. 0 unscoped selectors apart from `@media`/`@supports` — report the count.
3. Report: file path, line count, brace count, the 0, the corner assigned to each
   of the 8 sections + hero + footer, and your final `--v2-muted` hex with its
   contrast ratio on `#F2F2EC`.
