const express    = require('express');
const path       = require('path');
var bodyParser   = require('body-parser');
const app        = express();
const webPush    = require('web-push');
const stringify  = require('json-stringify-pretty-compact');
const configKeys = require('./15_vapid_keys.json');

app.use(bodyParser.json());

app.post('/test/register', function(req, res) {
  // A real world application would store the subscription info.
  console.log("----------------");
  console.log("Client is registering and have passed the following: ");
  console.log("Save the following file to the ./35_config_user_data.json");
  console.log(">>>>>>>>>>>>");
  console.log(stringify(req.body.subscription));
  console.log("<<<<<<<<<<<");
  res.sendStatus(201);
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(8080);
