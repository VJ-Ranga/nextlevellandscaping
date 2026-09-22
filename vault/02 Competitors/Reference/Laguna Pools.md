---
tags: [competitor, reference, style]
url: https://www.lagunapools.com.au/
---

# Laguna Pools — client's style reference

Melbourne concrete-pool builder. **Client loves this site's feel.** We copy the *system*, not the layout. Platform: WordPress + Elementor, ElementsKit mega-menu, Swiper v8.

## The whole "not boxy" look = one device
**One oversized single-corner `border-radius`** on full-bleed photo bands, rotated corner to corner.
| Value | Where |
|---|---|
| `150px 0 0 0` | ~84 elements — photo bands, image wrappers |
| `0 150px 0 0` / `0 0 150px 0` | some images |
| `300px 0 0 0` | "Book Your Free Consultation" CTA band (biggest) |
| `75px 0 0 0` | Guarantees band (softer) |
| `30px` | all pill buttons |
| `50%` | process step circles |
No SVG blobs, no waves, no clip-paths.

## Spec
- **Rhythm:** navy `#252A36` ↔ white ↔ fixed-parallax photo band w/ arch. 100–150px vertical padding. 1200px container. Occasional 30px tight bands.
- **Headings:** ALL CAPS, **weight 400**, letter-spacing normal, line-height 1.0. H1 = H2 ≈ 45px (34px mobile). Hierarchy from size + caps + colour, never bold.
- **Body:** 16px / 1.8, ~800px measure.
- **Font:** Almarai only.
- **Colour:** near-monochrome — navy, white, #141414, greys. **No accent**; photography carries colour.
- **Buttons:** ghost pills only — transparent, 1–2px border, radius 30px, `14px 36px`, 13px uppercase 500, .5px tracking. Hover slide-fill.
- **Motion:** Elementor fadeIn 200/400ms stagger, Swiper, CSS `background-attachment:fixed`, sticky header restyles after 100px. No GSAP/Lenis/AOS.
- **Hero:** silent ambient MP4, **no text on video**; H1 in separate navy band below, left 50% column.

## Homepage structure (~21 sections)
Header → video → navy H1 band → awards (SPASA 2025, 33 awards) → What we're known for (4) → Design/Construction/Landscape split → parallax arch bands → projects (6, specs + awards) → partner logos → Laguna Experience → big 300px-arch CTA → **5-step process** → Instagram build doc → As Seen On → **Guarantees** → Climate Care → testimonials (3) → contact/offices + hours → **FAQ** → news → newsletter → Instagram → footer.

## Project page
H1 + spec block (location, type/size, **price range**, collaborators, materials) → awards → narrative → uniform gallery → lightbox → related.

## Lesson
Visually editorial, structurally a **conversion site**. "Make it like Laguna" = photography, typography, calm — not section count. See [[Design Direction]], [[Scoop Curve]].
