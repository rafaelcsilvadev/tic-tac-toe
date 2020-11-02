export function register() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('./sw.js')
			.then((registration) => {
				console.log(
					'Hooray. Registration successful, scope is:',
					registration.scope
				);
			})
			.catch((err) => {
				console.log('Whoops. Service worker registration failed, error:', err);
			});
	}
}

export function scope() {
	navigator.serviceWorker.register('sw.js', {
		scope: '/app/',
	});
}

export function unregister() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.ready.then((registration) => {
			registration.unregister();
		});
	}
}
