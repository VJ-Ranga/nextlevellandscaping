---
tags: [build, photos, plan]
date: 2026-11-03
status: implemented, committed (`55c04ee`) and deployed (`5ec0f7c`) 2026-11-04; client confirmation pending
---

# New photo sets (2 zips) — review and implementation plan

## 1. What was added
| Zip (repo root) | Size | Contents |
|---|---|---|
| `Jpeg_compressed.zip` | 485 MB | **Location 1** — 66 JPEGs (`Location 1-01…66.jpg`), 4000–7008 px wide, 2–11 MB each |
| `PNG_compressed.zip` | 72 MB | **Location 2** — 40 JPEGs and **Location 3** — 36 JPEGs (`Location 2 - PNG-01…40`, `Location 3 - PNG-01…36`), mostly 2048×1365, ~1 MB each (named "PNG" but they are JPEG files) |
Total 142 photos. No GPS/EXIF location data in any file (checked). Extracted copies for review live outside the repo (session scratchpad). **Do not commit the zips** (557 MB) — move them out of the repo or add `*.zip` to `.gitignore`.

## 2. Review (3 sub-agents, contact sheets; fine details such as plates/small text not verified at full size)
### Location 1 — residential new build, two-storey, hills-fringe feel (66 photos, all finished)
- Front: exposed-aggregate driveway, white gravel + large stepper-paver path, mulched beds, new planting.
- Rear: dark fencing, artificial turf, central gravel + stepper path with steps, **two retaining walls** (white concrete-sleeper wall with galvanised posts forming planters/steps; grey segmental block walls, one curved, one raised veggie bed with trellis), travertine-look patio.
- Groups: 01–04 drone top-down · 05–12 drone oblique · 13–17 ground wide down the steps · 18–22 front facade/driveway · 23–29, 55 rear toward house · 30, 49–54 curved block wall · 31–36, 45–48 lawn/patio/veggie bed · 37–44 sleeper wall + steps + water tank (repetitive) · 56–60 raised bed + trellis · 61–66 sleeper steps detail.
- **Best 10:** 05 (drone, hero/Our Work lead) · 14 (ground wide, leading path) · 19 (front facade, blue sky) · 28 (symmetrical rear) · 26 (sleeper steps → Retaining Walls) · 63 (sleeper step detail) · 56 (raised bed + trellis) · 34 (travertine patio → Paving) · 01 (drone layout → Process/finish) · 30 (curved block wall → Retaining Walls).
- Flags: possible small house numerals near garage on 18, 19, 21, 22 (verify full-size, blur if present); neighbours' roofs, solar panels and a tennis court in the background of many (avoid as hero crops: 01, 05–14, 16, 17, 46, 48–51, 56–61, 63–66).
- Near-duplicates: 07/08, 09/10, 15/16, 19/22, 18/20/21, 37–44 series, 45/47, 49/52/53, 61–66 series.

### Location 2 — commercial/institutional animal-facility site (40 photos, in progress, none fully finished)
- Charcoal steel fencing with angled anti-climb mesh hoods, roofed concrete kennel block with runs, corten steel edging, red bark mulch beds with young strappy plants, poly irrigation pipe + valve box, fresh roll-on turf, compacted gravel paths, levelled earthworks with form-boards, machinery (skid-steer, compactor).
- **Likely the RSPCA O'Halloran Hill job** already in `media-library/rspca-ohalloran-hill` and on the Commercial page — **needs confirming with the client**, not assumed.
- Groups: 01–03 turfed yards · 04–06 earthworks prep · 07 mulched fence bed · 08–22 kennel block, beds, trades on site · 23–26, 33–35 inside yards · 27–32, 36 wide enclosure + machinery · 37 fence corner finish · 38–40 formwork pre-slab.
- **Best:** 37 (fence corner + mulch, Commercial/Our Work) · 25 (clean turf yard) · 07 (mulch + fence diagonal) · 20 (path + kennel + beds; small "YARD 2/3" sign) · 01 · 06 (clean earthworks) · 39/40 (formwork) · 31/32 (build stage).
- Flags: workers in hi-vis visible on 04, 22 (and small figures on 21, 36, 37, 19) — faces not identifiable at size reviewed, one with beanie/cap not hard hat on 22 → **do not use 22 for the Compliance page**; yard-number signs on 19, 20; yellow skid-steer in 27–30, 36, 38 (logo unreadable); neighbouring sheds, a transmission mast on 37.
- Quality: sharp, one shoot day (overcast, dramatic sky); wide-angle distortion on 01–03, 23–26, 33–35; clutter (tarps/tools/pipes) in 09–11, 13–18, 23–24. Best use = **Commercial page, Current Work stages and Process**, not the homepage hero.

### Location 3 — residential refresh (36 photos, all finished)
- Backyard: artificial turf, exposed-aggregate paths and alfresco slab, **crazy-paving limestone feature corner**, mulched beds with silver/blue-grey planting, charcoal Colorbond fence. Front: turf with **hexagonal stepping stones**, large purple-flowering hedge, aggregate driveway, **white vertical-slat pool-style fence + gate on a rendered plinth**, kangaroo paw + bark mulch, young street tree.
- Groups: 01–05 backyard wide · 06–07 crazy paving corner · 08–12 side passages · 13–18 front garden/stones/hedge · 19–21 driveway + facade · 22–26 street-side fence/gate · 27 street (parked car) · 28–31 fence + kangaroo paw close-ups · 32 driveway side · 33–36 front elevation (4:3, hazy).
- **Best 8:** 01 (backyard hero) · 05 · 07 (crazy paving → Paving) · 19 (driveway/facade) · 14 (stones + hedge) · 26 (fence + gate → Fencing) · 31 (slat fence detail) · 15.
- Flags: parked silver SUV in 27 (plate unverified — avoid 27); neighbouring houses over the fence in 08–10; green neighbour fence in 01/02; power lines in 12, 15, 16, 25, 27, 28; wheelie bins in 22; distinctive house (stone pillar, white fence) → **client consent needed**.
- Quality: heavy wide-angle distortion on many (04, 08–11, 22, 25–26); 33–36 weakest (haze, 4:3, glare on 36).

### Cross-set
- All three sets are **finished or late-stage only**: no true "before" shots and no early-stage photos for Current Work (design / prep) except Location 2's prep frames.
- No faces seen on residential sets; people appear only in Location 2.
- Nothing found with other companies' branding that is legible; unverified at full size.

## 3. Where they fit on the site
| Site area | Use | From |
|---|---|---|
| Our Work (new project tiles) | 3 new projects (Location 1 residential full transformation, Location 3 residential refresh, Location 2 commercial) | L1: 05, 14, 19, 28 · L3: 01, 19, 14 · L2: 37, 07 |
| Retaining Walls service | sleeper + block walls | L1: 26, 63, 30, 61–66 |
| Paving service | stepper pavers, travertine patio, crazy paving, exposed aggregate | L1 34, 19 · L3 07, 19 |
| Fencing service | slat fence, steel mesh, Colorbond | L3 26, 31, 28–31 · L2 37 |
| Grass & soft landscapes | turf, planting, raised beds | L1 56, 01 · L3 01, 05 · L2 25, 01 |
| Irrigation service (currently stock photo) | poly pipe + valve box | L2 (look for the irrigation frames; verify) |
| Commercial page | institutional site | L2 37, 20, 31 |
| Current Work stage photos | prep / build / finish ladder | L2 06, 39, 31 (prep, formwork, build) + finishes |
| Process page | design/prep/build/finish | L1 01 (layout), L2 39 (prep), L3/L1 finishes |
| Compliance page hero | crew-in-PPE shot the client asked for | none yet — L2 22 is **not** suitable |
| About / hero | one wide finished shot | L1 05 or L3 01 |

## 4. Implementation plan
1. **Housekeeping** — move both zips out of the repo (or `*.zip` in `.gitignore`); extract to `media-library/location-1`, `location-2`, `location-3` (source only, like the existing library). Update `media-library/MANIFEST.md`.
2. **Confirm with client** (blocking for publish): suburb/name/consent for each location; is Location 2 the RSPCA job; can we show the distinctive Location 3 house; OK to show workers in L2.
3. **Full-size privacy pass** (~25 min): open every photo we shortlist at 100% — house numbers (L1 18, 19, 21, 22), number plates (L3 27, L1 any), letterbox, small signs (L2 04, 22), skid-steer logos. Blur or skip.
4. **Pick and name** ~8 photos per location using the tables above; one from each near-duplicate group; prefer landscape, avoid heavy wide-angle on square tiles.
5. **Process** — resize to 1600 px long edge (hero 2400), export WebP ≤ 250 KB (hero ≤ 400 KB), strip metadata, descriptive filenames (`<suburb>-<feature>-NN.webp`), width/height recorded in `data.js`, alt text written for each.
6. **Integrate in `data.js`** — add 3 `projects` entries (Our Work + project pages), swap service photos (Retaining Walls, Paving, Fencing, Grass), irrigation image from L2 if verified, Commercial page project images, Current Work demo-job photos where they better fit; remove stock photos replaced. Keep `demo/` identical.
7. **Verify** — desktop 1440 + mobile 375: no broken images, tile crops OK (square crops of distorted wide shots), page weight, no console errors; bump cache-busters; update the sitemap data (new project slugs).
8. **Docs + deploy** — vault update, then commit and deploy only when VJ says go.

Effort estimate: steps 1, 3–7 about half a day; step 2 depends on the client.

## 5. Open questions for the client / VJ
- Which suburbs/names for Locations 1–3 (project names + dates for Our Work)?
- Is Location 2 the RSPCA O'Halloran Hill job? May we show it, and are the workers' appearances OK?
- Consent to publish Location 3's distinctive front fence/house?
- Do any photos exist from before the work started (for before/after)? None in these zips.
- Any crew-in-PPE photo for the Compliance page hero?

## 6. Implemented 2026-11-03 (committed and deployed 2026-11-04)
**108 of 142 photos processed and added to `site/` and `demo/`** as WebP, at most 1600 px long edge and under 250 KB, metadata stripped, in `assets/img/gallery/`. Originals stay in the two zips (gitignored); they were not copied into `media-library/`.

| Set | Project page (draft names) | Used | Left out |
|---|---|---|---|
| Location 1 | `the-terraced-garden` | 51 of 66 | Person in doorway: 21. Near-duplicate front view, not fully checked: 20. Near-duplicates: 7, 8, 9, 16, 24, 37, 38, 40, 41, 42, 45, 53, 64 |
| Location 2 | `animal-care-facility-grounds` | 32 of 40 | Workers with visible faces: 4, 21, 22. Clutter/brand: 38. Near-duplicates: 5, 14, 19, 28 |
| Location 3 | `the-stepping-stone-garden` | 25 of 36 | Parked car, neighbour's house: 27. Wheelie bins: 22. Glare: 36. Near-duplicates: 6, 9, 16, 20, 24, 29, 30, 34 |

Full-size privacy check found: house number "2" on Location 1 photos 18, 19, 21, 22 (retouched out of 18, 19, 22). Photo 20 was not fully checked and is not used.

Where used: Our Work mosaic (7 new tiles), three project pages (first 12 photos, then "Show all"), photo strip, service images and strips (Paving, Retaining Walls, Fencing, Grass), option images (Concrete, Driveway Grade, Crazy Paving, Concrete Sleepers, Blocks, Good Neighbour, Slat, Artificial Turf, Garden Beds), Commercial page, Process commercial cards, sitemap.xml. Home stat changed from 4 to 6 signature projects. Location 2 is left out of the home "Signature" carousel because it is in progress.

**Before going live, client must confirm:** project names, suburbs and dates (shown as "Suburb TBC" / "Date TBC" with a visible draft note); scope wording, which was written from the photos; whether turf on Locations 1 and 3 is artificial; whether Location 2 is the RSPCA O'Halloran Hill job (it looks like the same site, not confirmed, so it is not named); homeowner consent for Locations 1 and 3, and for neighbouring houses visible in some shots.

Not done: Current Work jobs keep their existing photos (no job data exists for these sets); Compliance hero still has no suitable crew-in-PPE photo.
