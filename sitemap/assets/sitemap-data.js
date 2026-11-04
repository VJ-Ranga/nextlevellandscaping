/* =============================================================
   NextLevel Landscaping — sitemap data (ONE source for all 3 maps)
   Edit here when a page changes; tree, flow and inventory all
   re-render. Page facts mirror site/ (15 files) and
   site/assets/data.js (7 services, 7 projects, 3 current jobs).
   All hrefs are relative to sitemap/ -> ../site/
   ============================================================= */

window.SITEMAP = {

  meta: {
    client: "NextLevel Landscaping",
    updated: "3 Nov 2026",
    siteRoot: "../site/",
    sharedNote: "Header, drawer, footer and the floating quote button are injected on every sub-page by assets/js/partials.js; index.html carries its own inline copy."
  },

  /* Page types (inventory filter). */
  types: {
    main:    "Main page",
    service: "Service",
    project: "Project",
    job:     "Current work",
    legal:   "Legal"
  },

  /* Status vocabulary. */
  statuses: {
    built:       "Built",
    placeholder: "Placeholder",
    waiting:     "Waiting on client"
  },

  /* Shared components (inventory chips). */
  components: {
    header: "Header",
    drawer: "Mobile drawer",
    footer: "Footer",
    strip:  "Photo strip",
    quote:  "Quote float",
    lightbox: "Lightbox"
  },

  /* ---- the 15 real files ---------------------------------- */
  pages: [
    { id: "home", file: "index.html", name: "Home", type: "main", status: "built",
      purpose: "Front door. Sells the whole offer in one scroll and pushes to a free quote.",
      sections: ["Sticky video hero + headline carousel", "Intro + count-up stats", "Services (7)", "Signature transformations (4 projects)", "Current work, live", "Reviews", "How we work (4 steps)", "Contact / quote form", "Photo strip"],
      shared: ["header", "drawer", "footer", "strip", "quote"],
      note: "Carries its own inline header/footer copy — keep in sync with partials.js." },

    { id: "services", file: "services.html", name: "Services", type: "main", status: "built", nav: true,
      purpose: "Index of all 7 services as alternating image rows; each row opens its service page.",
      sections: ["Everything your outdoor space needs (7 rows)", "How we work (4 steps)", "Get started CTA", "Photo strip (mixed)"],
      shared: ["header", "drawer", "footer", "strip", "quote"] },

    { id: "service", file: "service.html?slug=", name: "Service page", type: "service", status: "built", template: "service",
      purpose: "One template rendering each single service from data.js.",
      sections: ["Sub-hero + breadcrumb", "Options & materials + chips", "Where we've done this (related projects)", "Per-service photo strip"],
      shared: ["header", "drawer", "footer", "strip", "quote", "lightbox"] },

    { id: "work", file: "our-work.html", name: "Our Work", type: "main", status: "built", nav: true,
      purpose: "Portfolio moodboard mosaic of the signature projects.",
      sections: ["Moodboard mosaic (7 projects)", "Edge-to-edge photo strip", "Have a space in mind? CTA"],
      shared: ["header", "drawer", "footer", "strip", "quote"] },

    { id: "project", file: "project.html?slug=", name: "Project page", type: "project", status: "built", template: "project",
      purpose: "One template rendering each completed project: gallery + lightbox.",
      sections: ["Sub-hero (name, suburb, date)", "Gallery + details", "Related projects"],
      shared: ["header", "drawer", "footer", "quote", "lightbox"],
      note: "No in-page quote CTA; conversion is via the floating quote button." },

    { id: "current", file: "current-work.html", name: "Current Work", type: "main", status: "built", nav: true,
      purpose: "Live jobs with a 10-stage progress tracker — a differentiator vs competitors.",
      sections: ["Current Work, Live (3 job cards + stage bars)", "Want your project on this page next? CTA"],
      shared: ["header", "drawer", "footer", "quote"] },

    { id: "job", file: "current-work-detail.html?slug=", name: "Current job page", type: "job", status: "built", template: "job",
      purpose: "One template per live job: vertical stepper + dated timeline.",
      sections: ["Sub-hero", "Where it's at (stepper)", "Latest photos", "Progress timeline"],
      shared: ["header", "drawer", "footer", "quote", "lightbox"],
      note: "Job entries and photos are demo content until the office updates them." },

    { id: "process", file: "process.html", name: "Our Process", type: "main", status: "built", nav: true,
      purpose: "The 4 steps in depth plus the 10-stage build pipeline.",
      sections: ["The same four steps, every job", "What each step involves", "Ten stages, and you can watch yours move", "Step one starts with a conversation (CTA)"],
      shared: ["header", "drawer", "footer", "quote"],
      note: "Step photos are stand-ins for the process; page says so." },

    { id: "about", file: "about.html", name: "About", type: "main", status: "placeholder", nav: true,
      purpose: "Who the company is: SA-owned, values, credentials, team.",
      sections: ["Taking gardens to the NextLevel", "South Australian owned", "Three things we don't compromise", "Not just landscapers", "The people on site (team)"],
      shared: ["header", "drawer", "footer", "quote"],
      note: "Team names/photos are placeholders — needs real details from the client." },

    { id: "reviews", file: "reviews.html", name: "Reviews", type: "main", status: "built", nav: true,
      purpose: "All 7 Google reviews in full plus credentials.",
      sections: ["Honest, reliable, on budget (7 reviews)", "Credentials (licence, Master Landscapers, Lawn Solutions)", "Let's talk about your outdoor space (CTA)"],
      shared: ["header", "drawer", "footer", "quote"] },

    { id: "faq", file: "faq.html", name: "FAQ", type: "main", status: "built", nav: true,
      purpose: "Straight answers to common landscaping questions; fills a competitor gap.",
      sections: ["Straight answers, no sales pitch (accordion)", "Ask us directly (CTA)"],
      shared: ["header", "drawer", "footer", "quote"] },

    { id: "contact", file: "contact.html", name: "Contact", type: "main", status: "built", nav: true, goal: true,
      purpose: "The conversion goal: full free-quote form, office address and map.",
      sections: ["Contact us + quote form (name, email*, phone*, suburb*, budget*, description)", "Our office — 1/41 Woodlands Terrace, Edwardstown", "On the map"],
      shared: ["header", "drawer", "footer", "quote"],
      note: "Form submission endpoint is demo-only until hosting/WordPress is chosen." },

    { id: "commercial", file: "commercial.html", name: "Commercial", type: "main", status: "placeholder",
      purpose: "Commercial work landing page: who we work with, what we deliver, recent commercial projects and ways to engage.",
      sections: ["Who we work with", "What we deliver", "RSPCA South Australia, O'Halloran Hill", "More commercial work", "At a glance", "Ways to engage us", "Tender / EOI / package CTA"],
      shared: ["header", "drawer", "footer", "quote"],
      note: "Draft. Needs client OK on project names and real photos; linked from the homepage and footer." },

    { id: "compliance", file: "compliance.html", name: "Safety, Quality & Compliance", type: "main", status: "placeholder",
      purpose: "Prequalification page for commercial clients and tenders: licences, insurance, safety, quality and policies.",
      sections: ["At a glance", "Licences and registrations", "Insurance", "How we manage safety", "Working on live sites", "Subcontractors", "Quality and handover", "Our policies", "Compliance documents on request"],
      shared: ["header", "drawer", "footer", "quote"],
      note: "Built from the client's copy. Hero photo, policy PDFs and permission to name clients still to confirm." },

    { id: "privacy", file: "privacy.html", name: "Privacy & Security", type: "legal", status: "built", footerOnly: true,
      purpose: "Privacy policy; linked from the footer only.",
      sections: ["Who we are", "What we collect", "How we use it", "Third parties", "Access, correction and complaints"],
      shared: ["header", "drawer", "footer", "quote"] }
  ],

  /* ---- 7 services (site/assets/data.js) -------------------- */
  services: [
    { slug: "landscape-design",              name: "Landscape Design" },
    { slug: "paving",                        name: "Paving" },
    { slug: "retaining-walls",               name: "Retaining Walls" },
    { slug: "fencing",                       name: "Fencing" },
    { slug: "natural-artificial-grass",      name: "Grass & Soft Landscapes" },
    { slug: "irrigation",                    name: "Irrigation",             status: "waiting", note: "Photo strip uses best-fit lawn/planting shots until proper irrigation photography arrives." },
    { slug: "commercial-garden-maintenance", name: "Commercial Maintenance", status: "waiting", note: "Photo strip uses best-fit planting shots until proper maintenance photography arrives." }
  ],

  /* ---- 4 projects ------------------------------------------ */
  projects: [
    { slug: "grandeur-on-grange",       name: "Grandeur on Grange",        suburb: "Grange" },
    { slug: "a-klemzig-cornerstone",    name: "A Klemzig Cornerstone",     suburb: "Klemzig" },
    { slug: "serenity-in-somerton-park",name: "Serenity in Somerton Park", suburb: "Somerton Park" },
    { slug: "a-north-haven-highlight",  name: "A North Haven Highlight",   suburb: "North Haven" }
  ],

  /* ---- 3 current jobs -------------------------------------- */
  jobs: [
    { slug: "prospect-courtyard",   name: "Prospect Courtyard Rebuild", suburb: "Prospect" },
    { slug: "henley-beach-frontage",name: "Henley Beach Frontage",      suburb: "Henley Beach" },
    { slug: "burnside-backyard",    name: "Burnside Backyard Retreat",  suburb: "Burnside" }
  ],

  /* Nav order (drawer / footer EXPLORE) — children hang off these. */
  navOrder: ["services", "work", "current", "process", "about", "reviews", "faq", "contact"],

  /* Which template + list renders each parent's children. */
  children: {
    services: { template: "service", list: "services" },
    work:     { template: "project", list: "projects" },
    current:  { template: "job",     list: "jobs" }
  },

  /* ---- flow map -------------------------------------------- */
  flow: {
    /* id, label, (pageId for link), kind: page|entry|goal|float, per-layout x,y,w,h */
    nodes: [
      { id: "entry",   label: "Visitor lands", sub: "Google · Instagram", kind: "entry",
        wide: { x: 10,  y: 262, w: 150, h: 56 }, tall: { x: 95,  y: 10,  w: 150, h: 56 } },
      { id: "home",    label: "Home", page: "home", kind: "page",
        wide: { x: 200, y: 262, w: 140, h: 56 }, tall: { x: 95,  y: 96,  w: 150, h: 48 } },
      { id: "services",label: "Services", page: "services", kind: "page",
        wide: { x: 400, y: 20,  w: 170, h: 48 }, tall: { x: 14,  y: 190, w: 140, h: 48 } },
      { id: "service", label: "Service page ×7", page: "service", kind: "page",
        wide: { x: 640, y: 20,  w: 190, h: 48 }, tall: { x: 14,  y: 270, w: 140, h: 48 } },
      { id: "work",    label: "Our Work", page: "work", kind: "page",
        wide: { x: 400, y: 100, w: 170, h: 48 }, tall: { x: 186, y: 190, w: 140, h: 48 } },
      { id: "project", label: "Project page ×4", page: "project", kind: "page",
        wide: { x: 640, y: 100, w: 190, h: 48 }, tall: { x: 186, y: 270, w: 140, h: 48 } },
      { id: "current", label: "Current Work", page: "current", kind: "page",
        wide: { x: 400, y: 180, w: 170, h: 48 }, tall: { x: 14,  y: 350, w: 140, h: 48 } },
      { id: "job",     label: "Current job ×3", page: "job", kind: "page",
        wide: { x: 640, y: 180, w: 190, h: 48 }, tall: { x: 14,  y: 430, w: 140, h: 48 } },
      { id: "process", label: "Our Process", page: "process", kind: "page",
        wide: { x: 400, y: 290, w: 170, h: 48 }, tall: { x: 186, y: 350, w: 140, h: 48 } },
      { id: "reviews", label: "Reviews", page: "reviews", kind: "page",
        wide: { x: 400, y: 360, w: 170, h: 48 }, tall: { x: 186, y: 430, w: 140, h: 48 } },
      { id: "about",   label: "About", page: "about", kind: "page",
        wide: { x: 400, y: 430, w: 170, h: 48 }, tall: { x: 14,  y: 510, w: 140, h: 48 } },
      { id: "faq",     label: "FAQ", page: "faq", kind: "page",
        wide: { x: 400, y: 500, w: 170, h: 48 }, tall: { x: 186, y: 510, w: 140, h: 48 } },
      { id: "commercial", label: "Commercial", page: "commercial", kind: "page",
        wide: { x: 640, y: 290, w: 190, h: 48 }, tall: { x: 14,  y: 590, w: 140, h: 48 } },
      { id: "compliance", label: "Safety & Compliance", page: "compliance", kind: "page",
        wide: { x: 640, y: 360, w: 190, h: 48 }, tall: { x: 186, y: 590, w: 140, h: 48 } },
      { id: "contact", label: "Contact — free quote", page: "contact", kind: "goal",
        wide: { x: 900, y: 262, w: 190, h: 64 }, tall: { x: 70,  y: 610, w: 200, h: 56 } },
      { id: "float",   label: "Floating “Get a Free Quote”", sub: "on every page", kind: "float",
        wide: { x: 900, y: 470, w: 190, h: 64 }, tall: { x: 70,  y: 704, w: 200, h: 56 } }
    ],
    /* main = the highlighted conversion path. bus (tall layout): l/r rail. */
    edges: [
      { from: "entry",   to: "home",    main: true,  label: "arrives" },
      { from: "home",    to: "services",main: true,  label: "browses" },
      { from: "services",to: "service", main: true,  label: "picks a service" },
      { from: "service", to: "contact", main: true,  label: "Get a free quote", rail: "l" },
      { from: "home",    to: "work" },
      { from: "work",    to: "project" },
      { from: "project", to: "contact", via: "float", rail: "r" },
      { from: "home",    to: "current" },
      { from: "current", to: "job" },
      { from: "job",     to: "contact", rail: "l" },
      { from: "home",    to: "process" },
      { from: "process", to: "contact", rail: "r" },
      { from: "home",    to: "reviews" },
      { from: "reviews", to: "contact", rail: "r" },
      { from: "home",    to: "about" },
      { from: "about",   to: "contact", rail: "l" },
      { from: "home",    to: "faq" },
      { from: "faq",     to: "contact", rail: "r" },
      { from: "home",    to: "commercial" },
      { from: "commercial", to: "compliance" },
      { from: "commercial", to: "contact", rail: "l" },
      { from: "compliance", to: "contact", rail: "r" },
      { from: "float",   to: "contact", via: "float", dashed: true }
    ],
    /* Text alternative + legend: named journeys. */
    journeys: [
      { name: "Main conversion path", main: true,
        steps: ["entry", "home", "services", "service", "contact"],
        note: "Search or social lands on Home, the visitor opens Services, reads one service, then asks for a free quote." },
      { name: "Proof path",
        steps: ["home", "work", "project", "contact"],
        note: "Visitor wants evidence: browses Our Work, opens a project, then quotes (via the floating button)." },
      { name: "Live-progress path",
        steps: ["home", "current", "job", "contact"],
        note: "Current Work shows jobs in progress; each has a stepper and timeline, then a CTA to Contact." },
      { name: "Trust path",
        steps: ["home", "reviews", "contact"],
        note: "Reviews, About, FAQ and Process each end in a CTA to Contact. The Home page also has its own quote form and CTAs." },
      { name: "Commercial path",
        steps: ["home", "commercial", "compliance", "contact"],
        note: "A tender or facilities manager reads the Commercial page, checks Safety, Quality & Compliance for prequalification, then sends an enquiry." },
      { name: "Any page",
        steps: ["float", "contact"],
        note: "The floating “Get a Free Quote” button appears about halfway through the hero (or after 80px on plain pages) and links to Contact." }
    ]
  }
};
