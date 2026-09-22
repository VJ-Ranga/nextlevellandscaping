---
tags: [build, homepage]
---

# Homepage Sections (as built, 2026-09-10 — current state of `demo/`)

Order applies to ALL themes. Derived from [[Competitor Overview]] + deep-dive on [[Laguna Pools]], [[Outside Ideas]], Sphere Garden Design, Yardstick.

| # | id | Ground | Content | Data |
|---|---|---|---|---|
| — | `.hero` | dark | ambient video, pause button, tagline "Bring your garden to life", headline carousel (centred layout), scroll cue | `heroSlides` |
| 1 | `#intro` | dark, `.contour` | eyebrow + **H1 "Taking Adelaide gardens to the next level"**, lead, who-we-are line → about.html, 2 CTAs, count-up stats, credential line (BLD320507 · MLSA · Lawn Solutions) | `stats`, `credentials` |
| 2 | `#services` | light | "One team for the whole garden" — interactive services explorer (list + image + copy), 8 services | `services` |
| 3 | `#projects` | dark, `.contour` | "Signature transformations" — Swiper of 4 projects | `projects` |
| 4 | `#current` | light | "Current work, live" — job cards w/ stage stepper | `currentWork`, `stages` |
| 5 | `#reviews` | dark, `.contour` | "Honest, reliable, on budget" — review Swiper, 6-line clamp | `reviews` |
| 6 | `#process` | light | "From first visit to aftercare" — lead + 4 steps | `process` |
| 7 | `#store` | dark, `.contour` | "We don't just build it — we stock it" — 4 category tiles | `store` |
| — | `#project-strip` | dark | silent full-bleed photo strip, no heading, framed tiles | `projectStrip` |
| 8 | `#contact` | light | "Tell us about your space" — 4-field form (Name, Email, Phone, Message) + contact details + photo | — |
| — | footer | dark | brand, explore, store, legal | — |

Dark/light rhythm: dark · light · dark · light · dark · light · dark · (strip) · light · dark footer.

## History
12 → 10 (merged headline + numbers into #intro) → 9 → **8** (removed #about, folded strip, then strip moved before contact).

## Pending — client feedback 2026-09-22
Not yet built. Logged in [[Client Requirements Inbox]], waiting on the go-ahead:
- Site-wide defaults → Sticky Hero + Split Intro (currently Static/Stacked)
- Remove `#store` band (keep `store.html` page)
- Remove `.contour` from `#intro`
- Contact form → 6 fields (add Suburb, Budget select; make Email/Phone/Suburb/Budget required)
- Remove Walkways from `#services` (8 → 7)
- Floating "Get a Free Quote" button
- Scroll-cue arrowhead
- Menu font size + divider lines
- Logo sizing/colour per page
- Asymmetric Our Work / Current Work + Portfolio layout (needs a real design pass)

## Gaps vs research recommendation ([[Market Gaps]])
Not yet on the homepage: render → built · investment guide · FAQ · warranty · suburbs served · photo upload on form · trust strip w/ Google rating.
