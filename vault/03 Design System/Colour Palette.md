---
tags: [design, tokens]
---

# Colour Palette

Taken from the **real NextLevel logo** (2026-09-08): lime leaf + "LANDSCAPING" wordmark, olive square, white wordmark. Logo files: `demo/assets/img/brand/` (logo.png white-on-dark, logo-square.png, favicon.png, mlsa.png, linkedge.png).

## Brand
| Token | Hex | Use |
|---|---|---|
| Lime | `#C2E807` | **fills + marks only** — primary pill, active stage, bullets. Never text on light (1.4:1 ❌) |
| Olive | `#5A6428` | logo square; "Olive" theme bands |
| Olive ink | `#3E4A16` | accent **text** on light (~8.5:1 ✅) |

## Carbon theme (default) — `style-carbon-soft-v2.css`
| Token | Hex | Role |
|---|---|---|
| `--v2-night` | `#17190F` | dark bands, hero, footer |
| `--v2-ground` | `#F2F2EC` | light bands (warm off-white) |
| `--v2-ink` | `#17190F` | text on light |
| `--v2-on-night` | `#F2F2EC` | text on dark |
| `--v2-muted` | `#6B6F62` | secondary on light (4.59:1 — darkened from spec #6E7265 which failed at 4.39) |
| `--v2-muted-nt` | `rgba(242,242,236,.72)` | secondary on dark |
| `--v2-line` / `-nt` | 14% / 16% alpha | hairlines |
| `--v2-line-ui` | `rgba(23,25,15,.5)` | interactive borders ≥3:1 |
| `--scrim` | `rgba(23,25,15,.42)` | text over photo |

## Base system tokens (`style.css`)
`--ink #1C2412` · `--bg #F6F5EF` · `--muted #6E7358` · `--line #E2E0D5` · `--scrim rgba(20,26,14,.55)`.

## Context-aware rule (important)
`--accent`, `--muted`, `--line` **flip automatically** inside `.band--dark`, `.site-footer`, `.subhero`, `.drawer`, `.strip-band`, `.hero`:
- light ground → accent = olive ink
- dark ground → accent = lime
- `--accent-ink` = `#17190F` → anything printed ON lime is near-black.

Contrast audited: **0 WCAG failures** across all themes (2026-09-09/10).

## States (to formalise for WP)
Success / warning / error not yet tokenised beyond form messages → add in [[WordPress Plan]].

> [!note] Placeholder history
> Early plan used Cloudycode placeholder `#1A56DB`. Replaced by logo palette 2026-09-08. README still mentions it (stale) → [[Template Audit 2026-09-21]].
