if ('function' === typeof importScripts) {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "3120bf11e9c2bd368cdc6a380f5af1fe"
  },
  {
    "url": "precache-manifest.768580e55aaf94ae02a7add0ee9938a4.js",
    "revision": "768580e55aaf94ae02a7add0ee9938a4"
  },
  {
    "url": "service-worker.js",
    "revision": "7723bde2a42410997332f37ea0d5f836"
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
    "url": "static/css/main.a42efc9d.chunk.css",
    "revision": "770773f28173ac3568492de6b3008bdf"
  },
  {
    "url": "static/js/2.6efc3984.chunk.js",
    "revision": "577234af50a8898bea0a32c2d89ff0ef"
  },
  {
    "url": "static/js/3.9aeb030f.chunk.js",
    "revision": "2cd71e68ff23d46f6c04038df7f0cff5"
  },
  {
    "url": "static/js/main.7f1fa1b1.chunk.js",
    "revision": "02bab1e700580ab0361b1e7a3b35b288"
  },
  {
    "url": "static/js/runtime~main.f703f9db.js",
    "revision": "8a79b480cd10aab3d80a4928dd945e57"
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
