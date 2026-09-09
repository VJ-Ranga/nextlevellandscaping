# Task: EDIT one file — Blueprint theme, fix the dark/light band split

Edit only:  `demo/assets/css/style-blueprint.css`
Do NOT modify any other file. Keep everything you already wrote EXCEPT the
one thing described below.

## What is wrong right now

You made the WHOLE page one white ground. That is wrong. Blueprint must keep the
site's existing DARK/LIGHT band rhythm — some sections dark, some light — but
render the dark sections in **Nocturne's near-black** and the light sections in
**white paper**, with Plan's monospace typography on BOTH.

## The correct ground map (by section id / base class)

DARK sections → Nocturne near-black ground `#101109`, off-white text:
  `.hero` (already dark — leave as is)
  `#intro`         (base class `band band--dark`)
  `#projects`      (base class `band band--dark`)
  `#project-strip` (base class `band band--dark strip-band`)
  `#process`       (base class `band band--dark`)
  `#about`         (base class `band band--dark`)

LIGHT sections → white paper `#FFFFFF`, near-black text `#16180F`:
  `#services`  ("What We Do")
  `#current`   ("Current Work")
  `#reviews`   ("Clients")
  `#store`     ("Supply")
  `#contact`   ("Enquiry")

The generic rule: a `main > .band.band--dark` is DARK; a plain `main > .band`
(no `--dark`) is LIGHT. Drive it off that, not off nth-child, so it stays correct
if sections are reordered. Also add explicit per-id fallbacks for the six dark ids
above in case a section loses its `band--dark` class.

Drop the `--bp-paper-2` warm inset entirely — the dark/light contrast now carries
the rhythm; a barely-warm inset on top just muddies it.

## Make the shared tokens context-aware (this is the real work)

Add a NOCTURNE palette alongside the existing paper palette, and flip the shared
tokens on dark bands — the same pattern the other themes use:

    /* dark-band palette */
    --bp-night      : #101109;   /* Nocturne ground              */
    --bp-night-2    : #0C0D07;   /* footer / deepest             */
    --bp-on-night   : #F2F1E9;   /* text on night   ~16:1        */
    --bp-night-muted: #A9A99C;   /* secondary on night ~7.9:1    */
    --bp-night-faint: #8A8A7E;   /* captions on night ~5.4:1     */
    --bp-night-rule : rgba(255,255,255,.14);
    --bp-night-ruleUI: rgba(255,255,255,.42);

Then, scoped, flip every shared token on dark contexts:

    html[data-theme="blueprint"] .hero,
    html[data-theme="blueprint"] main > .band.band--dark,
    html[data-theme="blueprint"] main > #intro,
    html[data-theme="blueprint"] main > #projects,
    html[data-theme="blueprint"] main > #project-strip,
    html[data-theme="blueprint"] main > #process,
    html[data-theme="blueprint"] main > #about {
      background:var(--bp-night); background-color:var(--bp-night);
      --bp-ink:var(--bp-on-night);
      --bp-muted:var(--bp-night-muted);
      --bp-faint:var(--bp-night-faint);
      --bp-rule:var(--bp-night-rule);
      --bp-rule-ui:var(--bp-night-ruleUI);
      --ink:var(--bp-on-night); --muted:var(--bp-night-muted);
      --line:var(--bp-night-rule); --line-dark:var(--bp-night-rule);
      color:var(--bp-on-night);
    }

The FOOTER: it follows `#contact` (light) — keep the footer on the night ground
(`--bp-night-2`) with `--bp-on-night` text, as a deliberate dark close. Flip its
tokens the same way.

Because tokens now flip on context, every component you already styled with
`var(--bp-ink)` / `var(--bp-muted)` / `var(--bp-rule)` / `var(--bp-faint)` will
automatically read correctly on whichever ground its section has — as long as you
USED those tokens and not hard-coded hex. Check the components you wrote; replace
any hard-coded `#16180F` / `#5C6152` / `#6E7265` / `rgba(22,24,15,…)` inside
component rules with the matching `--bp-*` token so they flip. Leave the token
DECLARATIONS as hex.

## Accent on each ground
- On LIGHT: accent text = olive `--bp-lime-ink` `#3E4A16`; lime `#C2E807` = fills/marks only.
- On DARK: lime `#C2E807` is safe as small text (~13:1) — use it directly for the
  section-label tick, active svc item, "now" stepper tick, etc. Button `--fill`
  stays lime with `#16180F` text on both grounds.
- Set `--accent` / `--accent-light` / `--accent-dark` context-aware: `--bp-lime-ink`
  on light, `--bp-lime` on dark. `--accent-ink*` stays `#16180F`.

## [data-hero="sticky"]
Every band already has an explicit background now (night or white), so the pinned
video can't bleed through. Just make sure your dark-band background rules also win
against the base `[data-hero="sticky"]` opacity rules (class-double or add
`[data-hero="sticky"]` variants).

## Keep unchanged
Nocturne's flat structure (no per-section grid), Plan's monospace label voice,
`01 — What We Do` block section labels, ruled-row cards, square buttons/fields,
the `#projects`/`#project-strip` grid-opt-out, both headers, both intro layouts,
reduced-motion.

## Verify + report
1. braces balance.
2. 0 unscoped selectors (apart from @media).
3. In your head, list which of the 11 sections is dark vs light and confirm it
   matches the map above.
4. Report: line count, brace count, the 0, and the dark/light section list.
