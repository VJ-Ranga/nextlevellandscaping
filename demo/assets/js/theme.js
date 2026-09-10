/* =============================================================
   Demo theme switcher — lets the client compare looks/layouts.
   Default: Carbon (carbon-soft-v2) + centred header + static hero
   + stacked intro. Remove this file (and the <script> tags) for
   production.
   ============================================================= */
(function () {
  "use strict";

  var THEMES = [
    { id: "carbon-soft-v2", name: "Carbon", swatch: ["#17190F", "#C2E807", "#F2F2EC"] },
    { id: "carbon-soft", name: "Carbon soft", swatch: ["#17190F", "#C2E807", "#F2F2EC"] },
    { id: "brand",  name: "Olive", swatch: ["#5A6428", "#C2E807", "#F6F5EF"] },
    { id: "carbon", name: "Carbon lime", swatch: ["#17190F", "#C2E807", "#FFFFFF"] },
    { id: "nocturne",  name: "Nocturne",  swatch: ["#101109", "#F2F1E9", "#C2E807"] },
    { id: "blueprint", name: "Blueprint", swatch: ["#101109", "#C2E807", "#F2F1E9"] }
  ];
  var KEY = "nll-theme";
  var LKEY = "nll-layout";
  var LAYOUTS = [{ id: "classic", name: "Classic header" }, { id: "centred", name: "Centred header" }];
  var HKEY = "nll-hero";
  var HEROES = [{ id: "static", name: "Static hero" }, { id: "sticky", name: "Sticky hero" }];
  var IKEY = "nll-intro";
  var INTROS = [{ id: "split", name: "Split intro" }, { id: "stacked", name: "Stacked intro" }];

  function applyIntro(id) {
    document.documentElement.setAttribute("data-intro", id);
    try { localStorage.setItem(IKEY, id); } catch (e) {}
    var b = document.querySelectorAll(".intro-opt");
    for (var i = 0; i < b.length; i++) b[i].setAttribute("aria-pressed", b[i].dataset.intro === id ? "true" : "false");
  }

  function applyHero(id) {
    document.documentElement.setAttribute("data-hero", id);
    try { localStorage.setItem(HKEY, id); } catch (e) {}
    var b = document.querySelectorAll(".hero-opt");
    for (var i = 0; i < b.length; i++) b[i].setAttribute("aria-pressed", b[i].dataset.hero === id ? "true" : "false");
  }

  function applyLayout(id) {
    document.documentElement.setAttribute("data-layout", id);
    try { localStorage.setItem(LKEY, id); } catch (e) {}
    var b = document.querySelectorAll(".layout-opt");
    for (var i = 0; i < b.length; i++) b[i].setAttribute("aria-pressed", b[i].dataset.layout === id ? "true" : "false");
  }

  function apply(id) {
    document.documentElement.setAttribute("data-theme", id);
    try { localStorage.setItem(KEY, id); } catch (e) {}
    var btns = document.querySelectorAll(".theme-opt");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", btns[i].dataset.theme === id ? "true" : "false");
    }
  }

  var saved = "carbon-soft-v2";
  try { saved = localStorage.getItem(KEY) || "carbon-soft-v2"; } catch (e) {}
  // a removed theme may still be stored from an earlier visit
  if (!THEMES.some(function (t) { return t.id === saved; })) saved = "carbon-soft-v2";

  var bar = document.createElement("div");
  bar.className = "theme-bar";
  bar.innerHTML =
    '<span class="theme-bar__label">Demo &mdash; pick a look</span>' +
    '<div class="theme-bar__opts">' +
      THEMES.map(function (t) {
        return '<button class="theme-opt" type="button" data-theme="' + t.id + '" aria-pressed="false">' +
          '<span class="sw">' + t.swatch.map(function (c) {
            return '<i style="background:' + c + '"></i>';
          }).join("") + '</span>' +
          '<span class="txt">' + t.name + '</span>' +
        '</button>';
      }).join("") +
    '</div>' +
    '<div class="theme-bar__opts theme-bar__layouts">' +
      LAYOUTS.map(function (l) {
        return '<button class="theme-opt layout-opt" type="button" data-layout="' + l.id + '" aria-pressed="false">' +
          '<span class="txt">' + l.name + '</span></button>';
      }).join("") +
    '</div>' +
    '<div class="theme-bar__opts theme-bar__layouts">' +
      HEROES.map(function (h) {
        return '<button class="theme-opt hero-opt" type="button" data-hero="' + h.id + '" aria-pressed="false">' +
          '<span class="txt">' + h.name + '</span></button>';
      }).join("") +
    '</div>' +
    '<div class="theme-bar__opts theme-bar__layouts">' +
      INTROS.map(function (n) {
        return '<button class="theme-opt intro-opt" type="button" data-intro="' + n.id + '" aria-pressed="false">' +
          '<span class="txt">' + n.name + '</span></button>';
      }).join("") +
    '</div>';

  document.body.insertAdjacentElement("afterbegin", bar);
  bar.addEventListener("click", function (e) {
    var n = e.target.closest(".intro-opt");
    if (n) { applyIntro(n.dataset.intro); return; }
    var h = e.target.closest(".hero-opt");
    if (h) { applyHero(h.dataset.hero); return; }
    var l = e.target.closest(".layout-opt");
    if (l) { applyLayout(l.dataset.layout); return; }
    var b = e.target.closest(".theme-opt");
    if (b && b.dataset.theme) apply(b.dataset.theme);
  });

  var savedLayout = "centred";
  try { savedLayout = localStorage.getItem(LKEY) || "centred"; } catch (e) {}
  var savedHero = "static";
  try { savedHero = localStorage.getItem(HKEY) || "static"; } catch (e) {}
  var savedIntro = "stacked";
  try { savedIntro = localStorage.getItem(IKEY) || "stacked"; } catch (e) {}
  if (["split","stacked"].indexOf(savedIntro) < 0) savedIntro = "stacked";
  apply(saved);
  applyLayout(savedLayout);
  applyHero(savedHero);
  applyIntro(savedIntro);
})();
