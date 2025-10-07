// Service Worker to control cache
const CACHE_VERSION = 'v1';
const CACHE_NAME = `mercado-condell-${CACHE_VERSION}`;

// Install event
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    return self.clients.claim();
});

// Fetch event - Network first, then cache
self.addEventListener('fetch', (event) => {
    // For JSON and images, always fetch from network
    if (event.request.url.includes('.json') ||
        event.request.url.includes('/assets/')) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Clone and cache the response
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                    return response;
                })
                .catch(() => {
                    // If network fails, try cache
                    return caches.match(event.request);
                })
        );
    } else {
        // For other files, use cache first
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    }
});
