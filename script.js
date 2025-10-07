// I'm Accomplished Landing Scripts
// - Lightweight intersection observer for fade/slide animations
// - Smooth scroll for in-page anchors
// - Respects prefers-reduced-motion
// - Dynamic copyright year

(function () {
  const supportsReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveal on scroll
  if (!supportsReducedMotion && 'IntersectionObserver' in window) {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    revealElements.forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (ev) => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (target) {
        ev.preventDefault();
        target.scrollIntoView({ behavior: supportsReducedMotion ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });

  // Dynamic year
  const yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();