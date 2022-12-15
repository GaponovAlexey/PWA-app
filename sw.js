const stat = "s-app-v1";

const assetUrl = [
  "./index.html",
  "/src/main.js",
  "/src/counter.js",
  "/style.css",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(stat).then((c) => c.addAll(assetUrl))
    );
});
self.addEventListener("activate", async () => {
  await console.log("[sw]", "activate");
});
