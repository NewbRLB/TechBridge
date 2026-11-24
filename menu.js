// Mobile menu toggle for TechBridge pages
(function () {
  var header = document.querySelector('header');
  var btn = document.querySelector('.nav-toggle');
  if (!header || !btn) return;
  function setOpen(open) {
    header.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? '✕' : '☰';
  }
  btn.addEventListener('click', function () { setOpen(!header.classList.contains('menu-open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  window.matchMedia('(min-width: 901px)').addEventListener('change', function () { setOpen(false); });
})();
