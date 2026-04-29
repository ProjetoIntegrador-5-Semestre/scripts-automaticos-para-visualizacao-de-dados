// Service Worker para PWA - Cache e offline support
const CACHE_NAME = "autoscript-v1";
const urlsToCache = ["/", "/index.html", "/favicon.svg", "/manifest.json"];

// Instalar o service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()),
  );
});

// Ativar o service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

// Interceptar requisições - Network first, fallback to cache
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests
  if (event.request.method !== "GET") {
    return;
  }

  // API calls - network first
  if (event.request.url.includes("/api/")) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Clone e cache a response
          if (
            !response ||
            response.status !== 200 ||
            response.type === "error"
          ) {
            return response;
          }
          const responseToCache = response.clone();
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(event.request, responseToCache));
          return response;
        })
        .catch(() => {
          // Offline - tenta cache
          return caches
            .match(event.request)
            .then(
              (response) =>
                response ||
                new Response(
                  JSON.stringify({ error: "offline", fallback: true }),
                  {
                    status: 503,
                    headers: { "Content-Type": "application/json" },
                  },
                ),
            );
        }),
    );
  } else {
    // Assets/pages - cache first
    event.respondWith(
      caches
        .match(event.request)
        .then((response) => response || fetch(event.request))
        .catch(() => new Response("offline", { status: 503 })),
    );
  }
});
