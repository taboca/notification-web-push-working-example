const express    = require('express');
const path       = require('path');
var bodyParser   = require('body-parser');
const app        = express();
const stringify  = require('json-stringify-pretty-compact');

const webPush    = require('web-push');

const configKeys = require('./15_vapid_keys.json');

app.use(bodyParser.json());

webPush.setVapidDetails(
  'https://serviceworke.rs/',
  configKeys['publicKey'],
  configKeys['privateKey']
);

let data = require('./35_config_user_data.json');

const subscription = data;
const payload = null;
const options = {
  TTL: 10
};

setTimeout(function() {
  webPush.sendNotification(subscription, payload, options)
  .then(function() {
    console.log("Worked!");
  })
  .catch(function(error) {
    console.log(error);
  });
}, 5000);
