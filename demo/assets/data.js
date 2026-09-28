/* =============================================================
   NextLevel Landscaping — demo content
   Edit this file to update the site. Maps 1:1 to the planned
   WordPress CPT fields (see REDESIGN-PLAN.md §4 & §6).
   Images are stored locally in assets/img/.
   ============================================================= */

window.NLL = {

  /* --- hero headline carousel (centred layout) -------------- */
  heroSlides: [
    { line: "Adelaide's first choice landscapers", cta: "Get a free quote", href: "#contact" },
    { line: "From 2D &amp; 3D design to finished garden", cta: "See our work", href: "our-work.html" },
    { line: "Ten years transforming South Australian gardens", cta: "What we're building now", href: "current-work.html" }
  ],

  /* --- count-up numbers (no boxes) --------------------------- */
  stats: [
    { value: 10,  suffix: "+", label: "Years transforming<br>Adelaide gardens" },
    { value: 7,   suffix: "",  label: "Services under<br>one roof" },
    { value: 4,   suffix: "",  label: "Signature full-property<br>transformations" },
    { value: 100, suffix: "%", label: "South Australian<br>owned &amp; operated" }
  ],

  /* --- credential line under the numbers -------------------- */
  credentials: [
    { icon: "fa-solid fa-helmet-safety", text: "Licensed builder <b>BLD320507</b>" },
    { icon: "fa-solid fa-award",         text: "<b>Master Landscapers</b> South Australia" },
    { icon: "fa-solid fa-seedling",      text: "<b>Lawn Solutions Australia</b> authorised" }
  ],

  /* --- 7 services (verbatim copy from the live site; Walkways removed per client feedback 2026-09-22) --------- */
  services: [
    { no: "01", slug: "landscape-design", name: "Landscape Design", icon: "fa-solid fa-pen-ruler",
      desc: "An on-site consultation to talk through your requirements, then a 2D &amp; 3D design so you see exactly what your outdoor space will look like before we move ahead.",
      tags: ["On-site consult", "2D &amp; 3D concepts"], img: "assets/img/services/landscape-design.jpg" },
    { no: "02", slug: "paving", name: "Paving", icon: "fa-solid fa-border-all",
      desc: "Driveways, the perimeter of the house, pool areas, patios, garden paths and walkways — laid to last and to suit the architecture.",
      tags: ["Brick", "Square", "Driveway-grade", "Natural stone"], img: "assets/img/services/paving.jpg" },
    { no: "03", slug: "retaining-walls", name: "Retaining Walls", icon: "fa-solid fa-layer-group",
      desc: "Create garden beds, add a finishing edge, or section a sloping block — built to hold and to look considered.",
      tags: ["Timber sleepers", "Concrete sleepers", "Blocks", "Brick"], img: "assets/img/services/retaining-walls.jpg" },
    { no: "04", slug: "fencing", name: "Fencing", icon: "fa-solid fa-grip-lines-vertical",
      desc: "Colorbond solutions including Good Neighbour, tubular and slat fencing — durability, privacy and a modern line to any property.",
      tags: ["Good Neighbour", "Tubular", "Slat", "Automated gates"], img: "assets/img/services/fencing.jpg" },
    { no: "05", slug: "natural-artificial-grass", name: "Grass &amp; Soft Landscapes", icon: "fa-solid fa-leaf",
      desc: "Natural grass and artificial turf, custom garden beds, quality edging and expert planting — attractive, low-maintenance landscapes tailored to your property.",
      tags: ["Natural turf", "Artificial turf", "Garden beds", "Planting"], img: "assets/img/services/grass.jpg" },
    { no: "06", slug: "irrigation", name: "Irrigation", icon: "fa-solid fa-droplet",
      desc: "Professionally installed systems, from drip lines to sprinklers, designed for your garden's size and needs — saving you time and water.",
      tags: ["Drip systems", "Sprinklers", "Wi-Fi control"], img: "assets/img/services/irrigation.jpg" },
    { no: "07", slug: "commercial-garden-maintenance", name: "Commercial Maintenance", icon: "fa-solid fa-scissors",
      desc: "Qualified horticulturists keeping commercial properties sharp — pruning, planting, weeding and seasonal care, year-round.",
      tags: ["Pruning", "Planting", "Weeding", "Seasonal care"], img: "assets/img/services/maintenance.jpg" }
  ],

  /* --- completed projects (Our Work) ----------------------- */
  projects: [
    {
      slug: "grandeur-on-grange", name: "Grandeur on Grange", suburb: "Grange", date: "August 2025",
      blurb: "A full front and back transformation for a luxury property — Versawall raised beds, Travertine crazy paving and pool surrounds, a custom pergola, frameless glass pool fencing, basalt stepping stones and Hybrid TifTuf lawn.",
      tags: ["Paving", "Retaining walls", "Fencing", "Turf", "Irrigation"],
      img: "assets/img/projects/grange.jpg",
      scope: [
        "Long raised garden bed in Versawall® blocks with capping",
        "Crazy paving corner and pool surrounds in premium Travertine",
        "Custom timber pergola beside the pool",
        "Frameless glass pool fence",
        "Wet-laid basalt stepping stones",
        "Hybrid TifTuf lawn — drought tolerant, low maintenance",
        "Good Neighbour fencing plus vertical/horizontal slat fencing with automated gates",
        "Enriched garden beds with Wi-Fi-controlled automatic irrigation"
      ],
      narrative: "NextLevel Landscaping completed a full front and backyard transformation at this stunning luxury property in Grange. The project was designed to combine aesthetic appeal with functionality, complementing the home's architecture and lifestyle. At the heart of the backyard is a long raised garden bed built with Versawall® blocks and capping — structure and elegance, plus a secure elevated space for planting. A serene crazy paving corner in premium Travertine offers a spot to unwind by the pool, with the same stone used for the pool paving for its luxurious look and cool-to-touch surface. A custom timber pergola creates a shaded retreat, while a frameless glass pool fence keeps the open, resort-style feel. Basalt stepping stones were wet-laid alongside the beds, and Hybrid TifTuf lawn was installed for a lush, year-round finish. Good Neighbour fencing wraps the property, and the front boundary is finished with modern slat fencing and automated gates. Finally, the beds were enriched with premium soil and planting, all on a Wi-Fi-controlled, fully automatic irrigation system.",
      gallery: ["assets/img/projects/grange.jpg","assets/img/gallery/grange-1.jpg","assets/img/gallery/grange-2.jpg","assets/img/gallery/grange-3.jpg","assets/img/gallery/grange-4.jpg","assets/img/services/paving.jpg"]
    },
    {
      slug: "a-klemzig-cornerstone", name: "A Klemzig Cornerstone", suburb: "Klemzig", date: "June 2026",
      blurb: "A blank new-build backyard taken to a polished entertaining space — Colorbond boundary fence, Eco Deck clad feature wall, rendered Besser-block garden bed and timeless travertine paving.",
      tags: ["Design", "Fencing", "Feature wall", "Paving"],
      img: "assets/img/projects/klemzig.jpg",
      scope: [
        "Full landscape plan for the backyard",
        "Colorbond boundary fence for privacy and a clean line",
        "Eco Deck clad feature wall in timber-look panels",
        "Rendered Besser-block garden bed",
        "Travertine paving across the main outdoor area",
        "Garden lighting, stormwater works and shed install (managed trades)"
      ],
      narrative: "NextLevel Landscaping completed a full backyard build at this brand-new Klemzig property, turning a blank construction site into a polished outdoor space ready for living and entertaining. It began with a carefully designed landscape plan so every element worked together. A sleek Colorbond boundary fence establishes privacy and frames the yard. To introduce warmth and character, a striking Eco Deck clad feature wall was installed — textured timber-look panels that create a standout focal point. The design is anchored by a rendered Besser-block garden bed, giving structure and a refined edge for future planting, its smooth profile tying into the home's exterior palette. Across the main area, travertine paving delivers a timeless natural-stone look with a resort-style feel underfoot. As part of the complete delivery, all garden lighting, stormwater works and shed installation were carried out by qualified trades coordinated and managed by NextLevel Landscaping.",
      gallery: ["assets/img/projects/klemzig.jpg","assets/img/gallery/klemzig-3.jpg","assets/img/gallery/klemzig-4.jpg","assets/img/services/fencing.jpg","assets/img/services/landscape-design.jpg"]
    },
    {
      slug: "serenity-in-somerton-park", name: "Serenity in Somerton Park", suburb: "Somerton Park", date: "August 2025",
      blurb: "A returning client's backyard retreat — a concrete spa base and custom composite deck, rendered Besser-block raised beds, a built-in L-shaped timber bench and a patch of artificial turf. Council approvals handled start to finish.",
      tags: ["Decking", "Retaining walls", "Turf", "Approvals"],
      img: "assets/img/projects/somerton.jpg",
      scope: [
        "Concrete base for the client's new spa",
        "Custom composite deck wrapping the spa",
        "Raised garden beds in rendered Besser-block walls",
        "Built-in L-shaped timber bench seat",
        "Patch of artificial turf for a low-maintenance green",
        "All council approvals handled on the client's behalf"
      ],
      narrative: "At NextLevel Landscaping we value long-term relationships, and this Somerton Park project is a perfect example. A few years ago we enhanced the property's front yard — a stylish front wall, automated gates, raised garden beds and full front paving for privacy and street appeal. Recently our team was invited back for the next stage: a relaxing, low-maintenance backyard retreat. We laid a concrete base for the client's new spa and built a custom composite deck around it, combining durability with a sleek, modern look. Raised garden beds in rendered Besser-block walls add structure and a clean, contemporary edge, complemented by a built-in L-shaped timber bench seat. A small patch of artificial turf brings a touch of green without ongoing maintenance. As with the earlier stage, NextLevel Landscaping handled all council approvals, ensuring a smooth, hassle-free process from start to finish.",
      gallery: ["assets/img/projects/somerton.jpg","assets/img/gallery/somerton-1.jpg","assets/img/gallery/somerton-2.jpg","assets/img/gallery/somerton-3.jpg","assets/img/gallery/somerton-4.jpg"]
    },
    {
      slug: "a-north-haven-highlight", name: "A North Haven Highlight", suburb: "North Haven", date: "August 2025",
      blurb: "A striking, low-maintenance front yard on a large corner block — a designed paving pattern, Versawall raised bed and steps with split caps, artificial grass and LinkEdge aluminium edging around established trees.",
      tags: ["Paving", "Retaining walls", "Artificial grass", "Edging"],
      img: "assets/img/projects/north-haven.jpg",
      scope: [
        "Thoughtfully designed paving pattern across the front yard",
        "Raised garden bed and integrated steps in Versawall® blocks with split caps",
        "High-quality artificial grass for year-round green",
        "LinkEdge aluminium edging around existing trees"
      ],
      narrative: "NextLevel Landscaping completed a striking front yard transformation at this new corner property in North Haven. With a large, open space extending to the verge, the goal was a visually appealing, low-maintenance landscape that maximised street presence and function. A carefully selected paving pattern forms the foundation of the front yard, adding elegance, texture and lasting value while guiding movement through the space. To add depth and structure, we built a raised garden bed and integrated steps using Versawall® blocks with matching split caps for a clean, contemporary finish. High-quality artificial grass was installed for a lush green look with minimal upkeep, and LinkEdge aluminium edging was set around the existing trees to neatly separate the grass from the tree surrounds. A prime example of smart design and quality materials turning an underused space into an eye-catching landscape.",
      gallery: ["assets/img/projects/north-haven.jpg","assets/img/gallery/northhaven-1.jpg","assets/img/gallery/northhaven-2.jpg","assets/img/gallery/northhaven-3.jpg","assets/img/gallery/northhaven-4.jpg"]
    }
  ],

  /* --- CURRENT WORK: live jobs + stage tracker -------------- */
  /* stageIndex is the field the office edits in WordPress    */
  stages: [
    "Consultation & site assessment",
    "Design & quote",
    "Approvals & scheduling",
    "Site prep & excavation",
    "Hardscaping",
    "Fencing & features",
    "Irrigation & services",
    "Soft landscaping & turf",
    "Detailing & clean-up",
    "Handover & aftercare"
  ],
  currentWork: [
    {
      slug: "prospect-courtyard", title: "Prospect Courtyard Rebuild", suburb: "Prospect",
      services: ["Paving", "Retaining walls", "Planting"],
      start: "August 2026", eta: "Late September 2026", stageIndex: 4,
      note: "This week: laying travertine to the courtyard and setting the first course of the rendered Besser-block bed.",
      img: "assets/img/current/prospect.jpg",
      updates: [
        { date: "5 Sep 2026", stage: 4, text: "Travertine paving started across the courtyard; screed and bedding down, first pallet laid." },
        { date: "29 Aug 2026", stage: 3, text: "Excavation and site prep complete. Base compacted and levels checked for the paving falls." },
        { date: "18 Aug 2026", stage: 2, text: "Materials scheduled — Travertine, Besser block and render booked in. Start date locked." },
        { date: "9 Aug 2026", stage: 1, text: "2D & 3D design signed off and quote approved by the client." },
        { date: "1 Aug 2026", stage: 0, text: "On-site consultation — measured up, discussed the courtyard layout and planting wishlist." }
      ],
      gallery: ["assets/img/current/prospect.jpg","assets/img/gallery/grange-2.jpg","assets/img/gallery/grange-3.jpg","assets/img/services/paving.jpg"]
    },
    {
      slug: "henley-beach-frontage", title: "Henley Beach Frontage", suburb: "Henley Beach",
      services: ["Design", "Fencing", "Artificial turf"],
      start: "August 2026", eta: "Mid October 2026", stageIndex: 2,
      note: "Council approval lodged for the front wall and automated gates; artificial turf and slat fencing ordered.",
      img: "assets/img/current/henley.jpg",
      updates: [
        { date: "4 Sep 2026", stage: 2, text: "Development approval lodged with council for the front wall and automated gates. Turf and slat fencing ordered." },
        { date: "26 Aug 2026", stage: 1, text: "3D concept approved — low front wall, planting band and a slat privacy screen to the street." },
        { date: "16 Aug 2026", stage: 0, text: "Consultation on site. Priorities: street presence, privacy and a hard-wearing low-maintenance frontage." }
      ],
      gallery: ["assets/img/current/henley.jpg","assets/img/gallery/northhaven-2.jpg","assets/img/services/fencing.jpg"]
    },
    {
      slug: "burnside-backyard", title: "Burnside Backyard Retreat", suburb: "Burnside",
      services: ["Retaining walls", "Irrigation", "Turf", "Lighting"],
      start: "July 2026", eta: "Early November 2026", stageIndex: 6,
      note: "Drip irrigation and garden lighting roughed in; TifTuf turf going down next week ahead of detailing.",
      img: "assets/img/current/burnside.jpg",
      updates: [
        { date: "6 Sep 2026", stage: 6, text: "Drip irrigation zones and garden lighting cabling roughed in and tested before backfill." },
        { date: "27 Aug 2026", stage: 5, text: "Rendered Besser-block feature wall complete; timber screen panels fixed." },
        { date: "12 Aug 2026", stage: 4, text: "Retaining walls built to the rear boundary; beds formed and back-filled." },
        { date: "28 Jul 2026", stage: 3, text: "Site cut and levels set across the sloping block." },
        { date: "15 Jul 2026", stage: 1, text: "Design and quote approved — terraced beds, turf lawn and evening lighting." }
      ],
      gallery: ["assets/img/current/burnside.jpg","assets/img/gallery/cw-a1.jpg","assets/img/gallery/somerton-3.jpg","assets/img/services/irrigation.jpg"]
    }
  ],

  /* --- full-bleed project image strip ----------------------- */
  /* landscape and portrait deliberately interleaved so the row
     gets varied widths at a common height                      */
  projectStrip: [
    { img: "assets/img/projects/grange.jpg", w: 1280, h: 853,       cap: "Grange" },
    { img: "assets/img/gallery/northhaven-3.jpg", w: 667, h: 1000,  cap: "North Haven" },
    { img: "assets/img/gallery/somerton-1.jpg", w: 1280, h: 853,    cap: "Somerton Park" },
    { img: "assets/img/gallery/cw-a2.jpg", w: 667, h: 1000,         cap: "Detail" },
    { img: "assets/img/gallery/klemzig-3.jpg", w: 1440, h: 1080,     cap: "Klemzig" },
    { img: "assets/img/gallery/northhaven-1.jpg", w: 675, h: 844,  cap: "North Haven" },
    { img: "assets/img/gallery/grange-2.jpg", w: 1280, h: 853,      cap: "Grange" },
    { img: "assets/img/gallery/cw-b1.jpg", w: 667, h: 1000,         cap: "Planting" },
    { img: "assets/img/gallery/somerton-3.jpg", w: 1280, h: 853,    cap: "Somerton Park" },
    { img: "assets/img/gallery/klemzig-4.jpg", w: 1440, h: 811,     cap: "Klemzig" },
    { img: "assets/img/gallery/northhaven-4.jpg", w: 667, h: 1000,  cap: "Edging" },
    { img: "assets/img/gallery/grange-4.jpg", w: 1280, h: 853,      cap: "Grange" },
    { img: "assets/img/gallery/cw-c1.jpg", w: 667, h: 1000,         cap: "Paving" },
    { img: "assets/img/gallery/somerton-4.jpg", w: 1280, h: 853,    cap: "Somerton Park" },
    { img: "assets/img/gallery/cw-a1.jpg", w: 1440, h: 960,         cap: "Retaining walls" },
    { img: "assets/img/gallery/grange-3.jpg", w: 1280, h: 853,      cap: "Grange" }
  ],

  /* --- per-service photo strips (service.html / services.html) ---
     Hand-picked from real client photos; captions say what the photo
     actually shows. [path under assets/img/, caption] — sizes are read
     from the files so there is no layout shift. --- */
  serviceStrip: {
    "landscape-design": [
      { img: "assets/img/services/landscape-design.jpg", w: 1440, h: 810, cap: "3D concept" },
      { img: "assets/img/gallery/grange-3.jpg", w: 1280, h: 853, cap: "Pool & pergola \u00b7 Grange" },
      { img: "assets/img/gallery/klemzig-4.jpg", w: 1440, h: 811, cap: "Outdoor living \u00b7 Klemzig" },
      { img: "assets/img/gallery/somerton-2.jpg", w: 1280, h: 853, cap: "Courtyard layout \u00b7 Somerton Park" },
      { img: "assets/img/services/maintenance.jpg", w: 1440, h: 810, cap: "Entertaining area" },
      { img: "assets/img/gallery/grange-4.jpg", w: 1280, h: 853, cap: "Feature paving \u00b7 Grange" },
      { img: "assets/img/gallery/somerton-3.jpg", w: 1280, h: 853, cap: "Raised planters \u00b7 Somerton Park" },
      { img: "assets/img/projects/klemzig.jpg", w: 1440, h: 1080, cap: "Travertine terrace \u00b7 Klemzig" }
    ],
    "paving": [
      { img: "assets/img/services/paving.jpg", w: 1280, h: 853, cap: "Entry paving" },
      { img: "assets/img/gallery/somerton-1.jpg", w: 1280, h: 853, cap: "Large-format pavers \u00b7 Somerton Park" },
      { img: "assets/img/services/grass.jpg", w: 1440, h: 1080, cap: "Paved patio" },
      { img: "assets/img/gallery/grange-1.jpg", w: 1280, h: 853, cap: "Exposed aggregate \u00b7 Grange" },
      { img: "assets/img/projects/klemzig.jpg", w: 1440, h: 1080, cap: "Travertine \u00b7 Klemzig" },
      { img: "assets/img/gallery/grange-4.jpg", w: 1280, h: 853, cap: "Crazy paving \u00b7 Grange" },
      { img: "assets/img/projects/grange.jpg", w: 1280, h: 853, cap: "Driveway \u00b7 Grange" },
      { img: "assets/img/gallery/somerton-4.jpg", w: 1280, h: 853, cap: "Patio paving \u00b7 Somerton Park" }
    ],
    "retaining-walls": [
      { img: "assets/img/services/retaining-walls.jpg", w: 1440, h: 960, cap: "Block retaining wall" },
      { img: "assets/img/gallery/grange-2.jpg", w: 1280, h: 853, cap: "Block wall & steps \u00b7 Grange" },
      { img: "assets/img/gallery/klemzig-3.jpg", w: 1440, h: 1080, cap: "Rendered wall \u00b7 Klemzig" },
      { img: "assets/img/gallery/somerton-3.jpg", w: 1280, h: 853, cap: "Raised planter walls \u00b7 Somerton Park" },
      { img: "assets/img/gallery/somerton-4.jpg", w: 1280, h: 853, cap: "Wall & bench seat \u00b7 Somerton Park" },
      { img: "assets/img/gallery/klemzig-4.jpg", w: 1440, h: 811, cap: "Rendered garden wall \u00b7 Klemzig" },
      { img: "assets/img/projects/klemzig.jpg", w: 1440, h: 1080, cap: "Feature wall \u00b7 Klemzig" }
    ],
    "fencing": [
      { img: "assets/img/services/fencing.jpg", w: 852, h: 1024, cap: "Laser-cut screen" },
      { img: "assets/img/projects/grange.jpg", w: 1280, h: 853, cap: "Automated gate \u00b7 Grange" },
      { img: "assets/img/gallery/cw-a1.jpg", w: 1440, h: 960, cap: "Tubular fencing" },
      { img: "assets/img/gallery/grange-2.jpg", w: 1280, h: 853, cap: "Colorbond fencing \u00b7 Grange" },
      { img: "assets/img/gallery/grange-4.jpg", w: 1280, h: 853, cap: "Boundary fencing \u00b7 Grange" },
      { img: "assets/img/gallery/klemzig-3.jpg", w: 1440, h: 1080, cap: "Boundary fencing \u00b7 Klemzig" },
      { img: "assets/img/gallery/grange-1.jpg", w: 1280, h: 853, cap: "Front fence \u00b7 Grange" }
    ],
    "natural-artificial-grass": [
      { img: "assets/img/services/grass.jpg", w: 1440, h: 1080, cap: "Natural turf" },
      { img: "assets/img/gallery/northhaven-2.jpg", w: 675, h: 844, cap: "Turf laying" },
      { img: "assets/img/gallery/somerton-2.jpg", w: 1280, h: 853, cap: "Artificial turf \u00b7 Somerton Park" },
      { img: "assets/img/gallery/grange-2.jpg", w: 1280, h: 853, cap: "Lawn & garden \u00b7 Grange" },
      { img: "assets/img/gallery/klemzig-3.jpg", w: 1440, h: 1080, cap: "Lawn \u00b7 Klemzig" },
      { img: "assets/img/services/paving.jpg", w: 1280, h: 853, cap: "Garden beds" },
      { img: "assets/img/gallery/somerton-3.jpg", w: 1280, h: 853, cap: "Planting \u00b7 Somerton Park" },
      { img: "assets/img/projects/north-haven.jpg", w: 1280, h: 853, cap: "Front lawn \u00b7 North Haven" }
    ],
    "irrigation": [
      { img: "assets/img/services/irrigation.jpg", w: 1440, h: 960, cap: "Pop-up sprinkler" },
      { img: "assets/img/services/grass.jpg", w: 1440, h: 1080, cap: "Lawn irrigation" },
      { img: "assets/img/gallery/grange-3.jpg", w: 1280, h: 853, cap: "Lawn & garden \u00b7 Grange" },
      { img: "assets/img/gallery/grange-2.jpg", w: 1280, h: 853, cap: "Watered lawn \u00b7 Grange" },
      { img: "assets/img/projects/north-haven.jpg", w: 1280, h: 853, cap: "Front lawn \u00b7 North Haven" },
      { img: "assets/img/gallery/klemzig-3.jpg", w: 1440, h: 1080, cap: "Lawn \u00b7 Klemzig" }
    ],
    "commercial-garden-maintenance": [
      { img: "assets/img/services/maintenance.jpg", w: 1440, h: 810, cap: "Commercial outdoor area" },
      { img: "assets/img/gallery/cw-a1.jpg", w: 1440, h: 960, cap: "Planter displays" },
      { img: "assets/img/gallery/cw-b1.jpg", w: 667, h: 1000, cap: "Feature planting" },
      { img: "assets/img/gallery/cw-b2.jpg", w: 667, h: 1000, cap: "Indoor plant styling" },
      { img: "assets/img/gallery/cw-c1.jpg", w: 667, h: 1000, cap: "Indoor plant styling" },
      { img: "assets/img/gallery/cw-c2.jpg", w: 667, h: 1000, cap: "Indoor plant styling" },
      { img: "assets/img/gallery/cw-a2.jpg", w: 667, h: 1000, cap: "Indoor plant styling" },
      { img: "assets/img/gallery/northhaven-4.jpg", w: 667, h: 1000, cap: "Feature planting" },
      { img: "assets/img/gallery/somerton-3.jpg", w: 1280, h: 853, cap: "Garden beds \u00b7 Somerton Park" }
    ]
  },

  /* --- process ------------------------------------------------
     Client asked 2026-09-23 for photos instead of icons on "How we
     work". These are all REAL NextLevel images, but they are
     finished-work shots standing in illustratively — none of them
     is a photo of the step itself (no consultation, crew or
     build-in-progress photography exists yet). `icon` is kept as a
     fallback. Swap `img`/`w`/`h` when the client supplies proper
     step photography — nothing else needs to change. */
  process: [
    { no: "1", icon: "fa-solid fa-comments",          name: "Consultation", desc: "We visit the site and talk through your vision, budget and needs.",
      img: "assets/img/projects/north-haven.jpg",      w: 1280, h: 853, alt: "A North Haven property NextLevel Landscaping was engaged to transform" },
    { no: "2", icon: "fa-solid fa-compass-drafting",  name: "Design",       desc: "A 2D &amp; 3D plan tailored to your space and how you want to use it.",
      img: "assets/img/services/landscape-design.jpg", w: 1440, h: 810, alt: "A 3D landscape design render of a deck, fire pit and planting" },
    { no: "3", icon: "fa-solid fa-trowel-bricks",     name: "Execution",    desc: "On-time, on-budget delivery with clear communication throughout.",
      img: "assets/img/services/paving.jpg",           w: 1280, h: 853, alt: "Completed driveway paving, edging and planting at an Adelaide home" },
    { no: "4", icon: "fa-solid fa-heart",             name: "Aftercare",    desc: "We stay in touch to make sure you're happy with the result.",
      img: "assets/img/projects/grange.jpg",           w: 1280, h: 853, alt: "An established, maintained garden at the Grange project" }
  ],

  /* --- Google reviews (verbatim) --------------------------- */
  reviews: [
    { name: "Mike Richards", text: "Just had 80m&sup2; of paving done by Preb, Anthony and the team. Fantastic professional job. Great communication and coordination." },
    { name: "Era", text: "They transformed our backyard and front garden with high-quality paving, artificial and real grass. The attention to detail and overall finish were excellent. Very professional and reliable." },
    { name: "Maria Knelias", text: "Fabulous range of pots and very reasonably priced. This place is a gem for all your landscaping needs. Great customer service — they went out of their way to help us." },
    { name: "Dinuwan Jayasuriya", text: "Great landscaping service. Professional, reliable, and easy to deal with. The work was done neatly and on time, and the results look great." },
    { name: "Isabella White", text: "Sincerely could not recommend more highly. Wonderful experience with this excellent team. Prompt, friendly, professional communication. Great advice and recommendations. Fair pricing and management of progress. Honest and reliable." },
    { name: "Jim Jam", text: "The whole project — travertine tiling for two gardens, new driveway paving and new plants — was well managed. We had complete trust in the various teams, and the value delivered on budget and on time. Highly recommended." },
    { name: "Bronte Nixon", text: "They worked with the challenging natural terrain and levels of our backyard to construct retaining walls, garden beds, paving, and install turf. We now have a fantastic entertaining space and couldn't be happier." }
  ],

  /* --- FAQ ---------------------------------------------------
     Drafted from verified facts in BUSINESS.md. Anything the
     client still has to confirm is marked `confirm: true` and
     renders with a visible draft flag — do NOT ship those as
     fact without sign-off. See vault: Open Questions. */
  faqs: [
    { q: "Do you handle council approvals?",
      a: "Yes. Where a project needs development approval we manage the process on your behalf — as we did for our Somerton Park clients, start to finish, so it stays hassle-free for you." },
    { q: "Will I see a design before any work starts?",
      a: "Yes. We start with an on-site consultation to talk through your requirements, then provide a 2D &amp; 3D design so you can see exactly what your outdoor space will look like before you commit to anything." },
    { q: "Are you licensed?",
      a: "Yes — NextLevel Landscaping holds builders licence <b>BLD320507</b> and is a member of Master Landscapers South Australia. We are also an authorised distributor of Lawn Solutions Australia." },
    { q: "Which areas do you service?",
      a: "We work across metropolitan Adelaide and the Adelaide Hills. Recent projects include Grange, North Haven, Somerton Park and Klemzig.", confirm: "Confirm the full service-area suburb list with the client." },
    { q: "Do you supply the plants and materials too?",
      a: "We do — that is what makes us a little different. Through NextLevel Outdoors we can source pots, plants, turf, mulch, soil, edging and pebbles, so your design, build and supplies all come from one team." },
    { q: "Do you take on commercial work?",
      a: "Yes. Alongside residential projects, our qualified horticulturists provide commercial garden maintenance — pruning, planting, weeding and seasonal care to keep a property looking its best year-round." },
    { q: "What does a project cost?",
      a: "Every site is different, so we price after seeing it. Following the on-site consultation and design you receive a detailed quote covering the full scope — no guesswork and no surprises later." },
    { q: "How long does a project take?",
      a: "It depends on scope, site access and approvals. We give you an indicative timeline with your quote and keep you updated as the build progresses — you can even follow live jobs on our Current Work page.", confirm: "Confirm typical project durations with the client." },
    { q: "Do you offer a workmanship guarantee?",
      a: "", confirm: "Client has not confirmed a warranty or workmanship guarantee period. Only 1 of 19 competitors states one — stating it would be a real differentiator. Answer intentionally left blank until confirmed." }
  ]
};
