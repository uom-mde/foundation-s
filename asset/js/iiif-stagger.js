(() => {
  const CONCURRENCY = 1;
  const STAGGER_MS = 400;
  const ROOT_MARGIN = "800px";

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
    const containers = document.querySelectorAll("[data-iiif-stagger]");
    const roots = containers.length ? Array.from(containers) : [document];

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

    function initAnnona(el) {
      if (el.dataset.annonaInited === "1") return Promise.resolve();

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

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        if (
          el.classList.contains("openseadragon") &&
          el.dataset.tileSources &&
          el.dataset.iiifDefer === "1"
        ) {
          enqueueOpenSeadragon(el);
        } else if (el.classList.contains("annona-defer")) {
          enqueueAnnona(el);
        }

        io.unobserve(el);
      });
    }, { root: null, rootMargin: ROOT_MARGIN, threshold: 0.01 });

    // Observe targets (blocks + item show fallback)
    roots.forEach(root => {
      root.querySelectorAll(".annona-defer[data-annona-attrs]").forEach(el => io.observe(el));
      root
        .querySelectorAll('.openseadragon[data-iiif-defer="1"][data-tile-sources][id]')
        .forEach(el => io.observe(el));
    });

    // Kickstart: ensures Item Show loads even if IO doesn't fire immediately
    roots.forEach(root => {
      root.querySelectorAll(".annona-defer[data-annona-attrs]").forEach(enqueueAnnona);
      root
        .querySelectorAll('.openseadragon[data-iiif-defer="1"][data-tile-sources][id]')
        .forEach(enqueueOpenSeadragon);
    });
  }

  // IMPORTANT: this must be OUTSIDE boot(), at the bottom of the IIFE
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
