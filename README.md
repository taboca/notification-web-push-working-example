# notification-web-push-working-example

* Node 8.6+
* Packages express, body-parser for the server
* Package web-push for easier works with the Web Push infrastructure, based in the https://serviceworke.rs/push-simple_demo.html Mozilla stuff

## Introduction

This sample was based in the [Mozilla sample](https://serviceworke.rs/push-simple_demo.html) and also the Google doc [Web Push Notifications: Timely, Relevant, and Precise](https://developers.google.com/web/fundamentals/push-notifications).

However, here I wanted to be more clear because the Mozilla and Google is confusing for starters. Check my [video walking with you](http://youtu.be/bu80mpG-Pn8) and try yourself!

## Get started

This is for Chrome okay? So,

* Open chrome://serviceworker-internals
* Open chrome://settings/content/notifications

## Section 1 - serving an HTML with a JavaScript that installs a service workers

* Documentation https://developers.google.com/web/fundamentals/primers/service-workers?hl=en-us 
* The index.html links to index.js
* index.js will register the service worker from "service-worker.js"
* This service worker will be registered and executed as a JavaScript worker, meaning that it won't access the page's DOM. https://developers.google.com/web/fundamentals/primers/service-workers?hl=en-us 

### The service worker lifecycle

Within index.js, the first important line is the registration: 

```
navigator.serviceWorker.register('service-worker.js');
```

Next, we will dump a few lines to the console to help you understand about this service worker lifecycle: 

```

navigator.serviceWorker.ready.then(function(registration) {

  // Use the PushManager to get the user's subscription to the push service.
  console.log("This worker is running...")

}).then(function(subscription) {

  // Send the subscription details to the server using the Fetch API.
  console.log("Something else..");

});

```