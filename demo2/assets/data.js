/* =============================================================
   NextLevel Landscaping — demo2 content
   Single source of truth for all demo2 pages.
   Edit this file to update the site.
   ============================================================= */

window.NLL2 = {

  /* --- hero ------------------------------------------------- */
  hero: {
    eyebrow: "Adelaide \u2022 South Australian owned \u2022 Licensed builder BLD320507",
    headline: "Bring your garden to life",
    tagline: "Over a decade of design and construction across South Australia \u2014 paving, retaining walls, fencing, turf, irrigation and full landscape design, delivered by one experienced team.",
    ctaPrimary: { label: "Get a free quote", href: "#contact" },
    ctaSecondary: { label: "See our work", href: "our-work.html" }
  },

  /* --- trust / positioning ---------------------------------- */
  trust: {
    statement: "We\u2019re NextLevel Landscaping \u2014 a proudly South Australian owned and operated business delivering reliable, affordable landscaping to families and businesses across the state.",
    experience: "Over a decade of hands-on experience and countless projects delivered, building a reputation for quality, innovative and tailored outdoor spaces."
  },

  credentials: [
    { icon: "fa-solid fa-helmet-safety", text: "Licensed builder <b>BLD320507</b>" },
    { icon: "fa-solid fa-award",         text: "<b>Master Landscapers</b> South Australia" },
    { icon: "fa-solid fa-seedling",      text: "<b>Lawn Solutions Australia</b> authorised" }
  ],

  stats: [
    { value: 10,  suffix: "+", label: "Years transforming<br>Adelaide gardens" },
    { value: 8,   suffix: "",  label: "Services under<br>one roof" },
    { value: 4,   suffix: "",  label: "Signature full-property<br>transformations" },
    { value: 100, suffix: "%", label: "South Australian<br>owned &amp; operated" }
  ],

  /* --- 8 services ------------------------------------------- */
  services: [
    { no: "01", slug: "landscape-design", name: "Landscape Design", icon: "fa-solid fa-pen-ruler",
      desc: "An on-site consultation to talk through your requirements, then a 2D &amp; 3D design so you see exactly what your outdoor space will look like before we move ahead.",
      tags: ["On-site consult", "2D &amp; 3D concepts"], img: "assets/img/services/landscape-design.jpg" },
    { no: "02", slug: "paving", name: "Paving", icon: "fa-solid fa-border-all",
      desc: "Driveways, the perimeter of the house, pool areas, patios, garden paths and walkways \u2014 laid to last and to suit the architecture.",
      tags: ["Brick", "Square", "Driveway-grade", "Natural stone"], img: "assets/img/services/paving.jpg" },
    { no: "03", slug: "retaining-walls", name: "Retaining Walls", icon: "fa-solid fa-layer-group",
      desc: "Create garden beds, add a finishing edge, or section a sloping block \u2014 built to hold and to look considered.",
      tags: ["Timber sleepers", "Concrete sleepers", "Blocks", "Brick"], img: "assets/img/services/retaining-walls.jpg" },
    { no: "04", slug: "fencing", name: "Fencing", icon: "fa-solid fa-grip-lines-vertical",
      desc: "Colorbond solutions including Good Neighbour, tubular and slat fencing \u2014 durability, privacy and a modern line to any property.",
      tags: ["Good Neighbour", "Tubular", "Slat", "Automated gates"], img: "assets/img/services/fencing.jpg" },
    { no: "05", slug: "natural-artificial-grass", name: "Grass &amp; Soft Landscapes", icon: "fa-solid fa-leaf",
      desc: "Natural grass and artificial turf, custom garden beds, quality edging and expert planting \u2014 attractive, low-maintenance landscapes tailored to your property.",
      tags: ["Natural turf", "Artificial turf", "Garden beds", "Planting"], img: "assets/img/services/grass.jpg" },
    { no: "06", slug: "irrigation", name: "Irrigation", icon: "fa-solid fa-droplet",
      desc: "Professionally installed systems, from drip lines to sprinklers, designed for your garden\u2019s size and needs \u2014 saving you time and water.",
      tags: ["Drip systems", "Sprinklers", "Wi-Fi control"], img: "assets/img/services/irrigation.jpg" },
    { no: "07", slug: "walkways", name: "Walkways", icon: "fa-solid fa-shoe-prints",
      desc: "Stepping stones, timber and pebbles, carefully set out to bring a modern look to the garden with minimal maintenance.",
      tags: ["Stepping stones", "Timber", "Pebbles"], img: "assets/img/services/walkways.jpg" },
    { no: "08", slug: "commercial-garden-maintenance", name: "Commercial Maintenance", icon: "fa-solid fa-scissors",
      desc: "Qualified horticulturists keeping commercial properties sharp \u2014 pruning, planting, weeding and seasonal care, year-round.",
      tags: ["Pruning", "Planting", "Weeding", "Seasonal care"], img: "assets/img/services/maintenance.jpg" }
  ],

  /* --- featured project (before/after + detail) ------------- */
  feature: {
      category: "Residential",
      slug: "grandeur-on-grange",
    name: "Grandeur on Grange",
    suburb: "Grange",
    date: "August 2025",
    blurb: "A full front and back transformation for a luxury property \u2014 Versawall raised beds, Travertine crazy paving and pool surrounds, a custom pergola, frameless glass pool fencing, basalt stepping stones and Hybrid TifTuf lawn.",
    tags: ["Paving", "Retaining walls", "Fencing", "Turf", "Irrigation"],
    img: "assets/img/projects/grange.jpg",
    beforeImg: "assets/img/gallery/grange-1.jpg",
    afterImg: "assets/img/projects/grange.jpg",
    beforeLabel: "Before",
    afterLabel: "After",
    scope: [
      "Long raised garden bed in Versawall\u00ae blocks with capping",
      "Crazy paving corner and pool surrounds in premium Travertine",
      "Custom timber pergola beside the pool",
      "Frameless glass pool fence",
      "Wet-laid basalt stepping stones",
      "Hybrid TifTuf lawn \u2014 drought tolerant, low maintenance",
      "Good Neighbour fencing plus slat fencing with automated gates",
      "Enriched garden beds with Wi-Fi-controlled automatic irrigation"
    ]
  },

  /* --- completed projects (Our Work) ----------------------- */
  projects: [
    {
      category: "Residential",
      slug: "grandeur-on-grange", name: "Grandeur on Grange", suburb: "Grange", date: "August 2025",
      blurb: "A full front and back transformation for a luxury property \u2014 Versawall raised beds, Travertine crazy paving and pool surrounds, a custom pergola, frameless glass pool fencing, basalt stepping stones and Hybrid TifTuf lawn.",
      tags: ["Paving", "Retaining walls", "Fencing", "Turf", "Irrigation"],
      img: "assets/img/projects/grange.jpg",
      scope: [
        "Long raised garden bed in Versawall\u00ae blocks with capping",
        "Crazy paving corner and pool surrounds in premium Travertine",
        "Custom timber pergola beside the pool",
        "Frameless glass pool fence",
        "Wet-laid basalt stepping stones",
        "Hybrid TifTuf lawn \u2014 drought tolerant, low maintenance",
        "Good Neighbour fencing plus vertical/horizontal slat fencing with automated gates",
        "Enriched garden beds with Wi-Fi-controlled automatic irrigation"
      ],
      narrative: "NextLevel Landscaping completed a full front and backyard transformation at this stunning luxury property in Grange. The project was designed to combine aesthetic appeal with functionality, complementing the home\u2019s architecture and lifestyle. At the heart of the backyard is a long raised garden bed built with Versawall\u00ae blocks and capping \u2014 structure and elegance, plus a secure elevated space for planting. A serene crazy paving corner in premium Travertine offers a spot to unwind by the pool, with the same stone used for the pool paving for its luxurious look and cool-to-touch surface. A custom timber pergola creates a shaded retreat, while a frameless glass pool fence keeps the open, resort-style feel. Basalt stepping stones were wet-laid alongside the beds, and Hybrid TifTuf lawn was installed for a lush, year-round finish. Good Neighbour fencing wraps the property, and the front boundary is finished with modern slat fencing and automated gates. Finally, the beds were enriched with premium soil and planting, all on a Wi-Fi-controlled, fully automatic irrigation system.",
      gallery: ["assets/img/projects/grange.jpg","assets/img/gallery/grange-1.jpg","assets/img/gallery/grange-2.jpg","assets/img/gallery/grange-3.jpg","assets/img/gallery/grange-4.jpg","assets/img/services/paving.jpg"]
    },
    {
      category: "Residential",
      slug: "a-klemzig-cornerstone", name: "A Klemzig Cornerstone", suburb: "Klemzig", date: "June 2026",
      blurb: "A blank new-build backyard taken to a polished entertaining space \u2014 Colorbond boundary fence, Eco Deck clad feature wall, rendered Besser-block garden bed and timeless travertine paving.",
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
      narrative: "NextLevel Landscaping completed a full backyard build at this brand-new Klemzig property, turning a blank construction site into a polished outdoor space ready for living and entertaining. It began with a carefully designed landscape plan so every element worked together. A sleek Colorbond boundary fence establishes privacy and frames the yard. To introduce warmth and character, a striking Eco Deck clad feature wall was installed \u2014 textured timber-look panels that create a standout focal point. The design is anchored by a rendered Besser-block garden bed, giving structure and a refined edge for future planting. Across the main area, travertine paving delivers a timeless natural-stone look with a resort-style feel underfoot.",
      gallery: ["assets/img/projects/klemzig.jpg","assets/img/gallery/klemzig-3.jpg","assets/img/gallery/klemzig-4.jpg","assets/img/services/fencing.jpg","assets/img/services/landscape-design.jpg"]
    },
    {
      category: "Residential",
      slug: "serenity-in-somerton-park", name: "Serenity in Somerton Park", suburb: "Somerton Park", date: "August 2025",
      blurb: "A returning client\u2019s backyard retreat \u2014 a concrete spa base and custom composite deck, rendered Besser-block raised beds, a built-in L-shaped timber bench and a patch of artificial turf.",
      tags: ["Decking", "Retaining walls", "Turf", "Approvals"],
      img: "assets/img/projects/somerton.jpg",
      scope: [
        "Concrete base for the client\u2019s new spa",
        "Custom composite deck wrapping the spa",
        "Raised garden beds in rendered Besser-block walls",
        "Built-in L-shaped timber bench seat",
        "Patch of artificial turf for a low-maintenance green",
        "All council approvals handled on the client\u2019s behalf"
      ],
      narrative: "At NextLevel Landscaping we value long-term relationships, and this Somerton Park project is a perfect example. A few years ago we enhanced the property\u2019s front yard \u2014 a stylish front wall, automated gates, raised garden beds and full front paving for privacy and street appeal. Recently our team was invited back for the next stage: a relaxing, low-maintenance backyard retreat. We laid a concrete base for the client\u2019s new spa and built a custom composite deck around it, combining durability with a sleek, modern look.",
      gallery: ["assets/img/projects/somerton.jpg","assets/img/gallery/somerton-1.jpg","assets/img/gallery/somerton-2.jpg","assets/img/gallery/somerton-3.jpg","assets/img/gallery/somerton-4.jpg"]
    },
    {
      category: "Residential",
      slug: "a-north-haven-highlight", name: "A North Haven Highlight", suburb: "North Haven", date: "August 2025",
      blurb: "A striking, low-maintenance front yard on a large corner block \u2014 a designed paving pattern, Versawall raised bed and steps with split caps, artificial grass and LinkEdge aluminium edging.",
      tags: ["Paving", "Retaining walls", "Artificial grass", "Edging"],
      img: "assets/img/projects/north-haven.jpg",
      scope: [
        "Thoughtfully designed paving pattern across the front yard",
        "Raised garden bed and integrated steps in Versawall\u00ae blocks with split caps",
        "High-quality artificial grass for year-round green",
        "LinkEdge aluminium edging around existing trees"
      ],
      narrative: "NextLevel Landscaping completed a striking front yard transformation at this new corner property in North Haven. With a large, open space extending to the verge, the goal was a visually appealing, low-maintenance landscape that maximised street presence and function. A carefully selected paving pattern forms the foundation of the front yard, adding elegance, texture and lasting value.",
      gallery: ["assets/img/projects/north-haven.jpg","assets/img/gallery/northhaven-1.jpg","assets/img/gallery/northhaven-2.jpg","assets/img/gallery/northhaven-3.jpg","assets/img/gallery/northhaven-4.jpg"]
    }
  ],

  /* --- full-bleed project image strip ----------------------- */
  projectStrip: [
    { img: "assets/img/projects/grange.jpg",       cap: "Grange" },
    { img: "assets/img/gallery/northhaven-3.jpg",  cap: "North Haven" },
    { img: "assets/img/gallery/somerton-1.jpg",    cap: "Somerton Park" },
    { img: "assets/img/gallery/cw-a2.jpg",         cap: "Detail" },
    { img: "assets/img/gallery/klemzig-3.jpg",     cap: "Klemzig" },
    { img: "assets/img/gallery/northhaven-1.jpg",  cap: "North Haven" },
    { img: "assets/img/gallery/grange-2.jpg",      cap: "Grange" },
    { img: "assets/img/gallery/cw-b1.jpg",         cap: "Planting" },
    { img: "assets/img/gallery/somerton-3.jpg",    cap: "Somerton Park" },
    { img: "assets/img/gallery/klemzig-4.jpg",     cap: "Klemzig" },
    { img: "assets/img/gallery/northhaven-4.jpg",  cap: "Edging" },
    { img: "assets/img/gallery/grange-4.jpg",      cap: "Grange" },
    { img: "assets/img/gallery/cw-c1.jpg",         cap: "Paving" },
    { img: "assets/img/gallery/somerton-4.jpg",    cap: "Somerton Park" },
    { img: "assets/img/gallery/cw-a1.jpg",         cap: "Retaining walls" },
    { img: "assets/img/gallery/grange-3.jpg",      cap: "Grange" }
  ],

  /* --- CURRENT WORK: live jobs + stage tracker -------------- */
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
        { date: "18 Aug 2026", stage: 2, text: "Materials scheduled \u2014 Travertine, Besser block and render booked in. Start date locked." },
        { date: "9 Aug 2026", stage: 1, text: "2D & 3D design signed off and quote approved by the client." },
        { date: "1 Aug 2026", stage: 0, text: "On-site consultation \u2014 measured up, discussed the courtyard layout and planting wishlist." }
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
        { date: "26 Aug 2026", stage: 1, text: "3D concept approved \u2014 low front wall, planting band and a slat privacy screen to the street." },
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
        { date: "15 Jul 2026", stage: 1, text: "Design and quote approved \u2014 terraced beds, turf lawn and evening lighting." }
      ],
      gallery: ["assets/img/current/burnside.jpg","assets/img/gallery/cw-a1.jpg","assets/img/gallery/somerton-3.jpg","assets/img/services/irrigation.jpg"]
    }
  ],

  /* --- process / method ------------------------------------- */
  process: [
    { no: "1", icon: "fa-solid fa-comments",         name: "Consultation", desc: "We visit the site and talk through your vision, budget and needs." },
    { no: "2", icon: "fa-solid fa-compass-drafting",  name: "Design",       desc: "A 2D &amp; 3D plan tailored to your space and how you want to use it." },
    { no: "3", icon: "fa-solid fa-trowel-bricks",     name: "Execution",    desc: "On-time, on-budget delivery with clear communication throughout." },
    { no: "4", icon: "fa-solid fa-heart",             name: "Aftercare",    desc: "We stay in touch to make sure you\u2019re happy with the result." }
  ],

  /* --- Google reviews --------------------------------------- */
  reviews: [
    { name: "Isabella White", text: "Sincerely could not recommend more highly. Wonderful experience with this excellent team. Prompt, friendly, professional communication. Great advice and recommendations. Fair pricing and management of progress. Honest and reliable." },
    { name: "Jim Jam", text: "The whole project \u2014 travertine tiling for two gardens, new driveway paving and new plants \u2014 was well managed. We had complete trust in the various teams, and the value delivered on budget and on time. Highly recommended." },
    { name: "Bronte Nixon", text: "They worked with the challenging natural terrain and levels of our backyard to construct retaining walls, garden beds, paving, and install turf. We now have a fantastic entertaining space and couldn\u2019t be happier." },
    { name: "Mike Richards", text: "Just had 80m\u00b2 of paving done by Preb, Anthony and the team. Fantastic professional job. Great communication and coordination." },
    { name: "Era", text: "They transformed our backyard and front garden with high-quality paving, artificial and real grass. The attention to detail and overall finish were excellent. Very professional and reliable." },
    { name: "Maria Knelias", text: "Fabulous range of pots and very reasonably priced. This place is a gem for all your landscaping needs. Great customer service \u2014 they went out of their way to help us." },
    { name: "Dinuwan Jayasuriya", text: "Great landscaping service. Professional, reliable, and easy to deal with. The work was done neatly and on time, and the results look great." }
  ],

  /* --- NextLevel Outdoors store ----------------------------- */
  store: [
    { name: "Indoor &amp; Outdoor Pots", desc: "Drainage, self-watering and plant-friendly designs.", img: "assets/img/store/pots.jpg" },
    { name: "Plants &amp; Plant Care",     desc: "Indoor and outdoor plants, plus everything to keep them thriving.", img: "assets/img/store/plants.jpg" },
    { name: "Lawns &amp; Lawn Care",       desc: "Lawn Solutions Australia turf, fertiliser and topdressing.", img: "assets/img/store/lawns.jpg" },
    { name: "Garden Beds &amp; Edging",    desc: "LinkEdge edging, mulch, soil, potting mix and pebbles.", img: "assets/img/store/edging.jpg" }
  ]
};
