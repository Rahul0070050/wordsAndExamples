// cashe name
const CATCHE_NAME = "rahuls catche"

// put the files toor for caching 
const cacheFiles = [
    ''
];

self.addEventListener("install", function (event) {
    event.waitUntil(caches.open(CATCHE_NAME).then(function (cache) {
        console.log('cache opend');
        return cache.addAll(cacheFiles)
    }))
})
self.addEventListener("activate", function (event) {
    console.log('service worker is activeted');
})
self.addEventListener("fetch",function (event) {
    event.respondWith(caches.match(event.request).then(response => {
        if(response) {
            return response
        } else {
            return fetch(event.request)
        }
    }))
})