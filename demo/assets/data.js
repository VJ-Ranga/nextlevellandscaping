/* =============================================================
   NextLevel Landscaping — demo content
   Edit this file to update the homepage. Maps 1:1 to the
   planned WordPress CPT fields (see REDESIGN-PLAN.md §4 & §6).
   ============================================================= */

const IMG = "https://nextlevellandscaping.com.au/wp-content/uploads/";

window.NLL = {

  /* --- top credibility strip --------------------------------- */
  stats: [
    { big: "10+",      label: "Years transforming Adelaide gardens" },
    { big: "4",        label: "Signature full-property transformations" },
    { big: "BLD320507", label: "Licensed builder" },
    { big: "MLSA",     label: "Master Landscapers SA member" },
    { big: "LSA",      label: "Lawn Solutions Australia distributor" }
  ],

  /* --- 8 services (verbatim copy from the live site) --------- */
  services: [
    {
      no: "01", slug: "landscape-design", name: "Landscape Design",
      desc: "An on-site consultation to talk through your requirements, then a 2D &amp; 3D design so you see exactly what your outdoor space will look like before we move ahead.",
      tags: ["On-site consult", "2D &amp; 3D concepts"],
      img: IMG + "2025/01/02102023_AUS_Urrbrae-landscape_14-Photo-Naveendra.jpg"
    },
    {
      no: "02", slug: "paving", name: "Paving",
      desc: "Driveways, the perimeter of the house, pool areas, patios, garden paths and walkways — laid to last and to suit the architecture.",
      tags: ["Brick", "Square", "Driveway-grade", "Natural stone"],
      img: IMG + "2025/01/Photo-16-10-2022-9-27-55-am-scaled.jpg"
    },
    {
      no: "03", slug: "retaining-walls", name: "Retaining Walls",
      desc: "Create garden beds, add a finishing edge, or section a sloping block — built to hold and to look considered.",
      tags: ["Timber sleepers", "Concrete sleepers", "Blocks", "Brick"],
      img: IMG + "2025/01/08082023_AUS_SG_Verdun-Landscape_20-Photo.jpg"
    },
    {
      no: "04", slug: "fencing", name: "Fencing",
      desc: "Colorbond solutions including Good Neighbour, tubular and slat fencing — durability, privacy and a modern line to any property.",
      tags: ["Good Neighbour", "Tubular", "Slat", "Automated gates"],
      img: IMG + "2025/01/Screening.jpg"
    },
    {
      no: "05", slug: "natural-artificial-grass", name: "Grass &amp; Soft Landscapes",
      desc: "Natural grass and artificial turf, custom garden beds, quality edging and expert planting — attractive, low-maintenance landscapes tailored to your property.",
      tags: ["Natural turf", "Artificial turf", "Garden beds", "Planting"],
      img: IMG + "2025/01/Natural-grass-4-scaled.jpg"
    },
    {
      no: "06", slug: "irrigation", name: "Irrigation",
      desc: "Professionally installed systems, from drip lines to sprinklers, designed for your garden's size and needs — saving you time and water.",
      tags: ["Drip systems", "Sprinklers", "Wi-Fi control"],
      img: IMG + "2025/01/Photo-29-4-2023-2-49-04-pm-scaled.jpg"
    },
    {
      no: "07", slug: "walkways", name: "Walkways",
      desc: "Stepping stones, timber and pebbles, carefully set out to bring a modern look to the garden with minimal maintenance.",
      tags: ["Stepping stones", "Timber", "Pebbles"],
      img: IMG + "2025/01/Stepping-stones-and-pebbles.jpeg"
    },
    {
      no: "08", slug: "commercial-garden-maintenance", name: "Commercial Maintenance",
      desc: "Qualified horticulturists keeping commercial properties sharp — pruning, planting, weeding and seasonal care, year-round.",
      tags: ["Pruning", "Planting", "Weeding", "Seasonal care"],
      img: IMG + "2025/01/06012023_US_SG_Cowandilla-Public-space_18-Photo-Gamage-Naveendra-1.jpg"
    }
  ],

  /* --- signature / completed projects ----------------------- */
  projects: [
    {
      slug: "grandeur-on-grange", name: "Grandeur on Grange", suburb: "Grange", date: "August 2025",
      blurb: "A full front and back transformation for a luxury property — Versawall raised beds, Travertine crazy paving and pool surrounds, a custom pergola, frameless glass pool fencing, basalt stepping stones and Hybrid TifTuf lawn.",
      tags: ["Paving", "Retaining walls", "Fencing", "Turf", "Irrigation"],
      img: IMG + "2025/01/aus4r1_3-Photo-scaled.jpg"
    },
    {
      slug: "a-klemzig-cornerstone", name: "A Klemzig Cornerstone", suburb: "Klemzig", date: "June 2026",
      blurb: "A blank new-build backyard taken to a polished entertaining space — Colorbond boundary fence, Eco Deck clad feature wall, rendered Besser-block garden bed and timeless travertine paving.",
      tags: ["Design", "Fencing", "Feature wall", "Paving"],
      img: IMG + "2025/01/rev2_7-Photo-scaled.jpg"
    },
    {
      slug: "serenity-in-somerton-park", name: "Serenity in Somerton Park", suburb: "Somerton Park", date: "August 2025",
      blurb: "A returning client's backyard retreat — a concrete spa base and custom composite deck, rendered Besser-block raised beds, a built-in L-shaped timber bench and a patch of artificial turf. Council approvals handled start to finish.",
      tags: ["Decking", "Retaining walls", "Turf", "Approvals"],
      img: IMG + "2025/01/Photo-14-11-2023-3-08-18-pm-scaled.jpg"
    },
    {
      slug: "a-north-haven-highlight", name: "A North Haven Highlight", suburb: "North Haven", date: "August 2025",
      blurb: "A striking, low-maintenance front yard on a large corner block — a designed paving pattern, Versawall raised bed and steps with split caps, artificial grass and LinkEdge aluminium edging around established trees.",
      tags: ["Paving", "Retaining walls", "Artificial grass", "Edging"],
      img: IMG + "2025/01/Photo-26-11-2023-3-23-04-pm-scaled.jpg"
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
      eta: "Late September 2026", stageIndex: 4,
      note: "This week: laying travertine to the courtyard and setting the first course of the rendered Besser-block bed.",
      img: IMG + "2025/01/Photo-13-1-2023-3-41-52-pm-scaled.jpg"
    },
    {
      slug: "henley-beach-frontage", title: "Henley Beach Frontage", suburb: "Henley Beach",
      services: ["Design", "Fencing", "Artificial turf"],
      eta: "Mid October 2026", stageIndex: 2,
      note: "Council approval lodged for the front wall and automated gates; artificial turf and slat fencing ordered.",
      img: IMG + "2025/01/Photo-9-11-2022-4-32-11-pm-scaled.jpg"
    },
    {
      slug: "burnside-backyard", title: "Burnside Backyard Retreat", suburb: "Burnside",
      services: ["Retaining walls", "Irrigation", "Turf", "Lighting"],
      eta: "Early November 2026", stageIndex: 6,
      note: "Drip irrigation and garden lighting roughed in; TifTuf turf going down next week ahead of detailing.",
      img: IMG + "2025/01/Photo-5-10-2023-11-34-39%20am-scaled.jpg"
    }
  ],

  /* --- NextLevel Outdoors store categories ------------------ */
  store: [
    { name: "Indoor &amp; Outdoor Pots", desc: "Drainage, self-watering and plant-friendly designs.", img: IMG + "2025/01/IMG_5015.jpeg" },
    { name: "Plants &amp; Plant Care",     desc: "Indoor and outdoor plants, plus everything to keep them thriving.", img: IMG + "2025/01/IMG_5588.jpeg" },
    { name: "Lawns &amp; Lawn Care",       desc: "Lawn Solutions Australia turf, fertiliser and topdressing.", img: IMG + "2025/01/IMG_5899.jpeg" },
    { name: "Garden Beds &amp; Edging",    desc: "LinkEdge edging, mulch, soil, potting mix and pebbles.", img: IMG + "2025/01/Photo-2-9-2022-4-47-57-pm-scaled.jpg" }
  ],

  /* --- process ------------------------------------------------ */
  process: [
    { no: "1", name: "Consultation", desc: "We visit the site and talk through your vision, budget and needs." },
    { no: "2", name: "Design",       desc: "A 2D &amp; 3D plan tailored to your space and how you want to use it." },
    { no: "3", name: "Execution",    desc: "On-time, on-budget delivery with clear communication throughout." },
    { no: "4", name: "Aftercare",    desc: "We stay in touch to make sure you're happy with the result." }
  ],

  /* --- Google reviews (verbatim) --------------------------- */
  reviews: [
    { name: "Isabella White", text: "Sincerely could not recommend more highly. Wonderful experience with this excellent team. Prompt, friendly, professional communication. Great advice and recommendations. Fair pricing and management of progress. Honest and reliable." },
    { name: "Jim Jam", text: "The whole project — travertine tiling for two gardens, new driveway paving and new plants — was well managed. We had complete trust in the various teams, and the value delivered on budget and on time. Highly recommended." },
    { name: "Bronte Nixon", text: "They worked with the challenging natural terrain and levels of our backyard to construct retaining walls, garden beds, paving, and install turf. We now have a fantastic entertaining space and couldn't be happier." },
    { name: "Mike Richards", text: "Just had 80m² of paving done by Preb, Anthony and the team. Fantastic professional job. Great communication and coordination." },
    { name: "Era", text: "They transformed our backyard and front garden with high-quality paving, artificial and real grass. The attention to detail and overall finish were excellent. Very professional and reliable." },
    { name: "Maria Knelias", text: "Fabulous range of pots and very reasonably priced. This place is a gem for all your landscaping needs. Great customer service — they went out of their way to help us." },
    { name: "Dinuwan Jayasuriya", text: "Great landscaping service. Professional, reliable, and easy to deal with. The work was done neatly and on time, and the results look great." }
  ]
};
