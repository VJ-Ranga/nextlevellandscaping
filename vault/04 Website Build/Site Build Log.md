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

## Next
Say which of the "not yet applied" items to tackle next, or give more reference sections from `demo/`'s other themes to pull in per the cherry-pick workflow.
