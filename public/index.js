// Register a Service Worker.

// [1] https://developers.google.com/web/fundamentals/primers/service-workers?hl=en-us

/* 
According to [1], it's a JavaScript Worker that can't access the DOM. 
*/

navigator.serviceWorker.register('service-worker.js');

navigator.serviceWorker.ready
.then(function(registration) {
  // Use the PushManager to get the user's subscription to the push service.
  console.log("This worker is running...")
});
