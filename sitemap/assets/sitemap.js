/* NextLevel Landscaping — sitemap renderer. All content comes from window.SITEMAP. */
(function () {
  'use strict';
  var D = window.SITEMAP, ROOT = D.meta.siteRoot;
  var byId = {}; D.pages.forEach(function (p) { byId[p.id] = p; });
  var NS = 'http://www.w3.org/2000/svg';

  function esc(s) { return String(s).replace(/&amp;/g, '&').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    for (var k in (attrs || {})) n.setAttribute(k, attrs[k]);
    if (html != null) n.innerHTML = html;
    return n;
  }
  function pageHref(p, slug) { return ROOT + (p.template ? p.file + (slug || instances(p)[0].slug) : p.file); }
  function instances(p) {
    if (!p.template) return [];
    for (var k in D.children) if (D.children[k].template === p.template) return D[D.children[k].list];
    return [];
  }
  function instHref(p, i) { return ROOT + p.file + i.slug; }
  function instLabel(i) { return i.name.replace(/&amp;/g, '&'); }

  /* ---------- facts ---------- */
  var nTemplates = D.pages.filter(function (p) { return p.template; }).length;
  var totalPages = D.pages.length - nTemplates + D.services.length + D.projects.length + D.jobs.length;
  document.getElementById('facts').innerHTML =
    '<li><b>' + D.pages.length + '</b> files</li><li><b>' + totalPages + '</b> reachable pages</li>' +
    '<li><b>' + D.services.length + '</b> services</li><li><b>' + D.projects.length + '</b> projects</li>' +
    '<li><b>' + D.jobs.length + '</b> live jobs</li><li>Updated <b>' + esc(D.meta.updated) + '</b></li>';
  document.getElementById('foot-shared').textContent = D.meta.sharedNote;
  document.getElementById('foot-updated').textContent = 'Last updated ' + D.meta.updated + '.';

  /* ---------- 1. tree ---------- */
  function treeNode(p, cls, sub) {
    return '<a class="node ' + (cls || '') + '" href="' + esc(pageHref(p)) + '">' + esc(p.name) + (sub ? '<small>' + esc(sub) + '</small>' : '') + '</a>';
  }
  function buildTree() {
    var home = byId.home, out = '';
    out += '<div class="tree__root">' + treeNode(home, 'node--root', 'index.html') + '</div>';
    out += '<ul class="tree__l1">';
    var order = D.navOrder.slice(); order.push('privacy');
    order.forEach(function (id, n) {
      var p = byId[id], ch = D.children[id], kids = ch ? D[ch.list] : null;
      var tpl = ch ? byId[ch.template] : null, cid = 'kids-' + id;
      var sub = p.file + (id === 'privacy' ? ' · footer' : '');
      out += '<li><div class="branch">' + treeNode(p, p.goal ? 'node--goal' : '', sub);
      if (kids) {
        out += '<button class="tg" type="button" aria-expanded="true" aria-controls="' + cid + '" aria-label="Collapse ' + esc(p.name) + ' pages (' + kids.length + ')"><i class="fa-solid fa-chevron-down" aria-hidden="true"></i></button>' +
               '</div><ul class="tree__kids" id="' + cid + '" aria-label="' + esc(p.name) + ' pages">';
        kids.forEach(function (k) {
          out += '<li><a class="node node--kid" href="' + esc(instHref(tpl, k)) + '">' + esc(instLabel(k)) + '<small>' + esc(tpl.file + k.slug) + '</small></a></li>';
        });
        out += '</ul>';
      } else out += '</div>';
      out += '</li>';
    });
    out += '</ul><p class="tree__note">Privacy &amp; Security is linked from the footer only; every other top-level page is in the menu. Menu order shown matches the mobile drawer and footer.</p>';
    document.getElementById('tree-mount').innerHTML = out;

    var toggles = document.querySelectorAll('.tg');
    function setOpen(btn, open) {
      var ul = document.getElementById(btn.getAttribute('aria-controls'));
      var name = ul.getAttribute('aria-label').replace(/ pages$/, '');
      btn.setAttribute('aria-expanded', open);
      btn.setAttribute('aria-label', (open ? 'Collapse ' : 'Expand ') + name + ' pages (' + ul.children.length + ')');
      ul.hidden = !open;
    }
    toggles.forEach(function (b) { b.addEventListener('click', function () { setOpen(b, b.getAttribute('aria-expanded') !== 'true'); }); });
    document.getElementById('expand-all').addEventListener('click', function () { toggles.forEach(function (b) { setOpen(b, true); }); });
    document.getElementById('collapse-all').addEventListener('click', function () { toggles.forEach(function (b) { setOpen(b, false); }); });
  }

  /* ---------- 2. flow (inline SVG) ---------- */
  var F = D.flow, fnodes = {}; F.nodes.forEach(function (n) { fnodes[n.id] = n; });
  var mq = window.matchMedia('(min-width: 1024px)');
  function s(tag, attrs, text) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    return n;
  }
  function edgePath(e, L) {
    var a = fnodes[e.from][L], b = fnodes[e.to][L];
    var ar = { x: a.x + a.w, y: a.y + a.h / 2 }, al = { x: a.x, y: a.y + a.h / 2 };
    var bl = { x: b.x, y: b.y + b.h / 2 }, br = { x: b.x + b.w, y: b.y + b.h / 2 };
    var f = e.from, t = e.to;
    if (f === 'float') return 'M' + (a.x + a.w / 2) + ',' + a.y + ' V' + (b.y + b.h);
    if (L === 'wide') {
      if (t === 'contact') return 'M' + ar.x + ',' + ar.y + ' C' + (ar.x + 45) + ',' + ar.y + ' ' + (bl.x - 45) + ',' + bl.y + ' ' + bl.x + ',' + bl.y;
      if (f === 'entry' || f === 'home') return 'M' + ar.x + ',' + ar.y + ' C' + (ar.x + 30) + ',' + ar.y + ' ' + (bl.x - 30) + ',' + bl.y + ' ' + bl.x + ',' + bl.y;
      return 'M' + ar.x + ',' + ar.y + ' H' + bl.x;
    }
    /* tall */
    if (f === 'entry') return 'M' + (a.x + a.w / 2) + ',' + (a.y + a.h) + ' V' + b.y;
    if (f === 'home') {
      var left = b.x < 100, tx = 170;
      return 'M' + tx + ',' + (a.y + a.h) + ' V' + bl.y + ' H' + (left ? b.x + b.w : b.x);
    }
    if (t === 'contact') {
      if (e.rail === 'l') return 'M' + a.x + ',' + al.y + ' H6 V' + bl.y + ' H' + b.x;
      return 'M' + (a.x + a.w) + ',' + al.y + ' H334 V' + br.y + ' H' + (b.x + b.w);
    }
    return 'M' + (a.x + a.w / 2) + ',' + (a.y + a.h) + ' V' + b.y;
  }
  function buildFlow() {
    var L = mq.matches ? 'wide' : 'tall', mount = document.getElementById('flow-mount');
    var vb = L === 'wide' ? [1100, 570] : [340, 800];
    var svg = s('svg', { viewBox: '0 0 ' + vb[0] + ' ' + vb[1], role: 'group', class: 'flow__svg flow__svg--' + L, 'aria-label': 'Visitor flow map. A list of the same journeys follows below.' });
    var defs = s('defs', {});
    [['arr', '#6B6F62'], ['arrm', '#3E4A16']].forEach(function (m) {
      var mk = s('marker', { id: m[0], viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: m[0] === 'arrm' ? 5 : 7, markerHeight: m[0] === 'arrm' ? 5 : 7, orient: 'auto-start-reverse' });
      mk.appendChild(s('path', { d: 'M0,0 L10,5 L0,10 z', fill: m[1] }));
      defs.appendChild(mk);
    });
    svg.appendChild(defs);
    var edges = F.edges;
    var g = s('g', {});
    edges.slice().sort(function (a, b) { return (a.main ? 1 : 0) - (b.main ? 1 : 0); }).forEach(function (e) {
      var cls = 'fedge' + (e.main ? ' fedge--main' : '') + (e.dashed ? ' fedge--dash' : '');
      var pa = { d: edgePath(e, L), class: cls };
      if (!(L === 'tall' && e.from === 'home')) pa['marker-end'] = 'url(#' + (e.main ? 'arrm' : 'arr') + ')';
      g.appendChild(s('path', pa));
    });
    svg.appendChild(g);
    F.nodes.forEach(function (n) {
      var p = n[L], page = n.page ? byId[n.page] : (n.id === 'float' ? byId.contact : null);
      var grp = s('g', { class: 'fnode fnode--' + n.kind });
      var inner = grp;
      if (page) {
        inner = s('a', { href: pageHref(page), 'aria-label': n.label + (n.sub ? ', ' + n.sub : '') + ' — open ' + page.file.replace('?slug=', '') });
        grp.appendChild(inner);
      }
      inner.appendChild(s('rect', { x: p.x, y: p.y, width: p.w, height: p.h, rx: 10 }));
      var cx = p.x + p.w / 2, big = L === 'wide' ? 16 : 14;
      var lines = n.label.length > 20 && n.kind !== 'page' ? wrap(n.label, 20) : [n.label];
      var total = lines.length + (n.sub ? 0.85 : 0), y0 = p.y + p.h / 2 - (total - 1) * big * 0.6 + (n.sub ? -2 : 0);
      lines.forEach(function (ln, i) { inner.appendChild(s('text', { x: cx, y: y0 + i * big * 1.2 + big * 0.35, 'text-anchor': 'middle', 'font-size': big, 'font-weight': 500 }, ln)); });
      if (n.sub) inner.appendChild(s('text', { x: cx, y: y0 + lines.length * big * 1.2 + 4, 'text-anchor': 'middle', class: 'fsub' }, n.sub));
      svg.appendChild(grp);
    });
    mount.innerHTML = ''; mount.appendChild(svg);
    document.getElementById('flow-note').textContent = 'Header, drawer and footer link every page from every page; this map shows the intended journeys, not every possible click.';
  }
  function wrap(t, n) {
    var w = t.split(' '), l = [], cur = '';
    w.forEach(function (x) { if ((cur + ' ' + x).trim().length > n && cur) { l.push(cur); cur = x; } else cur = (cur + ' ' + x).trim(); });
    if (cur) l.push(cur); return l;
  }
  function buildJourneys() {
    document.getElementById('journeys').innerHTML = F.journeys.map(function (j) {
      var steps = j.steps.map(function (id) {
        var n = fnodes[id], page = n.page ? byId[n.page] : (id === 'float' ? byId.contact : null);
        return '<li>' + (page ? '<a href="' + esc(pageHref(page)) + '">' + esc(n.label) + '</a>' : '<span class="pn">' + esc(n.label) + '</span>') + '</li>';
      }).join('');
      return '<li class="journey' + (j.main ? ' journey--main' : '') + '"><h3>' + esc(j.name) + '</h3><p>' + esc(j.note) + '</p><ol>' + steps + '</ol></li>';
    }).join('');
  }

  /* ---------- 3. inventory ---------- */
  var filt = { type: 'all', status: 'all' };
  function statusesOf(p) {
    var set = [p.status], n = 0;
    instances(p).forEach(function (i) { if (i.status && i.status !== 'built') { n++; if (set.indexOf(i.status) < 0) set.push(i.status); } });
    return { list: set, waitingInst: n };
  }
  function badgeHtml(st, extra) {
    var ic = { built: 'fa-circle-check', placeholder: 'fa-pen-ruler', waiting: 'fa-hourglass-half' }[st];
    return '<span class="st st--' + st + '"><i class="fa-solid ' + ic + '" aria-hidden="true"></i>' + esc(D.statuses[st]) + (extra ? ' (' + extra + ')' : '') + '</span>';
  }
  function buildInventory() {
    var html = D.pages.map(function (p) {
      var st = statusesOf(p), inst = instances(p), tpl = p.template;
      var b = '';
      st.list.forEach(function (x) { b += badgeHtml(x, x === 'waiting' && x !== p.status ? st.waitingInst + ' of ' + inst.length : ''); });
      var comps = p.shared.map(function (c) { return '<li>' + esc(D.components[c]) + '</li>'; }).join('');
      var secs = p.sections.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('');
      var iv = '';
      if (tpl) iv = '<h4>Renders ' + inst.length + ' pages</h4><ul class="inst">' + inst.map(function (i) {
        return '<li><a href="' + esc(instHref(p, i)) + '">' + esc(instLabel(i)) + '</a>' + (i.status ? ' <span class="w">— ' + esc(D.statuses[i.status].toLowerCase()) + '</span>' : '') + '</li>';
      }).join('') + '</ul>';
      var notes = '';
      if (p.note) notes += '<p class="pgc__note">' + esc(p.note) + '</p>';
      inst.forEach(function (i) { if (i.note) notes += '<p class="pgc__note"><b>' + esc(instLabel(i)) + ':</b> ' + esc(i.note) + '</p>'; });
      return '<li class="pgc" data-type="' + p.type + '" data-status="' + st.list.join(' ') + '">' +
        '<div class="pgc__top"><span class="type-tag">' + esc(D.types[p.type]) + '</span><span class="sts">' + b + '</span></div>' +
        '<h3>' + esc(p.name) + '</h3>' +
        '<a class="pgc__file" href="' + esc(pageHref(p)) + '"><code>' + esc(p.file) + '</code></a>' +
        '<p>' + esc(p.purpose) + '</p>' +
        '<h4>Sections</h4><ul>' + secs + '</ul>' +
        '<h4>Shared components</h4><ul class="tags">' + comps + '</ul>' + iv + notes + '</li>';
    }).join('');
    document.getElementById('inv-mount').innerHTML = html;

    function chips(mountId, key, items, count) {
      var m = document.getElementById(mountId);
      m.innerHTML = items.map(function (it) {
        return '<li><button type="button" class="btn-p" data-v="' + it[0] + '" aria-pressed="' + (it[0] === 'all') + '">' + esc(it[1]) + ' <small>' + count(it[0]) + '</small></button></li>';
      }).join('');
      m.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        filt[key] = b.dataset.v;
        m.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
        apply();
      });
    }
    var cards = [].slice.call(document.querySelectorAll('#inv-mount .pgc'));
    function n(attr, v) { return cards.filter(function (c) { return v === 'all' || (' ' + c.dataset[attr] + ' ').indexOf(' ' + v + ' ') >= 0; }).length; }
    chips('type-chips', 'type', [['all', 'All']].concat(Object.keys(D.types).map(function (k) { return [k, D.types[k]]; })), function (v) { return n('type', v); });
    chips('status-chips', 'status', [['all', 'All']].concat(Object.keys(D.statuses).map(function (k) { return [k, D.statuses[k]]; })), function (v) { return n('status', v); });
    function apply() {
      var shown = 0;
      cards.forEach(function (c) {
        var ok = (filt.type === 'all' || c.dataset.type === filt.type) && (filt.status === 'all' || (' ' + c.dataset.status + ' ').indexOf(' ' + filt.status + ' ') >= 0);
        c.hidden = !ok; if (ok) shown++;
      });
      document.getElementById('inv-count').textContent = 'Showing ' + shown + ' of ' + cards.length + ' files';
      document.getElementById('inv-empty').hidden = shown > 0;
    }
    apply();
  }

  /* ---------- tabs ---------- */
  var tabs = ['tree', 'flow', 'inventory'];
  function show(name, focus) {
    if (tabs.indexOf(name) < 0) name = 'tree';
    tabs.forEach(function (t) {
      var on = t === name, b = document.getElementById('tab-' + t);
      b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1;
      document.getElementById('panel-' + t).hidden = !on;
      if (on && focus) b.focus();
    });
    if (name === 'flow') buildFlow();
    try { history.replaceState(null, '', '#' + name); } catch (e) {}
  }
  document.getElementById('tablist').addEventListener('click', function (e) {
    var b = e.target.closest('[role=tab]'); if (b) show(b.id.replace('tab-', ''));
  });
  document.getElementById('tablist').addEventListener('keydown', function (e) {
    var i = tabs.indexOf(document.activeElement.id.replace('tab-', '')); if (i < 0) return;
    var k = e.key, n = k === 'ArrowRight' ? (i + 1) % 3 : k === 'ArrowLeft' ? (i + 2) % 3 : k === 'Home' ? 0 : k === 'End' ? 2 : -1;
    if (n >= 0) { e.preventDefault(); show(tabs[n], true); }
  });
  window.addEventListener('hashchange', function () { show(location.hash.slice(1)); });
  mq.addEventListener('change', buildFlow);
  document.getElementById('print-btn').addEventListener('click', function () { buildFlow(); window.print(); });
  window.addEventListener('beforeprint', function () { buildFlow(); });

  buildTree(); buildJourneys(); buildInventory(); buildFlow();
  show(location.hash.slice(1));
})();
