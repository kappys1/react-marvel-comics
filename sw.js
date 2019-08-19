if ('function' === typeof importScripts) {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    workbox.setConfig({ debug: false });
    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "2a3f954ef476d4108f5895e24fb2c836"
  },
  {
    "url": "precache-manifest.124000bc9378bd3c5b744003bca0241b.js",
    "revision": "124000bc9378bd3c5b744003bca0241b"
  },
  {
    "url": "service-worker.js",
    "revision": "8d0447140487bce948ead5a744510f2b"
  },
  {
    "url": "static/css/2.7d2f61d3.chunk.css",
    "revision": "bbb8fb5507e5b1ab07406d4fa209cc81"
  },
  {
    "url": "static/css/3.25039630.chunk.css",
    "revision": "cd57a6ff569a3d441ef33fe4ca892db6"
  },
  {
    "url": "static/css/main.776ecb5f.chunk.css",
    "revision": "f50c514ff088d4297af14bf60eb81d62"
  },
  {
    "url": "static/js/2.59c5b2dd.chunk.js",
    "revision": "1087e6eaafc477af16fb2a57020ae8f8"
  },
  {
    "url": "static/js/3.63789a03.chunk.js",
    "revision": "568a6ee5072c1ef3f150f82d4818c1a6"
  },
  {
    "url": "static/js/main.95d3a9ed.chunk.js",
    "revision": "bab6cd63c8e3e08bc7867c1e10d68e88"
  },
  {
    "url": "static/js/runtime~main.1f66582e.js",
    "revision": "e44bfff100b5e5a3d7a6c9d4b2f0549b"
  },
  {
    "url": "static/media/logo.ee0b56fe.png",
    "revision": "ee0b56fe5c22dbe3e78080936a27054e"
  }
]);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
    });

    // cache media of project
    workbox.routing.registerRoute(
      new RegExp('/media/'),
      workbox.strategies.cacheFirst({
        cacheName: 'media',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days,
          })
        ]
      })
    );

    // cache Images Api
    workbox.routing.registerRoute(
      // Custom `matchCallback` function
      ({ event }) => event.request.destination === 'image',
      new workbox.strategies.CacheFirst({
        cacheName: 'image',
        plugins: [
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200]
          }),
          new workbox.expiration.Plugin({
            maxEntries: 20,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
          })
        ]
      })
    );
  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
