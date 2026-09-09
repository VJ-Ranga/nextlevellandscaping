/* =============================================================
   Shared chrome (header, drawer, footer, WhatsApp) for every page.
   Runs immediately; must load BEFORE main.js.
   ============================================================= */
(function () {
  "use strict";

  var nav = [
    ["index.html#services", "Services"],
    ["our-work.html", "Our Work"],
    ["current-work.html", "Current Work"],
    ["store.html", "Store"],
    ["index.html#contact", "Contact"]
  ];
  var navLinks = nav.map(function (n) { return '<a href="' + n[0] + '">' + n[1] + '</a>'; }).join("");

  var header =
    '<header class="site-header">' +
      '<div class="container site-header__row">' +
        '<a class="brand" href="index.html"><img src="assets/img/brand/logo.png" alt="NextLevel Landscaping"></a>' +
        '<nav class="main-nav">' + navLinks + '</nav>' +
        '<div class="header-cta">' +
          '<a class="phone" href="tel:+61404440222"><i class="fa-solid fa-phone"></i> 0404 440 222</a>' +
          '<a class="btn-ghost btn-ghost--fill" href="index.html#contact">Get a free quote</a>' +
          '<button class="nav-toggle" aria-label="Open menu"><i class="fa-solid fa-bars"></i></button>' +
        '</div>' +
      '</div>' +
    '</header>' +
    '<div class="drawer" id="drawer">' +
      '<div class="drawer__top">' +
        '<span class="brand"><img src="assets/img/brand/logo.png" alt="NextLevel Landscaping"></span>' +
        '<button class="drawer__close" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>' +
      '</div>' +
      '<nav>' + navLinks + '</nav>' +
      '<div class="drawer__foot"><a href="tel:+61404440222">0404 440 222</a><br>Shop 1/41 Woodlands Terrace, Edwardstown SA 5039</div>' +
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
            '<li><a href="store.html">Store</a></li>' +
            '<li><a href="about.html">About</a></li>' +
            '<li><a href="index.html#contact">Contact</a></li>' +
          '</ul></div>' +
          '<div><h4>STORE</h4><ul>' +
            '<li><a href="store.html">Indoor &amp; Outdoor Pots</a></li>' +
            '<li><a href="store.html">Plants &amp; Plant Care</a></li>' +
            '<li><a href="store.html">Lawns &amp; Lawn Care</a></li>' +
            '<li><a href="store.html">Garden Beds &amp; Edging</a></li>' +
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

  var h = document.getElementById("site-header-slot");
  if (h) h.outerHTML = header; else document.body.insertAdjacentHTML("afterbegin", header);

  var f = document.getElementById("site-footer-slot");
  if (f) f.outerHTML = footer; else document.body.insertAdjacentHTML("beforeend", footer);
})();
