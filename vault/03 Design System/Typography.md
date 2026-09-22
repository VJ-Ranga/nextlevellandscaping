---
tags: [design, tokens]
---

# Typography

- **Family:** Poppins (Google Fonts, weights 400/500/600). `--f: "Poppins", system fallbacks`.
- **Signature:** ALL-CAPS headings at **weight 400**, letter-spacing 0, line-height 1.04 (from [[Laguna Pools]]). Hierarchy = size + caps + colour.
- Blueprint theme swaps in a monospace for labels ([[Demo Themes]]).

| Role | Size (clamp) | Style |
|---|---|---|
| H1 | `clamp(2rem, 5.4vw, 3rem)` | caps, 400 |
| H2 | `clamp(1.9rem, 4.6vw, 2.6rem)` | caps, 400 |
| H3 | `clamp(1.2rem, 2.4vw, 1.42rem)` | caps, 500 |
| Lead | `clamp(1.05rem, 1.6vw, 1.25rem)` / 1.6 | muted |
| Body | 16px / 1.8 | 400 |
| Eyebrow | .72rem, tracking .16em | caps 500, accent colour |
| Button | .8rem, tracking .06em | caps 500 |

- Text measure capped ~760px (`.measure`).
- Theme tokens: `--h-weight` (400 Carbon/Olive, 500 Carbon lime).

> [!todo] Production
> Self-host fonts (speed + privacy — offshore IP transfer). See [[Standards - Accessibility SEO Privacy]].
> Open question: keep Poppins or a more editorial humanist sans for headings → [[Open Questions]].
