---
tags: [design, signature, carbon]
---

# Scoop Curve — Carbon's whole identity

> [!tip] Shorthand name (client asked 2026-09-22)
> Call it **"the scoop"** or **"a scoop corner"** when referencing it in conversation — matches the code (`--v2-scoop` token, `.arch--tr` etc). Specify which corner when it matters: top-left / top-right / bottom-left / bottom-right scoop, per the corner map below.

One large **single-corner** radius on section bands so each band sweeps out of the next like a ribbon (our take on [[Laguna Pools]]' 150px arch).

```css
html[data-theme="carbon-soft-v2"]{ --v2-scoop: clamp(56px, 11vw, 150px); }
@media (max-width:640px){ html[data-theme="carbon-soft-v2"]{ --v2-scoop: 44px; } }
```
Mechanics: negative `margin-top` pull + padding compensation; band owning the curve sits `z-index:2` + `overflow:clip` (not `hidden` — breaks sticky).

## Corner map (final, after ~10 client rounds, 2026-09-10)
| Band | Ground | Corner |
|---|---|---|
| `.hero` media | dark | **bottom-left** |
| `#intro` | dark | flat |
| `#services` | light | **top-right + bottom-left** (owns seam into #projects) |
| `#projects` | dark | flat, tucks up behind #services |
| `#current` | light | **top-right + bottom-left** |
| `#reviews` | dark | flat, tucks up behind #current |
| `#process` | light | **top-right** (rides over #reviews) |
| `#store` | dark | flat (still rides up over #process) |
| image strip | dark | framed tiles (inset padding, 14px gaps, 10px radius) |
| `#contact` | light | flat |
| `.site-footer` | dark | **top-left + top-right** |

- Store product row: first/last card images get bookend corners via `--v2-scoop-card: clamp(28px,5vw,72px)` — **still live in CSS**. Session notes say client asked to remove them for border-framed images; revert never landed in git → confirm with client ([[Open Questions]]).
- Sub-pages: `main > .band:last-of-type` gets footer-pull padding so footer doesn't ride over last section.
- Sticky-hero guard zeroes intro/hero radius.

> [!warning] Client is sensitive to this
> Every corner was individually negotiated. Log any change in [[Decisions Log]].
