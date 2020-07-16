// Register a Service Worker.
navigator.serviceWorker.register('service-worker.js');

navigator.serviceWorker.ready
.then(function(registration) {
  // Use the PushManager to get the user's subscription to the push service.
  console.log("This worker is running...")
}).then(function(subscription) {
  // Send the subscription details to the server using the Fetch API.
  console.log("Something else..");
});
