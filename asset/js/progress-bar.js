(() => {
  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function initPoemProgress(poemEl) {
    const body = poemEl.querySelector("[data-poem-body]");
    const nav = poemEl.querySelector("[data-poem-nav]");
    const meter = poemEl.querySelector("[data-poem-meter]");
    const status = poemEl.querySelector("[data-poem-status]");
    const bar = poemEl.querySelector(".poem-progress__bar");

    if (!body || !nav || !meter || !status || !bar) return;

    nav.hidden = false;

    function update() {
      const rect = body.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;

      // When poem body starts at top of viewport => progress begins
      // When poem body ends at bottom of viewport => progress ends
      const start = viewportH * 0.15; // small offset so it doesn’t jump at first sight
      const total = rect.height - viewportH * 0.7; // reading window

      let pct;
      if (rect.top >= start) {
        pct = 0;
      } else if (rect.bottom <= viewportH * 0.85) {
        pct = 100;
      } else {
        const progressed = (start - rect.top);
        pct = (progressed / total) * 100;
      }

      pct = clamp(pct, 0, 100);
      const pctRound = Math.round(pct);

      meter.style.width = `${pct}%`;
      status.textContent = `${pctRound}%`;
      bar.setAttribute("aria-valuenow", String(pctRound));
    }

    // Update on scroll + resize
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-poem]").forEach(initPoemProgress);
  });
})();
