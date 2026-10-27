/* Demo only: fills the Services mega-menu panels from window.NLL.services. */
(function () {
  'use strict';

  function decode(s) {
    var t = document.createElement('textarea');
    t.innerHTML = s == null ? '' : String(s);
    return t.value;
  }

  function slugify(raw) {
    return String(raw == null ? '' : raw)
      .toLowerCase()
      .replace(/&amp;/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function build(panel, services) {
    var mega = el('div', 'mega');

    var list = el('ul', 'mega__list');
    services.forEach(function (svc, i) {
      var li = el('li');
      var a = el('a', 'mega__svc');
      a.setAttribute('href', 'service.html?slug=' + encodeURIComponent(svc.slug || ''));
      a.setAttribute('data-i', String(i));
      var icon = el('i');
      icon.className = String(svc.icon || '');
      icon.setAttribute('aria-hidden', 'true');
      a.appendChild(icon);
      a.appendChild(el('span', 'mega__no', String(i + 1).padStart(2, '0')));
      a.appendChild(el('span', 'mega__name', decode(svc.name)));
      li.appendChild(a);
      list.appendChild(li);
    });
    var allLi = el('li');
    var all = el('a', 'mega__all', 'All services');
    all.setAttribute('href', 'services.html');
    allLi.appendChild(all);
    list.appendChild(allLi);
    mega.appendChild(list);

    var subs = el('div', 'mega__subs');
    subs.appendChild(el('p', 'mega__label', 'Options'));
    subs.appendChild(el('ul', 'mega__sublist'));
    mega.appendChild(subs);

    var preview = el('div', 'mega__preview');
    var fig = el('div', 'mega__fig');
    var img = el('img');
    img.setAttribute('alt', '');
    img.setAttribute('decoding', 'async');
    img.setAttribute('width', '1200');
    img.setAttribute('height', '800');
    fig.appendChild(img);
    preview.appendChild(fig);
    preview.appendChild(el('p', 'mega__desc'));
    var view = el('a', 'mega__view', '');
    view.setAttribute('href', '#');
    preview.appendChild(view);
    mega.appendChild(preview);

    function show(i) {
      var svc = services[i];
      if (!svc) return;
      var anchors = mega.querySelectorAll('.mega__svc');
      Array.prototype.forEach.call(anchors, function (a, k) {
        a.classList.toggle('is-on', k === i);
      });

      var sublist = mega.querySelector('.mega__sublist');
      sublist.textContent = '';
      (svc.subs || []).forEach(function (sub) {
        var li = el('li');
        var a = el('a', null, decode(sub.label));
        a.setAttribute('href', 'service.html?slug=' + encodeURIComponent(svc.slug || '') +
          '#sub=' + encodeURIComponent(slugify(sub.label)));
        li.appendChild(a);
        sublist.appendChild(li);
      });

      var pImg = mega.querySelector('.mega__fig img');
      if (svc.img) pImg.setAttribute('src', svc.img);
      else pImg.removeAttribute('src');
      pImg.loading = i === 0 ? 'eager' : 'lazy';

      mega.querySelector('.mega__desc').textContent = decode(svc.desc);
      var v = mega.querySelector('.mega__view');
      var name = decode(svc.name);
      v.textContent = 'View ' + name;
      v.setAttribute('href', 'service.html?slug=' + encodeURIComponent(svc.slug || ''));
    }

    mega.querySelectorAll('.mega__svc').forEach(function (a) {
      var h = function () { show(Number(a.getAttribute('data-i'))); };
      a.addEventListener('mouseover', h);
      a.addEventListener('focusin', h);
    });

    panel.appendChild(mega);
    show(0);
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!window.NLL || !Array.isArray(window.NLL.services) || !window.NLL.services.length) return;
    document.querySelectorAll('.hdr2__drop-panel').forEach(function (panel) {
      if (panel.querySelector('.mega')) return;
      build(panel, window.NLL.services);
    });
  });
})();
