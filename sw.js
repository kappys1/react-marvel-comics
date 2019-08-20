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
    "revision": "58eb12c2604d91d5dc951b8728058fdb"
  },
  {
    "url": "precache-manifest.e9a2741158f5ce103c3095cb79dc8028.js",
    "revision": "e9a2741158f5ce103c3095cb79dc8028"
  },
  {
    "url": "service-worker.js",
    "revision": "c488796ad4e39f34591d010ebf68b5f5"
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
    "url": "static/css/main.648627ae.chunk.css",
    "revision": "0cc56bea0eb0350e4e0b3b38dbe8077c"
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
    "url": "static/js/main.7c1ee568.chunk.js",
    "revision": "f18b79beea5a5e0fb0dac3bdcf4273aa"
  },
  {
    "url": "static/js/runtime~main.3d697109.js",
    "revision": "4bb268cce3606299fab6b3f0fb81cd14"
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
