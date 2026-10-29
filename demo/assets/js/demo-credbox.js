/* Demo only: builds the credentials box that sits under the homepage stats (option group M). */
(function () {
  'use strict';
  var D = window.NLL;
  function init() {
    var host = document.querySelector('#intro .intro-figures');
    if (!host || !D || !Array.isArray(D.credentials) || host.querySelector('.credbox')) return;

    var box = document.createElement('div');
    box.className = 'credbox';
    box.id = 'credbox';

    var label = document.createElement('p');
    label.className = 'credbox__label';
    label.textContent = 'Licensed & accredited';
    box.appendChild(label);

    var list = document.createElement('div');
    list.className = 'credbox__list';
    D.credentials.forEach(function (c, i) {
      var item = document.createElement('div');
      item.className = 'credbox__item' + (i === 0 ? ' is-on' : '');
      var mark = document.createElement('span');
      mark.className = 'credbox__mark';
      if (c.logo) {
        var img = document.createElement('img');
        img.src = c.logo;
        img.alt = c.alt || '';
        img.width = c.w; img.height = c.h;
        mark.appendChild(img);
      } else {
        var ic = document.createElement('i');
        ic.className = String(c.icon || '');
        ic.setAttribute('aria-hidden', 'true');
        mark.appendChild(ic);
      }
      var text = document.createElement('span');
      text.className = 'credbox__text';
      text.innerHTML = c.text; /* first-party data.js, same as main.js credline */
      item.appendChild(mark);
      item.appendChild(text);
      list.appendChild(item);
    });
    box.appendChild(list);

    var dots = document.createElement('div');
    dots.className = 'credbox__dots';
    dots.setAttribute('aria-hidden', 'true');
    D.credentials.forEach(function (_, i) {
      var d = document.createElement('i');
      if (i === 0) d.className = 'is-on';
      dots.appendChild(d);
    });
    box.appendChild(dots);
    host.appendChild(box);

    /* M3 only: fade through the credentials one at a time */
    var n = 0, items = list.children, dotEls = dots.children;
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    function show(k) {
      for (var j = 0; j < items.length; j++) {
        items[j].classList.toggle('is-on', j === k);
        dotEls[j].className = j === k ? 'is-on' : '';
      }
    }
    if (!reduce) {
      setInterval(function () {
        if (document.documentElement.getAttribute('data-credm') !== '3' || document.hidden) return;
        n = (n + 1) % items.length;
        show(n);
      }, 3500);
    }
    list.addEventListener('mouseover', function (e) {
      var it = e.target.closest && e.target.closest('.credbox__item');
      if (!it || document.documentElement.getAttribute('data-credm') !== '3') return;
      n = Array.prototype.indexOf.call(items, it); show(n);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
