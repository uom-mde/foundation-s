(() => {
  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function findNav(poemEl) {
    // Preferred: inside poem
    let nav = poemEl.querySelector("[data-poem-nav]");
    if (nav) return nav;

    // Fallback: closest container (Omeka block wrappers etc.)
    const container = poemEl.closest(".block, .blocks, .resource-show, main, body");
    if (!container) return null;

    // Find the nearest nav in the same container
    nav = container.querySelector("[data-poem-nav]");
    return nav || null;
  }

  function initPoemPagination(poemEl) {
    const stanzas = Array.from(poemEl.querySelectorAll("[data-stanza]"));
    const nav = findNav(poemEl);
    if (!stanzas.length || !nav) return;

    const meter = nav.querySelector("[data-poem-meter]");
    const status = nav.querySelector("[data-poem-status]");
    const prevBtn = nav.querySelector("[data-poem-prev]");
    const nextBtn = nav.querySelector("[data-poem-next]");
    const allBtn  = nav.querySelector("[data-poem-all]");
    const bar = nav.querySelector(".poem-progress__bar");

    if (!meter || !status || !prevBtn || !nextBtn || !allBtn || !bar) return;

    stanzas.forEach((s, i) => {
      if (!s.id) s.id = `stanza-${i + 1}`;
    });

    let paginated = true;
    let index = 0;

    function setActive(i, { updateHash = true } = {}) {
      index = clamp(i, 0, stanzas.length - 1);

      stanzas.forEach((s, idx) => s.classList.toggle("is-active", idx === index));

      const current = index + 1;
      const total = stanzas.length;

      const pct = total <= 1 ? 100 : ((current - 1) / (total - 1)) * 100;
      meter.style.width = `${pct}%`;

      status.textContent = `Stanza ${current} of ${total}`;
      bar.setAttribute("aria-valuemin", "1");
      bar.setAttribute("aria-valuemax", String(total));
      bar.setAttribute("aria-valuenow", String(current));

      prevBtn.disabled = current === 1;
      nextBtn.disabled = current === total;

      if (updateHash) history.replaceState(null, "", `#${stanzas[index].id}`);
    }

    function enablePagination() {
      paginated = true;
      poemEl.classList.add("is-paginated");
      nav.hidden = false;
      allBtn.textContent = "Show all";

      const hash = (location.hash || "").replace("#", "");
      const found = hash ? stanzas.findIndex(s => s.id === hash) : -1;
      setActive(found >= 0 ? found : 0, { updateHash: found >= 0 });
    }

    function disablePagination() {
      paginated = false;
      poemEl.classList.remove("is-paginated");
      nav.hidden = false;
      allBtn.textContent = "Paginate";

      stanzas.forEach(s => s.classList.remove("is-active"));

      meter.style.width = "100%";
      status.textContent = `All stanzas (${stanzas.length})`;

      bar.setAttribute("aria-valuemin", "1");
      bar.setAttribute("aria-valuemax", String(stanzas.length));
      bar.setAttribute("aria-valuenow", String(stanzas.length));

      prevBtn.disabled = true;
      nextBtn.disabled = true;

      history.replaceState(null, "", location.pathname + location.search);
    }

    prevBtn.addEventListener("click", () => paginated && setActive(index - 1));
    nextBtn.addEventListener("click", () => paginated && setActive(index + 1));
    allBtn.addEventListener("click", () => (paginated ? disablePagination() : enablePagination()));

    window.addEventListener("hashchange", () => {
      if (!paginated) return;
      const hash = (location.hash || "").replace("#", "");
      const found = stanzas.findIndex(s => s.id === hash);
      if (found >= 0) setActive(found, { updateHash: false });
    });

    nav.hidden = false;
    enablePagination();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-poem]").forEach(initPoemPagination);
  });
})();
