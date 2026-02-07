const CACHE_NAME = 'balihelp-v1';
const urlsToCache = [
  '/',
  '/logo.png',
  '/favicon.ico',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml'
];

const self = self as any;

// Install event listener
self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open(CAME_NAME).then((cache: any) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event listener
self.addEventListener('fetch', (event: any) => {
  event.respondWith(
    caches.match(event.request).then((response: any) => {
      // Return cached response or fetch from network
      return response || fetch(event.request).then((response: any) => {
        // Cache the fetched response
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache: any) => {
          cache.put(event.request, responseClone);
        });
        return response;
      });
    })
  );
});

// Activate event listener
self.addEventListener('activate', (event: any) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames: string[]) => {
      return Promise.all(
        cacheNames.map((cacheName: string) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
