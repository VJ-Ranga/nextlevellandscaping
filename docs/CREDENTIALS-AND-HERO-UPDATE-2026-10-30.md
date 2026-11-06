---
tags: [build, credentials, hero, audit]
date: 2026-10-30
stage: Phase 5 — UI finalising
status: built locally, NOT committed / NOT deployed
---

# Credentials display, hero cleanup and page audit — 2026-10-30 / 31

Everything done in this working stretch, with the reasons and what is still open. Repo: `/home/vjranga/Documents/nextlevellandscaping`. Preview ports: **8500** (`site/`), **8501** (repo root, demo at `/demo/`) — always the 8500 range (see "Dev ports").

## 1. Summary
| Area | Result |
|---|---|
| Real site `site/` homepage | Credentials strip is now **L5**: endless logo loop, no frame, white logos, close to the bottom of the dark band |
| Real site hero | "More about us" link removed. Hero = **Get a free quote** + **See our work** only |
| Demo `demo/` | Options **P0–P4** (credential proof), **L3–L5** (strip), **M0/M3/M4** (stats + credentials). New **P4 = line on top (C) + proof band (B)** |
| Logos | Each logo shown in the version that suits the background. No CSS filters / recolouring anywhere |
| Compliance research | MLSA / CITB / Lawn Solutions / ICN / BLD licence rules checked (see section 5) |
| Page audit | All 15 pages already on Carbon theme; text-only pages need images/icons (section 7) |
| Git | **Nothing committed or pushed** this stretch |

## 2. Design choices the client made (from chat)
- Chosen for the real site: **P0 + L5 + M0** (no P block, L5 loop strip, stats unchanged).
- Spacing: logos closer to the dark band's bottom edge (gap 120px → **56px**), and more room between the buttons and the logos (strip `margin-top` 5.5rem → **8rem = 128px**).
- Logos: "use the black or white version depending on the background". No boxes/plates behind logos.
- Hero: 3 links is too many → keep two buttons, drop "More about us".
- Asked for P3 + P2 combined → built as demo option **P4**.

## 3. Real site changes (`site/`)
| File | Change |
|---|---|
| `site/assets/data.js` | `credentials` rewritten: licence (icon + text), MLSA (`mlsa-white.png`, 384×218), ICN (`icn-registered.png`, 200×77, text "Registered on ICN Gateway"), Lawn Solutions (`lawn-solutions.svg`), CITB (`citb-sa.svg`) |
| `site/assets/js/main.js` | After building `#credline`, wraps it in `.credline-clip` and appends aria-hidden `.is-clone` copies so the marquee loops seamlessly |
| `site/assets/css/style-carbon-soft-v2.css` | New block at the end: clip + mask fade, marquee `nll-cred-marquee` 38s linear, hover pause, 270px items, per-logo sizes (ICN 56px), reduced-motion fallback (static, wrapped), and `#intro` bottom padding `calc(var(--pad-home) + var(--v2-scoop) - 64px)` |
| `site/index.html` | `#credline` lost the `reveal d1` classes (see bug below); "more about us" link removed from the intro paragraph |
| `site/assets/img/brand/certs/` | + `mlsa-white.png`, `icn-registered.png` |
| `site/assets/css/mega-menu.css` | (earlier) mega panel borders: top rgba(.28), bottom 1px rgba(.45); `?v=6` |
| all `site/*.html` | cache-busters: theme CSS `v=1793400000`, `data.js` / `main.js` `v=1793400000` |

**Bug found + fixed:** at phone width the loop strip never appeared. `#credline` is ~3245px wide, so the scroll-reveal observer (threshold 0.12) never saw 12% of it. Fix: no `reveal` class on the strip. Verified at 375px (no sideways scroll) and 1440px.

## 4. Demo changes (`demo/`)
Options bar (`assets/js/demo-bar.js`, now `?v=38`) — homepage groups:
| Group | Options | Default |
|---|---|---|
| H header menu | H2 two columns · H5 mega | H5 |
| **P** credential proof | P0 off (use L/M) · P1 A proof line · P2 B proof band · P3 C decision points · **P4 C + B (new)** | P1 |
| L credentials strip | L3 dark tiles · L4 loop framed · L5 loop no frame | L3 |
| M stats + credentials | M0 current · M3 loop boxed · M4 loop 2 at a time | M0 |
Other pages: H, P, K (hero height), C (overlay). Locked (not options): top row 14.5px, menu 18px, header on menu open = solid, menu icons = on.

Files: `demo/assets/css/demo-variants.css` (`?v=55`), `demo/assets/js/demo-proof.js` (`?v=7`, builds the P blocks), `demo/assets/js/demo-credbox.js` (`?v=6`, builds M credbox + L4/L5 marquee), `demo/assets/data.js` (`?v=1793100300`).

P options in detail:
- **P1 A · Proof line** — one line inside the hero: licence number · MLSA member · Verify link.
- **P2 B · Proof band** — a light band before Contact: "Licensed builder BLD320507", check-on-the-SA-register copy, buttons *Verify our licence* / *All credentials*, 4 cards (MLSA, ICN, Lawn Solutions, CITB) each with a meaning caption.
- **P3 C · Decision points** — small line under the hero buttons, plus a card at the top of the quote form and on service pages (Lawn Solutions only on the Grass service).
- **P4 C + B** — the P3 line under the hero buttons, then the P2 band lower down; no cards on forms.
- Any P ≠ 0 hides the L/M credentials strip.

Removed from the demo this stretch: L0/L1/L2, M1/M2/M5, H1/H3/H4/H0, groups I and J (made defaults), and the old filtered logos. Some **dead CSS** for removed options is still in `demo-variants.css` (cleanup pending).

Menu panel fixes (demo + site): H2 panel now anchored to the right-hand menu row (opens as an extension of the menu, no overlap of the bottom line); borders on H2/H5 panels so they read on the dark background.

## 5. Logo files and compliance rules
Folder `demo/assets/img/brand/certs/` (site has the subset it uses):
| File | Source | Used on |
|---|---|---|
| `mlsa-black.png` | client-supplied (their email signature, "Choose a master landscaper") | light surfaces |
| `mlsa-white.png` | **generated** by us from the black file (mono reversal) — NOT an official MLSA file; client accepted | dark surfaces |
| `mlsa.png` | old colour artwork (no longer used by the new strips) | — |
| `icn-registered.png` | official ICN Gateway "Registered with ICN" badge (from ICN's embed) | any surface |
| `citb-sa.svg` / `citb-sa-dark.svg` | official white / dark logo from citb.org.au | dark / light |
| `lawn-solutions.svg` | official white logo | dark |
| `lawn-solutions-dark.svg` | **generated** (fill changed to #17190F) — not official | light |

Rules found (researched 2026-10-29, details in memory note `credential-logo-rules`):
- **MLSA** — financial members only; no recolouring/distortion; must stand alone; must not imply endorsement; the dedicated *Member Logo* (green) is only in the member area.
- **CITB SA** — a statutory levy body (CITF Act 1993, 0.25% on building work over $40k), **not** an accreditation. Wording "Registered with CITB" is client-supplied and may mislead.
- **Lawn Solutions Australia** — grower/supplier network; no installer programme or logo terms found. "Authorised installer" is **unverified** (Australian Consumer Law s29 risk).
- **ICN Gateway** — say "Registered on ICN Gateway", never "ICN verified".
- **BLD320507** — SA law requires licence number and (registered) name in building-work ads, as real text, with a link to the CBS register. Demo uses a placeholder `https://www.cbs.sa.gov.au/`.

## 6. Hero (site + demo)
`index.html` intro paragraph is now "Proudly South Australian owned and operated. One team from first site visit to final handover." Buttons: **Get a free quote** (filled) + **See our work** (outline). Reason: three actions competed; the quote is the goal; About is in the menu and lower on the page.

## 7. Page audit (all 15 pages, 2026-10-31)
Every page loads `data-theme="carbon-soft-v2"` and the shared band layout, so none needs a rebuild. Structure check only (screenshots mid-fade were unreliable — a visual pass is still to do).
| Page | Images / icons | Verdict |
|---|---|---|
| privacy | 0 / 0, one long text block | weakest — add shield/lock icon + section icons |
| reviews | 0 / 0, ~1,660 chars | add star row, Google/Facebook icons, suburb tags/photos |
| compliance | 0 / 4 over 8 bands | icon per card, real logos, one site photo |
| commercial | images mid-page only; top 2 bands text | service-type icons, top photo |
| faq | 0 / 12 | add a photo + "still have a question" card |
| about | 2 / 3 | team/site photo, values/numbers icons |
| process | step photos only at top | icons per commercial stage, one photo |
| current-work-detail | 4 images over 2,700px | more media per job |
Suggested order: Reviews → Compliance → Commercial → About → FAQ → Privacy. **Waiting on client:** real About (team) + Commercial photos.

## 8. Dev ports (new rule)
Local WP sites use nginx on 8081, 8085, 8086, 8090–8096, 8098–8103, 8300, 8301 (+ MySQL 3306/33060). Ports 8098/8099 once showed other clients' WP sites. Always use **8500+** for previews; confirm with `curl -sI` (`SimpleHTTP/0.6 Python` = ours, nginx = a Local WP site). `.claude/launch.json`: `site-static` 8500 (`site/`), `repo-static` 8501 (repo root).

## 9. Waiting on client / open questions
- MLSA **Member Logo** from the member area + written permission/terms (replaces our generated white version)
- Lawn Solutions: do they have an installer relationship? logo terms? ("authorised" wording unverified)
- CITB: what does "Registered with CITB" mean for them?
- Exact CBS licence-verify URL (placeholder used)
- Registered business name for the licence line
- Client's **ICN Gateway profile URL** (badge currently links to the generic gateway)
- Real photos: About team, Commercial
- Final pick of P-option vs L/M for the demo (site already has L5)

## 10. Still to do
1. Commit + deploy `site/` (main + gh-pages) — **only when VJ says so**. `.claude/launch.json` is also uncommitted.
2. Image/icon pass on the text-only pages (section 7).
3. Clean dead CSS for removed demo options.
4. Remaining roadmap items: header menu reorganisation (#74), commercial enquiry form (#79), sub-service content (#75).
5. The old live `site/` pages' other filtered-logo uses: none left on the homepage; check footer/other pages for old `mlsa.png` use.
6. Test the demo options on tablet/phone widths (only 1440 and 375 checked).

## Update 2026-11-05: demo options renumbered
The codes above are the old ones. In `demo-bar.js` (`?v=40`) they are now:

| Group | Old code | New code | Meaning |
|---|---|---|---|
| H Services menu | H2 / H5 | H1 / H2 | Two columns / Mega menu |
| P Where credentials show | P0 / P1 / P2 / P4 | P1 / P2 / P3 / P4 | Logo strip / Top section line with logos / Separate section before the quote form / Both |
| L Logo strip style | L4 / L5 | L1 / L2 | Moving, framed / Moving, no frame |
| M Logo strip position | M0 / M3 / M4 | M1 / M2 / M3 | Below the intro / Under stats, boxed / Under stats, 2 at a time |

Removed: old L3 (dark tiles) and old P3 (decision points). L applies only with P1 + M1, and M only with P1; other choices grey those buttons out. K and C codes are unchanged. The website currently uses H2, P1, L2, M1, K4, C1 in the new codes.

Status: deployed 2026-11-06 (gh-pages `b83e72c`).
