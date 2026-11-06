/* Demo only: credential "proof" options (group P).
   P2 = slim proof line in the top section, P3 = proof band before the quote form,
   P4 = text line under the hero buttons + the band (stored values 1, 2, 4).
   CSS in demo-variants.css shows/hides each block from html[data-proof]. */
(function () {
  'use strict';
  var D = window.NLL;
  if (!D || !Array.isArray(D.credentials)) return;

  /* Licence verify link: confirm the exact CBS register URL with the client before launch. */
  var VERIFY = 'https://www.cbs.sa.gov.au/';
  var LIC = 'BLD320507';
  var marks = D.credentials.filter(function (c) { return c.logo; });

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  /* surface = 'dark' (white/reversed logo) or 'light' (black/dark logo) */
  function logo(c, surface) {
    var img = document.createElement('img');
    img.src = surface === 'light' && c.logoLight ? c.logoLight : c.logo; img.alt = c.alt || ''; img.width = c.w; img.height = c.h;
    img.loading = 'lazy';
    if (c.w && c.h && Math.abs(c.w - c.h) / Math.max(c.w, c.h) <= 0.2) img.className = 'is-square';
    return img;
  }
  function verifyLink(text, cls) {
    var a = el('a', cls || 'proof-verify', text || 'Verify the licence');
    a.href = VERIFY; a.target = '_blank'; a.rel = 'noopener';
    return a;
  }
  /* Logos are shown exactly as supplied (never recoloured). Each sits on the surface its supplied
     version needs: MLSA's coloured logo on a light plate, the white CITB / Lawn Solutions logos on a dark plate. */
  function plate(c, surface) {
    var alt = c.alt || '';
    var kind = /icn/i.test(alt) ? 'badge' : 'plain';
    var p = el('span', 'proof-plate proof-plate--' + kind);
    if (kind === 'badge') {
      /* ICN's own embed links the badge to the company's Gateway profile; swap in the real profile URL when the client has it */
      var a = el('a');
      a.href = 'https://gateway.icn.org.au/'; a.target = '_blank'; a.rel = 'noopener';
      a.appendChild(logo(c, surface)); p.appendChild(a);
    } else p.appendChild(logo(c, surface));
    return p;
  }
  function marksList(list, cls, surface) {
    var ul = el('ul', cls);
    list.forEach(function (c) { var li = document.createElement('li'); li.appendChild(plate(c, surface)); ul.appendChild(li); });
    return ul;
  }

  function buildHome() {
    var intro = document.getElementById('intro');
    if (!intro) return;

    /* P2: slim proof line */
    var a = el('div', 'proof-a');
    a.appendChild(el('span', 'proof-a__label', 'Licensed &amp; accredited'));
    var lic = el('span', 'proof-a__lic', 'Licensed builder <b>' + LIC + '</b> ');
    lic.appendChild(verifyLink('Verify &rarr;', 'proof-a__verify'));
    a.appendChild(lic);
    a.appendChild(marksList(marks, 'proof-a__marks', 'dark'));
    intro.querySelector('.container').appendChild(a);

    /* P4: one line under the hero buttons */
    var btns = intro.querySelector('.btns');
    if (btns) {
      var line = el('p', 'proof-c__line',
        '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> Licensed builder <b>' + LIC + '</b> &middot; Master Landscapers SA member &middot; ');
      line.appendChild(verifyLink('Verify', 'proof-c__verify'));
      btns.insertAdjacentElement('afterend', line);
    }

    /* P3, P4: proof band right before the quote section (the neighbours there don't overlap) */
    var after = document.getElementById('contact');
    if (after) {
      var sec = el('section', 'band proof-b');
      sec.id = 'proof';
      var wrap = el('div', 'container proof-b__grid');
      var left = el('div', 'proof-b__lead');
      left.appendChild(el('span', 'eyebrow', 'Licensed &amp; accredited'));
      left.appendChild(el('h2', null, 'Licensed builder ' + LIC));
      left.appendChild(el('p', 'lead', 'Check it yourself on the SA Consumer and Business Services licence register.'));
      var btnRow = el('div', 'btns');
      var vb = verifyLink('Verify our licence', 'btn-ghost btn-ghost--fill');
      btnRow.appendChild(vb);
      var more = el('a', 'btn-ghost', 'All credentials'); more.href = 'compliance.html';
      btnRow.appendChild(more);
      left.appendChild(btnRow);
      var right = el('ul', 'proof-b__cards');
      function meaning(c) {
        var a = (c.alt || '').toLowerCase();
        if (a.indexOf('master') > -1) return 'Member, Master Landscapers South Australia';
        if (a.indexOf('icn') > -1) return 'Registered supplier on ICN Gateway';
        if (a.indexOf('lawn') > -1) return 'Authorised Lawn Solutions Australia installer';
        return 'Registered with CITB South Australia';
      }
      marks.forEach(function (c) {
        var li = document.createElement('li');
        li.appendChild(plate(c, 'light'));
        li.appendChild(el('span', 'proof-b__text', meaning(c)));
        right.appendChild(li);
      });
      wrap.appendChild(left); wrap.appendChild(right);
      sec.appendChild(wrap);
      after.insertAdjacentElement('beforebegin', sec);
    }
  }

  function init() { buildHome(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
