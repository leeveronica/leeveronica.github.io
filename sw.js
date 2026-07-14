// Self-destroying service worker.
// Replaces the old gatsby-plugin-offline worker that some returning visitors
// still have installed from before this site started redirecting to
// veronicalee.vercel.app. That old worker answers navigation requests from
// its own cache instead of hitting the network, so it never sees the
// redirect. This version installs in its place, clears the old caches,
// unregisters itself, and reloads open tabs so they fetch the real page.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => clients.forEach((client) => client.navigate(client.url)))
  );
});
