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

* node 10_10_prepare_keys.js
* save the keys in the 15_vapid_keys.json
