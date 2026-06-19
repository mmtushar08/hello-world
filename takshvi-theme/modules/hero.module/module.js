(function () {
  // Hero entrance animation — runs immediately on page load (no scroll trigger needed)
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof gsap === 'undefined') return;

    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero .badge',      { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55 }, 0.1)
      .fromTo('.hero__headline',   { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.7  }, 0.25)
      .fromTo('.hero__subtext',    { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6  }, 0.45)
      .fromTo('.hero__actions',    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55 }, 0.6)
      .fromTo('.hero__proof',      { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5  }, 0.75)
      .fromTo('.hero__visual-card',{ opacity: 0, x: 32 }, { opacity: 1, x: 0, duration: 0.8  }, 0.35);

    // Override .reveal initial state for hero section (already animated above)
    document.querySelectorAll('.hero .reveal, .hero .reveal-right').forEach(function (el) {
      el.style.opacity = '';
      el.style.transform = '';
    });
  });
})();
