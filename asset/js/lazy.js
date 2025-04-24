document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // Lazy‑load every element with .lazy-media inside this block:
      entry.target.querySelectorAll('.lazy-media').forEach(el => {
        const src = el.dataset.src;
        if (!src) return;
        // If it's an <img>, set src:
        if (el.tagName.toLowerCase() === 'img') {
          el.src = src;
        } else {
          // Otherwise assume it's an iframe (or video) and set src too:
          el.src = src;
        }
        el.removeAttribute('data-src');
      });

      // Reveal the block
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el =>
    observer.observe(el)
  );
});
