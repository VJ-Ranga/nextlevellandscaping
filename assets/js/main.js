/* =============================================================
   NextLevel Landscaping — demo homepage behaviour
   ============================================================= */
(function () {
  "use strict";
  var D = window.NLL || {};
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s); }; // data is trusted (local file)

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
  var headers = $$(".site-header, .hdr2");
  var heroVid = $(".hero__media video");
  var coverBand = $(".hero + .band");
  var onScroll = function () {
    var stuck = window.scrollY > 80;
    headers.forEach(function (h) { h.classList.toggle("is-stuck", stuck); });
    // sticky hero stays pinned behind the whole page — stop the video
    // compositing once it is fully covered.
    if (heroVid && coverBand) {
      var covered = coverBand.getBoundingClientRect().top <= 0;
      if (covered && !heroVid.paused) heroVid.pause();
      else if (!covered && heroVid.paused) heroVid.play().catch(function () {});
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- 2. Mobile drawer ----------------------------------- */
  var drawer = $(".drawer");
  $$(".nav-toggle").forEach(function (t) { t.addEventListener("click", function () { drawer.classList.add("is-open"); document.body.style.overflow = "hidden"; }); });
  $(".drawer__close").addEventListener("click", closeDrawer);
  $$(".drawer nav a").forEach(function (a) { a.addEventListener("click", closeDrawer); });
  function closeDrawer() { drawer.classList.remove("is-open"); document.body.style.overflow = ""; }


  /* ---- Hero headline carousel (layout B) --------------- */
  var carTrack = $("#hero-car-track");
  if (carTrack && D.heroSlides && D.heroSlides.length) {
    carTrack.innerHTML = D.heroSlides.map(function (s, i) {
      return '<div class="hero-slide' + (i ? "" : " is-on") + '">' +
        '<h1>' + s.line + '</h1>' +
        (s.cta ? '<a class="btn-ghost btn-ghost--fill" href="' + esc(s.href || "#") + '">' + esc(s.cta) + '</a>' : '') +
      '</div>';
    }).join("");
    var slides = $$(".hero-slide", carTrack), ci = 0, timer;
    function go(n) {
      ci = (n + slides.length) % slides.length;
      slides.forEach(function (el, k) { el.classList.toggle("is-on", k === ci); });
    }
    function auto() {
      clearInterval(timer);
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      timer = setInterval(function () { if (!window.NLLmotionStopped) go(ci + 1); }, 6000);
    }
    var carEl = $("#hero-car");
    $(".hero-car__next", carEl).addEventListener("click", function () { go(ci + 1); auto(); });
    $(".hero-car__prev", carEl).addEventListener("click", function () { go(ci - 1); auto(); });
    carEl.addEventListener("mouseenter", function () { clearInterval(timer); });
    carEl.addEventListener("mouseleave", auto);
    auto();
  }


  /* ---- WCAG 2.2.2: user control for all looping hero motion ---- */
  (function () {
    var btn = $("#hero-pause");
    if (!btn) return;
    var vid = $(".hero__media video");
    var icon = $("i", btn), label = $(".hero-pause__txt", btn);
    var stopped = false;
    function paint() {
      btn.setAttribute("aria-pressed", stopped ? "true" : "false");
      icon.className = stopped ? "fa-solid fa-play" : "fa-solid fa-pause";
      label.textContent = stopped ? "Play background video" : "Pause background video";
    }
    btn.addEventListener("click", function () {
      stopped = !stopped;
      window.NLLmotionStopped = stopped;          // carousel reads this
      if (vid) { if (stopped) vid.pause(); else vid.play().catch(function () {}); }
      paint();
    });
    // honour reduced-motion: start stopped, poster only
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stopped = true; window.NLLmotionStopped = true;
      if (vid) vid.pause();
    }
    paint();
  })();

  /* ---- 3. Render: stats ---------------------------------- */
  var statsEl = $("#stats");
  if (statsEl && D.stats) {
    statsEl.innerHTML = D.stats.map(function (s) {
      return '<div class="stat-n">' +
        '<b data-to="' + s.value + '"><span>0</span><i>' + esc(s.suffix || "") + '</i></b>' +
        '<span>' + s.label + '</span></div>';
    }).join("");

    // count up when the row scrolls into view
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

  /* ---- 4. Services explorer (hover/click to swap) -------- */
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
            '<p style="margin-top:1.3rem"><a class="tlink" href="service.html?slug=' + esc(s.slug) + '">Explore ' + s.name +
            ' <i class="fa-solid fa-arrow-right"></i></a></p></div>';
          requestAnimationFrame(function () { $(".svc-copy__inner", svcCopy).classList.add("is-on"); });
        }, inner ? 160 : 0);
      }
    }
    paint(0);

    var wide = matchMedia("(min-width: 901px)");
    svcList.addEventListener("click", function (e) {
      var b = e.target.closest(".svc-item"); if (!b) return;
      if (!wide.matches && b.classList.contains("is-active")) { // mobile: tap again to close
        b.classList.remove("is-active"); cur = -1; return;
      }
      paint(+b.dataset.i);
    });
    svcList.addEventListener("mouseover", function (e) {
      var b = e.target.closest(".svc-item");
      if (b && wide.matches) paint(+b.dataset.i);
    });
  }

  /* ---- 4b. Before / after drag slider ------------------- */
  var baWrap = $("#ba");
  if (baWrap && D.beforeAfter) {
    var ba = D.beforeAfter;
    baWrap.innerHTML =
      '<img class="ba__after" src="' + esc(ba.after) + '" alt="' + esc(ba.afterLabel) + '">' +
      '<img class="ba__before" src="' + esc(ba.before) + '" alt="' + esc(ba.beforeLabel) + '">' +
      '<span class="ba__tag ba__tag--b">' + esc(ba.beforeLabel) + '</span>' +
      '<span class="ba__tag ba__tag--a">' + esc(ba.afterLabel) + '</span>' +
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

    var baCopy = $("#ba-copy");
    if (baCopy && ba.copy) baCopy.innerHTML = ba.copy;
    var baNote = $("#ba-note");
    if (baNote && ba.placeholderNote) baNote.textContent = ba.placeholderNote;
  }

  /* ---- 5. Render: projects (swiper) --------------------- */
  var projWrap = $("#projects-track");
  if (projWrap && D.projects) {
    projWrap.innerHTML = D.projects.map(function (p) {
      return '' +
        '<div class="swiper-slide">' +
          '<a class="proj-card" href="project.html?slug=' + esc(p.slug) + '">' +
            '<div class="media"><img loading="lazy" src="' + esc(p.img) + '" alt="' + esc(p.name) + '"></div>' +
            '<div class="proj-card__meta"><span>' + esc(p.suburb) + '</span><span>&bull;</span><span>' + esc(p.date) + '</span></div>' +
            '<h3>' + esc(p.name) + '</h3>' +
            '<p>' + esc(p.blurb) + '</p>' +
            '<ul class="chips">' + p.tags.map(function (t) { return "<li>" + t + "</li>"; }).join("") + '</ul>' +
          '</a>' +
        '</div>';
    }).join("");
  }

  /* ---- 6. Render: current work + stepper ---------------- */
  var cwEl = $("#current-list");
  if (cwEl && D.currentWork) {
    var total = (D.stages || []).length || 10;
    cwEl.innerHTML = D.currentWork.map(function (j) {
      var bars = "";
      for (var k = 0; k < total; k++) {
        var cls = k < j.stageIndex ? "done" : (k === j.stageIndex ? "now" : "");
        bars += '<li class="' + cls + '"></li>';
      }
      var stageName = (D.stages && D.stages[j.stageIndex]) || "";
      var pct = Math.round(((j.stageIndex + 1) / total) * 100);
      return '' +
        '<a class="cw-card reveal" href="current-work-detail.html?slug=' + esc(j.slug) + '">' +
          '<div class="media"><img loading="lazy" src="' + esc(j.img) + '" alt="' + esc(j.title) + '"></div>' +
          '<div class="cw-card__meta"><span>' + esc(j.suburb) + '</span><span>ETA ' + esc(j.eta) + '</span></div>' +
          '<h3>' + esc(j.title) + '</h3>' +
          '<ul class="stepper">' + bars + '</ul>' +
          '<p class="cw-card__stage">Stage ' + (j.stageIndex + 1) + ' of ' + total + ' &middot; ' + pct + '%<small>' + esc(stageName) + '</small></p>' +
          '<p class="cw-card__note" style="margin-top:.9rem">' + esc(j.note) + '</p>' +
          '<span class="tlink">View progress <i class="fa-solid fa-arrow-right"></i></span>' +
        '</a>';
    }).join("");
  }

  /* ---- 6b. Full-bleed project image strip -------------- */
  var stripTrack = $("#strip-track");
  if (stripTrack && D.projectStrip) {
    stripTrack.innerHTML = D.projectStrip.map(function (s, i) {
      return '<div class="swiper-slide">' +
        '<button data-i="' + i + '" aria-label="View photo ' + (i + 1) + '">' +
          '<img loading="lazy" decoding="async"' +
            (s.w ? ' width="' + s.w + '" height="' + s.h + '"' : '') +
            ' src="' + esc(s.img) + '" alt="' + esc(s.cap || "") + '">' +
          '<span class="strip__cap">' + esc(s.cap || "") + '</span>' +
        '</button>' +
      '</div>';
    }).join("");

    if (window.Swiper) {
      var stripSwiper = new Swiper("#strip", {
        slidesPerView: "auto",
        spaceBetween: 14,
        freeMode: { enabled: true, momentum: true },
        observer: true,
        observeParents: true,
        watchOverflow: true,
        navigation: { nextEl: "#strip-next", prevEl: "#strip-prev" }
      });
      // slides are width:auto and the images are lazy, so Swiper can measure
      // them at ~0px and lock the arrows. Re-measure as each one arrives.
      $$("img", stripTrack).forEach(function (im) {
        if (im.complete) return;
        im.addEventListener("load", function () { stripSwiper.update(); }, { once: true });
      });
      window.addEventListener("load", function () { stripSwiper.update(); });
    }
    var openStrip = window.NLLlightbox(D.projectStrip.map(function (s) { return s.img; }));
    stripTrack.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-i]");
      if (b && openStrip) openStrip(+b.dataset.i);
    });
  }

  /* ---- 7. Render: process ------------------------------ */
  var procEl = $("#process-list");
  if (procEl && D.process) {
    procEl.innerHTML = D.process.map(function (p) {
      return '<div class="proc reveal">' +
        '<div class="proc__num"><i class="' + esc(p.icon || "fa-solid fa-circle") + '"></i><span>' + esc(p.no) + '</span></div>' +
        '<h3>' + esc(p.name) + '</h3><p>' + p.desc + '</p></div>';
    }).join("");
  }

  /* ---- 8. Render: store ------------------------------- */
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

  /* ---- 9. Render: reviews (swiper) -------------------- */
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

  /* ---- 10. Swipers ---------------------------------- */
  if (window.Swiper) {
    new Swiper("#projects-swiper", {
      slidesPerView: 1.1, spaceBetween: 24,
      breakpoints: { 768: { slidesPerView: 2, spaceBetween: 32 }, 1200: { slidesPerView: 2.4, spaceBetween: 40 } },
      navigation: { nextEl: "#proj-next", prevEl: "#proj-prev" }
    });
    new Swiper("#reviews-swiper", {
      slidesPerView: 1.05, spaceBetween: 28,
      breakpoints: { 768: { slidesPerView: 2, spaceBetween: 40 }, 1200: { slidesPerView: 3, spaceBetween: 48 } },
      navigation: { nextEl: "#rev-next", prevEl: "#rev-prev" }
    });
  }

  /* ---- 11. Reveal on scroll ------------------------ */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach(function (el) { io.observe(el); });

  /* ---- 12. Contact form (demo validation, no backend) --- */
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
        if (bad) ok = false;
      });
      if (ok) {
        form.reset();
        var okBox = $("#form-ok");
        okBox.classList.add("show");
        okBox.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(function () { okBox.classList.remove("show"); }, 6000);
      }
    });
  }

  /* ---- 13. Footer year ---------------------------- */
  var y = $("#year"); if (y) y.textContent = new Date().getFullYear();

})();
