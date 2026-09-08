/* =============================================================
   NextLevel Landscaping — demo homepage behaviour
   ============================================================= */
(function () {
  "use strict";
  var D = window.NLL || {};
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s); }; // data is trusted (local file)

  /* ---- 1. Sticky header ------------------------------------- */
  var header = $(".site-header");
  var onScroll = function () {
    header.classList.toggle("is-stuck", window.scrollY > 80);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- 2. Mobile drawer ----------------------------------- */
  var drawer = $(".drawer");
  $(".nav-toggle").addEventListener("click", function () { drawer.classList.add("is-open"); document.body.style.overflow = "hidden"; });
  $(".drawer__close").addEventListener("click", closeDrawer);
  $$(".drawer nav a").forEach(function (a) { a.addEventListener("click", closeDrawer); });
  function closeDrawer() { drawer.classList.remove("is-open"); document.body.style.overflow = ""; }

  /* ---- 3. Render: stats ---------------------------------- */
  var statsEl = $("#stats");
  if (statsEl && D.stats) {
    statsEl.innerHTML = D.stats.map(function (s) {
      return '<div class="stat"><b>' + esc(s.big) + '</b><span>' + esc(s.label) + '</span></div>';
    }).join("");
  }

  /* ---- 4. Render: services (alternating arch bands) ------ */
  var svcEl = $("#services-list");
  if (svcEl && D.services) {
    svcEl.innerHTML = D.services.map(function (s, i) {
      var archMod = i % 2 ? "arch--tr" : "";
      return '' +
        '<article class="svc reveal">' +
          '<div class="svc__media"><div class="media ' + archMod + '">' +
            '<img loading="lazy" src="' + esc(s.img) + '" alt="' + esc(s.name.replace(/&amp;/g, "&")) + '">' +
          '</div></div>' +
          '<div class="svc__body">' +
            '<span class="svc__no">' + esc(s.no) + ' / Service</span>' +
            '<h3>' + s.name + '</h3>' +
            '<p class="measure">' + s.desc + '</p>' +
            '<ul class="chips">' + s.tags.map(function (t) { return "<li>" + t + "</li>"; }).join("") + '</ul>' +
            '<p style="margin-top:1.4rem"><a class="tlink" href="#">Explore ' + s.name + ' <i class="fa-solid fa-arrow-right"></i></a></p>' +
          '</div>' +
        '</article>';
    }).join("");
  }

  /* ---- 5. Render: projects (swiper) --------------------- */
  var projWrap = $("#projects-track");
  if (projWrap && D.projects) {
    projWrap.innerHTML = D.projects.map(function (p) {
      return '' +
        '<div class="swiper-slide">' +
          '<article class="proj-card">' +
            '<div class="media arch"><img loading="lazy" src="' + esc(p.img) + '" alt="' + esc(p.name) + '"></div>' +
            '<div class="proj-card__meta"><span>' + esc(p.suburb) + '</span><span>&bull;</span><span>' + esc(p.date) + '</span></div>' +
            '<h3>' + esc(p.name) + '</h3>' +
            '<p>' + esc(p.blurb) + '</p>' +
            '<ul class="chips">' + p.tags.map(function (t) { return "<li>" + t + "</li>"; }).join("") + '</ul>' +
          '</article>' +
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
        '<article class="cw-card reveal">' +
          '<div class="media arch--sm arch"><img loading="lazy" src="' + esc(j.img) + '" alt="' + esc(j.title) + '"></div>' +
          '<div class="cw-card__meta"><span>' + esc(j.suburb) + '</span><span>ETA ' + esc(j.eta) + '</span></div>' +
          '<h3>' + esc(j.title) + '</h3>' +
          '<ul class="stepper">' + bars + '</ul>' +
          '<p class="cw-card__stage">Stage ' + (j.stageIndex + 1) + ' of ' + total + ' &middot; ' + pct + '%<small>' + esc(stageName) + '</small></p>' +
          '<p class="cw-card__note" style="margin-top:.9rem">' + esc(j.note) + '</p>' +
          '<a class="tlink" href="#">View progress <i class="fa-solid fa-arrow-right"></i></a>' +
        '</article>';
    }).join("");
  }

  /* ---- 7. Render: process ------------------------------ */
  var procEl = $("#process-list");
  if (procEl && D.process) {
    procEl.innerHTML = D.process.map(function (p) {
      return '<div class="proc reveal"><div class="proc__num">' + esc(p.no) + '</div><h3>' + esc(p.name) + '</h3><p>' + p.desc + '</p></div>';
    }).join("");
  }

  /* ---- 8. Render: store ------------------------------- */
  var storeEl = $("#store-list");
  if (storeEl && D.store) {
    storeEl.innerHTML = D.store.map(function (s) {
      return '' +
        '<article class="store-card reveal">' +
          '<div class="media arch--sm"><img loading="lazy" src="' + esc(s.img) + '" alt=""></div>' +
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
