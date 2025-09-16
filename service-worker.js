const CACHE_NAME = 'cultura-general-2025-v1';
const urlsToCache = [
    '/cultura-general-2025/',
    '/cultura-general-2025/index.html',
    '/cultura-general-2025/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
