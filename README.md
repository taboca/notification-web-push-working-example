# notification-web-push-working-example

* Node 8.6+
* Packages express, body-parser for the server
* Package web-push for easier works with the Web Push infrastructure, based in the https://serviceworke.rs/push-simple_demo.html Mozilla stuff

## Introduction

This sample was based in the [Mozilla sample](https://serviceworke.rs/push-simple_demo.html) and also the Google doc [Web Push Notifications: Timely, Relevant, and Precise](https://developers.google.com/web/fundamentals/push-notifications).

## Get started

This is for Chrome okay? So,

* Open chrome://serviceworker-internals
* Open chrome://settings/content/notifications

## Generate your server private and public keys

* node 10_prepare_keys.js
* save the keys in the 15_vapid_keys.json

## Serve the page that is going to create a subscription object

* node 20_serve-key.js
* // load the browser http://localhost:8080
* // Dont click allow yet
* // Check the console

## Serving the server for receiving the subscription

* node 30-serve-register.js
* // Keep the page loaded browser http://localhost:8080
* // Click allow
* // Notice this does nothing, it dumps the subscription to the screen
* // and asks you to save

## Run the script that uses the subscription to inform the user device/desktop

* // assumes that you have copied the subscription data from the above step
* // into the 35_config_user_data.json
* node 40-eventually-notify.js
* // will delay a bit and send the notification to the subscription service
* // expect a notification to appear in the desktop
