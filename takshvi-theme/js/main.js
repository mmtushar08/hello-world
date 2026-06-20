/* ============================================================
   Takshvi Agency — Global JS
   GSAP ScrollTrigger animations — subtle fade/slide only
   ============================================================ */

(function () {
  'use strict';

  // Wait for GSAP + ScrollTrigger to be available
  function init() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // ---- Reveal: fade up (generic .reveal elements) ----
    gsap.utils.toArray('.reveal').forEach(function (el) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      });
    });

    // ---- Reveal left ----
    gsap.utils.toArray('.reveal-left').forEach(function (el) {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      });
    });

    // ---- Reveal right ----
    gsap.utils.toArray('.reveal-right').forEach(function (el) {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      });
    });

    // ---- Stagger children inside .stagger-parent ----
    gsap.utils.toArray('.stagger-parent').forEach(function (parent) {
      var children = parent.querySelectorAll('.stagger-child');
      if (!children.length) return;

      gsap.set(children, { opacity: 0, y: 28 });
      gsap.to(children, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: parent,
          start: 'top 85%',
          once: true,
        },
      });
    });

    // ---- Counter animation for stats ----
    gsap.utils.toArray('.stat-number[data-count]').forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var prefix = el.getAttribute('data-prefix') || '';

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: function () {
          gsap.fromTo(
            { val: 0 },
            { val: target, duration: 1.8, ease: 'power2.out',
              onUpdate: function () {
                el.textContent = prefix + Math.round(this.targets()[0].val) + suffix;
              },
            }
          );
        },
      });
    });

    // ---- Horizontal line draw (dividers) ----
    gsap.utils.toArray('.line-draw').forEach(function (el) {
      gsap.fromTo(el,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
        }
      );
    });
  }

  // Nav scroll behavior
  function initNav() {
    var nav = document.querySelector('.site-nav');
    if (!nav) return;

    var scrolled = false;
    window.addEventListener('scroll', function () {
      var s = window.scrollY > 20;
      if (s !== scrolled) {
        scrolled = s;
        nav.classList.toggle('site-nav--scrolled', scrolled);
      }
    }, { passive: true });
  }

  // Mobile nav toggle
  function initMobileNav() {
    var toggle = document.querySelector('.nav__toggle');
    var menu = document.querySelector('.nav__menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
      document.body.style.overflow = open ? '' : 'hidden';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      init();
      initNav();
      initMobileNav();
    });
  } else {
    init();
    initNav();
    initMobileNav();
  }
})();
