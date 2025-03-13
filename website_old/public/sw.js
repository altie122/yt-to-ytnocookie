self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Check if the request matches your dynamic URL pattern
  if (url.pathname.startsWith('/')) {
    event.respondWith(
      // Try to fetch the resource from the network
      fetch(request)
        .then(response => {
          // If the response is valid, clone it and cache it
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open('dynamic-cache')
              .then(cache => cache.put(request, responseToCache));
          }
          return response;
        })
        .catch(error => {
          console.error('An error occurred:', error);
          // If fetching fails, try to serve from cache
          return caches.match(request)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // If not in cache, return an error response or fallback content
              return new Response('Offline content here...', { status: 500 });
            });
        })
    );
  }
});
