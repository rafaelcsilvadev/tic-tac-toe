const CACHE_NAME = 'tic-tac-toe_cache';

const urlsToCache = ['/', '/styles/App.css', '/styles/Game.css'];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', (event) => {
	console.log(event.request.url);
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		})
	);
});
