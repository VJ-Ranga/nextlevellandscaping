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
    ["store.html", "Store"],
    ["about.html", "About"],
    ["reviews.html", "Reviews"],
    ["faq.html", "FAQ"],
    ["contact.html", "Contact"]
  ];
  var navLinks = nav.map(function (n) { return '<a href="' + n[0] + '">' + n[1] + '</a>'; }).join("");

  var header =
    '<header class="hdr2">' +
      '<div class="hdr2__util">' +
        '<div class="container hdr2__util-row">' +
          '<nav class="hdr2__util-links">' +
            '<a href="about.html">About</a>' +
            '<a href="process.html">Our Process</a>' +
            '<a href="reviews.html">Reviews</a>' +
            '<a href="faq.html">FAQ</a>' +
            '<a href="store.html">Store</a>' +
          '</nav>' +
          '<div class="hdr2__util-right">' +
            '<a href="tel:+61404440222">0404 440 222</a>' +
            '<a href="https://www.instagram.com/nextlevellandscaping41/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="container hdr2__main">' +
        '<nav class="hdr2__nav hdr2__nav--l">' +
          '<a href="services.html">Services</a>' +
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
            '<li><a href="services.html">Services</a></li>' +
            '<li><a href="our-work.html">Our Work</a></li>' +
            '<li><a href="current-work.html">Current Work</a></li>' +
            '<li><a href="process.html">Our Process</a></li>' +
            '<li><a href="store.html">Store</a></li>' +
            '<li><a href="about.html">About</a></li>' +
            '<li><a href="reviews.html">Reviews</a></li>' +
            '<li><a href="faq.html">FAQ</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
          '</ul></div>' +
          '<div><h4>STORE</h4><ul>' +
            '<li><a href="product.html?slug=indoor-outdoor-pots">Indoor &amp; Outdoor Pots</a></li>' +
            '<li><a href="product.html?slug=plants-plant-care">Plants &amp; Plant Care</a></li>' +
            '<li><a href="product.html?slug=lawns-lawn-care">Lawns &amp; Lawn Care</a></li>' +
            '<li><a href="product.html?slug=garden-beds-edging">Garden Beds &amp; Edging</a></li>' +
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
    '<a class="quote-float btn-ghost btn-ghost--fill" id="quote-float" href="contact.html"><i class="fa-solid fa-comment-dollar" aria-hidden="true"></i> Get a Free Quote</a>';

  var h = document.getElementById("site-header-slot");
  if (h) h.outerHTML = header; else document.body.insertAdjacentHTML("afterbegin", header);

  var f = document.getElementById("site-footer-slot");
  if (f) f.outerHTML = footer; else document.body.insertAdjacentHTML("beforeend", footer);
})();
