/*
 * Service worker for the portfolio (PWA / offline support).
 * Strategy:
 *  - Navigations (HTML pages): network-first, so visitors always get the
 *    latest content; falls back to cache (then cached index) when offline.
 *  - Same-origin static assets (css/js/images): cache-first for speed,
 *    with a background network update.
 * To ship new content: bump CACHE_VERSION below; old caches are purged on activate.
 * To disable entirely: remove the registration in app.js and this file.
 */
const CACHE_VERSION = "anawaz-portfolio-v1";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./assets/css/style.css",
  "./assets/js/app.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return; // let cross-origin CDNs pass through

  // HTML pages: network-first (fresh content), fall back to cache/offline.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
    );
    return;
  }

  // Static assets: cache-first, update in the background.
  event.respondWith(
    caches.match(req).then((cached) =>
      cached ||
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => cached)
    )
  );
});
