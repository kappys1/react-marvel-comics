if ('function' === typeof importScripts) {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
    });

    workbox.routing.registerRoute(
      /.*\.(?:png|jpg|jpeg|svg|gif)/,
      workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            // Automatically cleanup if quota is exceeded.
            purgeOnQuotaError: true
          })
        ]
      })
    );

    workbox.router.registerRoute(
      process.env.REACT_APP_API_ROUTER,
      workbox.strategies.cacheFirst({
        cacheName: 'apiCache',
        cacheExpiration: {
          maxEntries: 50,
          maxAgeSeconds: 3600 // 60 minutes
        },
        cacheableResponse: { statuses: [0, 200] }
      })
    );
  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
