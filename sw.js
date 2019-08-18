if ('function' === typeof importScripts) {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "4378d8abdfb59ed3dcd2c017ff80a04c"
  },
  {
    "url": "precache-manifest.91a9d6c0ebef980cb286825c7f68be4f.js",
    "revision": "91a9d6c0ebef980cb286825c7f68be4f"
  },
  {
    "url": "service-worker.js",
    "revision": "4408c42b832aed39e499c855c22d0154"
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
    "url": "static/css/main.e85b95ac.chunk.css",
    "revision": "7329657493021b1824a1016ce8590c5a"
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
    "url": "static/js/main.30ce47ff.chunk.js",
    "revision": "ce1a1bc2469179a9d561840f67df3b95"
  },
  {
    "url": "static/js/runtime~main.f703f9db.js",
    "revision": "8a79b480cd10aab3d80a4928dd945e57"
  },
  {
    "url": "static/media/background.672368c6.png",
    "revision": "672368c62d0d0c80c271b25cb4c8ba3a"
  },
  {
    "url": "static/media/background2.03addc0b.png",
    "revision": "03addc0b375fb49057c28f7d3005bdec"
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
      /\.(?:png|gif|jpg|jpeg)$/,
      workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
          })
        ]
      })
    );
  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
