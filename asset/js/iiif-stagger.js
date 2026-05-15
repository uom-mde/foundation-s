(() => {
  const CONCURRENCY = 1;      // safest for 429s
  const STAGGER_MS = 400;
  const ROOT_MARGIN = "800px";

  // ---- OpenSeadragon readiness ----
  const OSD_WAIT_MS = 5000;
  const OSD_POLL_MS = 50;

  function waitForOpenSeadragon() {
    if (typeof window.OpenSeadragon === "function") return Promise.resolve(true);
    return new Promise((resolve) => {
      const start = Date.now();
      const t = setInterval(() => {
        if (typeof window.OpenSeadragon === "function") {
          clearInterval(t);
          resolve(true);
        } else if (Date.now() - start > OSD_WAIT_MS) {
          clearInterval(t);
          resolve(false);
        }
      }, OSD_POLL_MS);
    });
  }

  function boot() {
    // Keep your “original” root logic
    const staggerContainers = document.querySelectorAll("[data-iiif-stagger]");
    const itemShowRoot = document.querySelector(".item-show");

    const roots = staggerContainers.length
      ? Array.from(staggerContainers)
      : (itemShowRoot ? [itemShowRoot] : []);

    if (!roots.length) return;

    const queue = [];
    let active = 0;

    function runQueue() {
      while (active < CONCURRENCY && queue.length) {
        const job = queue.shift();
        active++;
        job().finally(() => {
          active--;
          setTimeout(runQueue, STAGGER_MS);
        });
      }
    }

    // ---- Job 1: OpenSeadragon IIIF ----
    async function initOpenSeadragon(el) {
      if (el.dataset.iiifInited === "1") return;

      const ok = await waitForOpenSeadragon();
      if (!ok) return;

      let tileSource;
      try {
        tileSource = JSON.parse(el.dataset.tileSources);
      } catch {
        return;
      }

      try {
        window.OpenSeadragon({
          id: el.id,
          prefixUrl: el.dataset.prefixUrl,
          tileSources: [tileSource],
        });
        el.dataset.iiifInited = "1";
      } catch {
        // allow retry
      }
    }

    function enqueueOpenSeadragon(el) {
      if (el.dataset.iiifQueued === "1") return;
      el.dataset.iiifQueued = "1";
      queue.push(async () => { await initOpenSeadragon(el); });
      runQueue();
    }

    // ---- Job 2: Annona custom elements (defer connect-to-DOM) ----
    function initAnnona(el) {
      if (el.dataset.annonaInited === "1") return Promise.resolve();

      // IMPORTANT: only handle placeholders you explicitly marked as deferred
      if (el.dataset.annonaDefer !== "1") return Promise.resolve();

      // If something already injected, don’t do it again
      if (el.querySelector("iiif-storyboard")) {
        el.dataset.annonaInited = "1";
        return Promise.resolve();
      }

      const tag = el.dataset.annonaTag || "iiif-storyboard";
      let attrs = {};
      try {
        attrs = JSON.parse(el.dataset.annonaAttrs || "{}");
      } catch {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        try {
          const node = document.createElement(tag);
          Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, String(v)));

          el.innerHTML = "";
          el.appendChild(node);

          el.dataset.annonaInited = "1";
        } catch {
          // allow retry
        }
        resolve();
      });
    }

    function enqueueAnnona(el) {
      if (el.dataset.annonaQueued === "1") return;
      el.dataset.annonaQueued = "1";
      queue.push(async () => { await initAnnona(el); });
      runQueue();
    }

    // ---- IntersectionObserver: trigger jobs when near viewport ----
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        // Keep OSD behaviour unchanged
        if (
          el.classList.contains("openseadragon") &&
          el.dataset.tileSources &&
          el.dataset.iiifDefer === "1"
        ) {
          enqueueOpenSeadragon(el);

        // Annona: only defer-marked placeholders
        } else if (el.classList.contains("annona-defer")) {
          enqueueAnnona(el);
        }

        io.unobserve(el);
      });
    }, { root: null, rootMargin: ROOT_MARGIN, threshold: 0.01 });

    // Observe targets inside each root
    roots.forEach(root => {
      root.querySelectorAll('.openseadragon[data-iiif-defer="1"][data-tile-sources][id]')
        .forEach(el => io.observe(el));

      // Only observe Annona placeholders that are explicitly deferred
      root.querySelectorAll('.annona-defer[data-annona-defer="1"][data-annona-attrs]')
        .forEach(el => io.observe(el));
    });

    // ✅ Item Show: initialise immediately (and retry) for reliability
    if (itemShowRoot) {
      const initItemShow = () => {
        itemShowRoot
          .querySelectorAll('.annona-defer[data-annona-defer="1"][data-annona-attrs]')
          .forEach(el => initAnnona(el));
      };

      initItemShow();
      setTimeout(initItemShow, 50);
      setTimeout(initItemShow, 250);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();