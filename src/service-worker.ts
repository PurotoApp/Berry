/*
	Source: https://github.com/sveltejs/kit/blob/38d0aff52c8267df475b3add1a190731fe462377/packages/kit/test/apps/options-2/src/service-worker.js
	The file has been slighly modified to work properly in this repo.
*/

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { build, version } from '$service-worker';

const name = `cache-${version}`;

self.addEventListener('install', (event) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	event.waitUntil(caches.open(name).then((cache) => cache.addAll(build)));
});

self.addEventListener('activate', (event) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	event.waitUntil(
		caches.keys().then(async (keys) => {
			for (const key of keys) {
				if (!key.includes(version)) caches.delete(key);
			}
		})
	);
});

self.addEventListener('fetch', (event) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const { request } = event;

	if (request.method !== 'GET' || request.headers.has('range')) return;

	const url = new URL(request.url);
	const cached = caches.match(request);

	if (url.origin === location.origin && build.includes(url.pathname)) {
		// always return build files from cache
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		event.respondWith(cached);
	} else if (url.protocol === 'https:' || location.hostname === 'localhost') {
		// hit the network for everything else...
		const promise = fetch(request);

		// ...and cache successful responses...
		promise.then((response) => {
			// cache successful responses
			if (response.ok && response.type === 'basic') {
				const clone = response.clone();
				caches.open(name).then((cache) => {
					cache.put(request, clone);
				});
			}
		});

		// ...but if it fails, fall back to cache if available
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		event.respondWith(promise.catch(() => cached || promise));
	}
});