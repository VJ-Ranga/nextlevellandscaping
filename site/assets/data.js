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
    { line: "From 2D &amp; 3D design to finished garden", cta: "See our work", href: "portfolio.html" },
    { line: "Ten years transforming South Australian gardens", cta: "What we're building now", href: "current-work.html" }
  ],

  /* --- count-up numbers (no boxes) --------------------------- */
  stats: [
    { value: 10,  suffix: "+", label: "Years transforming<br>Adelaide gardens" },
    { value: 7,   suffix: "",  label: "Services under<br>one roof" },
    { value: 6,   suffix: "",  label: "Signature full-property<br>transformations" },
    { value: 100, suffix: "%", label: "South Australian<br>owned &amp; operated" }
  ],

  /* --- credential line under the numbers -------------------- */
  credentials: [
    { icon: "fa-solid fa-helmet-safety", text: "Licensed builder <b>BLD320507</b>" },
    /* logo = version for the dark homepage band. Show logos as supplied; never recolour with CSS. */
    { icon: "fa-solid fa-award",         logo: "assets/img/brand/certs/mlsa-white.png", w: 384, h: 218, alt: "Master Landscapers South Australia", text: "<b>Master Landscapers</b> South Australia" },
    { icon: "fa-solid fa-network-wired", logo: "assets/img/brand/certs/icn-registered.png", w: 200, h: 77, alt: "Registered with ICN Gateway", text: "Registered on <b>ICN Gateway</b>" },
    { icon: "fa-solid fa-seedling",      logo: "assets/img/brand/certs/lawn-solutions.svg", w: 71, h: 28, alt: "Lawn Solutions Australia", text: "<b>Lawn Solutions Australia</b> authorised" },
    { icon: "fa-solid fa-certificate",   logo: "assets/img/brand/certs/citb-sa.svg", w: 96, h: 28, alt: "CITB South Australia", text: "Registered with <b>CITB</b> South Australia" }
  ],

  /* --- 7 services (verbatim copy from the live site; Walkways removed per client feedback 2026-09-22) --------- */
  /* `guide` = the downloadable PDF offered on that service page (client Stage 02 V2).
     The files in assets/downloads/ are PLACEHOLDERS until the client supplies the real guides. */
  services: [
    { no: "01", slug: "landscape-design", name: "Landscape Design", icon: "fa-solid fa-compass-drafting", desc: "An on-site consultation to talk through your requirements, then a 2D &amp; 3D design so you see exactly what your outdoor space will look like before we move ahead.", tags: ["On-site consult", "2D &amp; 3D concepts"], img: "assets/img/services/landscape-design.jpg", subs: [
      { label: "On-site consult", text: "We visit your site to discuss your requirements before preparing the landscape design.", img: null, w: 1440, h: 810 }, { label: "2D &amp; 3D concepts", text: "A 2D and 3D design shows what your outdoor space will look like before work starts.", img: null, w: 1440, h: 810 }, { label: "In-house landscape architect", text: "Our in-house landscape architect produces 2D and 3D designs for your outdoor space.", img: null, w: 1440, h: 810 }
    ], guide: { label: "Download Our Landscape Design Options", file: "assets/downloads/landscape-design-options.pdf" } },
    { no: "02", slug: "paving", name: "Paving", icon: "fa-solid fa-road", desc: "Driveways, the perimeter of the house, pool areas, patios, garden paths and walkways — laid to last and to suit the architecture.", tags: ["Brick", "Concrete", "Natural Stone", "Driveway Grade", "Crazy Paving", "Pool Coping"], img: "assets/img/gallery/terraced-garden-paved-patio-around-the-raised-block-bed-34.webp", subs: [
      { label: "Brick", text: "Brick paving is one paving option for outdoor areas.", img: null, w: 1280, h: 853 }, { label: "Concrete", text: "Concrete path paving provides a defined surface for paths around your property.", img: "assets/img/gallery/stepping-stone-garden-exposed-aggregate-path-beside-the-alfresco-05.webp", w: 1600, h: 1066 }, { label: "Natural Stone", text: "Natural stone paving suits outdoor areas such as patios and pool surrounds.", img: "assets/img/gallery/grange-pool-travertine-detail-04.webp", w: 1600, h: 1067 }, { label: "Driveway Grade", text: "Driveway-grade paving suits driveways and other areas requiring a durable paved surface.", img: "assets/img/gallery/stepping-stone-garden-exposed-aggregate-driveway-and-front-garden-19.webp", w: 1600, h: 1066 }, { label: "Crazy Paving", text: "Crazy paving creates an irregular stone surface for garden or poolside areas.", img: "assets/img/gallery/stepping-stone-garden-crazy-paving-feature-corner-07.webp", w: 1600, h: 1066 }, { label: "Pool Coping", text: "Pool coping forms the paved edge around a pool or raised spa.", img: "assets/img/gallery/grange-pool-travertine-detail-04.webp", w: 1600, h: 1067 }
    ], guide: { label: "Download Our Paving Guide", file: "assets/downloads/paving-guide.pdf" } },
    { no: "03", slug: "retaining-walls", name: "Retaining Walls", icon: "fa-solid fa-trowel-bricks", desc: "Create garden beds, add a finishing edge, or section a sloping block — built to hold and to look considered.", tags: ["Timber sleepers", "Concrete sleepers", "Blocks", "Brick"], img: "assets/img/gallery/terraced-garden-concrete-sleeper-steps-between-planted-walls-26.webp", subs: [
      { label: "Timber Sleepers", text: "Timber sleeper walls can create garden beds, finish edges or section sloping blocks.", img: "assets/img/gallery/landing-page-mixed-tiered-retaining-planting-02.webp", w: 1049, h: 787 }, { label: "Concrete Sleepers", text: "Concrete sleeper walls can section sloping blocks and create defined garden beds.", img: "assets/img/gallery/terraced-garden-concrete-sleeper-steps-between-planted-walls-26.webp", w: 1600, h: 1067 }, { label: "Blocks", text: "Block walls can create raised garden beds and structured edges.", img: "assets/img/gallery/terraced-garden-raised-block-vegetable-bed-with-climbing-frame-56.webp", w: 1600, h: 1067 }, { label: "Brick", text: "Brick retaining walls can create garden beds or define landscape edges.", img: null, w: 1049, h: 787 }
    ], guide: { label: "Download Our Retaining Wall Guide", file: "assets/downloads/retaining-wall-guide.pdf" } },
    { no: "04", slug: "fencing", name: "Fencing", icon: "fa-solid fa-grip-lines-vertical", desc: "Colorbond solutions including Good Neighbour, tubular and slat fencing — durability, privacy and a modern line to any property.", tags: ["Good Neighbour", "Tubular", "Slat", "Automated gates"], img: "assets/img/services/landing-page-mixed-vertical-slat-fence-05.webp", subs: [
      { label: "Good Neighbour", text: "Good Neighbour fencing provides a boundary solution for privacy around a property.", img: "assets/img/gallery/terraced-garden-curved-block-garden-bed-against-dark-fencing-36.webp", w: 1600, h: 1067 }, { label: "Tubular", text: "Tubular fencing creates a defined boundary with a clean, open line.", img: "assets/img/gallery/landing-page-mixed-black-picket-boundary-01.webp", w: 1166, h: 875 }, { label: "Slat", text: "Slat fencing adds a modern line and privacy to a property.", img: "assets/img/gallery/stepping-stone-garden-white-slat-fence-with-kangaroo-paw-31.webp", w: 1600, h: 1066 }, { label: "Automated Gates", text: "Automated gates provide controlled access at a property boundary.", img: null, w: 874, h: 1166 }
    ], guide: { label: "Download Our Fencing Guide", file: "assets/downloads/fencing-guide.pdf" } },
    { no: "05", slug: "natural-artificial-grass", name: "Grass &amp; Soft Landscapes", icon: "fa-solid fa-seedling", desc: "Natural grass and artificial turf, custom garden beds, quality edging and expert planting — attractive, low-maintenance landscapes tailored to your property.", tags: ["Natural turf", "Artificial turf", "Garden beds", "Planting"], img: "assets/img/services/somerton-park-backyard-spa-turf-03.webp", subs: [
      { label: "Natural Turf", text: "Natural turf provides a green lawn as part of a tailored landscape.", img: "assets/img/services/grass.jpg", w: 1440, h: 1080 }, { label: "Artificial Turf", text: "Artificial turf provides a low-maintenance green surface around outdoor areas.", img: "assets/img/gallery/stepping-stone-garden-hexagon-stepping-stones-across-the-front-lawn-15.webp", w: 1408, h: 938 }, { label: "Garden Beds", text: "Garden beds add planted areas and structure to a landscape.", img: "assets/img/gallery/terraced-garden-planting-spilling-over-a-sleeper-wall-60.webp", w: 1600, h: 1067 }, { label: "Planting", text: "Planting adds vegetation to garden beds as part of a tailored landscape.", img: "assets/img/gallery/penfield-front-garden-planting-06.webp", w: 944, h: 753 }
    ], guide: { label: "Download Our Lawn and Lawn Care Guide", file: "assets/downloads/lawn-care-guide.pdf" } },
    { no: "06", slug: "irrigation", name: "Irrigation", icon: "fa-solid fa-faucet-drip", desc: "Professionally installed systems, from drip lines to sprinklers, designed for your garden's size and needs — saving you time and water.", tags: ["Drip systems", "Sprinklers", "Wi-Fi control"], img: "assets/img/services/irrigation.jpg", subs: [
      { label: "Drip systems", text: "Drip systems deliver irrigation through lines designed for your garden's size and needs.", img: null, w: 1440, h: 960 }, { label: "Sprinklers", text: "Sprinklers provide garden irrigation through a professionally installed system.", img: null, w: 1440, h: 960 }, { label: "Wi-Fi control", text: "Wi-Fi control provides a way to manage an irrigation system.", img: null, w: 1440, h: 960 }
    ], alt: "Pop-up sprinkler watering a lawn (illustrative photo)" },
    { no: "07", slug: "commercial-garden-maintenance", name: "Commercial Maintenance", icon: "fa-solid fa-trowel", desc: "Qualified horticulturists keeping commercial properties sharp — pruning, planting, weeding and seasonal care, year-round.", tags: ["Pruning", "Planting", "Weeding", "Seasonal care"], img: "assets/img/gallery/penfield-mulched-garden-overview-03.webp", subs: [
      { label: "Pruning", text: "Pruning forms part of ongoing commercial garden maintenance.", img: null, w: 944, h: 708 }, { label: "Planting", text: "Planting forms part of commercial garden maintenance.", img: "assets/img/gallery/penfield-mass-planting-layout-07.webp", w: 944, h: 787 }, { label: "Weeding", text: "Weeding forms part of ongoing commercial garden maintenance.", img: null, w: 944, h: 708 }, { label: "Seasonal care", text: "Seasonal care helps maintain commercial properties throughout the year.", img: null, w: 944, h: 708 }
    ] }
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
      img: "assets/img/projects/north-haven-patterned-paving-turf-01.webp",
      scope: [
        "Thoughtfully designed paving pattern across the front yard",
        "Raised garden bed and integrated steps in Versawall® blocks with split caps",
        "High-quality artificial grass for year-round green",
        "LinkEdge aluminium edging around existing trees"
      ],
      narrative: "NextLevel Landscaping completed a striking front yard transformation at this new corner property in North Haven. With a large, open space extending to the verge, the goal was a visually appealing, low-maintenance landscape that maximised street presence and function. A carefully selected paving pattern forms the foundation of the front yard, adding elegance, texture and lasting value while guiding movement through the space. To add depth and structure, we built a raised garden bed and integrated steps using Versawall® blocks with matching split caps for a clean, contemporary finish. High-quality artificial grass was installed for a lush green look with minimal upkeep, and LinkEdge aluminium edging was set around the existing trees to neatly separate the grass from the tree surrounds. A prime example of smart design and quality materials turning an underused space into an eye-catching landscape.",
      gallery: ["assets/img/projects/north-haven-patterned-paving-turf-01.webp","assets/img/gallery/north-haven-pebble-garden-bed-02.webp","assets/img/gallery/north-haven-raised-bed-steps-03.webp","assets/img/gallery/north-haven-planter-block-wall-04.webp","assets/img/gallery/north-haven-tree-edging-turf-07.webp"]
    },
    {
      slug: "the-terraced-garden", name: "The Terraced Garden", suburb: "Adelaide", date: "",
      /* Photo set supplied 2026-11-03. Name, suburb, date and scope are drafted from the photos — waiting on client. */
      draft: true,
      blurb: "A new-build block taken from a sloping back yard to two connected levels — concrete sleeper walls and stairs, curved block garden walls, a paved patio and a raised vegetable bed, with an exposed aggregate driveway out front.",
      tags: ["Retaining walls", "Paving", "Turf", "Garden beds", "Fencing"],
      img: "assets/img/gallery/terraced-garden-stepper-path-through-turf-towards-the-house-28.webp",
      scope: ["Concrete sleeper retaining walls with galvanised posts", "Concrete sleeper stair between planted beds", "Curved block garden wall with capping", "Raised block vegetable bed with climbing frame", "Paved patio around the raised bed", "Gravel and large stepper path through the lawn", "Exposed aggregate driveway with mulched garden edges", "Dark steel boundary fencing and new planting"],
      narrative: "This back yard steps down the block, so the design splits it into two usable levels joined by a central stair. Concrete sleeper walls hold the upper level and carry planted beds, while a gravel and stepper path runs on axis through the lawn to a paved patio and raised vegetable bed. A curved block wall softens the far boundary, and an exposed aggregate driveway ties the front of the home to the same finish.",
      gallery: ["assets/img/gallery/terraced-garden-stepper-path-through-turf-towards-the-house-28.webp", "assets/img/gallery/terraced-garden-long-view-down-the-lawn-to-the-raised-bed-31.webp", "assets/img/gallery/terraced-garden-concrete-sleeper-steps-between-planted-walls-26.webp", "assets/img/gallery/terraced-garden-paved-patio-around-the-raised-block-bed-34.webp", "assets/img/gallery/terraced-garden-exposed-aggregate-driveway-and-stepper-path-at-t-19.webp", "assets/img/gallery/terraced-garden-raised-block-vegetable-bed-with-climbing-frame-56.webp", "assets/img/gallery/terraced-garden-concrete-sleeper-step-and-galvanised-post-detail-63.webp", "assets/img/gallery/terraced-garden-drone-view-of-turf-stepper-path-and-raised-bed-01.webp", "assets/img/gallery/terraced-garden-overhead-view-of-stepper-path-through-turf-02.webp", "assets/img/gallery/terraced-garden-overhead-view-of-paved-patio-and-raised-bed-03.webp", "assets/img/gallery/terraced-garden-overhead-view-of-path-towards-terraced-beds-04.webp", "assets/img/gallery/terraced-garden-drone-view-of-rear-garden-towards-the-house-05.webp", "assets/img/gallery/terraced-garden-aerial-view-of-paved-patio-and-gravel-path-06.webp", "assets/img/gallery/terraced-garden-aerial-view-across-raised-bed-and-patio-10.webp", "assets/img/gallery/terraced-garden-aerial-side-view-of-lawn-patio-and-raised-bed-11.webp", "assets/img/gallery/terraced-garden-aerial-view-of-raised-bed-beyond-the-path-12.webp", "assets/img/gallery/terraced-garden-terraced-garden-from-the-top-of-the-steps-13.webp", "assets/img/gallery/terraced-garden-wide-view-from-the-steps-over-the-lower-garden-14.webp", "assets/img/gallery/terraced-garden-steps-leading-down-to-the-stepper-path-15.webp", "assets/img/gallery/terraced-garden-elevated-view-of-patio-and-curved-block-wall-17.webp", "assets/img/gallery/terraced-garden-exposed-aggregate-driveway-and-garden-edging-18.webp", "assets/img/gallery/terraced-garden-front-driveway-with-mulched-garden-edges-22.webp", "assets/img/gallery/terraced-garden-sleeper-retaining-wall-and-steps-from-the-lawn-23.webp", "assets/img/gallery/terraced-garden-angled-view-of-sleeper-walls-and-planting-25.webp", "assets/img/gallery/terraced-garden-from-the-steps-looking-back-to-the-house-27.webp", "assets/img/gallery/terraced-garden-gravel-and-stepper-path-across-the-lawn-29.webp", "assets/img/gallery/terraced-garden-curved-block-wall-with-established-planting-30.webp", "assets/img/gallery/terraced-garden-lawn-with-raised-bed-and-block-edging-32.webp", "assets/img/gallery/terraced-garden-raised-block-bed-with-climbing-frame-beside-the-33.webp", "assets/img/gallery/terraced-garden-curved-block-wall-meeting-the-paved-patio-35.webp", "assets/img/gallery/terraced-garden-curved-block-garden-bed-against-dark-fencing-36.webp", "assets/img/gallery/terraced-garden-sleeper-walls-above-the-lower-lawn-39.webp", "assets/img/gallery/terraced-garden-lower-lawn-framed-by-sleeper-retaining-walls-43.webp", "assets/img/gallery/terraced-garden-sleeper-wall-and-steps-in-portrait-view-44.webp", "assets/img/gallery/terraced-garden-stepper-path-centred-on-the-raised-bed-46.webp", "assets/img/gallery/terraced-garden-gravel-path-and-lawn-beside-planted-border-47.webp", "assets/img/gallery/terraced-garden-raised-bed-and-patio-with-planted-border-48.webp", "assets/img/gallery/terraced-garden-curved-block-wall-with-vegetable-planting-49.webp", "assets/img/gallery/terraced-garden-raised-vegetable-bed-with-climbing-frame-50.webp", "assets/img/gallery/terraced-garden-curved-lawn-edge-along-the-block-wall-51.webp", "assets/img/gallery/terraced-garden-capped-block-wall-corner-and-garden-bed-52.webp", "assets/img/gallery/terraced-garden-curved-block-wall-with-planted-shrubs-54.webp", "assets/img/gallery/terraced-garden-lawn-and-planted-border-towards-the-house-55.webp", "assets/img/gallery/terraced-garden-block-raised-bed-beside-the-paved-patio-57.webp", "assets/img/gallery/terraced-garden-gravel-and-stepper-path-detail-58.webp", "assets/img/gallery/terraced-garden-gravel-and-stepper-path-to-the-raised-bed-59.webp", "assets/img/gallery/terraced-garden-planting-spilling-over-a-sleeper-wall-60.webp", "assets/img/gallery/terraced-garden-concrete-sleeper-stair-and-planted-walls-61.webp", "assets/img/gallery/terraced-garden-sleeper-steps-in-portrait-view-62.webp", "assets/img/gallery/terraced-garden-sleeper-stair-centred-between-planted-walls-65.webp", "assets/img/gallery/terraced-garden-sleeper-walls-wrapping-the-lower-lawn-66.webp"],
      galleryAlt: ["Stepper path through turf towards the house", "Long view down the lawn to the raised bed", "Concrete sleeper steps between planted walls", "Paved patio around the raised block bed", "Exposed aggregate driveway and stepper path at the front", "Raised block vegetable bed with climbing frame", "Concrete sleeper step and galvanised post detail", "Drone view of turf, stepper path and raised bed", "Overhead view of stepper path through turf", "Overhead view of paved patio and raised bed", "Overhead view of path towards terraced beds", "Drone view of rear garden towards the house", "Aerial view of paved patio and gravel path", "Aerial view across raised bed and patio", "Aerial side view of lawn, patio and raised bed", "Aerial view of raised bed beyond the path", "Terraced garden from the top of the steps", "Wide view from the steps over the lower garden", "Steps leading down to the stepper path", "Elevated view of patio and curved block wall", "Exposed aggregate driveway and garden edging", "Front driveway with mulched garden edges", "Sleeper retaining wall and steps from the lawn", "Angled view of sleeper walls and planting", "From the steps looking back to the house", "Gravel and stepper path across the lawn", "Curved block wall with established planting", "Lawn with raised bed and block edging", "Raised block bed with climbing frame beside the patio", "Curved block wall meeting the paved patio", "Curved block garden bed against dark fencing", "Sleeper walls above the lower lawn", "Lower lawn framed by sleeper retaining walls", "Sleeper wall and steps in portrait view", "Stepper path centred on the raised bed", "Gravel path and lawn beside planted border", "Raised bed and patio with planted border", "Curved block wall with vegetable planting", "Raised vegetable bed with climbing frame", "Curved lawn edge along the block wall", "Capped block wall corner and garden bed", "Curved block wall with planted shrubs", "Lawn and planted border towards the house", "Block raised bed beside the paved patio", "Gravel and stepper path detail", "Gravel and stepper path to the raised bed", "Planting spilling over a sleeper wall", "Concrete sleeper stair and planted walls", "Sleeper steps in portrait view", "Sleeper stair centred between planted walls", "Sleeper walls wrapping the lower lawn"]
    },
    {
      slug: "the-stepping-stone-garden", name: "The Stepping Stone Garden", suburb: "Adelaide", date: "",
      /* Photo set supplied 2026-11-03. Name, suburb, date and scope are drafted from the photos — waiting on client. */
      draft: true,
      blurb: "Front and back of a new home brought together — hexagon stepping stones, a white slat front fence, a crazy paving feature corner and exposed aggregate paths and driveway.",
      tags: ["Paving", "Fencing", "Turf", "Garden beds"],
      img: "assets/img/gallery/stepping-stone-garden-backyard-turf-and-aggregate-path-around-the-alfr-01.webp",
      scope: ["Exposed aggregate driveway, paths and alfresco surround", "Crazy paving feature corner", "Hexagon stepping stones across the front lawn", "White slat front fence and gate on a rendered plinth", "Lawn to the front, side and rear", "Mulched garden beds and flowering hedge planting"],
      narrative: "This home needed its outdoor areas finished as one piece. At the back, lawn wraps an exposed aggregate path around the alfresco and leads to a crazy paving feature corner. At the front, hexagon stepping stones cross the lawn past a flowering hedge, framed by a white slat fence and gate on a rendered plinth with kangaroo paw planted along the street edge.",
      gallery: ["assets/img/gallery/stepping-stone-garden-backyard-turf-and-aggregate-path-around-the-alfr-01.webp", "assets/img/gallery/stepping-stone-garden-crazy-paving-feature-corner-07.webp", "assets/img/gallery/stepping-stone-garden-hexagon-stepping-stones-and-flowering-hedge-14.webp", "assets/img/gallery/stepping-stone-garden-exposed-aggregate-driveway-and-front-garden-19.webp", "assets/img/gallery/stepping-stone-garden-white-slat-fence-with-kangaroo-paw-31.webp", "assets/img/gallery/stepping-stone-garden-hexagon-stepping-stones-across-the-front-lawn-15.webp", "assets/img/gallery/stepping-stone-garden-alfresco-slab-with-exposed-aggregate-edging-02.webp", "assets/img/gallery/stepping-stone-garden-side-lawn-along-the-alfresco-and-fencing-03.webp", "assets/img/gallery/stepping-stone-garden-alfresco-and-turf-beside-charcoal-fencing-04.webp", "assets/img/gallery/stepping-stone-garden-exposed-aggregate-path-beside-the-alfresco-05.webp", "assets/img/gallery/stepping-stone-garden-side-lawn-beside-planted-border-08.webp", "assets/img/gallery/stepping-stone-garden-side-passage-turf-with-aggregate-path-10.webp", "assets/img/gallery/stepping-stone-garden-planted-border-along-charcoal-fencing-11.webp", "assets/img/gallery/stepping-stone-garden-front-lawn-with-stepping-stones-beside-the-drive-12.webp", "assets/img/gallery/stepping-stone-garden-front-garden-beside-the-entry-path-13.webp", "assets/img/gallery/stepping-stone-garden-stepping-stones-and-planting-by-the-entry-17.webp", "assets/img/gallery/stepping-stone-garden-front-garden-behind-the-white-fence-18.webp", "assets/img/gallery/stepping-stone-garden-white-fence-along-the-aggregate-driveway-21.webp", "assets/img/gallery/stepping-stone-garden-white-fence-and-gate-from-the-street-23.webp", "assets/img/gallery/stepping-stone-garden-driveway-and-white-fence-from-the-front-25.webp", "assets/img/gallery/stepping-stone-garden-white-fence-and-gate-beside-the-driveway-26.webp", "assets/img/gallery/stepping-stone-garden-kangaroo-paw-planted-along-the-fence-line-28.webp", "assets/img/gallery/stepping-stone-garden-aggregate-driveway-with-side-fencing-32.webp", "assets/img/gallery/stepping-stone-garden-front-elevation-behind-the-white-fence-33.webp", "assets/img/gallery/stepping-stone-garden-front-garden-behind-the-white-slat-fence-35.webp"],
      galleryAlt: ["Backyard turf and aggregate path around the alfresco", "Crazy paving feature corner", "Hexagon stepping stones and flowering hedge", "Exposed aggregate driveway and front garden", "White slat fence with kangaroo paw", "Hexagon stepping stones across the front lawn", "Alfresco slab with exposed aggregate edging", "Side lawn along the alfresco and fencing", "Alfresco and turf beside charcoal fencing", "Exposed aggregate path beside the alfresco", "Side lawn beside planted border", "Side passage turf with aggregate path", "Planted border along charcoal fencing", "Front lawn with stepping stones beside the driveway", "Front garden beside the entry path", "Stepping stones and planting by the entry", "Front garden behind the white fence", "White fence along the aggregate driveway", "White fence and gate from the street", "Driveway and white fence from the front", "White fence and gate beside the driveway", "Kangaroo paw planted along the fence line", "Aggregate driveway with side fencing", "Front elevation behind the white fence", "Front garden behind the white slat fence"]
    },
    {
      slug: "animal-care-facility-grounds", name: "Animal Care Facility Grounds", suburb: "Adelaide", date: "In progress",
      dateLabel: "Status", inProgress: true,
      /* Photo set supplied 2026-11-03. Name, suburb, date and scope are drafted from the photos — waiting on client. */
      draft: true,
      blurb: "Grounds taking shape around a new animal care facility — fenced yards with mesh tops, turf, mulched beds, steel edged paths and prepared ground, photographed during construction.",
      tags: ["Fencing", "Turf", "Garden beds", "Commercial"],
      img: "assets/img/gallery/animal-care-grounds-fence-corner-with-red-mulch-and-steel-edging-37.webp",
      scope: ["Steel fenced yards with angled mesh tops", "Turf laid inside the yards", "Red mulch garden beds with new planting", "Steel edged paths along the fence lines", "Bulk earthworks and ground preparation", "Formwork set out ahead of concrete"],
      narrative: "These photos follow the work on site while it was still underway: earthworks levelled, steel edged paths formed, yards fenced and turfed, and beds mulched and planted around a new shelter block. They show a staged commercial job in progress rather than a finished handover.",
      gallery: ["assets/img/gallery/animal-care-grounds-fence-corner-with-red-mulch-and-steel-edging-37.webp", "assets/img/gallery/animal-care-grounds-finished-turf-yard-with-mesh-topped-fencing-25.webp", "assets/img/gallery/animal-care-grounds-red-mulch-bed-along-charcoal-steel-fencing-07.webp", "assets/img/gallery/animal-care-grounds-mulched-path-between-yards-and-shelter-runs-20.webp", "assets/img/gallery/animal-care-grounds-turfed-yard-with-mesh-topped-steel-fencing-01.webp", "assets/img/gallery/animal-care-grounds-yard-corner-with-fresh-turf-and-fencing-02.webp", "assets/img/gallery/animal-care-grounds-turf-being-established-inside-a-fenced-yard-03.webp", "assets/img/gallery/animal-care-grounds-levelled-ground-in-front-of-the-yard-fencing-06.webp", "assets/img/gallery/animal-care-grounds-concrete-path-along-the-shelter-block-08.webp", "assets/img/gallery/animal-care-grounds-site-view-along-the-mesh-enclosures-09.webp", "assets/img/gallery/animal-care-grounds-shelter-block-beside-the-mesh-enclosure-10.webp", "assets/img/gallery/animal-care-grounds-mesh-enclosures-across-the-open-site-11.webp", "assets/img/gallery/animal-care-grounds-finished-slab-and-shelter-block-12.webp", "assets/img/gallery/animal-care-grounds-garden-beds-between-shelter-and-boundary-fence-13.webp", "assets/img/gallery/animal-care-grounds-shelter-block-with-planting-beds-underway-15.webp", "assets/img/gallery/animal-care-grounds-shelter-bays-and-concrete-apron-16.webp", "assets/img/gallery/animal-care-grounds-long-view-of-the-shelter-block-and-beds-17.webp", "assets/img/gallery/animal-care-grounds-kennel-runs-being-fitted-to-the-shelter-18.webp", "assets/img/gallery/animal-care-grounds-fenced-yard-prepared-for-turf-23.webp", "assets/img/gallery/animal-care-grounds-new-turf-inside-a-mesh-topped-yard-24.webp", "assets/img/gallery/animal-care-grounds-yard-exterior-with-mulch-and-steel-fencing-26.webp", "assets/img/gallery/animal-care-grounds-skid-steer-finishing-the-ground-beside-the-yards-27.webp", "assets/img/gallery/animal-care-grounds-wide-view-of-the-yards-across-the-site-29.webp", "assets/img/gallery/animal-care-grounds-enclosures-and-earthworks-from-the-open-ground-30.webp", "assets/img/gallery/animal-care-grounds-compactor-preparing-paths-along-the-yards-31.webp", "assets/img/gallery/animal-care-grounds-steel-edged-path-being-formed-beside-the-yards-32.webp", "assets/img/gallery/animal-care-grounds-mulch-bed-and-steel-edged-path-along-the-fence-33.webp", "assets/img/gallery/animal-care-grounds-yard-with-soil-and-turf-in-progress-34.webp", "assets/img/gallery/animal-care-grounds-yard-interior-with-new-turf-35.webp", "assets/img/gallery/animal-care-grounds-skid-steer-and-path-works-beside-the-fencing-36.webp", "assets/img/gallery/animal-care-grounds-formwork-set-out-beside-the-fenced-yards-39.webp", "assets/img/gallery/animal-care-grounds-formwork-and-earthworks-before-the-slab-40.webp"],
      galleryAlt: ["Fence corner with red mulch and steel edging", "Finished turf yard with mesh-topped fencing", "Red mulch bed along charcoal steel fencing", "Mulched path between yards and shelter runs", "Turfed yard with mesh-topped steel fencing", "Yard corner with fresh turf and fencing", "Turf being established inside a fenced yard", "Levelled ground in front of the yard fencing", "Concrete path along the shelter block", "Site view along the mesh enclosures", "Shelter block beside the mesh enclosure", "Mesh enclosures across the open site", "Finished slab and shelter block", "Garden beds between shelter and boundary fence", "Shelter block with planting beds underway", "Shelter bays and concrete apron", "Long view of the shelter block and beds", "Kennel runs being fitted to the shelter", "Fenced yard prepared for turf", "New turf inside a mesh-topped yard", "Yard exterior with mulch and steel fencing", "Skid steer finishing the ground beside the yards", "Wide view of the yards across the site", "Enclosures and earthworks from the open ground", "Compactor preparing paths along the yards", "Steel edged path being formed beside the yards", "Mulch bed and steel edged path along the fence", "Yard with soil and turf in progress", "Yard interior with new turf", "Skid steer and path works beside the fencing", "Formwork set out beside the fenced yards", "Formwork and earthworks before the slab"]
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
    { img: "assets/img/gallery/terraced-garden-stepper-path-through-turf-towards-the-house-28.webp", w: 1600, h: 1067, cap: "Lawn & stepper path" },
    { img: "assets/img/gallery/stepping-stone-garden-backyard-turf-and-aggregate-path-around-the-alfr-01.webp", w: 1600, h: 1066, cap: "Alfresco & lawn" },
    { img: "assets/img/gallery/terraced-garden-concrete-sleeper-steps-between-planted-walls-26.webp", w: 1600, h: 1067, cap: "Sleeper stair" },
    { img: "assets/img/gallery/stepping-stone-garden-hexagon-stepping-stones-and-flowering-hedge-14.webp", w: 1600, h: 1066, cap: "Stepping stones" },
    { img: "assets/img/gallery/terraced-garden-paved-patio-around-the-raised-block-bed-34.webp", w: 1600, h: 1067, cap: "Paved patio" },
    { img: "assets/img/projects/grange.jpg", w: 1280, h: 853,       cap: "Grange" },
    { img: "assets/img/gallery/north-haven-planter-block-wall-04.webp", w: 1166, h: 1049, cap: "North Haven" },
    { img: "assets/img/gallery/somerton-1.jpg", w: 1280, h: 853,    cap: "Somerton Park" },
    { img: "assets/img/gallery/grange-pool-travertine-detail-04.webp", w: 1600, h: 1067, cap: "Grange" },
    { img: "assets/img/gallery/klemzig-3.jpg", w: 1440, h: 1080,     cap: "Klemzig" },
    { img: "assets/img/gallery/north-haven-pebble-garden-bed-02.webp", w: 1600, h: 1368, cap: "North Haven" },
    { img: "assets/img/gallery/grange-2.jpg", w: 1280, h: 853,      cap: "Grange" },
    { img: "assets/img/gallery/penfield-mulched-bed-detail-09.webp", w: 944, h: 708, cap: "Planting" },
    { img: "assets/img/gallery/somerton-3.jpg", w: 1280, h: 853,    cap: "Somerton Park" },
    { img: "assets/img/gallery/klemzig-4.jpg", w: 1440, h: 811,     cap: "Klemzig" },
    { img: "assets/img/gallery/north-haven-tree-edging-turf-07.webp", w: 822, h: 1296, cap: "Edging" },
    { img: "assets/img/gallery/grange-4.jpg", w: 1280, h: 853,      cap: "Grange" },
    { img: "assets/img/gallery/north-haven-diamond-paving-05.webp", w: 1440, h: 960, cap: "Paving" },
    { img: "assets/img/gallery/somerton-4.jpg", w: 1280, h: 853,    cap: "Somerton Park" },
    { img: "assets/img/gallery/landing-page-mixed-sleeper-walls-turf-08.webp", w: 1049, h: 787, cap: "Retaining walls" },
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
      { img: "assets/img/services/maintenance.jpg", w: 1440, h: 810, cap: "3D concept render" },
      { img: "assets/img/gallery/grange-4.jpg", w: 1280, h: 853, cap: "Feature paving \u00b7 Grange" },
      { img: "assets/img/gallery/somerton-3.jpg", w: 1280, h: 853, cap: "Raised planters \u00b7 Somerton Park" },
      { img: "assets/img/projects/klemzig.jpg", w: 1440, h: 1080, cap: "Travertine terrace \u00b7 Klemzig" }
    ],
    "paving": [
      { img: "assets/img/gallery/terraced-garden-paved-patio-around-the-raised-block-bed-34.webp", w: 1600, h: 1067, cap: "Paved patio" },
      { img: "assets/img/gallery/stepping-stone-garden-crazy-paving-feature-corner-07.webp", w: 1600, h: 1066, cap: "Crazy paving corner" },
      { img: "assets/img/gallery/stepping-stone-garden-exposed-aggregate-driveway-and-front-garden-19.webp", w: 1600, h: 1066, cap: "Exposed aggregate driveway" },
      { img: "assets/img/gallery/terraced-garden-gravel-and-stepper-path-to-the-raised-bed-59.webp", w: 1600, h: 1067, cap: "Gravel & stepper path" },
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
      { img: "assets/img/gallery/terraced-garden-concrete-sleeper-steps-between-planted-walls-26.webp", w: 1600, h: 1067, cap: "Concrete sleeper stair" },
      { img: "assets/img/gallery/terraced-garden-curved-block-wall-with-established-planting-30.webp", w: 1600, h: 1067, cap: "Curved block wall" },
      { img: "assets/img/gallery/terraced-garden-concrete-sleeper-step-and-galvanised-post-detail-63.webp", w: 1600, h: 1067, cap: "Sleeper & post detail" },
      { img: "assets/img/gallery/terraced-garden-block-raised-bed-beside-the-paved-patio-57.webp", w: 1600, h: 1067, cap: "Raised block bed" },
      { img: "assets/img/gallery/landing-page-mixed-sleeper-walls-turf-08.webp", w: 1049, h: 787, cap: "Tiered sleeper retaining walls" },
      { img: "assets/img/services/retaining-walls.jpg", w: 1440, h: 960, cap: "Block retaining wall" },
      { img: "assets/img/gallery/grange-2.jpg", w: 1280, h: 853, cap: "Block wall & steps \u00b7 Grange" },
      { img: "assets/img/gallery/klemzig-3.jpg", w: 1440, h: 1080, cap: "Rendered wall \u00b7 Klemzig" },
      { img: "assets/img/gallery/somerton-3.jpg", w: 1280, h: 853, cap: "Raised planter walls \u00b7 Somerton Park" },
      { img: "assets/img/gallery/somerton-4.jpg", w: 1280, h: 853, cap: "Wall & bench seat \u00b7 Somerton Park" },
      { img: "assets/img/gallery/klemzig-4.jpg", w: 1440, h: 811, cap: "Rendered garden wall \u00b7 Klemzig" },
      { img: "assets/img/projects/klemzig.jpg", w: 1440, h: 1080, cap: "Feature wall \u00b7 Klemzig" }
    ],
    "fencing": [
      { img: "assets/img/gallery/stepping-stone-garden-white-slat-fence-with-kangaroo-paw-31.webp", w: 1600, h: 1066, cap: "White slat fence" },
      { img: "assets/img/gallery/animal-care-grounds-turfed-yard-with-mesh-topped-steel-fencing-01.webp", w: 1600, h: 1066, cap: "Steel fence with mesh top" },
      { img: "assets/img/gallery/terraced-garden-curved-block-garden-bed-against-dark-fencing-36.webp", w: 1600, h: 1067, cap: "Dark steel boundary fence" },
      { img: "assets/img/gallery/stepping-stone-garden-white-fence-and-gate-from-the-street-23.webp", w: 1600, h: 1066, cap: "Front fence & gate" },
      { img: "assets/img/services/landing-page-mixed-vertical-slat-fence-05.webp", w: 874, h: 1166, cap: "Vertical slat fence" },
      { img: "assets/img/services/fencing.jpg", w: 852, h: 1024, cap: "Laser-cut screen" },
      { img: "assets/img/projects/grange.jpg", w: 1280, h: 853, cap: "Automated gate \u00b7 Grange" },
      { img: "assets/img/gallery/landing-page-mixed-black-picket-boundary-01.webp", w: 1166, h: 875, cap: "Tubular fencing" },
      { img: "assets/img/gallery/grange-2.jpg", w: 1280, h: 853, cap: "Colorbond fencing \u00b7 Grange" },
      { img: "assets/img/gallery/grange-4.jpg", w: 1280, h: 853, cap: "Boundary fencing \u00b7 Grange" },
      { img: "assets/img/gallery/klemzig-3.jpg", w: 1440, h: 1080, cap: "Boundary fencing \u00b7 Klemzig" },
      { img: "assets/img/gallery/grange-1.jpg", w: 1280, h: 853, cap: "Front fence \u00b7 Grange" }
    ],
    "natural-artificial-grass": [
      { img: "assets/img/gallery/terraced-garden-stepper-path-through-turf-towards-the-house-28.webp", w: 1600, h: 1067, cap: "Lawn & stepper path" },
      { img: "assets/img/gallery/stepping-stone-garden-hexagon-stepping-stones-across-the-front-lawn-15.webp", w: 1408, h: 938, cap: "Lawn & stepping stones" },
      { img: "assets/img/gallery/animal-care-grounds-finished-turf-yard-with-mesh-topped-fencing-25.webp", w: 1600, h: 1066, cap: "Turfed yard" },
      { img: "assets/img/gallery/terraced-garden-planting-spilling-over-a-sleeper-wall-60.webp", w: 1600, h: 1067, cap: "Planted sleeper wall" },
      { img: "assets/img/services/grass.jpg", w: 1440, h: 1080, cap: "Natural turf" },
      { img: "assets/img/gallery/landing-page-mixed-sleeper-walls-turf-08.webp", w: 1049, h: 787, cap: "New turf below sleeper walls" },
      { img: "assets/img/gallery/somerton-2.jpg", w: 1280, h: 853, cap: "Artificial turf \u00b7 Somerton Park" },
      { img: "assets/img/gallery/grange-2.jpg", w: 1280, h: 853, cap: "Lawn & garden \u00b7 Grange" },
      { img: "assets/img/gallery/klemzig-3.jpg", w: 1440, h: 1080, cap: "Lawn \u00b7 Klemzig" },
      { img: "assets/img/services/paving.jpg", w: 1280, h: 853, cap: "Garden beds" },
      { img: "assets/img/gallery/somerton-3.jpg", w: 1280, h: 853, cap: "Planting \u00b7 Somerton Park" },
      { img: "assets/img/projects/north-haven-patterned-paving-turf-01.webp", w: 1600, h: 661, cap: "Paving &amp; artificial turf \u00b7 North Haven" }
    ],
    "irrigation": [
      { img: "assets/img/services/irrigation.jpg", w: 1440, h: 960, cap: "Pop-up sprinkler (illustrative)" },
      { img: "assets/img/services/grass.jpg", w: 1440, h: 1080, cap: "Lawn irrigation" },
      { img: "assets/img/gallery/grange-3.jpg", w: 1280, h: 853, cap: "Lawn & garden \u00b7 Grange" },
      { img: "assets/img/gallery/grange-2.jpg", w: 1280, h: 853, cap: "Watered lawn \u00b7 Grange" },
      { img: "assets/img/gallery/klemzig-3.jpg", w: 1440, h: 1080, cap: "Lawn \u00b7 Klemzig" }
    ],
    "commercial-garden-maintenance": [
      { img: "assets/img/gallery/penfield-mulched-garden-overview-03.webp", w: 944, h: 708, cap: "New planting under established trees \u00b7 Penfield" },
      { img: "assets/img/gallery/penfield-succulent-planting-04.webp", w: 944, h: 708, cap: "Succulent planting \u00b7 Penfield" },
      { img: "assets/img/gallery/penfield-garden-feature-cart-05.webp", w: 944, h: 708, cap: "Restored garden beds \u00b7 Penfield" },
      { img: "assets/img/gallery/penfield-mass-planting-layout-07.webp", w: 944, h: 787, cap: "Mass planting \u00b7 Penfield" },
      { img: "assets/img/gallery/penfield-border-planting-08.webp", w: 708, h: 944, cap: "Border planting \u00b7 Penfield" },
      { img: "assets/img/gallery/penfield-front-garden-planting-06.webp", w: 944, h: 753, cap: "Garden planting \u00b7 Penfield" },
      { img: "assets/img/gallery/penfield-mulched-bed-detail-09.webp", w: 944, h: 708, cap: "Freshly mulched bed \u00b7 Penfield" },
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
      img: "assets/img/projects/north-haven-patterned-paving-turf-01.webp", w: 1600, h: 661, alt: "Patterned paving and artificial turf at a North Haven project" },
    { no: "2", icon: "fa-solid fa-compass-drafting",  name: "Design",       desc: "A 2D &amp; 3D plan tailored to your space and how you want to use it.",
      img: "assets/img/services/landscape-design.jpg", w: 1440, h: 810, alt: "A 3D landscape design render of a deck, fire pit and planting" },
    { no: "3", icon: "fa-solid fa-trowel-bricks",     name: "Execution",    desc: "On-time, on-budget delivery with clear communication throughout.",
      img: "assets/img/gallery/campbelltown-sleeper-retaining-wall-01.webp", w: 1049, h: 787, alt: "A concrete sleeper retaining wall being built in an excavated backyard" },
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
