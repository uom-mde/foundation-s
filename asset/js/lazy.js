document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // 1. Swap in image src:
      const img = entry.target.querySelector('img.lazy-image');
      if (img && img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }

      // 2. Swap in embeds (iframe/video):
      const embed = entry.target.querySelector('.lazy-embed');
      if (embed && embed.dataset.src) {
        const url = embed.dataset.src;
        // If it’s an iframe:
        if (url.match(/^https?:\/\//)) {
          const iframe = document.createElement('iframe');
          iframe.src = url;
          iframe.allowFullscreen = true;
          embed.appendChild(iframe);
        }
        // Or adapt for <video> tags here…
        embed.removeAttribute('data-src');
      }

      // 3. Reveal the block
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
