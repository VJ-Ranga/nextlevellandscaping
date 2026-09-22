---
tags: [build, wordpress]
---

# WordPress Plan (after demo sign-off)

- **Theme:** lightweight **custom child theme** (of `hello-elementor` or purpose-built) owning design tokens CSS, custom templates for `service` / `portfolio` / `current_work` singles + archives, and the stepper component. Marketing sections can stay in **Elementor** with tight global styles. Alt = full block theme (cleaner, bigger lift) → client decision.
- **CPTs:** keep `service`, `portfolio`, `products` + taxonomies; **add `current_work`** + ACF ([[Current Work Feature]]).
- **Forms:** Elementor Pro Forms + reCAPTCHA; full quote form (name, email, phone, suburb, banded budget w/ "not sure yet", service, message, photo upload).
- **SEO:** Yoast meta on every page, `og:locale en_AU`, `LandscapingBusiness` schema (address, geo, hours, areaServed, sameAs), per-service/project schema, breadcrumbs. See [[Standards - Accessibility SEO Privacy]].
- **Performance:** self-host fonts + hero video (≤2 MB mobile, no autoplay on mobile), AVIF/WebP, width/height on every img, `fetchpriority=high` on hero poster, lazy-load, defer JS.
- **Remove** demo theme switcher; keep one theme (Carbon).

## Cloudycode migration rules
- No hardcoded `localhost` in templates — root-relative `/wp-content/uploads/...`; search-replace tool for DB content.
- After migration test live desktop **and** mobile separately (images, failed requests, console).
- Browser "access local network" prompt = leftover localhost URL → fix, don't allow.
- Check `wp_template_part` DB overrides before assuming a template change deployed.
- With `add_editor_style()`, scope `.editor-styles-wrapper` overrides for sticky/fixed/z-index layers.
