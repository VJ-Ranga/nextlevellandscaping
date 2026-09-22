---
tags: [build, feature, unique]
---

# Current Work — live job stage tracker

**0/19 AU competitors do this.** Public list of in-progress jobs, each with a 10-stage pipeline, current stage highlighted, "this week" note, timeline log, ETA. Office updates the stage themselves.

## Stages (confirm with client)
1. Consultation & site assessment
2. Design & quote (2D/3D)
3. Approvals & scheduling (incl. council)
4. Site prep & excavation
5. Hardscaping — paving, walls, structures
6. Fencing & features
7. Irrigation & services (lighting, stormwater)
8. Soft landscaping & turf
9. Detailing & clean-up
10. Handover & aftercare ✓

% complete = stage index ÷ total.

## Demo
- Homepage `#current` cards + `current-work.html` index + `current-work-detail.html?slug=` (vertical stepper, timeline, gallery/lightbox, "how the office edits this" CMS note).
- Data: `currentWork[]` → `slug, title, suburb, services[], start, eta, stageIndex, note, img, updates[{date, stage, text}], gallery[]`.
- 3 sample jobs: Prospect Courtyard (stage 5), Henley Beach Frontage (3), Burnside Backyard (7).

> [!danger] Invented content
> The 3 jobs are **fictional**. Under ACL/ACCC they must be clearly marked placeholder and never reach production. Replace with real jobs + photos → [[Waiting on Client]]. Currently the Current Work pages do **not** show a placeholder label ([[Template Audit 2026-09-21]]).

## WordPress model → [[WordPress Plan]]
CPT `current_work` + ACF: `suburb`, `client_type` (tax), `services_involved`, `start_date`, `est_completion`, **`current_stage`** (select 1–10), **`current_note`**, `stage_log` (repeater: date, stage, note, photo), `gallery`, `is_complete` (→ convert to portfolio). Stages in one PHP array / options page. Custom single + archive templates (not Elementor).

Office flow: open job → change stage dropdown → type note → optional log row + photo → Update.

## Open decision
Tracker (transparent, unique) vs "In Progress" portfolio (more premium, like Peachy Green / [[Nathan Burkett]]). Show ETA dates or just on-track/delayed? → [[Open Questions]].
