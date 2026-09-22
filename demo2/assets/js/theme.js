/* =============================================================
   Demo2 theme switcher — three selectable visual directions.
   Carbon Soft is the recommended default.
   Remove this file for production.
   ============================================================= */
(function () {
  "use strict";

  var THEMES = [
    { id: "carbon-soft", name: "Carbon Soft", swatch: ["#17190F", "#C2E807", "#FFFFFF"] },
    { id: "plan",        name: "Plan",        swatch: ["#F7F6F1", "#16180F", "#C2E807"] },
    { id: "nocturne",    name: "Nocturne",    swatch: ["#101109", "#F2F1E9", "#C2E807"] }
  ];
  var KEY = "nll-demo2-theme";

  function apply(id) {
    document.documentElement.setAttribute("data-theme", id);
    try { localStorage.setItem(KEY, id); } catch (e) {}
    var btns = document.querySelectorAll(".theme-opt");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", btns[i].dataset.theme === id ? "true" : "false");
    }
  }

  var saved = "carbon-soft";
  try { saved = localStorage.getItem(KEY) || "carbon-soft"; } catch (e) {}
  if (!THEMES.some(function (t) { return t.id === saved; })) saved = "carbon-soft";

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
    if (b && b.dataset.theme) apply(b.dataset.theme);
  });

  apply(saved);
})();
