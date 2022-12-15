const stat = "app-v1.0";

const assetUrl = [
  "./index.html",
  "/src/main.js",
  "/src/counter.js",
  "/style.css",
];

self.addEventListener("install", async (event) => {
  const cache = await caches.open(stat);
  await cache.addAll(assetUrl);
});

self.addEventListener("activate", async () => {
  const key = await caches.keys();
  console.log(key);
  await Promise.all(key.filter((k) => k != stat).map((k) => caches.delete(k)));
});

self.addEventListener("fetch", async (event) => {
  event.respondWith();
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached ?? (await fetch(request));
}
