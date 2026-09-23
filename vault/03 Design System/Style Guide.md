---
tags: [design, style-guide, rules]
status: source of truth
scope: site/ (the production build — locked Carbon / Centred / Sticky hero / Split intro)
updated: 2026-09-23
---

# Style Guide — NextLevel Landscaping

> [!important] This is the rulebook
> Every value here is pulled straight from `site/assets/css/style.css` + `style-carbon-soft-v2.css` — not aspiration, what's actually built. When in doubt, **this file wins**. If you change a value in code, update it here in the same sitting, or this stops being true.
>
> `demo/` still holds 6 alternate looks — this guide covers **only** the one the client picked and locked in: **Carbon** theme, **Centred** header, **Sticky** hero, **Split** intro. See [[Demo Themes]] for the others (reference only, not live).

Related: [[Design Direction]] (the *why*) · [[Scoop Curve]] (the signature move, in depth) · [[Colour Palette]] · [[Typography]] · [[Buttons]] · [[Spacing and Layout]] · [[Motion]] · [[Site Build Log]] (build history)

---

## 1. Brand palette

Two grounds, one accent. **Never** a third colour. All chroma outside these tokens comes from photography.

| Token | Hex / value | Role | Rule |
|---|---|---|---|
| `--v2-night` | `#17190F` | Dark-band background, hero, footer | |
| `--v2-ground` | `#F2F2EC` | Light-band background | Warm off-white, never pure `#FFFFFF` |
| `--v2-ink` | `#17190F` | Text on light | |
| `--v2-on-night` | `#F2F2EC` | Text on dark | |
| `--v2-muted` | `#6B6F62` | Secondary text on light | 4.59:1 on ground — **do not lighten**, it was darkened one step from spec to clear AA |
| `--v2-muted-nt` | `rgba(242,242,236,.72)` | Secondary text on dark | |
| `--v2-line` | `rgba(23,25,15,.14)` | Hairline dividers on light | |
| `--v2-line-nt` | `rgba(242,242,236,.16)` | Hairline dividers on dark | |
| `--v2-line-ui` | `rgba(23,25,15,.5)` | Interactive borders (inputs, controls) | ≥3:1, never the hairline value |
| `--v2-lime` | `#C2E807` | Accent **fill** | Buttons, active states, marks. **Never as text on a light ground** — 1.4:1, fails AA |
| `--v2-lime-ink` | `#3E4A16` (olive) | Accent **text** on light | ~8.5:1. This is what "lime" becomes when it has to be readable text |

### Rules
1. **Lime is a fill, never light-ground text.** If an accent-coloured word is needed on the light ground, it prints olive (`--v2-lime-ink`), not lime. This is automatic via the `--accent` token — never hardcode `#C2E807` as a `color` on light.
2. Anything printed *on* a lime fill (e.g. button label) is near-black `#17190F` (`--accent-ink`), never white.
3. Every dark band (`.band--dark`, `.hero`, `.site-footer`, `.drawer`, `.subhero`) flips `--ink`/`--muted`/`--line`/`--accent` automatically via the theme's context-aware tokens. **Don't** hardcode a light-mode colour inside a dark band — use the token, it already knows which ground it's on.
4. Contrast floor: body text ≥4.5:1, UI borders ≥3:1. This has been audited to 0 failures — any new colour combination must be checked before shipping.
5. Logo: full-colour on the homepage only (`body.pg-home`); `filter:grayscale(1)` everywhere else. Applies to header + drawer + footer logo instances.

---

## 2. Typography

- **Family:** Poppins only — `"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. No second typeface.
- **Headings are ALL-CAPS, weight 400, `letter-spacing:0`, `line-height:1.04`.** Hierarchy comes from size, never from bold. This is the single most-repeated rule in the whole system — do not bold a heading to make it stand out, make it bigger or move it.
- **Body:** 16px, `line-height:1.8`, weight 400.

| Element | Size | Weight | Case | Tracking |
|---|---|---|---|---|
| H1 | `clamp(2rem, 5.4vw, 3rem)` | 400 | UPPERCASE | 0 |
| H2 | `clamp(1.9rem, 4.6vw, 2.6rem)` | 400 | UPPERCASE | 0 |
| H3 | `clamp(1.2rem, 2.4vw, 1.42rem)` | 500 | UPPERCASE | 0 |
| Lead paragraph | `clamp(1.05rem, 1.6vw, 1.25rem)` / 1.6 | 400 | sentence case | — |
| Body | 16px / 1.8 | 400 | sentence case | — |
| Eyebrow (small label above a heading) | `.72rem` | 500 | UPPERCASE | `.16em` |
| Button label | `.8rem` | 500 | UPPERCASE | `.06em` |
| **Header main nav** | `1.0625rem` (17px) | 400 | UPPERCASE | `.02em` |
| **Header utility row** | `.8rem` | 400 | UPPERCASE | `.1em` |

> Header nav size (17px) is matched deliberately to `lagunapools.com.au`'s main nav — verified live 2026-09-23, don't drift from it without re-checking the reference.

Text measure: cap prose at `~62ch` (`.measure`). Never let a paragraph run the full band width.

---

## 3. Spacing & layout

- **Base unit:** 8px (8 / 16 / 24 / 40 / 64 / 96 / 128 — pick from this scale, don't invent a one-off pixel value).
- **Band vertical padding:** `--pad-band: 96px` (default, `64px` on mobile ≤640px) · `--pad-band-lg: 128px` (statement bands — `80px` on mobile) · `--pad-band-sm: 32px` (tight bands).
  > [!warning] Don't bump `--pad-band` globally to fix one thin-looking band
  > Tried this 2026-09-23 (client felt `#intro` was cramped) and it backfired: `#services`/`#current`/`#projects`/`#reviews` don't use `--pad-band` directly, they use `calc(var(--pad-band) + var(--v2-scoop))` for the scoop-seam reservation — so a global bump amplifies their *already-large* padding far more than it helps the plain bands, and 30 minutes later the client reported "huge empty space" on `#services`. Reverted. If a **specific flat band** (`#intro`, `#contact` — the only two with no scoop reservation) needs more room, override *that band's* `padding-top` directly to `var(--pad-band-lg)`, the way both now do — don't touch the shared token.
- **Content container:** `--container: 1200px`, `--gutter: 24px`, centred.
- **The header is the one exception** — it does not use `--container`. It gets `.hdr2 .container{max-width:none; padding-inline:clamp(20px,4vw,56px)}`, running near-full viewport width, matched to `lagunapools.com.au`'s header. **The footer does NOT** — it was briefly full-width as a placeholder, then pulled back to the normal 1200px container at the client's request (2026-09-23). Nothing except the header gets this override.
- **Footer on mobile keeps two link columns**, not one. Collapsing all four blocks to a single column made it 1257px tall at 375px (1.5× the viewport). See `style.css` `@media(max-width:640px)`.
- **Grid is a scaffold, not the visible layout.** Real layout is asymmetric — offset headings, full-bleed images breaking the container, uneven column splits (7/5, 8/4). A page where every element lines up to the same grid column is wrong for this system.
- Breakpoints: 576 / 640 / 760 / 900 / 992 / 1200 / 1400. Mobile-first, tested to 320px.

---

## 4. The scoop — signature shape

One rule above all others: **one oversized single-corner radius, never more than one corner rounded on the same element, the corner rotates band to band.** See [[Scoop Curve]] for the full mechanic and history. Token: **`--v2-scoop: clamp(110px, 21vw, 300px)`, `130px` fixed under 640px** (bumped 2026-09-23 — matched to `lagunapools.com.au`'s own 300px ceiling, and their curve never shrinks by viewport either, which is why the floor was raised so hard instead of leaving it fluid down to a small mobile value).

> Don't quote "150px" for this token anymore — that was the pre-2026-09-23 ceiling. Current ceiling is **300px**, floor **110px** (**130px** fixed on mobile).

### Current corner map (site/, sticky hero — this is the only mode that ships)
| Element | Ground | Corner |
|---|---|---|
| `.hero__media` | dark | flat (sticky mode flattens it) |
| `#intro` | dark | **top-left** — cut so the pinned hero shows through as it's covered |
| `#services` | light | top-right + bottom-left (owns the seam into #projects) |
| `#projects` | dark | flat, tucks up behind #services |
| `#current` | light | top-right + bottom-left (owns the seam into #reviews) |
| `#reviews` | dark | flat, tucks up behind #current |
| `#process` | light | top-right only |
| `#contact` | light | flat (sits under the photo strip) |
| `.site-footer` | dark | **flat — no scoop** (placeholder, matched to lagunapools.com.au's own flat footer; client wants to finalise the footer design later, see [[Client Requirements Inbox]] #22) |

### Rules
1. **Never** round more than one corner cluster on the same element unless it's explicitly a "both top corners" case (only `#services`, `#current`, the footer, and card bookends do this — everything else is a single corner).
2. **No other organic shape device.** No wave dividers, no blobs, no drop shadows for elevation. Elevation comes from photography + whitespace + the scoop, nothing else.
3. Buttons, avatars, icon frames use `border-radius:999px` (full pill/circle) or `50%` — a *different*, deliberately generic radius, never the scoop token. The scoop is reserved for section bands and hero/card seams.
4. Cards have **no border and no fill** — image + text + a hairline (`--v2-line`) or a gap. Where a surface genuinely needs a background (forms, store items) it's `--bg` on `--surface-dark` or reverse, never a mid-grey box.
5. Whichever band **owns** a seam curve sits `z-index:2` and `overflow:clip` (never `overflow:hidden` — that breaks the sticky hero); the band it's pulling up over stays flat and reserves `padding-bottom:calc(var(--pad-band) + var(--v2-scoop))` to be tucked into.
6. If a band is removed from the page, check what padding-bottom reservation existed for something to pull into it — a removed section leaves a real, visible gap if that reservation isn't also removed. (This bit us once — see [[Site Build Log]] Round 2.)

---

## 5. Buttons

One system, reused everywhere — no second button style anywhere on the site.

| Variant | Spec |
|---|---|
| **Ghost (default)** `.btn-ghost` | Transparent, `1.5px solid currentColor`, `border-radius:999px`, `padding:15px 34px`, `.8rem` uppercase weight 500, tracking `.06em`. Hover: fill sweeps up from the bottom (`::before` `translateY`), `.32s`. |
| **Filled** `.btn-ghost.btn-ghost--fill` | Same shape, `background:var(--accent)`, ink `#fff`→ theme-resolved. Used for the one primary action per section ("Get a free quote", "Send enquiry"). |
| **On dark** | Same classes — `--c` auto-flips to `#fff` inside `.band--dark`. |
| **Text link** `.tlink` | Small, uppercase, underline on light / no underline on dark. |
| **Icon button** | 44px circle, hairline border. Drawer toggle, carousel arrows. |

### Rules
1. **Never a solid rectangular button.** Pill (`999px`) or circle (`50%`) only.
2. **One filled button per section at most** — everything else is ghost-outline. A screen with three filled buttons has lost the hierarchy.
3. Disabled state: 40% opacity, no pointer, no hover animation.

---

## 6. Header (Centred layout — the only header that ships)

- Two rows: utility (`.hdr2__util`, 42px, `.8rem` links, `.1em` tracking) + main nav (`.hdr2__main`, 78px, centred logo, `1.0625rem` nav links).
- `position:fixed; top:0` — always pinned, transparent over the hero, gains `--surface-dark` background + shrinks after 80px scroll (`.is-stuck`).
- Nav items separated by a **thin `1px` vertical divider** (`border-left`, `rgba(255,255,255,.28)` on transparent header, flips to `var(--line)` once stuck) — not a gap-only separation.
- Logo: `54px` default height, `62px` on `body.pg-home` (homepage only), shrinks further when stuck. Grayscale everywhere except the homepage.
- Runs near-full viewport width (see §3) — the one place the header breaks from the 1200px body container, matched to `lagunapools.com.au`.
- **No second header exists.** The old "classic" `.site-header` was fully removed from `site/` — don't resurrect it or add markup that assumes it exists.

---

## 7. Motion

- Fade/slide-up on scroll (`.reveal`), `IntersectionObserver`, 24px travel, staggered 200/400/600ms within a group.
- Swiper for carousels (projects, reviews, image strip) — nothing else runs its own carousel logic.
- Hero video: `autoplay muted loop playsinline`, poster fallback, pauses when the visitor hits the manual pause control or when `prefers-reduced-motion` is set.
- Sticky header and the scoop-corner scroll cue share the same easing: `--ease: cubic-bezier(.22,.61,.36,1)`.
- **Respect `prefers-reduced-motion`** everywhere motion is added — no reveal transform, no cue animation, hero starts paused.
- Nothing heavier than this. No GSAP, no Lenis/smooth-scroll hijack, no custom cursor. If a motion idea needs a new library, it's the wrong idea for this system.

---

## 8. Floating UI elements

Only **one** floating element ships: `#quote-float` ("Get a Free Quote"), bottom-**right**.

- **Hidden on the hero.** Appears once the visitor is roughly halfway scrolled through the hero (`coverBand.top <= innerHeight * 0.5`), not only once it's fully covered.
- Sub-pages without a big hero (just a small `.subhero`) use the equivalent halfway point on that band; plain pages (no hero at all) show it after 80px of scroll.
- Fade + 14px slide transition, `.3s`, `opacity:0 → 1`, `pointer-events:none → auto`.
- Always `--v2-lime` fill, `#17190F` ink — the one floating element gets the accent colour unconditionally, it doesn't inherit theme-context switching like inline buttons do.
- **There is no WhatsApp float or any second floating button** — removed per client request 2026-09-23. Don't re-add one without checking [[Client Requirements Inbox]] first.

---

## 9. Forms

- Fields: `.field label` above the input, `14px 16px` padding, `1px solid var(--line)` border, `4px` radius (the one place radius is small and generic, not the scoop or a pill).
- `select` gets the same field treatment plus a custom SVG chevron (`appearance:none`), never the browser-native dropdown arrow.
- Required fields marked with a trailing `*` in the label text, not colour alone.
- Validation: red-line the field (`.field.err`) and show a specific inline message — never a generic "form invalid" banner alone.
- Current live spec (Contact / Free Quote form): **Name** (optional), **Email\***, **Phone\***, **Suburb\***, **Budget\*** (5 bands: $10k–25k / 25k–50k / 50k–75k / 75k–100k / >$100k), **Description** (optional). This exact field set was specified by the client 2026-09-22 — don't add a field (e.g. a budget-adjacent phone-upload) without it going through [[Client Requirements Inbox]] first.

---

## 10. Imagery & the contour motif

- Photography carries all the colour in the system — the UI palette is deliberately near-monochrome so photos never compete with brand colour.
- Landscaping-specific motif: **faint topographic contour lines** (`.contour::before`, ~6% opacity, `--v2-line` colour) — used as texture on **dark bands only**, and **never on the opening/hero section** (client rule, 2026-09-22). Source vector: `vault/Attachments/contour-lines.svg`.
- No stock-photo-style drop shadows, no vignettes beyond the hero's readability scrim.
- Every image needs explicit `width`/`height` (or `aspect-ratio`) to hold layout during load — this is a standing WCAG/CLS requirement, not optional.
- **Prefer photography over icons** where an image is available (client preference, 2026-09-23 — the "How we work" steps moved from icon medallions to photos).
- **The photo-card pattern is shared.** The store row (`.store-card`) and the process steps (`.proc--photo`) use one set of values, deliberately: **`aspect-ratio:3/4` portrait · `1.6rem` grid gap · `h3` 1rem · body `.86rem` · scooped bookend corners on the first and last card only, flat in between.** A new photo-card row should match these, not invent its own. The process steps add a lime step-number chip on the image's bottom-left corner and a subtle hover zoom (disabled under reduced-motion). No box, no border, no fill.
- **`aspect-ratio` on an `<img>` needs `height:auto`.** Our images carry `width`/`height` attributes for CLS, and those map to a presentational height that *beats* CSS `aspect-ratio` — without `height:auto` the image silently renders at its intrinsic shape instead of the one you asked for.
- **Only use real client photography.** Never stock, and never dress a photo up as something it isn't. Where a real photo stands in for something it doesn't literally depict (as the process-step images currently do), say so plainly on the page with a `.ba-note` — don't let a placeholder quietly become a claim.

---

## 11. Accessibility (non-negotiable floor)

- WCAG 2.2 AA. Contrast audited to 0 failures — keep it that way when adding colour.
- Skip link present on every page.
- Any auto-moving content (video, carousel) needs a visible pause control — 2.2.2 Level A.
- Visible `:focus-visible` on every interactive element — lime outline on dark grounds, olive on light, ≥2px.
- **Tap targets ≥24×24px** (WCAG 2.5.8, AA). Inline text links in the footer, breadcrumbs, contact lists and the header utility row get `padding-block` to reach it — that grows the hit area without changing the line box, so it costs no layout. See `style.css` §40. Any new small/inline link needs the same treatment.
- **No text below 11px.** The smallest token in the system is the eyebrow at `.72rem` (11.5px) — don't go under it, even for captions.
- `prefers-reduced-motion` disables reveal transforms and the hero cue animation, and starts the hero paused.
- Every form field has a real `<label>`, not a placeholder standing in for one.

---

## 12. What NOT to do (the recurring mistakes list)

1. Don't add a second accent colour "just for this one section" — everything is lime/olive or it's photography.
2. Don't bold a heading for emphasis — resize it.
3. Don't give an element more than one rounded corner unless it's an explicitly-documented "both top corners" case.
4. Don't add a floating button without checking §8 first — there's exactly one, and its behaviour (right side, hidden on hero, halfway trigger) is deliberate.
5. Don't hardcode a colour hex inside a `.band--dark` context — use the token, it already flips.
5b. **Don't build a panel background out of `var(--bg)`.** `--bg` is the *light* ground and is **not** flipped inside `.band--dark` — only `--ink`, `--muted`, `--line` and `--accent` are. A rule like `background: color-mix(in srgb, var(--accent) 4%, var(--bg))` paints a light box on a dark band while the text flips to near-white → invisible text. This shipped in `.ba-note` and went unnoticed on three pages (found 2026-09-23). **Mix into `transparent` instead** so the tint sits over whatever ground it lands on. If a panel genuinely must stay light on every ground, pin its `color` to a dark value too (see `.form-ok`) so it can never invert.
6. Don't reuse the `--v2-scoop` radius on a button, avatar, or icon — that token is for section bands only.
7. Don't remove a section without checking what padding it was reserving for the band above or below it (see [[Scoop Curve]] rule 6).
8. Don't ship a change to `site/` without bumping the CSS/JS `?v=` cache-buster — stale caching has cost real debugging time three times now.
9. Don't build design changes into `demo/` — it's frozen. Everything live happens in `site/`.
10. Don't trust an unconditional "always transparent" background rule paired with a more-specific "opaque when this state class is present" rule to just work via cascade specificity — write the unconditional one as `:not(.the-state-class)` instead. The `.hdr2` sticky-header background bug (Round 4, [[Site Build Log]]) was exactly this pattern and cost real debugging time before the `:not()` rewrite fixed it outright.
