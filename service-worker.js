const CACHE_NAME = 'ilmSpeak-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  'ilmspeak.jpeg',
  'ilmspeak.jpeg',
  'ilmspeak.jpeg',
  'ilmspeak.jpeg'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

// Fetch event - serve from cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
