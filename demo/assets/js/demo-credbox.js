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

    /* M3/M4 loop endlessly: items sit in a track, followed by aria-hidden clones */
    var track = document.createElement('div');
    track.className = 'credbox__track';
    Array.prototype.slice.call(list.children).forEach(function (it) { track.appendChild(it); });
    Array.prototype.slice.call(track.children).forEach(function (it) {
      var c = it.cloneNode(true);
      c.classList.add('is-clone');
      c.classList.remove('is-on');
      c.setAttribute('aria-hidden', 'true');
      track.appendChild(c);
    });
    list.appendChild(track);
    box.appendChild(list);
    host.appendChild(box);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

  /* L4/L5: clip wrapper around #credline plus clones of its spans, so the marquee loops seamlessly. */
  function initMarquee() {
    var line = document.getElementById('credline');
    if (!line || line.parentNode.classList.contains('credline-clip')) return;
    var spans = Array.prototype.slice.call(line.children);
    if (!spans.length) return;
    var clip = document.createElement('div');
    clip.className = 'credline-clip';
    line.parentNode.insertBefore(clip, line);
    clip.appendChild(line);
    spans.forEach(function (sp) {
      var c = sp.cloneNode(true);
      c.className = 'is-clone';
      c.setAttribute('aria-hidden', 'true');
      line.appendChild(c);
    });
  }
  function waitCredline() {
    var line = document.getElementById('credline');
    if (!line) return;
    if (line.children.length) { initMarquee(); return; }
    new MutationObserver(function (m, ob) { if (line.children.length) { ob.disconnect(); initMarquee(); } })
      .observe(line, { childList: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', waitCredline); else waitCredline();
})();
