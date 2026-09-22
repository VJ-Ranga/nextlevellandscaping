/* =============================================================
   Shared chrome (header, drawer, footer, WhatsApp) for demo2.
   Centred header only. Runs immediately; must load BEFORE main.js.
   ============================================================= */
(function () {
  "use strict";

  var nav = [
    ["index.html#services", "Services"],
    ["our-work.html", "Our Work"],
    ["current-work.html", "Current Work"],
    ["index.html#store", "Store"],
    ["index.html#contact", "Contact"]
  ];
  var navLinks = nav.map(function (n) { return '<a href="' + n[0] + '">' + n[1] + '</a>'; }).join("");

  /* centred header — two-row: utility bar + main nav with logo in the middle */
  var header =
    '<header class="hdr2">' +
      '<div class="hdr2__util">' +
        '<div class="container hdr2__util-row">' +
          '<nav class="hdr2__util-links">' +
            '<a href="index.html#method">Our Process</a>' +
            '<a href="index.html#proof">Reviews</a>' +
            '<a href="index.html#store">Store</a>' +
            '<a href="index.html#trust">Credentials</a>' +
          '</nav>' +
          '<div class="hdr2__util-right">' +
            '<a href="tel:+61404440222">0404 440 222</a>' +
            '<a href="https://www.instagram.com/nextlevellandscaping41/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="container hdr2__main">' +
        '<nav class="hdr2__nav hdr2__nav--l">' +
          '<a href="index.html#services">Services</a>' +
          '<a href="our-work.html">Our Work</a>' +
        '</nav>' +
        '<a class="hdr2__brand" href="index.html"><img src="assets/img/brand/logo.png" alt="NextLevel Landscaping"></a>' +
        '<nav class="hdr2__nav hdr2__nav--r">' +
          '<a href="current-work.html">Current Work</a>' +
          '<a href="index.html#contact">Contact</a>' +
        '</nav>' +
        '<button class="nav-toggle hdr2__toggle" aria-label="Open menu" aria-controls="drawer" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>' +
      '</div>' +
    '</header>';

  var drawer =
    '<div class="drawer" id="drawer" aria-hidden="true">' +
      '<div class="drawer__top">' +
        '<span class="brand"><img src="assets/img/brand/logo.png" alt="NextLevel Landscaping"></span>' +
        '<button class="drawer__close" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>' +
      '</div>' +
      '<nav>' + navLinks + '</nav>' +
      '<div class="drawer__foot">' +
        '<a href="tel:+61404440222">0404 440 222</a><br>' +
        'Shop 1/41 Woodlands Terrace, Edwardstown SA 5039' +
      '</div>' +
    '</div>';

  var footer =
    '<footer class="site-footer site-footer--scoop">' +
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-brand">' +
            '<span class="brand"><img src="assets/img/brand/logo.png" alt="NextLevel Landscaping"></span>' +
            '<p>A proudly South Australian owned and operated landscaping business. Design, construction and garden supplies.</p>' +
          '</div>' +
          '<div><h4>EXPLORE</h4><ul>' +
            '<li><a href="index.html#services">Services</a></li>' +
            '<li><a href="our-work.html">Our Work</a></li>' +
            '<li><a href="current-work.html">Current Work</a></li>' +
            '<li><a href="index.html#store">Store</a></li>' +
            '<li><a href="index.html#contact">Contact</a></li>' +
          '</ul></div>' +
          '<div><h4>STORE</h4><ul>' +
            '<li><a href="index.html#store">Indoor &amp; Outdoor Pots</a></li>' +
            '<li><a href="index.html#store">Plants &amp; Plant Care</a></li>' +
            '<li><a href="index.html#store">Lawns &amp; Lawn Care</a></li>' +
            '<li><a href="index.html#store">Garden Beds &amp; Edging</a></li>' +
          '</ul></div>' +
          '<div><h4>NEXTLEVEL LANDSCAPING</h4><ul>' +
            '<li>Shop 1/41 Woodlands Terrace, Edwardstown SA 5039</li>' +
            '<li><a href="tel:+61404440222">0404 440 222</a></li>' +
            '<li><a href="mailto:info@nextlevellandscaping.com.au">info@nextlevellandscaping.com.au</a></li>' +
            '<li>Adelaide Express Services Pty Ltd &bull; ABN 15 642 563 513</li>' +
            '<li>Builders Licence BLD320507 &bull; MLSA member</li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="footer-bar">' +
          '<span>&copy; <span id="year">2026</span> NextLevel Landscaping. Demo design by Cloudycode.</span>' +
          '<span><a href="privacy.html">Privacy &amp; Security</a></span>' +
        '</div>' +
      '</div>' +
    '</footer>' +
    '<a class="wa-float" href="https://wa.me/61404440222" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>';

  /* inject */
  document.body.insertAdjacentHTML("afterbegin", drawer);
  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
})();
