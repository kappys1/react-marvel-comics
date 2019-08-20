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
    "revision": "2ceabfdc39524b0f941b130847893612"
  },
  {
    "url": "precache-manifest.c9c4706af082c661f1286ce12cf67c9f.js",
    "revision": "c9c4706af082c661f1286ce12cf67c9f"
  },
  {
    "url": "service-worker.js",
    "revision": "cfce57d2aeffd0403d66e2f735f65ec8"
  },
  {
    "url": "static/css/2.3f3d6e18.chunk.css",
    "revision": "612a7e706c5d97972fca3da780c4cf3a"
  },
  {
    "url": "static/css/3.1df8c3e5.chunk.css",
    "revision": "57d1892a13915eca12deffcb19221043"
  },
  {
    "url": "static/css/main.b68cad30.chunk.css",
    "revision": "f9fda29cd7d03766525947ccec467b97"
  },
  {
    "url": "static/js/2.0c766980.chunk.js",
    "revision": "8663f6d6e0030a9c778a4ebf377fb73e"
  },
  {
    "url": "static/js/3.16a28940.chunk.js",
    "revision": "937353d4ec16d24f027686568b6c434a"
  },
  {
    "url": "static/js/main.c3c05fe9.chunk.js",
    "revision": "99a3e1886880ed11f81fa9916f193c26"
  },
  {
    "url": "static/js/runtime~main.a70fc7bd.js",
    "revision": "8e5d479d9930cb4628c9921548611a57"
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
