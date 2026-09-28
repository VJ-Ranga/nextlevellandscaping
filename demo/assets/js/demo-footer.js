/* =============================================================
   Demo footer options (round 5, group E). NOINDEX build only —
   remove this file (and demo-footer.css + their tags) for
   production, along with the rest of the demo/*.js chrome.

    E1-E4 are selectable inside footer. E2-E4 (round 5) all reuse the SHIPPED 4-column footer-grid
   (brand | EXPLORE | SUPPORT | NEXTLEVEL LANDSCAPING, same
   columns/links) with three changes: a much bigger brand-column
   logo, the two credential lines removed from the contact column,
   and a new full-width credentials row (styled differently per
    option) between the grid and the bottom bar.

   Replaces .site-footer's innerHTML, never the element itself, so
   main.js's #quote-float scroll listener (a live reference to
   .site-footer captured at load) keeps working against the new
   markup.
   ============================================================= */
(function () {
  "use strict";

  var KEY = "nll-demo-footer";
  var OPTS = ["e1", "e2", "e3", "e4", "e5"];
  function readStored() {
    var v = null;
    try { v = localStorage.getItem(KEY); } catch (e) {}
    return OPTS.indexOf(v) > -1 ? v : "e5";
  }
  function writeStored(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }

  var COMPANY = "Adelaide Express Services Pty Ltd";
  var ABN = "ABN 15 642 563 513";
  var LICENCE = "Builders Licence BLD320507";
  var MLSA = "MLSA member";
  var YEAR = new Date().getFullYear();

  /* ---- shared 4-column grid, same as shipped, minus the two
     credential lines in the contact column, plus a bigger logo ---- */
  function renderColumns() {
    return (
      '<div class="footer-grid ftr5">' +
        '<div class="footer-brand">' +
          '<span class="brand ftr5__logo"><img src="assets/img/brand/logo.png" alt="NextLevel Landscaping"></span>' +
          "<p>A proudly South Australian owned and operated landscaping business. Design, construction and garden supplies.</p>" +
        "</div>" +
        '<div><h4>EXPLORE</h4><ul>' +
          '<li><a href="services.html">Services</a></li>' +
          '<li><a href="our-work.html">Our Work</a></li>' +
          '<li><a href="current-work.html">Current Work</a></li>' +
          '<li><a href="process.html">Our Process</a></li>' +
          '<li><a href="about.html">About</a></li>' +
        "</ul></div>" +
        '<div><h4>SUPPORT</h4><ul>' +
          '<li><a href="reviews.html">Reviews</a></li>' +
          '<li><a href="faq.html">FAQ</a></li>' +
          '<li><a href="contact.html">Contact</a></li>' +
        "</ul></div>" +
        '<div><h4>NEXTLEVEL LANDSCAPING</h4><ul>' +
          "<li>1/41 Woodlands Terrace, Edwardstown SA 5039</li>" +
          '<li><a href="tel:+61404440222">0404 440 222</a></li>' +
          '<li><a href="mailto:info@nextlevellandscaping.com.au">info@nextlevellandscaping.com.au</a></li>' +
        "</ul></div>" +
      "</div>"
    );
  }

  function bottomBar() {
    return (
      '<div class="footer-bar">' +
        "<span>&copy; " + YEAR + ' NextLevel Landscaping. Demo design by Cloudycode.</span>' +
        '<span><a href="privacy.html">Privacy &amp; Security</a></span>' +
      "</div>"
    );
  }

  function footerControls() {
    return (
      '<div class="demo-footer-choices" role="group" aria-label="Footer options">' +
        '<span class="demo-footer-choices__label">Footer</span>' +
        '<button type="button" class="demo-footer-choice" data-footer-value="e1"><b>E1</b> Current</button>' +
        '<button type="button" class="demo-footer-choice" data-footer-value="e2"><b>E2</b> One line</button>' +
        '<button type="button" class="demo-footer-choice" data-footer-value="e3"><b>E3</b> Badges</button>' +
        '<button type="button" class="demo-footer-choice" data-footer-value="e4"><b>E4</b> Split row</button>' +
        '<button type="button" class="demo-footer-choice" data-footer-value="e5"><b>E5</b> Contour footer</button>' +
      '</div>'
    );
  }
  function credsE2() {
    return credsE5();
  }

  function credsE3() {
    return (
      '<div class="ftr5__badges">' +
        '<span class="ftr5__badge-group">' +
          '<span class="ftr-badge">' + COMPANY + "</span>" +
          '<span class="ftr-badge">' + ABN + "</span>" +
        "</span>" +
        '<span class="ftr5__badge-group">' +
          '<span class="ftr-badge">' + LICENCE + "</span>" +
          '<span class="ftr-badge"><img src="assets/img/brand/mlsa.png" alt="" width="20" height="20">' + MLSA + "</span>" +
        "</span>" +
      "</div>"
    );
  }

  function credsE4() {
    return (
      '<div class="ftr5__split">' +
        '<span class="ftr5__split-l">' + COMPANY + " &bull; " + ABN + "</span>" +
        '<span class="ftr5__split-r"><img src="assets/img/brand/mlsa.png" alt="" width="18" height="18">' + LICENCE + " &middot; " + MLSA + "</span>" +
      "</div>"
    );
  }

  function credsE5() {
    return (
      '<div class="ftr5__split">' +
        '<span>' + COMPANY + " &bull; " + ABN + "</span>" +
        '<span>' + LICENCE + " &bull; " + MLSA + "</span>" +
      "</div>"
    );
  }

  function renderVariant(credsFn) {
    return (
      '<div class="container">' +
        renderColumns() +
        credsFn() +
        bottomBar() +
      "</div>"
    );
  }

  var shipped = null; // E1's original markup, captured once, restored on demand

  function apply(variant) {
    var footer = document.querySelector(".site-footer");
    if (!footer) return;
    if (shipped === null) shipped = footer.innerHTML;
    if (variant === "e2") footer.innerHTML = renderVariant(credsE2);
    else if (variant === "e3") footer.innerHTML = renderVariant(credsE3);
    else if (variant === "e4") footer.innerHTML = renderVariant(credsE4);
    else if (variant === "e5") footer.innerHTML = renderVariant(credsE5);
    else footer.innerHTML = shipped; // e1 — shipped, unchanged
    footer.classList.toggle("is-e1", variant === "e1");
    footer.classList.toggle("is-e2", variant === "e2");
    footer.classList.toggle("is-e3", variant === "e3");
    footer.classList.toggle("is-e4", variant === "e4");
    footer.classList.toggle("is-e5", variant === "e5");
    footer.classList.toggle("contour", variant === "e5");
    var choices = document.querySelectorAll(".demo-footer-choice");
    for (var i = 0; i < choices.length; i++) {
      choices[i].setAttribute("aria-pressed", choices[i].dataset.footerValue === variant ? "true" : "false");
    }
    var y = footer.querySelector("#year");
    if (y) y.textContent = YEAR;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var footer = document.querySelector(".site-footer");
    if (footer) footer.insertAdjacentHTML("afterend", '<div class="demo-footer-dock" role="region" aria-label="Footer options">' + footerControls() + '</div>');
    apply(readStored());
    var dock = document.querySelector(".demo-footer-dock");
    if (dock) dock.addEventListener("click", function (e) {
      var choice = e.target.closest(".demo-footer-choice");
      if (!choice) return;
      writeStored(choice.dataset.footerValue);
      apply(choice.dataset.footerValue);
    });
  });

  window.__nllFooter = { apply: apply, read: readStored, write: writeStored, opts: OPTS };
})();
