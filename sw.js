if ('function' === typeof importScripts) {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "25c3201bcf69119a199a8bbc52ebba8b"
  },
  {
    "url": "precache-manifest.396ae0c3d6467eef52de06b5379bb231.js",
    "revision": "396ae0c3d6467eef52de06b5379bb231"
  },
  {
    "url": "service-worker.js",
    "revision": "252c903014b945a48d379a5ce439a12e"
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
    "url": "static/js/main.dbf90fdd.chunk.js",
    "revision": "1c14404b39b5c1e204fd9999a38fc708"
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
