(() => {
  const CONCURRENCY = 1;      // safest for 429s
  const STAGGER_MS = 400;     // delay between starting viewers
  const ROOT_MARGIN = "800px";
  const OSD_WAIT_MS = 5000;   // max time to wait for OpenSeadragon to be available
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
    if (!containers.length) return;

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
      // Don’t lock it out until we actually succeed
      if (el.dataset.iiifInited === "1") return;

      const ok = await waitForOpenSeadragon();
      if (!ok) {
        // If OSD never became available, allow future retries (don’t mark inited)
        return;
      }

      let tileSource;
      try {
        tileSource = JSON.parse(el.dataset.tileSources);
      } catch (e) {
        return;
      }

      try {
        window.OpenSeadragon({
          id: el.id,
          prefixUrl: el.dataset.prefixUrl,
          tileSources: [tileSource],
        });

        el.dataset.iiifInited = "1";
      } catch (e) {
        // Don’t mark inited if init throws — allow retry
      }
    }

    function enqueueViewer(el) {
      if (el.dataset.iiifQueued === "1") return;
      el.dataset.iiifQueued = "1";

      //test
      console.log("[IIIF] queued", el.id, new Date().toISOString());
      //end test

      queue.push(async () => {
        await initOpenSeadragon(el);
      });

      //test 2
      console.log("[IIIF] init", el.id, "active=", active, "time=", new Date().toISOString());
      //test 2

      runQueue();
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        enqueueViewer(entry.target);
        io.unobserve(entry.target);
      });
    }, { root: null, rootMargin: ROOT_MARGIN, threshold: 0.01 });

    containers.forEach(container => {
      container
        .querySelectorAll(".openseadragon[data-tile-sources][id]")
        .forEach(el => io.observe(el));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
