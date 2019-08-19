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
    "revision": "66438ad2bd47b5b0205bde4e89696bd7"
  },
  {
    "url": "precache-manifest.df77d2967adf614aad170cf42ed4ebca.js",
    "revision": "df77d2967adf614aad170cf42ed4ebca"
  },
  {
    "url": "service-worker.js",
    "revision": "b816191eab5e1d7420c47ac5a0ed4562"
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
    "url": "static/js/2.6efc3984.chunk.js",
    "revision": "577234af50a8898bea0a32c2d89ff0ef"
  },
  {
    "url": "static/js/3.9aeb030f.chunk.js",
    "revision": "2cd71e68ff23d46f6c04038df7f0cff5"
  },
  {
    "url": "static/js/main.74ad9b8e.chunk.js",
    "revision": "af6b2e88bda49dfdcd9bc60d006a5e41"
  },
  {
    "url": "static/js/runtime~main.29fbb110.js",
    "revision": "60485ec334b6d8fe564192b6b336c1bb"
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
