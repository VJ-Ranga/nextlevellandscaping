---
tags: [design, moc]
---

# Design Direction

## The brief in one line
Complete redesign + restructure. Client hates **"boxy"** div-in-div coloured blocks. Loves [[Laguna Pools]]: cinematic, photography-led, negative space, **curved scooped shapes**, ambient video hero, unusual headings. Make it NextLevel's own, not a Laguna clone.

## Strategy
> **Premium visual language on a trade information architecture.**

- Visual = [[Laguna Pools]] / [[Premium Studios]]: big weight-400 caps, ghost pills, alternating dark/light bands, one curve device, colour from photos.
- Structure = AU trade evidence ([[Competitor Overview]]): services, projects, proof, process, store, contact; phone-first; trust line; budget banding OK.
- Win on the gaps nobody fills → [[Market Gaps]].

## Principles
1. **No boxes.** Cards = image + text + hairline or gap. No mid-grey fills, no drop shadows, no blobs, no waves.
2. **One shape device** — the [[Scoop Curve]]. Rotate it; don't stack effects.
3. **Colour from photography**; UI is near-monochrome + one accent (lime). See [[Colour Palette]].
4. **Hierarchy from size + caps + colour**, never bold. See [[Typography]].
5. **Ghost pills only** (+ one filled lime pill for primary). See [[Buttons]].
6. **Restrained motion** — fade-in, Swiper, nothing heavier. See [[Motion]].
7. **Dark / light rhythm** band to band. See [[Homepage Sections]].
8. Accessible by default: WCAG 2.2 AA, see [[Standards - Accessibility SEO Privacy]].

## Landscaping-specific spin (so not a Laguna clone)
- Contour-line motif (`.contour` topographic SVG, faint) behind dark bands.
- Arch-masked portraits (garden archway) — for team/testimonials when real photos exist.
- Lime leaf from the logo as the one accent.

## Current approved look
**"Carbon"** theme (`carbon-soft-v2`) — near-black + warm off-white + lime, scoop curve as the whole identity. Our contact is happy with it (2026-09-10); ready to show end client. Other looks → [[Demo Themes]].

## Cloudycode standards applied
Bootstrap 5 grid (scaffold only) · Poppins · Font Awesome · Swiper · content in `assets/data.js` · WhatsApp float on every page · mobile-first · HTML demo before WordPress.
