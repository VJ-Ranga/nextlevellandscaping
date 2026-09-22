---
tags: [design]
---

# Motion

- Fade/slide-up on scroll (`.reveal`, `.d1`… stagger), IntersectionObserver.
- **Swiper 11**: projects, reviews, image strip.
- Hero: ambient MP4 `autoplay muted loop playsinline`, poster, **pause button** (WCAG 2.2.2), pauses when covered (sticky mode).
- Hero headline carousel (centred layout) — needs keyboard/touch pause path.
- Sticky header restyles on scroll.
- Count-up stats in `#intro`.
- `prefers-reduced-motion`: no reveal transforms, no cue anim. **TODO:** serve poster only, no video.
- Nothing heavier: no GSAP, Lenis, custom cursor.
