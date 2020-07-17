// Register a Service Worker.

// [1] https://developers.google.com/web/fundamentals/primers/service-workers?hl=en-us

/* 
According to [1], it's a JavaScript Worker that can't access the DOM. 
*/

navigator.serviceWorker.register('service-worker.js');

navigator.serviceWorker.ready
.then(function(registration) {
  // Use the PushManager to get the user's subscription to the push service.
  console.log("This worker is running...");
  
  // If a subscription was found, return it.
  if (subscription) {
    return subscription;
  }

  // Get the server's public key
  const response = await fetch('./test/vapidPublicKey');
  const vapidPublicKey = await response.text();
  // Chrome doesn't accept the base64-encoded (string) vapidPublicKey yet
  // urlBase64ToUint8Array() is defined in /tools.js
  const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

  // Otherwise, subscribe the user (userVisibleOnly allows to specify that we don't plan to
  // send notifications that don't have a visible effect for the user).
  return registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: convertedVapidKey
  });
  
});
