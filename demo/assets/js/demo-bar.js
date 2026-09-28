/* =============================================================
   Demo options bar — lets the client compare hero variants and
   comment back by code (e.g. "A1 + B2 + C1 + D2"). NOINDEX build
   only; remove this file, demo-bar.css/demo-variants.css and
   their <link>/<script> tags when this becomes production.

   Sets four attributes on <html>, persisted in localStorage:
     data-hero-pos    left | centre | right           (default centre)
     data-hero-motion slide | text-1 | text-2         (default slide)
     data-overlay     normal | dark                   (default normal)
     data-hero-arrows circle | bare | line | counter   (default circle)

   The attribute write below runs the instant this file is
   parsed — before <body> exists — so the page never paints the
   default look and then flips (no FOUC). Everything that needs
   the DOM (the bar UI, the hero restructuring for B2/B3, the
   slide counter) waits for DOMContentLoaded.
   ============================================================= */
(function () {
  "use strict";

  var POS_KEY = "nll-demo-hero-pos";
  var MOTION_KEY = "nll-demo-hero-motion";
  var OVERLAY_KEY = "nll-demo-overlay";
  var ARROWS_KEY = "nll-demo-hero-arrows";

  var POS_OPTS = ["left", "centre", "right"];
  var MOTION_OPTS = ["slide", "text-1", "text-2"];
  var OVERLAY_OPTS = ["normal", "dark"];
  var ARROWS_OPTS = ["circle", "bare", "line", "counter"];

  function readStored(key, allowed, def) {
    var v = null;
    try { v = localStorage.getItem(key); } catch (e) {}
    return allowed.indexOf(v) > -1 ? v : def;
  }
  function writeStored(key, val) {
    try { localStorage.setItem(key, val); } catch (e) {}
  }

  var html = document.documentElement;
  var state = {
    pos: readStored(POS_KEY, POS_OPTS, "centre"),
    motion: readStored(MOTION_KEY, MOTION_OPTS, "slide"),
    overlay: readStored(OVERLAY_KEY, OVERLAY_OPTS, "normal"),
    arrows: readStored(ARROWS_KEY, ARROWS_OPTS, "circle")
  };

  function applyAttrs() {
    html.setAttribute("data-hero-pos", state.pos);
    html.setAttribute("data-hero-motion", state.motion);
    html.setAttribute("data-overlay", state.overlay);
    html.setAttribute("data-hero-arrows", state.arrows);
  }
  applyAttrs(); // runs immediately, pre-paint

  var GROUP_A = {
    code: "A", label: "Hero text position", key: "pos", storeKey: POS_KEY,
    opts: [
      { code: "A1", val: "left", label: "Left" },
      { code: "A2", val: "centre", label: "Centre" },
      { code: "A3", val: "right", label: "Right" }
    ]
  };
  var GROUP_B = {
    code: "B", label: "Hero motion", key: "motion", storeKey: MOTION_KEY,
    opts: [
      { code: "B1", val: "slide", label: "Whole slide" },
      { code: "B2", val: "text-1", label: "Text only + 1 button" },
      { code: "B3", val: "text-2", label: "Text only + 2 buttons" }
    ]
  };
  var GROUP_C = {
    code: "C", label: "Overlay", key: "overlay", storeKey: OVERLAY_KEY,
    opts: [
      { code: "C1", val: "normal", label: "Normal" },
      { code: "C2", val: "dark", label: "Dark" }
    ]
  };
  var GROUP_D = {
    code: "D", label: "Slide arrows", key: "arrows", storeKey: ARROWS_KEY,
    opts: [
      { code: "D1", val: "circle", label: "Circle" },
      { code: "D2", val: "bare", label: "Bare chevron" },
      { code: "D3", val: "line", label: "Thin line" },
      { code: "D4", val: "counter", label: "Counter" }
    ]
  };

  /* A/B/D only ever touch the homepage hero (#hero-car-track);
      C (overlay) only touches sub-page photo heroes (round 3).
     Detected structurally (no #hero-car-track means "not the
     homepage"), not by page filename. */
  // NOTE: computed lazily inside buildBar(), not here — this file
  // runs in <head> before <body> exists, so a DOM query this early
  // would always return null and always pick the "not homepage" case.
  var GROUPS, HINT_TEXT;

  // Group E's current value/persistence lives in demo-footer.js
  // (window.__nllFooter) rather than this file's own `state`
  // object — it doesn't set a data-* attribute on <html> like the
  // others, it replaces .site-footer's content directly.
  function footerVal() {
    return window.__nllFooter ? window.__nllFooter.read() : "e1";
  }

  function currentCode(group) {
    var current = group.key === "footer" ? footerVal() : state[group.key];
    var opt = group.opts.filter(function (o) { return o.val === current; })[0];
    return opt ? opt.code : "";
  }

  function buildBar() {
    var isHome = !!document.getElementById("hero-car-track");
    GROUPS = isHome ? [GROUP_A, GROUP_B, GROUP_D] : [GROUP_C];
    HINT_TEXT = isHome ? "Tell us your pick, e.g. A1 + B2 + D2" : "Tell us your pick, e.g. C2";

    var bar = document.createElement("div");
    bar.className = "demo-bar";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Demo hero options");

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "demo-bar__toggle";
    toggle.setAttribute("aria-expanded", "true");
    toggle.innerHTML =
      '<span class="demo-bar__toggle-label">Demo options &mdash; ' +
      GROUPS.map(currentCode).join(" + ") +
      '</span><i class="fa-solid fa-chevron-up" aria-hidden="true"></i>';
    bar.appendChild(toggle);

    var panel = document.createElement("div");
    panel.className = "demo-bar__panel";

    GROUPS.forEach(function (group) {
      var g = document.createElement("div");
      g.className = "demo-bar__group";
      var h = document.createElement("span");
      h.className = "demo-bar__group-label";
      h.textContent = group.code + " · " + group.label;
      g.appendChild(h);
      var opts = document.createElement("div");
      opts.className = "demo-bar__opts";
      group.opts.forEach(function (opt) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "demo-bar__opt";
        b.dataset.group = group.key;
        b.dataset.val = opt.val;
        b.dataset.storeKey = group.storeKey;
        var initialCur = group.key === "footer" ? footerVal() : state[group.key];
        b.setAttribute("aria-pressed", initialCur === opt.val ? "true" : "false");
        b.innerHTML = '<span class="demo-bar__opt-code">' + opt.code + '</span><span class="demo-bar__opt-label">' + opt.label + '</span>';
        opts.appendChild(b);
      });
      g.appendChild(opts);
      panel.appendChild(g);
    });

    var hint = document.createElement("p");
    hint.className = "demo-bar__hint";
    hint.textContent = HINT_TEXT;
    panel.appendChild(hint);

    bar.appendChild(panel);
    document.body.insertAdjacentElement("afterbegin", bar);

    function updateHeight() {
      html.style.setProperty("--demo-bar-h", bar.offsetHeight + "px");
    }

    function setPressed() {
      var btns = bar.querySelectorAll(".demo-bar__opt");
      var fv = footerVal();
      for (var i = 0; i < btns.length; i++) {
        var b = btns[i];
        var cur = b.dataset.group === "footer" ? fv : state[b.dataset.group];
        b.setAttribute("aria-pressed", cur === b.dataset.val ? "true" : "false");
      }
      toggle.querySelector(".demo-bar__toggle-label").innerHTML =
        "Demo options &mdash; " + GROUPS.map(currentCode).join(" + ");
    }

    bar.addEventListener("click", function (e) {
      var opt = e.target.closest(".demo-bar__opt");
      if (opt) {
        if (opt.dataset.group === "footer") {
          if (window.__nllFooter) {
            window.__nllFooter.write(opt.dataset.val);
            window.__nllFooter.apply(opt.dataset.val);
          }
        } else {
          state[opt.dataset.group] = opt.dataset.val;
          writeStored(opt.dataset.storeKey, opt.dataset.val);
          applyAttrs();
          layoutHeroArrows();
        }
        setPressed();
        updateHeight();
        return;
      }
      if (e.target.closest(".demo-bar__toggle")) {
        var open = bar.classList.toggle("is-collapsed") === false;
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        updateHeight();
      }
    });

    // start collapsed on narrow viewports so it never eats the hero
    if (window.innerWidth < 760) {
      bar.classList.add("is-collapsed");
      toggle.setAttribute("aria-expanded", "false");
    }

    updateHeight();
    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateHeight, 120);
    });
  }

  /* ---- Hero motion restructure (homepage only) --------------
     B2/B3 (text-only motion) need the CTA button(s) to stay put
     while the headline above them fades/slides between slides.
     The shared main.js still renders one <a class="btn-ghost...">
     per slide (kept for data-hero-motion="slide", the unmodified
     default) — here we additionally build a standalone CTA block
     from the FIRST slide's data, appended as a normal sibling of
     the track inside .hero-car__col (so it stacks in flow, with
     a real gap — see demo-variants.css), shown instead of the
     per-slide buttons whenever motion is text-1 or text-2. */
  function restructureHero() {
    var track = document.getElementById("hero-car-track");
    if (!track) return;
    var col = track.parentElement;
    if (!col) return;
    var data = window.NLL || {};
    var slides = data.heroSlides || [];
    var first = slides[0];
    if (!first || !first.cta) return;
    if (col.querySelector(".hero-cta-static")) return; // idempotent

    var wrap = document.createElement("div");
    wrap.className = "hero-cta-static";

    var primary = document.createElement("a");
    primary.className = "btn-ghost btn-ghost--fill";
    primary.href = first.href || "#contact";
    primary.textContent = first.cta;
    wrap.appendChild(primary);

    var secondary = document.createElement("a");
    secondary.className = "btn-ghost hero-cta-static__secondary";
    secondary.href = "our-work.html";
    secondary.textContent = "View our work";
    wrap.appendChild(secondary);

    col.appendChild(wrap);
  }

  /* ---- D4 slide counter --------------------------------------
     "01 / 03" next to the nav arrows. Reads the shared carousel's
     .is-on class rather than touching main.js's carousel logic,
     so it stays in sync with prev/next clicks and autoplay alike. */
  function initCounter() {
    var countEl = document.querySelector(".hero-car__count");
    var track = document.getElementById("hero-car-track");
    if (!countEl || !track) return;
    var slides = Array.prototype.slice.call(track.querySelectorAll(".hero-slide"));
    if (!slides.length) return;
    var total = slides.length;
    function pad(n) { return n < 10 ? "0" + n : String(n); }
    function update() {
      var idx = 0;
      slides.forEach(function (s, i) { if (s.classList.contains("is-on")) idx = i; });
      countEl.textContent = pad(idx + 1) + " / " + pad(total);
    }
    update();
    var mo = new MutationObserver(update);
    slides.forEach(function (s) {
      mo.observe(s, { attributes: true, attributeFilter: ["class"] });
    });
  }

  /* ---- Laguna-style arrow placement for A1/A3 (round 3) ------
     Above 640px, for a left/right-aligned headline, prev/next
     (and the D4 counter) switch to position:absolute and track
     the vertical centre of the headline's LAST line — the arrow
     on the text's own side sits just beside that line, the other
     sits at the far edge, at the same inset the scroll cue uses.
     Below 640px, or for A2 centre, we just clear any inline
     styles and let the shipped flex-row arrows (already verified
     clean at those sizes) do the job. CSS can't find "the last
     line's position" for wrapped text on its own, hence the JS. */
  function layoutHeroArrows() {
    var heroCar = document.getElementById("hero-car");
    if (!heroCar) return; // not the homepage
    var prev = heroCar.querySelector(".hero-car__prev");
    var next = heroCar.querySelector(".hero-car__next");
    var count = document.querySelector(".hero-car__count");
    var col = heroCar.querySelector(".hero-car__col");
    if (!prev || !next || !col) return;

    function reset() {
      [prev, next, count].forEach(function (el) {
        if (!el) return;
        el.style.position = "";
        el.style.top = "";
        el.style.left = "";
        el.style.right = "";
      });
      col.style.paddingLeft = "";
      col.style.paddingRight = "";
    }

    var pos = html.getAttribute("data-hero-pos");
    var narrow = window.innerWidth <= 640;
    var activeH1 = document.querySelector(".hero-slide.is-on h1");
    if (narrow || (pos !== "left" && pos !== "right") || !activeH1) {
      reset();
      return;
    }

    // Reserve the near-arrow's clearance on the headline's column
    // FIRST — this can rewrap the headline (narrower available
    // width), which moves its last line. Only measure h1 AFTER
    // that reflow settles, or the arrow ends up placed against
    // stale (pre-reserve) geometry.
    var navH = prev.getBoundingClientRect().height || next.getBoundingClientRect().height || 46;
    var navW = Math.max(prev.getBoundingClientRect().width, next.getBoundingClientRect().width) || 46;
    var GAP = 16;
    var reserve = navW + GAP + 8; // headline's clearance from the near arrow
    if (pos === "right") {
      col.style.paddingRight = reserve + "px";
      col.style.paddingLeft = "";
    } else {
      col.style.paddingLeft = reserve + "px";
      col.style.paddingRight = "";
    }
    void heroCar.offsetHeight; // force layout with the new padding applied

    // The slide crossfade animates .hero-slide's transform (14px
    // translateY -> none) and opacity for .7s on becoming active.
    // Our slide-change listener fires the instant the class
    // changes — right at the START of that transition — so a
    // naive rect read here would catch the mid-animation position,
    // not the resting one. Force every slide to its resting
    // transform for this one synchronous measurement, then put it
    // straight back: no paint happens in between (JS is
    // single-threaded), so nothing visibly flickers.
    var allSlides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
    allSlides.forEach(function (s) { s.style.transition = "none"; s.style.transform = "none"; });
    void heroCar.offsetHeight; // flush with transforms neutralised

    var carRect = heroCar.getBoundingClientRect();
    var h1Rect = activeH1.getBoundingClientRect();
    var cs = getComputedStyle(activeH1);
    var lineHeight = parseFloat(cs.lineHeight);
    if (!lineHeight || isNaN(lineHeight)) lineHeight = parseFloat(cs.fontSize) * 1.08;
    var lastLineCenterY = h1Rect.bottom - lineHeight / 2;
    var topPx = lastLineCenterY - carRect.top - navH / 2;

    allSlides.forEach(function (s) { s.style.transition = ""; s.style.transform = ""; });
    void heroCar.offsetHeight; // flush back to the live (possibly still-animating) state

    // Both arrows share headline's last-line baseline. Near arrow
    // stays beside text; far arrow moves down to same baseline.
    var EDGE = 24; // matches --gutter
    var cue = document.querySelector(".hero-scroll");
    var farInset = 96;
    if (cue) {
      var cueCS = getComputedStyle(cue);
      var raw = pos === "right" ? cueCS.left : cueCS.right;
      var parsed = parseFloat(raw);
      if (!isNaN(parsed)) farInset = parsed;
    }
    var farTop = topPx;

    function place(el, side, value, top) {
      el.style.position = "absolute";
      el.style.top = top + "px";
      if (side === "left") { el.style.left = value + "px"; el.style.right = ""; }
      else { el.style.right = value + "px"; el.style.left = ""; }
    }

    var farCountTop = farTop;
    if (count) {
      var countH2 = count.getBoundingClientRect().height || navH;
      farCountTop = farTop + (navH - countH2) / 2;
    }

    if (pos === "right") {
      // Text hugs right edge: next stays near text; prev stays far
      // left, both aligned to headline's last line.
      place(next, "right", EDGE, topPx);
      place(prev, "left", farInset, farTop);
      if (count) place(count, "left", farInset + navW + 10, farCountTop);
    } else {
      // pos === "left": prev stays near text; next stays far right,
      // both aligned to headline's last line.
      place(prev, "left", EDGE, topPx);
      place(next, "right", farInset, farTop);
      if (count) place(count, "right", farInset + navW + 10, farCountTop);
    }
  }

  function initArrowLayout() {
    layoutHeroArrows();
    var track = document.getElementById("hero-car-track");
    if (track) {
      var slides = Array.prototype.slice.call(track.querySelectorAll(".hero-slide"));
      if (slides.length) {
        var mo = new MutationObserver(function () { layoutHeroArrows(); });
        slides.forEach(function (s) {
          mo.observe(s, { attributes: true, attributeFilter: ["class"] });
        });
      }
    }
    var resizeTimer2;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer2);
      resizeTimer2 = setTimeout(layoutHeroArrows, 120);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildBar();
    restructureHero();
    initCounter();
    initArrowLayout();
  });
})();
