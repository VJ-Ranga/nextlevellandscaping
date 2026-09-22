/* =============================================================
   NextLevel Landscaping — demo2 homepage behaviour
   Reads window.NLL2 and renders into the eight homepage sections.
   ============================================================= */
(function () {
  "use strict";
  var D = window.NLL2 || {};
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s); };

  /* ---- 0. Hero (runs after assets/data.js, so D.hero is available) --- */
  var heroEl = $("#hero-content");
  if (heroEl && D.hero) {
    var h = D.hero, primary = h.ctaPrimary || {}, secondary = h.ctaSecondary || {};
    heroEl.innerHTML =
      '<div class="container hero__tag">' +
      '<span>' +
        '<span class="eyebrow">' + (h.eyebrow || "") + '</span>' +
        '<h1>' + (h.headline || "") + '</h1>' +
        '<p class="lead measure" style="color:rgba(255,255,255,.82);max-width:54ch;margin:.8rem 0 1.6rem">' + (h.tagline || "") + '</p>' +
        '<div style="display:flex;gap:1rem;flex-wrap:wrap">' +
          '<a class="btn-ghost btn-ghost--fill" href="' + (primary.href || "#contact") + '">' + (primary.label || "Get a free quote") + '</a>' +
          '<a class="btn-ghost" href="' + (secondary.href || "our-work.html") + '">' + (secondary.label || "See our work") + '</a>' +
        '</div>' +
      '</span>' +
      '</div>';
  }

  /* ---- Gallery lightbox (shared) ------------------- */
  window.NLLlightbox = function (imgs) {
    var lb = $("#lightbox");
    if (!lb) return;
    var pic = $("img", lb), i = 0;
    function show(n) { i = (n + imgs.length) % imgs.length; pic.src = imgs[i]; }
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.classList.contains("lb-close")) lb.classList.remove("open");
      if (e.target.classList.contains("lb-next")) show(i + 1);
      if (e.target.classList.contains("lb-prev")) show(i - 1);
    });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") lb.classList.remove("open");
      if (e.key === "ArrowRight") show(i + 1);
      if (e.key === "ArrowLeft") show(i - 1);
    });
    return function open(n) { show(n); lb.classList.add("open"); };
  };

  /* ---- 1. Sticky header ------------------------------------- */
  var hdr = $(".hdr2");
  var heroVid = $(".hero__media video");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches && heroVid) { heroVid.pause(); heroVid.removeAttribute("autoplay"); heroVid.removeAttribute("loop"); }
  var onScroll = function () {
    var stuck = window.scrollY > 80;
    if (hdr) hdr.classList.toggle("is-stuck", stuck);
    if (heroVid) {
      var heroRect = $(".hero").getBoundingClientRect();
      if (heroRect.bottom <= 0 && !heroVid.paused) heroVid.pause();
      else if (heroRect.bottom > 0 && heroVid.paused && !matchMedia("(prefers-reduced-motion: reduce)").matches) heroVid.play().catch(function () {});
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- 2. Mobile drawer (a11y: aria-expanded, Escape, focus restore) -- */
  var drawer = $("#drawer");
  var toggleBtns = $$(".hdr2__toggle");
  var savedFocus = null;
  toggleBtns.forEach(function (t) {
    t.addEventListener("click", function () {
      savedFocus = t;
      drawer.classList.add("is-open");
      // Simple focus trap: move focus to first focusable element in drawer
      var drawerFocusable = Array.prototype.slice.call(
        drawer.querySelectorAll("a[href], button, input, select, textarea, [tabindex]:not([tabindex='-1'])")
      ).filter(function(el) { return !el.disabled && el.offsetParent !== null; });
      if (drawerFocusable.length) drawerFocusable[0].focus();
      // Focus trap listener
      document.addEventListener("keydown", trapDrawer);
      function trapDrawer(e) {
        if (!drawer.classList.contains("is-open")) {
          document.removeEventListener("keydown", trapDrawer);
          return;
        }
        if (e.key !== "Tab") return;
        var focusable = Array.prototype.slice.call(
          drawer.querySelectorAll("a[href], button, input, select, textarea, [tabindex]:not([tabindex='-1'])")
        ).filter(function(el) { return !el.disabled && el.offsetParent !== null; });
        if (!focusable.length) return;
        var first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      drawer.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      t.setAttribute("aria-expanded", "true");
    });
  });
  $(".drawer__close").addEventListener("click", closeDrawer);
  $$(".drawer nav a").forEach(function (a) { a.addEventListener("click", closeDrawer); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  });
  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    toggleBtns.forEach(function (t) { t.setAttribute("aria-expanded", "false"); });
    if (savedFocus) { savedFocus.focus(); savedFocus = null; }
  }

  /* ---- 3. Trust: stats + credentials ---------------------- */
  var statsEl = $("#stats");
  if (statsEl && D.stats) {
    statsEl.innerHTML = D.stats.map(function (s) {
      return '<div class="stat-n">' +
        '<b data-to="' + s.value + '"><span>0</span><i>' + esc(s.suffix || "") + '</i></b>' +
        '<span>' + s.label + '</span></div>';
    }).join("");

    var counted = false;
    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting || counted) return;
        counted = true;
        $$("b[data-to]", statsEl).forEach(function (b) {
          var to = +b.dataset.to, out = $("span", b), t0 = null, dur = 1400;
          if (matchMedia("(prefers-reduced-motion: reduce)").matches) { out.textContent = to; return; }
          requestAnimationFrame(function step(ts) {
            if (!t0) t0 = ts;
            var p = Math.min((ts - t0) / dur, 1);
            out.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(step);
          });
        });
      });
    }, { threshold: 0.4 });
    cio.observe(statsEl);
  }

  var credEl = $("#credline");
  if (credEl && D.credentials) {
    credEl.innerHTML = D.credentials.map(function (c) {
      return '<span><i class="' + esc(c.icon) + '"></i>' + c.text + '</span>';
    }).join("");
  }

  /* ---- 4. Services explorer -------------------------------- */
  var svcList = $("#svc-list"), svcFig = $("#svc-figure"), svcCopy = $("#svc-copy");
  if (svcList && D.services) {
    svcList.innerHTML = D.services.map(function (s, i) {
      return '<li>' +
        '<button class="svc-item' + (i ? "" : " is-active") + '" data-i="' + i + '" type="button">' +
          '<span class="svc-item__no">' + esc(s.no) + '</span>' +
          '<span class="svc-item__name">' + s.name + '</span>' +
          '<span class="svc-item__go"><i class="fa-solid fa-arrow-right"></i></span>' +
        '</button>' +
        '<div class="svc-accordion-media"><div class="inner">' +
          '<div class="media"><img loading="lazy" src="' + esc(s.img) + '" alt=""></div>' +
          '<p>' + s.desc + '</p>' +
          '<ul class="chips">' + s.tags.map(function (t) { return "<li>" + t + "</li>"; }).join("") + '</ul>' +
        '</div></div>' +
      '</li>';
    }).join("");

    if (svcFig) {
      svcFig.innerHTML = D.services.map(function (s, i) {
        return '<img class="' + (i ? "" : "is-on") + '" src="' + esc(s.img) + '" alt="' +
               esc(s.name.replace(/&amp;/g, "&")) + '" ' + (i ? 'loading="lazy"' : "") + '>';
      }).join("");
    }

    var cur = -1;
    function paint(i) {
      if (i === cur || !D.services[i]) return;
      cur = i;
      var s = D.services[i];
      $$(".svc-item", svcList).forEach(function (b) { b.classList.toggle("is-active", +b.dataset.i === i); });
      if (svcFig) $$("img", svcFig).forEach(function (im, k) { im.classList.toggle("is-on", k === i); });
      if (svcCopy) {
        var inner = $(".svc-copy__inner", svcCopy);
        if (inner) inner.classList.remove("is-on");
        setTimeout(function () {
          svcCopy.innerHTML = '<div class="svc-copy__inner">' +
            '<h3>' + s.name + '</h3><p>' + s.desc + '</p>' +
            '<ul class="chips">' + s.tags.map(function (t) { return "<li>" + t + "</li>"; }).join("") + '</ul>' +
            '<p style="margin-top:1.3rem"><a class="tlink" href="#contact">Get a quote for ' + s.name +
            ' <i class="fa-solid fa-arrow-right"></i></a></p></div>';
          requestAnimationFrame(function () { $(".svc-copy__inner", svcCopy).classList.add("is-on"); });
        }, inner ? 160 : 0);
      }
    }
    paint(0);

    var wide = matchMedia("(min-width: 901px)");
    svcList.addEventListener("click", function (e) {
      var b = e.target.closest(".svc-item"); if (!b) return;
      if (!wide.matches && b.classList.contains("is-active")) { b.classList.remove("is-active"); cur = -1; return; }
      paint(+b.dataset.i);
    });
    svcList.addEventListener("mouseover", function (e) {
      var b = e.target.closest(".svc-item");
      if (b && wide.matches) paint(+b.dataset.i);
    });
  }

  /* ---- 5. Before / after drag slider ---------------------- */
  var baWrap = $("#ba");
  if (baWrap && D.feature) {
    var ba = D.feature;
    baWrap.innerHTML =
      '<img class="ba__after" src="' + esc(ba.afterImg) + '" alt="After">' +
      '<img class="ba__before" src="' + esc(ba.beforeImg) + '" alt="Before">' +
      '<span class="ba__tag ba__tag--b">' + esc(ba.beforeLabel || "Before") + '</span>' +
      '<span class="ba__tag ba__tag--a">' + esc(ba.afterLabel || "After") + '</span>' +
      '<span class="ba__line"></span>' +
      '<span class="ba__grip"><i class="fa-solid fa-left-right"></i></span>';
    baWrap.tabIndex = 0;
    baWrap.setAttribute("role", "slider");
    baWrap.setAttribute("aria-label", "Before and after comparison");
    baWrap.setAttribute("aria-valuemin", "0");
    baWrap.setAttribute("aria-valuemax", "100");

    var pos = 50, dragging = false;
    function set(p) {
      pos = Math.max(0, Math.min(100, p));
      baWrap.style.setProperty("--x", pos + "%");
      baWrap.setAttribute("aria-valuenow", Math.round(pos));
    }
    function fromEvent(e) {
      var r = baWrap.getBoundingClientRect();
      var x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      set((x / r.width) * 100);
    }
    set(50);
    baWrap.addEventListener("pointerdown", function (e) { dragging = true; baWrap.setPointerCapture(e.pointerId); fromEvent(e); });
    baWrap.addEventListener("pointermove", function (e) { if (dragging) fromEvent(e); });
    baWrap.addEventListener("pointerup", function () { dragging = false; });
    baWrap.addEventListener("pointercancel", function () { dragging = false; });
    baWrap.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { set(pos - 4); e.preventDefault(); }
      if (e.key === "ArrowRight") { set(pos + 4); e.preventDefault(); }
    });
  }

  /* ---- 6. Full-bleed project image strip ------------------ */
  var stripTrack = $("#strip-track");
  if (stripTrack && D.projectStrip) {
    stripTrack.innerHTML = D.projectStrip.map(function (s, i) {
      return '<div class="swiper-slide">' +
        '<button data-i="' + i + '" aria-label="View photo ' + (i + 1) + '">' +
          '<img loading="lazy" src="' + esc(s.img) + '" alt="' + esc(s.cap || "") + '">' +
          '<span class="strip__cap">' + esc(s.cap || "") + '</span>' +
        '</button>' +
      '</div>';
    }).join("");

    if (window.Swiper) {
      new Swiper("#strip", {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: { enabled: true, momentum: true },
        navigation: { nextEl: "#strip-next", prevEl: "#strip-prev" }
      });
    }
    var openStrip = window.NLLlightbox(D.projectStrip.map(function (s) { return s.img; }));
    stripTrack.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-i]");
      if (b && openStrip) openStrip(+b.dataset.i);
    });
  }

  /* ---- 7. Render: process -------------------------------- */
  var procEl = $("#process-list");
  if (procEl && D.process) {
    procEl.innerHTML = D.process.map(function (p) {
      return '<div class="proc reveal">' +
        '<div class="proc__num"><i class="' + esc(p.icon || "fa-solid fa-circle") + '"></i><span>' + esc(p.no) + '</span></div>' +
        '<h3>' + esc(p.name) + '</h3><p>' + p.desc + '</p></div>';
    }).join("");
  }

  /* ---- 8. Render: store ---------------------------------- */
  var storeEl = $("#store-list");
  if (storeEl && D.store) {
    storeEl.innerHTML = D.store.map(function (s) {
      return '' +
        '<article class="store-card reveal">' +
          '<div class="media"><img loading="lazy" src="' + esc(s.img) + '" alt=""></div>' +
          '<h3>' + s.name + '</h3><p>' + s.desc + '</p>' +
        '</article>';
    }).join("");
  }

  /* ---- 9. Render: reviews (swiper) ----------------------- */
  var revWrap = $("#reviews-track");
  if (revWrap && D.reviews) {
    revWrap.innerHTML = D.reviews.map(function (r) {
      var initials = r.name.split(" ").map(function (w) { return w[0]; }).slice(0, 2).join("");
      return '' +
        '<div class="swiper-slide">' +
          '<blockquote class="rev-card">' +
            '<p>&ldquo;' + esc(r.text) + '&rdquo;</p>' +
            '<div class="rev-card__who"><span class="rev-avatar">' + esc(initials) + '</span>' +
              '<span><b>' + esc(r.name) + '</b><span>Google review</span></span>' +
            '</div>' +
          '</blockquote>' +
        '</div>';
    }).join("");
  }

  /* ---- 10. Swipers ---------------------------------------- */
  if (window.Swiper) {
    new Swiper("#reviews-swiper", {
      slidesPerView: 1.05, spaceBetween: 28,
      breakpoints: { 768: { slidesPerView: 2, spaceBetween: 40 }, 1200: { slidesPerView: 3, spaceBetween: 48 } },
      navigation: { nextEl: "#rev-next", prevEl: "#rev-prev" }
    });
  }

  /* ---- 11. Reveal on scroll -------------------------------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach(function (el) { io.observe(el); });

  /* ---- 12. Contact form (demo validation) ----------------- */
  var form = $("#quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      $$(".field", form).forEach(function (f) {
        var input = $("input,textarea", f);
        if (!input) return;
        var val = input.value.trim();
        var bad = input.required && !val;
        if (input.type === "email" && val) bad = bad || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        f.classList.toggle("err", bad);
        var msgEl = $(".msg", f);
        if (bad) {
          ok = false;
          input.setAttribute("aria-invalid", "true");
          if (msgEl && msgEl.id) input.setAttribute("aria-describedby", msgEl.id);
        } else {
          input.removeAttribute("aria-invalid");
          input.removeAttribute("aria-describedby");
        }
      });
      if (ok) {
        form.reset();
        var okBox = $("#form-ok");
        var DEMO_NOTE = ' <em>(This is a local demo &mdash; no enquiry was actually sent.)</em>';
        okBox.classList.add("show");
        var scrollOpts = matchMedia("(prefers-reduced-motion: reduce)").matches
          ? { behavior: "instant", block: "center" }
          : { behavior: "smooth", block: "center" };
        // use scrollOpts defined above
        okBox.scrollIntoView(scrollOpts);
        setTimeout(function () { okBox.classList.remove("show"); }, 6000);
      }
    });
  }

  /* ---- 13. Footer year ------------------------------------ */
  var y = $("#year"); if (y) y.textContent = new Date().getFullYear();

})();
