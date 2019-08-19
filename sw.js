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
    "revision": "46386988c6f28eecf49635ca94359985"
  },
  {
    "url": "precache-manifest.4692af276879143be798939fecdb0eb5.js",
    "revision": "4692af276879143be798939fecdb0eb5"
  },
  {
    "url": "service-worker.js",
    "revision": "bf69a43b20c7d46e4dedd6dff44385b7"
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
    "url": "static/js/2.0c766980.chunk.js",
    "revision": "f9c60bbd7aa1addcdce38599093ced73"
  },
  {
    "url": "static/js/3.16a28940.chunk.js",
    "revision": "b1074dd2369fd1dcf08fed84f7d39cf8"
  },
  {
    "url": "static/js/main.2c3c4f8b.chunk.js",
    "revision": "d5e65cdea6a38bf33c855597c92ec5d5"
  },
  {
    "url": "static/js/runtime~main.005256ee.js",
    "revision": "598e248bcbb04ff11f02f17630887079"
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
