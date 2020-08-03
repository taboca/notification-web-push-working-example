# notification-web-push-working-example

* Node 8.6+
* Packages express, body-parser for the server
* Package web-push for easier works with the Web Push infrastructure, based in the https://serviceworke.rs/push-simple_demo.html Mozilla stuff

## Introduction

This sample was based in the [Mozilla sample](https://serviceworke.rs/push-simple_demo.html) and also the Google doc [Web Push Notifications: Timely, Relevant, and Precise](https://developers.google.com/web/fundamentals/push-notifications).

However, here I wanted to be more clear because the Mozilla and Google is confusing for starters. Check my [video walking with you](http://youtu.be/bu80mpG-Pn8) and try yourself!

# notification-web-push-working-example

* Node 8.6+
* Packages express, body-parser for the server
* Package web-push for easier works with the Web Push infrastructure, based in the https://serviceworke.rs/push-simple_demo.html Mozilla stuff

## Introduction

This sample was based in the [Mozilla sample](https://serviceworke.rs/push-simple_demo.html) and also the Google document [Web Push Notifications: Timely, Relevant, and Precise](https://developers.google.com/web/fundamentals/push-notifications).

However, here I wanted to be more clear because the Mozilla and Google is confusing for starters. Check my [video walking with you](http://youtu.be/bu80mpG-Pn8) and try yourself!

## Section 0 — get started

This material was tested with Chrome browser. 

* Open chrome://serviceworker-internals — make sure to remove any worker related to the localhost:8080
* Open chrome://settings/content/notifications - make sure that you clear settings if you have prior settings related to the localhost:8080

## Section 1 - serving an HTML with a JavaScript that installs a service workers

* Documentation https://developers.google.com/web/fundamentals/primers/service-workers?hl=en-us 
* The index.html links to index.js
* index.js will register the service worker from "service-worker.js"
* This service worker will be registered and executed as a JavaScript worker, meaning that it won't access the page's DOM. https://developers.google.com/web/fundamentals/primers/service-workers?hl=en-us 

### Section 1.10 — Registering a service worker 

Within index.js, the first important line is the registration: 

```
//https://developers.google.com/web/fundamentals/primers/service-workers?hl=en-us
navigator.serviceWorker.register('service-worker.js');
```

Next, we will inform the console when the service worker is ready: 

```
navigator.serviceWorker.ready.then(function(registration) {
  console.log("This worker is running...")
});

Read more about the service worker lifecycle and premises — //https://developers.google.com/web/fundamentals/primers/service-workers?hl=en-us
. 

```

### Section 2 — running the server 

```
node 20-server-worker.js
```

#### Section 2.10 — looking at the console

### Section 3 — generating a key 

```
node ./10_run_generate_keys.js
```

This script will save a file with the public and private keys: 

```
./10_data_vapid_keys.json
```

