(function () {
  'use strict';

  // Stagger-задержки для карточек внутри reveal-group
  document.querySelectorAll('.reveal-group').forEach(function (group) {
    group.querySelectorAll('.reveal').forEach(function (el, i) {
      el.style.transitionDelay = (i * 0.1) + 's';
    });
  });

  // Scroll reveal: элемент появляется когда входит в viewport
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '-40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
}());
