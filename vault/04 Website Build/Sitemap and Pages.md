---
tags: [build, ia]
---

# Sitemap & Pages

| Live site now | New site | Demo file | Status |
|---|---|---|---|
| Home | Home | `index.html` | ✅ built → [[Homepage Sections]] |
| About | About | `about.html` | ✅ (team placeholder → [[Team]]) |
| Our Services + 8 empty stubs | Services + 8 real pages | `service.html?slug=` | ✅ template; no services index page |
| Our Work `/portfolio/` | Our Work | `our-work.html` | ✅ |
| — | Project detail | `project.html?slug=` | ✅ gallery + lightbox |
| — | **Current Work** (new) | `current-work.html` | ✅ → [[Current Work Feature]] |
| — | Current job detail | `current-work-detail.html?slug=` | ✅ vertical stepper + timeline |
| Store | Store (NextLevel Outdoors) | `store.html` | ✅ |
| — | Product detail | `product.html` | ❌ not built |
| Contact (anchor) | Contact page | `contact.html` | ❌ not built (form on home `#contact`) |
| Privacy | Privacy & Security | `privacy.html` | ✅ |

## Nav
- Classic header: Services · Our Work · Current Work · Store · Contact + phone + "Get a free quote".
- Centred header (default): util row (Our Process · Reviews · Store · Credentials · phone · Instagram); main row Services · Our Work | logo | Current Work · Contact.
- Planned WP: Services ▾ mega-menu (8 services + All).
- Shared chrome on sub-pages injected by `assets/js/partials.js` (both headers, drawer, footer, WhatsApp).

## Global
Skip link · sticky header · mobile drawer · WhatsApp float (`wa.me/61404440222` — number unconfirmed) · footer with ABN + BLD + MLSA · lightbox.
