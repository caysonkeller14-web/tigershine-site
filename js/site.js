/* Tiger Shine — shared behaviour */
(function () {
  // Christmas lights lead the page from October 1 through December 31.
  if (new Date().getMonth() >= 9) document.body.classList.add('season-winter');

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { document.body.classList.remove('nav-open'); });
    });
  }

  // Before / after sliders
  document.querySelectorAll('[data-ba]').forEach(function (ba) {
    var range = ba.querySelector('.ba-range');
    if (!range) return;
    function set() { ba.style.setProperty('--pos', range.value + '%'); }
    range.addEventListener('input', set);
    set();
  });

  // SMS consent: "No texts" and the two "Yes" options are mutually exclusive.
  var cc = document.querySelector('[name="consent_customer_care"]');
  var mk = document.querySelector('[name="consent_marketing"]');
  var no = document.querySelector('[name="consent_no_texts"]');
  if (cc && mk && no) {
    [cc, mk].forEach(function (yes) {
      yes.addEventListener('change', function () { if (yes.checked) no.checked = false; });
    });
    no.addEventListener('change', function () {
      if (no.checked) { cc.checked = false; mk.checked = false; }
    });
  }

  // Reveal on scroll
  var els = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }
})();
