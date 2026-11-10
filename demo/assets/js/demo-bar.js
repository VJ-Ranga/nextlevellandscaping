/* =============================================================
   Demo options bar — lets the client compare options and comment
   back by code (e.g. "F2 + G3"). NOINDEX build only; remove this
   file, demo-bar.css/demo-variants.css and their <link>/<script>
   tags when this becomes production.

   The homepage hero is no longer an option: the client picked
   A3 + B2 + D2 (Stage 02 V2), which is now built into the page
   itself (hero-final.css + hero.js, same as site/).

   Sets six attributes on <html>, persisted in localStorage:
     data-hdr-util  12.8 | 13.5 | 14.5 | 15.5   header top row text
     data-hdr-nav   17 | 17.5 | 18 | 19         header main menu text
     data-hdr-menu  flat | grid | bar | min | mega | old  Services dropdown style
     data-overlay   normal | dark               sub-page hero overlay
     data-hdr-open  transparent | solid         header background when menu open
     data-hdr-icons off | on                    menu icons (off = numbers)

   The attribute write below runs the instant this file is parsed
   — before <body> exists — so the page never paints the default
   and then flips (no FOUC). The bar UI waits for DOMContentLoaded.
   ============================================================= */
(function () {
  "use strict";

  var UTIL_KEY = "nll-demo-hdr-util";
  var NAV_KEY = "nll-demo-hdr-nav";
  var MENU_KEY = "nll-demo-hdr-menu";
  var OVERLAY_KEY = "nll-demo-overlay";
  var OPEN_KEY = "nll-demo-hdr-open";
  var ICONS_KEY = "nll-demo-hdr-icons";
  var HEROH_KEY = "nll-demo-hero-h";
  var CRED_KEY = "nll-demo-cred";
  var CREDM_KEY = "nll-demo-credm";
  var PROOF_KEY = "nll-demo-proof";
  var WHS_KEY = "nll-demo-whs";

  var UTIL_OPTS = ["12.8", "13.5", "14.5", "15.5"];
  var NAV_OPTS = ["17", "17.5", "18", "19"];
  var MENU_OPTS = ["grid", "mega"];
  var OVERLAY_OPTS = ["normal", "dark"];
  var OPEN_OPTS = ["solid"];
  var ICONS_OPTS = ["on"];
  var HEROH_OPTS = ["0", "30", "50", "80"];
  var CRED_OPTS = ["4", "5"];
  var CREDM_OPTS = ["0", "3", "4"];
  var PROOF_OPTS = ["0", "1", "2", "4"];
  var WHS_OPTS = ["off", "short", "long"];

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
    util: "14.5" /* F removed: locked */,
    nav: "18" /* G removed: locked */,
    menu: readStored(MENU_KEY, MENU_OPTS, "mega"),
    overlay: readStored(OVERLAY_KEY, OVERLAY_OPTS, "normal"),
    open: "solid" /* I removed: locked, same as site */,
    icons: "on" /* J removed: locked, same as site */,
    heroh: readStored(HEROH_KEY, HEROH_OPTS, "80"),
    cred: readStored(CRED_KEY, CRED_OPTS, "5"),
    credm: readStored(CREDM_KEY, CREDM_OPTS, "0"),
    proof: readStored(PROOF_KEY, PROOF_OPTS, "0"),
    whs: readStored(WHS_KEY, WHS_OPTS, "short")
  };

  function applyAttrs() {
    html.setAttribute("data-hdr-util", state.util);
    html.setAttribute("data-hdr-nav", state.nav);
    html.setAttribute("data-hdr-menu", state.menu);
    html.setAttribute("data-overlay", state.overlay);
    html.setAttribute("data-hdr-open", state.open);
    html.setAttribute("data-hdr-icons", state.icons);
    html.setAttribute("data-hero-h", state.heroh);
    html.setAttribute("data-cred", state.cred);
    html.setAttribute("data-credm", state.credm);
    html.setAttribute("data-proof", state.proof);
    html.setAttribute("data-whs", state.whs);
  }
  applyAttrs(); // runs immediately, pre-paint

  var GROUP_F = {
    code: "F", label: "Top row text", key: "util", storeKey: UTIL_KEY,
    opts: [
      { code: "F1", val: "12.8", label: "12.8px (old)" },
      { code: "F2", val: "13.5", label: "13.5px" },
      { code: "F3", val: "14.5", label: "14.5px" },
      { code: "F4", val: "15.5", label: "15.5px" }
    ]
  };
  var GROUP_G = {
    code: "G", label: "Menu text", key: "nav", storeKey: NAV_KEY,
    opts: [
      { code: "G1", val: "17", label: "17px (old)" },
      { code: "G2", val: "17.5", label: "17.5px" },
      { code: "G3", val: "18", label: "18px" },
      { code: "G4", val: "19", label: "19px" }
    ]
  };
  var GROUP_H = {
    code: "H", label: "Services menu", key: "menu", storeKey: MENU_KEY,
    opts: [
      { code: "H1", val: "grid", label: "Two columns" },
      { code: "H2", val: "mega", label: "Mega menu" }
    ]
  };
  /* W: client asked (2026-11-09) for Safety & Compliance in the top
     menu, "WHS" if the full name is too long. Top row only. */
  var GROUP_W = {
    code: "W", label: "Safety & Compliance in top row", key: "whs", storeKey: WHS_KEY,
    opts: [
      { code: "W1", val: "off", label: "Not in top row" },
      { code: "W2", val: "short", label: "WHS" },
      { code: "W3", val: "long", label: "Safety & Compliance" }
    ]
  };
  var GROUP_C = {
    code: "C", label: "Overlay", key: "overlay", storeKey: OVERLAY_KEY,
    opts: [
      { code: "C1", val: "normal", label: "Normal" },
      { code: "C2", val: "dark", label: "Dark" }
    ]
  };
  var GROUP_I = {
    code: "I", label: "Header when menu open", key: "open", storeKey: OPEN_KEY,
    opts: [
      { code: "I2", val: "solid", label: "Solid dark" }
    ]
  };
  var GROUP_J = {
    code: "J", label: "Menu icons", key: "icons", storeKey: ICONS_KEY,
    opts: [
      { code: "J2", val: "on", label: "On" }
    ]
  };

  var GROUP_K = {
    code: "K", label: "Sub-page hero height", key: "heroh", storeKey: HEROH_KEY,
    opts: [
      { code: "K1", val: "0", label: "Original" },
      { code: "K2", val: "30", label: "+30px" },
      { code: "K3", val: "50", label: "+50px" },
      { code: "K4", val: "80", label: "+80px" }
    ]
  };

  /* Codes are what the client sees; val is the stored/CSS value, so they differ.
     Any P other than P1 hides the logo strip, so L and M only apply with P1;
     any M other than M1 replaces the strip, so L only applies with M1. */
  var GROUP_P = {
    code: "P", label: "Where credentials show", key: "proof", storeKey: PROOF_KEY,
    opts: [
      { code: "P1", val: "0", label: "Logo strip (choose L + M)" },
      { code: "P2", val: "1", label: "Top section: line with logos" },
      { code: "P3", val: "2", label: "Separate section: band before quote form" },
      { code: "P4", val: "4", label: "Both: text line at top + separate section", apart: true }
    ]
  };

  var GROUP_L = {
    code: "L", label: "Logo strip style (P1 + M1 only)", key: "cred", storeKey: CRED_KEY,
    opts: [
      { code: "L1", val: "4", label: "Moving, framed" },
      { code: "L2", val: "5", label: "Moving, no frame" }
    ]
  };

  var GROUP_M = {
    code: "M", label: "Logo strip position (P1 only)", key: "credm", storeKey: CREDM_KEY,
    opts: [
      { code: "M1", val: "0", label: "Below the intro" },
      { code: "M2", val: "3", label: "Under stats, boxed" },
      { code: "M3", val: "4", label: "Under stats, 2 at a time" }
    ]
  };

  /* F/G/H (header options) show on every page; C (overlay) only
     on sub-pages, whose photo heroes it affects. Detected
     structurally (no #hero-car-track means "not the homepage"). */
  // NOTE: computed lazily inside buildBar(), not here — this file
  // runs in <head> before <body> exists.
  var GROUPS, HINT_TEXT;

  // Footer option state lives in demo-footer.js (window.__nllFooter).
  function footerVal() {
    return window.__nllFooter ? window.__nllFooter.read() : "e1";
  }

  function applies(key) {
    if (key === "credm") return state.proof === "0";
    if (key === "cred") return state.proof === "0" && state.credm === "0";
    return true;
  }

  function summary() {
    return GROUPS.filter(function (g) { return applies(g.key); }).map(currentCode).join(" + ");
  }

  function currentCode(group) {
    var current = group.key === "footer" ? footerVal() : state[group.key];
    var opt = group.opts.filter(function (o) { return o.val === current; })[0];
    return opt ? opt.code : "";
  }

  function buildBar() {
    var isHome = !!document.getElementById("hero-car-track");
    GROUPS = isHome ? [GROUP_H, GROUP_W, GROUP_P, GROUP_L, GROUP_M] : [GROUP_H, GROUP_W, GROUP_K, GROUP_C];
    HINT_TEXT = isHome ? "Tell us your pick, e.g. H2 + P1 + L2 + M1" : "Tell us your pick, e.g. H2 + K4 + C1";

    var bar = document.createElement("div");
    bar.className = "demo-bar";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Demo options");

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "demo-bar__toggle";
    toggle.setAttribute("aria-expanded", "true");
    toggle.innerHTML =
      '<span class="demo-bar__toggle-label">Demo options &mdash; ' +
      summary() +
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
        b.className = "demo-bar__opt" + (opt.apart ? " demo-bar__opt--apart" : "");
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
        b.disabled = !applies(b.dataset.group);
      }
      toggle.querySelector(".demo-bar__toggle-label").innerHTML =
        "Demo options &mdash; " + summary();
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

    setPressed();
    updateHeight();
    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateHeight, 120);
    });
  }

  document.addEventListener("DOMContentLoaded", buildBar);
})();
