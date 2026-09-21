// Minimal service worker for Kahuna Snow Canvass.
// This intentionally does NOT cache anything -- its only job is to satisfy
// Chrome's requirement that a "fetch" handler exist before it will offer a
// real, permanent installed app icon (instead of a flaky plain shortcut).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
