---
tags: [design, components]
---

# Buttons — one system everywhere

| Variant | Class | Spec |
|---|---|---|
| Ghost pill (default) | `.btn-ghost` | transparent, `1.5px solid currentColor`, radius `999px` (`--btn-radius`), `15px 34px`, .8rem caps 500, tracking .06em. Hover: fill slides up (`::before` translateY), .32s |
| Filled primary | `.btn-ghost.btn-ghost--fill` | lime fill, near-black ink — "Get a free quote", "Send enquiry" |
| On dark | same class | `--c` flips to off-white inside dark bands |
| Text link | `.tlink` | underline on light, accent on dark |
| Icon button | 44px circle, hairline | carousel arrows, menu, WhatsApp float, hero pause |

- Disabled = 40% opacity, no pointer.
- Radius scale: `999px` pills · `50%` circles · `4px` inputs only.
- Carbon lime theme uses `--btn-radius: 2px` (square) — see [[Demo Themes]].

> [!bug] Gotcha fixed
> `.btn-ghost--fill` also carries `.btn-ghost`, so dark-band outline colour rules clobbered the fill ink. Fixed by scoping those rules to `:not(.btn-ghost--fill)`.
