---
tags: [build, site, log]
---

# Site Build Log — `site/` (the production-direction folder)

Created 2026-09-22. Copy of `demo/`, then locked down to one look and had the client's agreed requirements applied. `demo/` stays untouched as the options library — see [[Demo Themes]].

## What's different from `demo/`
- **No theme switcher.** `theme.js`, the demo bar, and unused theme CSS (`style-nocturne.css`, `style-blueprint.css`) deleted.
- **`<html>` attributes hardcoded** on every page: `data-theme="carbon-soft-v2" data-layout="centred" data-hero="sticky" data-intro="split"` — no localStorage/JS toggle, no FOUC-prevention bootstrap script needed.
- **Classic `.site-header` removed everywhere** — only the centred, two-line `.hdr2` header remains (client's chosen layout). Removed from `index.html` directly and from `partials.js` (used by every sub-page).
- **Fixed a pre-existing demo bug**: `about.html`, `privacy.html`, `store.html`, `service.html` each had a *hardcoded* WhatsApp float **in addition to** the one `partials.js` injects — two floating WhatsApp buttons stacked. Removed the redundant hardcoded ones; now exactly one per page.

## Client requirements applied (of 15 in [[Client Requirements Inbox]])
| # | Requirement | Where |
|---|---|---|
| 1 | Carbon / Centred / Sticky hero / Split intro, locked | `<html>` attrs, every page |
| 2 | Logo bigger + full-colour on homepage, smaller + grayscale elsewhere | CSS `filter:grayscale(1)` on `.brand img`/`.hdr2__brand img`, overridden by `body.pg-home` (index.html only) |
| 3 | Menu font size ↑, thin divider lines between items | `.hdr2__nav a` — `border-left` dividers, `.92rem` |
| 5 | Store section removed from homepage | `#store` deleted from `index.html`; `store.html` page itself kept; footer links repointed to it |
| 6 | Contact form → Name, Email\*, Phone\*, Suburb\*, Budget\* (5 bands), Description | `index.html` `#quote-form`; `main.js` validation now matches `select` too |
| 7 | Walkways service removed | `data.js` — 8 services → 7, stat count updated |
| 8 | Contour lines off the opening section | `.contour` class removed from `#intro` |
| 11 | Scroll-down arrowhead | `.hero-scroll__arrow` / `.hero__cue-arrow`, same `cue` animation family |
| 12 | Floating "Get a Free Quote" button | `index.html` + `partials.js` (all sub-pages), left of the WhatsApp float |

**Side-effect fixed:** removing `#store` left `#process` reserving empty bottom padding (previously reserved so `#store` could ride up into it, per the [[Scoop Curve]] mechanics). Corrected in `style-carbon-soft-v2.css` — `#process` now gets the ordinary last-band padding instead, no visible gap before the photo strip. Verified in-browser.

## Not yet applied (needs a real design pass or client assets — still "agreed"/"parked" in the inbox)
- #4 / #9 — asymmetric, non-rectangular Our Work / Current Work / Portfolio layout
- #10 — welcome/intro copy right-aligned, smaller font
- #13 — per-service document downloads (needs real PDFs)
- #14 — Process section images instead of icons + detail page (needs real photos)
- #2 — a real black-and-white logo export would be better than the CSS filter stand-in

## Verified (2026-09-22, local `python3 -m http.server`, headless browser)
- No `#store`, no `.site-header`, no `.theme-bar` on the homepage
- Contact form has exactly the 6 requested fields
- Sub-pages: exactly 1 `.wa-float` + 1 `.quote-float`, no classic header, logo correctly grayscale
- No visible gap between Process and the photo strip

## Round 2 — 2026-09-23: header sizing, header gap fix, floats
Client sent a screenshot of the [[Scoop Curve]] and asked it be named for shorthand reference — it's **"the scoop"**, already documented. Also gave 3 more instructions:

1. **Header font size, full-width, match lagunapools.com.au.** Measured live: Laguna's main nav is **17px / uppercase / weight 400 / letter-spacing normal**, header content runs near edge-to-edge (not boxed to the site's content width). Applied:
   - `.hdr2__nav a` → `1.0625rem` (17px), tracking tightened to `.02em`
   - `.hdr2__util a` → bumped `.68rem` → `.8rem` (Laguna's secondary row is ~13px)
   - New rule `.hdr2 .container{max-width:none;padding-inline:clamp(20px,4vw,56px)}` — header content now runs near-full-width, independent of the site's normal 1200px `--container`, matching Laguna
2. **Header gap fixed.** Root cause: `[data-layout="centred"] .hdr2{top:46px}` — that 46px was reserved for the demo `.theme-bar` (switcher) which sat above the header. `site/` never renders the theme-bar (JS deleted), so it left a 46px dead gap at the top of every page. Changed to `top:0`. Also deleted the now-fully-dead `.theme-bar*` CSS block (~30 lines) and the `.site-header{top:46px}` leftovers entirely — pure demo-switcher debris.
3. **Floating buttons reworked.** Client asked: remove the WhatsApp float, and the quote button should sit on the **right** (where WhatsApp used to be) and stay **hidden until the visitor scrolls past the hero**, not visible on the hero itself.
   - Removed `.wa-float` completely — markup (`index.html`, `partials.js`) and CSS
   - `.quote-float` moved `left`→`right:22px`
   - New show/hide: `opacity:0;pointer-events:none` by default, `.is-visible` class (added by `main.js`, reusing the same `coverBand`/sticky-hero "is it covered yet" signal already driving the hero-video-pause logic) fades it in once the hero is scrolled past. Sub-pages (no `.hero`, just a small `.subhero`) show it once `.subhero` scrolls out; plain pages show it after 80px of scroll.
   - Caught and fixed a testing gotcha along the way: the CSS/JS `?v=` cache-buster wasn't bumped after edits, so the local browser kept serving stale files — bumped it (`v=1790103700`) so this doesn't bite the client's browser either.

All three verified in-browser (no gap, 17px full-width header, no WhatsApp anywhere, quote button hidden on hero / right-side / fades in on scroll on both homepage and a sub-page).

## Round 3 — 2026-09-23: hero/#intro scoop back, quote button trigger earlier
Two follow-ups from a screenshot with an arrow pointing at the hero→#intro seam:

1. **Scoop restored at the hero/#intro seam.** In sticky-hero mode this seam was deliberately flattened (`border-radius:0`) when the sticky-hero mechanic was first built — reasonable at the time ("the hero's own bottom sweep is pointless once it gets covered"), but the client now wants the curve there regardless. Changed `#intro`'s sticky-mode corner from flat to a **top-left scoop** (`var(--v2-scoop) 0 0 0`): as `#intro` slides up to cover the pinned hero, its rounded top-left corner now lets the hero video peek through — same visual idea as the client's reference. Confirmed the effect is actually visible (not hidden behind the fixed header) and matches the reference screenshot.
2. **Quote button now appears ~halfway through the hero**, not only once fully covered. `main.js` trigger changed from `coverBand.top <= 0` to `coverBand.top <= window.innerHeight * 0.5` (and the equivalent for the sub-page `.subhero` fallback). Verified: hidden through ~45% scrolled, visible from ~55% on.

**Debugging note for next time:** `window.scrollTo(x, y)` doesn't jump instantly here — `html{scroll-behavior:smooth}` makes it animate, so a script that scrolls then immediately reads `getBoundingClientRect()` gets a stale mid-animation position. Use `window.scrollTo({top, behavior:'instant'})` when testing scroll-driven effects.

## Round 4 — 2026-09-23: matching Laguna's boldness (the scoop bump), + a real header bug
Client sent two of Laguna's own screenshots side by side with ours and said "something's off" — right call. Measured Laguna's actual radius live (not from memory):

| Width | Laguna | Ours (before) |
|---|---|---|
| 1440px | 150px | 150px ✅ |
| 900px | **150px (unchanged)** | 99px |
| 375px (mobile) | **150px (unchanged)** | 44px (hard override) |

Laguna's biggest CTA/statement bands (the one in the client's screenshot) actually use **300px**, not 150px — confirmed via live computed styles (`getComputedStyle`). Laguna's curve **never shrinks by viewport** at all, even on mobile — ours was fluid (`clamp()`) and tapered off hard below desktop. That taper, not a math error, was the whole "feels less nice" gap.

**Applied — `--v2-scoop` (`style-carbon-soft-v2.css`):**
```
was:  clamp(56px, 11vw, 150px)   mobile override 44px
now:  clamp(110px, 21vw, 300px)  mobile override 130px
```
Ceiling matches Laguna's boldest (300px) exactly; floor raised so it stays bold through tablet/laptop instead of visibly shrinking; mobile override raised 3x (44→130px) — bold but not full 300px, since our `#intro` band carries denser content (stat grid, credential line) than Laguna's simpler image-only bands and a full 300px cut on a 375px phone would eat too much of the corner text area. Verified visually at 1440 / 900 / 375 — real dramatic sweep now, `#services`'s two-corner scoop checked too (not broken by the bigger radius).

**Real bug found + fixed along the way:** the sticky header (`.hdr2.is-stuck`) wasn't going opaque on scroll — stayed fully transparent with the hero video showing straight through the nav text, on every width. Root cause never fully pinned down (a `var(--v2-night)`-based background-color declaration that should have out-specificity'd the base "always transparent" rule wasn't winning the cascade for reasons that didn't match standard CSS specificity math — `getComputedStyle` even ignored a forced inline `background-color:red` at one point, which was a dead giveaway something was off in how this was being read, not a real cascade bug). Fixed pragmatically either way: rewrote the unconditional `.hdr2{background:transparent}` rule to `.hdr2:not(.is-stuck){...}` so there's no ambiguity for the browser to get wrong, plus a static hex fallback (`#17190F`) declared right before the `var()` version. Confirmed fixed by screenshot (header now solid, text crisp) — this had been silently broken since the header work in Round 2, not something the scoop change introduced.

**[[Style Guide]] needs its §1/§4 numbers updated to match** — flagging here, do it in the same sitting as this log entry.

## Round 5 — 2026-09-23: footer, placeholder — flat + full-width like Laguna
Checked Laguna's own footer live: `border-radius:0` and runs near-full viewport width (611 of 626px window, same edge-to-edge pattern as their header). Client asked for the same, explicitly **as a placeholder** — "use something for now, we can finalise that [later]".

Applied to `.site-footer--scoop`:
- **No scoop.** `border-radius:0; margin-top:0` (was `var(--v2-scoop) var(--v2-scoop) 0 0` with a negative-margin pull).
- **Full-width**, same treatment as the header: `.site-footer .container{max-width:none; padding-inline:clamp(20px,4vw,56px)}` — independent of the site's normal 1200px container.
- Removed the padding-bottom **reservations** that existed on `#contact` and on sub-pages' last band (`main > .band:last-of-type`) to be "pulled into" by the footer's old scoop — same class of bug as the `#store` removal in Round 2 (reserved space left behind = a visible gap once the thing it was reserved for is gone). Both now just use the plain `--pad-band-lg` / `--pad-band`.

Verified: flat edge-to-edge footer, no gap or overlap at the Contact→footer seam, checked on both the homepage and a sub-page (about.html).

**This is explicitly interim** — client wants to revisit/finalise the footer design later, this just gets it out of "half-scoop, boxed-width" limbo in the meantime. Logged as its own inbox item so it doesn't get forgotten.

## Round 6 — 2026-09-23: sitemap completed (4 new pages, built in parallel)
Client: "no need that button… check all the pages we need and build all now… better to finish full site map with all pages… use sub agent to finish this task."

**Hero pause button removed** first. That was our WCAG 2.2.2 (Level A) pause control for the looping hero video — flagged once, then done as asked. `prefers-reduced-motion` handling was *rescued* in the process: the old code lived inside an `if (!btn) return;` block, so deleting the button would silently have killed reduced-motion support too. Rewrote it to stand alone. Markup + the now-dead `.hero-pause` CSS deleted; a comment marks why. **Accepted risk, revisit before launch** — recorded in [[Sitemap and Pages]] and [[Standards - Accessibility SEO Privacy]].

**4 missing pages built by 4 parallel subagents**, one file each so they couldn't collide. Shared files (`data.js`, `partials.js`, `main.js`, both stylesheets) were off-limits to them and handled by me:

| Page | Lines | Notes |
|---|---|---|
| `contact.html` | 157 | Real contact page. Exact client-specified quote-form field set, reusing `#quote-form` so existing validation picks it up unchanged. Hours + map are explicit "to be confirmed" placeholders — no invented hours, no third-party map embed. |
| `services.html` | 127 | Services index (was missing entirely — detail template existed with no index). 7 services as alternating image rows, not a card grid, per the anti-boxy rule. Reused the `.svc` pattern already in `style.css` that had gone unused. |
| `product.html` | 198 | `?slug=`-driven store detail. Enquiry-only: P.O.A, no cart, no prices, no checkout. Unknown slug falls back to the first product. |
| `faq.html` | 106 | Native `<details>`/`<summary>` accordion (keyboard-accessible without JS). **No FAQPage schema** — deprecated May 2026. |

**Content added to `data.js`:** `storeProducts` (4 categories w/ slugs, from the live site's real range) and `faqs` (9 questions drafted from *verified* BUSINESS.md facts only). Three FAQ answers carry a `confirm` flag and render with a visible "Draft — not yet confirmed by the client" note; the workmanship-guarantee answer is deliberately **empty** because the client has never confirmed one. Nothing unconfirmed is presented as fact (ACL/ACCC).

**Wiring I did (shared files):** nav repointed across `partials.js` + `index.html`'s inline copy — Services → `services.html`, Contact → `contact.html`, About + FAQ added to the util row/drawer/footer; footer store links → `product.html?slug=`; store tiles made clickable (`main.js` now prefers `storeProducts`, falls back to the old flat list); `.store-card{display:block}` since those tiles became anchors.

**Verified:** all 13 pages return 200; zero broken internal links; zero missing asset references; `node --check` clean on all 3 JS files; services (7 rows, 4 process steps, 1 H1, no h-overflow), contact (correct 6 fields, placeholders present, no iframe), FAQ (9 items, 3 draft flags, no invented guarantee answer, no FAQPage schema), product (P.O.A, no cart, entities rendered, unknown-slug fallback works), store tiles + injected nav + quote-float all pointing at the right targets.

## Round 7 — 2026-09-23: tablet + mobile responsive audit
Swept **all 13 pages at 375 / 768 / 1024px** (39 combinations) using a throwaway iframe harness — one page load measuring every page at every width, rather than 39 manual resizes. Harness deleted afterwards.

**Horizontal overflow: 0 failures** across all 39. The layout system holds up.

**Two real problems found and fixed:**

1. **Tap targets failed WCAG 2.2 AA (2.5.8 Target Size Minimum, 24×24px).** At 375px: footer links were 20px tall, breadcrumbs 16px, drawer + form-note phone links 19px, and the header Instagram icon was **23×12px**. Fixed with a new §40 block in `style.css` — `padding-block` on inline links grows the hit area *without* changing the line box, so nothing shifted visually. Re-audited: **0 failures on any page.**
2. **Text under 11px.** `.strip__cap` (photo strip captions) at 10.56px and the mobile `.quote-float` label at 10.88px. Both raised to `.72rem` (11.5px), which is the existing eyebrow token — no new value invented.

**Checked and passing:** drawer opens with all 7 nav links and large tap targets; contact form fields are full-width and 53px tall on mobile (well over the 44px touch guidance); FAQ accordion opens/closes correctly at 375px; services page stacks to single column; the scoop still reads properly at tablet.

> [!note] Method worth reusing
> The iframe harness (13 pages × 3 widths, measuring `scrollWidth`, computed font sizes and `getBoundingClientRect` per interactive element) caught things eyeballing screenshots would not — the 23×12px icon especially. Rebuild it as a temporary file in `site/` when a future change needs re-verifying, then delete it.

## Round 8 — 2026-09-23: footer back to normal width + header/footer/section-height audit

**Footer is no longer full-width.** Client reversed the Round 5 placeholder — the header stays edge-to-edge, the footer now uses the site's normal 1200px `.container`. Verified at 1440px: header inner 1425px, footer inner 1200px.

**Footer height was the real problem on small screens.** Measured 1257px at 375px — 1.5× the viewport — because all four footer blocks collapsed to a single column at ≤640px. Fixed:
- Footer keeps **two link columns** on mobile (brand and the company block span full width; Explore | Store sit side by side)
- Footer top padding 72px → 56px on mobile; footer-bar top margin 56px → 32px

Result: **1257px → 976px** at 375px (−22%). Tablet 779px and desktop 474px unchanged and fine.

**Header: consistent across all 13 pages** at 375 / 768 / 1440 — same inner width, same height, no per-page drift.

**Top sections (`.subhero`) are consistent**, which was the thing worth checking:

| Width | Range | Outlier |
|---|---|---|
| 375 | 395–525px | `project.html` 687px (it carries a `.subhero__media` image) |
| 768 | 344–506px | `project.html` 506px |
| 1440 | 350–495px | `project.html` 495px |

Everything else sits in a ~50px band. No action needed.

**Homepage section heights** (viewport: 812 mobile / 1024 tablet / 900 desktop):

| Section | 375 | 768 | 1440 |
|---|---|---|---|
| hero | 900 | 900 | 900 |
| #intro | 1580 | 1247 | 1117 |
| #services | 1413 | 1695 | 1329 |
| #projects | 1367 | 1451 | 1781 |
| **#current** | **2239** | 1785 | 1494 |
| #reviews | 954 | 1029 | 1356 |
| #process | 1393 | 911 | 806 |
| photo strip | 274 | 300 | 528 |
| #contact | 1603 | 1902 | 1228 |

> [!question] Open — needs a client/content decision, not a CSS fix
> **`#current` is 2239px on mobile — 2.75 viewports**, the tallest section on the site. It's three live-job cards, each with an image, stepper, note and meta, stacked. `#contact` at 1902px on tablet is second.
> These aren't bugs, they're the cost of the content in them. Options if the client wants the homepage shorter: show 2 current jobs instead of 3 on mobile, shorten the card media aspect, or trim the note text. **Not changed unilaterally** — it's removing content from the client's most-differentiated section ([[Market Gaps]]: 0/19 competitors show live work).

## Round 9 — 2026-09-23: invisible placeholder boxes (white-on-white) — real bug
Client spotted an empty white box on `store.html`'s dark "Visit us" band. It wasn't empty — it was the "Trading hours still to be confirmed" note rendering **white text on a white panel**.

**Root cause, worth remembering:** `.ba-note` built its background as `color-mix(in srgb, var(--accent) 4%, var(--bg))`. `--bg` is the **light** ground and is *not* among the tokens the theme flips inside `.band--dark` (only `--ink`, `--muted`, `--line`, `--accent` flip). So on a dark band the box kept a light background while its `color: var(--muted)` flipped to near-white. Invisible.

**Affected:** `store.html`, `product.html`, `about.html`, and the dark-band note on `contact.html` — three of them had been sitting there unnoticed.

**Fix:** mix the tint into `transparent` instead of `--bg`, so it tints whatever ground it lands on. Same treatment applied preventively to `.cms-note` (same pattern, currently on a light band). `.form-ok` had the mirror-image latent risk — a hardcoded near-white panel with *inherited* text colour — so its ink is now pinned dark and can't invert either.

**Verified across all pages:** dark grounds → off-white text on an 8% lime tint; light grounds → muted `#6B6F62` on an 8% olive tint; `.form-ok` → pinned `#1C2412` on near-white. All legible.

Added as rule 5b in the [[Style Guide]]'s mistakes list, since this is a trap the token system invites.

## Round 10 — 2026-09-23: every menu item is now its own page
Client rule: **no nav item may point at a homepage anchor.** Two were left — "Our Process" (`index.html#process`) and "Reviews" (`index.html#reviews`). Both built as real pages by parallel subagents.

| Page | Lines | Notes |
|---|---|---|
| `process.html` | 181 | The 4 steps with real depth (consultation → design → execution → aftercare), plus the **10-stage build pipeline** and a link through to Current Work. Partially advances parked requirement #14 — the structure is there, but **step photography is still pending**, so it uses icons with a visible `.ba-note` saying so rather than faking it with unrelated images. |
| `reviews.html` | 125 | All 7 Google reviews **in full** — the homepage carousel clamps them to 6 lines, so longer ones were being cut. CSS multi-column so the one-sentence review and the five-sentence ones each keep their natural height. |

**Content-integrity checks on `reviews.html`** (these are real people's reviews): all 7 verbatim, `80m²` entity renders correctly, **zero JSON-LD blocks**, no star graphics, no invented rating/average/review-count. The agent left an in-code comment explaining *why* no schema, so a later editor doesn't "helpfully" add it — self-serving review markup is a known penalty risk.

**Nav wiring:** both added to the utility row, drawer and footer (`partials.js` + `index.html`'s inline copy). Also repointed **9 stray "Get a free quote" CTAs** across 8 pages from `index.html#contact` to the real `contact.html` — they'd been left pointing at the homepage anchor when the contact page was built in Round 6.

**Verified:** 15/15 pages return 200, zero broken internal links, zero remaining homepage-anchor nav links, no horizontal overflow on the new pages.

## Round 11 — 2026-09-23: "How we work" becomes photo-led
Client: the four process steps should use **images instead of icons**. This was requirement #14, previously parked waiting on photography — the client asked for it anyway, so it's built with the best real imagery available.

**The honest position on the photos:** we have no photograph of a consultation, of the crew mid-build, or of a handover. Every image in `assets/img/` is finished work, product shots, or one 3D render. So the four steps use **real NextLevel images standing in illustratively**:

| Step | Image | Why |
|---|---|---|
| 1 Consultation | `projects/north-haven.jpg` | a property frontage — "we come to your place" |
| 2 Design | `services/landscape-design.jpg` | **genuinely the right image** — it's an actual 3D render, which is their #1 differentiator |
| 3 Execution | `services/paving.jpg` | built hardscaping / driveway |
| 4 Aftercare | `projects/grange.jpg` | an established, maintained garden |

A visible `.ba-note` on `process.html` states plainly that these illustrate the steps rather than depict them, and that dedicated step photography would be stronger. **Not passed off as something it isn't.**

**Implementation:**
- `data.js` `process[]` gained `img`/`w`/`h`/`alt`. `icon` deliberately **kept** — a step with no `img` still renders the original icon medallion, so this degrades gracefully and the client can add photos one at a time.
- New `.proc__media` / `.proc__step` CSS: photo with a single scooped top-right corner (echoing the band language), lime step number sitting on the bottom-left corner, subtle zoom on hover, disabled under `prefers-reduced-motion`. No box, no border, no fill — per the Style Guide.
- Both renderers updated: `main.js` (homepage `#process-list`) and `process.html`'s own inline script.

Swapping in real step photography later = changing four `img`/`w`/`h`/`alt` values in `data.js`. Nothing else.

**Revised same day — match the store row.** Client pointed at the store's "What we stock" section and asked for that treatment and size. The process steps now mirror `.store-card` exactly:

| | Store row | Process steps |
|---|---|---|
| image ratio | 3/4 portrait | 3/4 portrait ✅ |
| grid gap | 25.6px | 25.6px ✅ |
| `h3` | 16px | 16px ✅ |
| body | 13.76px | 13.76px ✅ |
| corners | scooped bookends on first/last only | same ✅ |

Verified identical on both the homepage and `process.html`. The two sections now read as one family, which is the point.

> [!warning] `height:auto` is required here
> The images carry `width`/`height` attributes (kept for CLS). Those map to a **presentational height**, which beats CSS `aspect-ratio` — the first attempt rendered at the intrinsic 3:2 instead of 3/4. `height:auto` lets `aspect-ratio` govern. Same trap applies anywhere else an `aspect-ratio` is put on an `<img>` that has the attributes.

## Next
Say which of the "not yet applied" items to tackle next, or give more reference sections from `demo/`'s other themes to pull in per the cherry-pick workflow.
