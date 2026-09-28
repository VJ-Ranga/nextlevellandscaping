/* =============================================================
   Shared chrome (header, drawer, footer, WhatsApp) for every page.
   Runs immediately; must load BEFORE main.js.
   ============================================================= */
(function () {
  "use strict";

  var nav = [
    ["services.html", "Services"],
    ["our-work.html", "Our Work"],
    ["current-work.html", "Current Work"],
    ["process.html", "Our Process"],
    ["about.html", "About"],
    ["reviews.html", "Reviews"],
    ["faq.html", "FAQ"],
    ["contact.html", "Contact"]
  ];
  var navLinks = nav.map(function (n) { return '<a href="' + n[0] + '">' + n[1] + '</a>'; }).join("");

  /* Services header nav item opens a dropdown of the 7 individual service
     pages. Hardcoded here (not read from data.js) because this script runs
     and injects the header before data.js loads — keep in sync with the
     `services` array in assets/data.js if a service is added/renamed/removed. */
  var servicesDrop =
    '<div class="hdr2__drop">' +
      '<a href="services.html">Services <i class="fa-solid fa-chevron-down hdr2__drop-arrow" aria-hidden="true"></i></a>' +
      '<div class="hdr2__drop-panel">' +
        '<a class="hdr2__drop-all" href="services.html">All Services</a>' +
        '<a href="service.html?slug=landscape-design"><i class="fa-solid fa-pen-ruler" aria-hidden="true"></i>Landscape Design</a>' +
        '<a href="service.html?slug=paving"><i class="fa-solid fa-border-all" aria-hidden="true"></i>Paving</a>' +
        '<a href="service.html?slug=retaining-walls"><i class="fa-solid fa-layer-group" aria-hidden="true"></i>Retaining Walls</a>' +
        '<a href="service.html?slug=fencing"><i class="fa-solid fa-grip-lines-vertical" aria-hidden="true"></i>Fencing</a>' +
        '<a href="service.html?slug=natural-artificial-grass"><i class="fa-solid fa-leaf" aria-hidden="true"></i>Grass &amp; Soft Landscapes</a>' +
        '<a href="service.html?slug=irrigation"><i class="fa-solid fa-droplet" aria-hidden="true"></i>Irrigation</a>' +
        '<a href="service.html?slug=commercial-garden-maintenance"><i class="fa-solid fa-scissors" aria-hidden="true"></i>Commercial Maintenance</a>' +
      '</div>' +
    '</div>';

  var header =
    '<header class="hdr2">' +
      '<div class="hdr2__util">' +
        '<div class="container hdr2__util-row">' +
          '<nav class="hdr2__util-links">' +
            '<a href="about.html">About</a>' +
            '<a href="process.html">Our Process</a>' +
            '<a href="reviews.html">Reviews</a>' +
            '<a href="faq.html">FAQ</a>' +
          '</nav>' +
          '<div class="hdr2__util-right">' +
            '<a href="tel:+61404440222">0404 440 222</a>' +
            '<a href="https://www.instagram.com/nextlevellandscaping41/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="container hdr2__main">' +
        '<nav class="hdr2__nav hdr2__nav--l">' +
          servicesDrop +
          '<a href="our-work.html">Our Work</a>' +
        '</nav>' +
        '<a class="hdr2__brand" href="index.html"><img src="assets/img/brand/logo.png" alt="NextLevel Landscaping"></a>' +
        '<nav class="hdr2__nav hdr2__nav--r">' +
          '<a href="current-work.html">Current Work</a>' +
          '<a href="contact.html">Contact</a>' +
        '</nav>' +
        '<button class="nav-toggle hdr2__toggle" aria-label="Open menu"><i class="fa-solid fa-bars"></i></button>' +
      '</div>' +
    '</header>' +
    '<div class="drawer" id="drawer">' +
      '<div class="drawer__top">' +
        '<span class="brand"><img src="assets/img/brand/logo.png" alt="NextLevel Landscaping"></span>' +
        '<button class="drawer__close" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>' +
      '</div>' +
      '<nav>' + navLinks + '</nav>' +
      '<div class="drawer__foot"><a href="tel:+61404440222">0404 440 222</a><br>1/41 Woodlands Terrace, Edwardstown SA 5039</div>' +
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
            '<li><a href="services.html">Services</a></li>' +
            '<li><a href="our-work.html">Our Work</a></li>' +
            '<li><a href="current-work.html">Current Work</a></li>' +
            '<li><a href="process.html">Our Process</a></li>' +
            '<li><a href="about.html">About</a></li>' +
          '</ul></div>' +
          '<div><h4>SUPPORT</h4><ul>' +
            '<li><a href="reviews.html">Reviews</a></li>' +
            '<li><a href="faq.html">FAQ</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
          '</ul></div>' +
          '<div><h4>NEXTLEVEL LANDSCAPING</h4><ul>' +
            '<li>1/41 Woodlands Terrace, Edwardstown SA 5039</li>' +
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
    (/(^|\/)contact\.html$/.test(location.pathname) ? "" :
    '<a class="quote-float btn-ghost btn-ghost--fill" id="quote-float" href="contact.html"><i class="fa-solid fa-comment-dollar" aria-hidden="true"></i> Get a Free Quote</a>');

  var h = document.getElementById("site-header-slot");
  if (h) h.outerHTML = header; else document.body.insertAdjacentHTML("afterbegin", header);

  var f = document.getElementById("site-footer-slot");
  if (f) f.outerHTML = footer; else document.body.insertAdjacentHTML("beforeend", footer);
})();
