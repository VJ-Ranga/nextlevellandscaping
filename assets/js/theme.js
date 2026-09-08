/* =============================================================
   Demo theme switcher — lets the client compare three looks.
   Remove this file (and the <script> tags) for production.
   ============================================================= */
(function () {
  "use strict";

  var THEMES = [
    { id: "brand",  name: "Brand olive", swatch: ["#5A6428", "#C2E807", "#F6F5EF"] },
    { id: "slate",  name: "Slate blue",  swatch: ["#23271F", "#1A56DB", "#FAF8F4"] },
    { id: "carbon", name: "Carbon lime", swatch: ["#17190F", "#C2E807", "#FFFFFF"] }
  ];
  var KEY = "nll-theme";

  function apply(id) {
    document.documentElement.setAttribute("data-theme", id);
    try { localStorage.setItem(KEY, id); } catch (e) {}
    var btns = document.querySelectorAll(".theme-opt");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", btns[i].dataset.theme === id ? "true" : "false");
    }
  }

  var saved = "brand";
  try { saved = localStorage.getItem(KEY) || "brand"; } catch (e) {}

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
    '</div>';

  document.body.insertAdjacentElement("afterbegin", bar);
  bar.addEventListener("click", function (e) {
    var b = e.target.closest(".theme-opt");
    if (b) apply(b.dataset.theme);
  });

  apply(saved);
})();
