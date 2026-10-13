/* Homepage hero — final composition (A3 + B2 + D2).
   1) builds the one static CTA button under the headline track
   2) pins prev/next to the vertical centre of the headline's last
      line (desktop only; CSS flex-row arrows are used <= 640px).
   Runs after main.js has rendered the slides. */
(function () {
  "use strict";

  var heroCar = document.getElementById("hero-car");
  var track = document.getElementById("hero-car-track");
  if (!heroCar || !track) return;

  /* ---- static CTA: first slide's label + link ---- */
  function buildCta() {
    var col = track.parentElement;
    var first = ((window.NLL || {}).heroSlides || [])[0];
    if (!col || !first || !first.cta || col.querySelector(".hero-cta-static")) return;
    var wrap = document.createElement("div");
    wrap.className = "hero-cta-static";
    var a = document.createElement("a");
    a.className = "btn-ghost btn-ghost--fill";
    a.href = first.href || "#contact";
    a.textContent = first.cta;
    wrap.appendChild(a);
    col.appendChild(wrap);
  }

  /* ---- arrow placement ---- */
  function layoutArrows() {
    var prev = heroCar.querySelector(".hero-car__prev");
    var next = heroCar.querySelector(".hero-car__next");
    var col = heroCar.querySelector(".hero-car__col");
    if (!prev || !next || !col) return;

    function reset() {
      [prev, next].forEach(function (el) {
        el.style.position = el.style.top = el.style.left = el.style.right = "";
      });
      col.style.paddingRight = "";
    }

    var h1 = document.querySelector(".hero-slide.is-on h1");
    if (window.innerWidth <= 640 || !h1) { reset(); return; }

    var navH = prev.getBoundingClientRect().height || 46;
    var navW = Math.max(prev.getBoundingClientRect().width, next.getBoundingClientRect().width) || 46;
    col.style.paddingRight = (navW + 16 + 8) + "px"; // clearance for the near arrow
    void heroCar.offsetHeight; // settle any rewrap before measuring

    // measure at the slide's resting transform, not mid-crossfade
    var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
    slides.forEach(function (s) { s.style.transition = "none"; s.style.transform = "none"; });
    void heroCar.offsetHeight;
    var carRect = heroCar.getBoundingClientRect();
    var h1Rect = h1.getBoundingClientRect();
    var cs = getComputedStyle(h1);
    var lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.08;
    var top = h1Rect.bottom - lh / 2 - carRect.top - navH / 2;
    slides.forEach(function (s) { s.style.transition = ""; s.style.transform = ""; });
    void heroCar.offsetHeight;

    // far arrow shares the scroll cue's inset so they read as a pair
    var farInset = 96;
    var cue = document.querySelector(".hero-scroll");
    if (cue) {
      var l = parseFloat(getComputedStyle(cue).left);
      if (!isNaN(l)) farInset = l;
    }
    next.style.position = prev.style.position = "absolute";
    next.style.top = prev.style.top = top + "px";
    next.style.right = "24px"; next.style.left = "";   // beside the text
    prev.style.left = farInset + "px"; prev.style.right = "";
  }

  function init() {
    buildCta();
    layoutArrows();
    var mo = new MutationObserver(layoutArrows);
    Array.prototype.forEach.call(track.querySelectorAll(".hero-slide"), function (s) {
      mo.observe(s, { attributes: true, attributeFilter: ["class"] });
    });
    var t;
    window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(layoutArrows, 120); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
