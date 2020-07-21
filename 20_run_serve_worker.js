const express    = require('express');
const path       = require('path');
var bodyParser   = require('body-parser');
const app        = express();

const configKeys = require('./10_data_vapid_keys.json');

app.use(bodyParser.json());

app.get('/test/vapidPublicKey', function(req, res) {
  res.send(configKeys['publicKey']);
  console.log("Returned the public key:");
  console.log(configKeys['publicKey']);
  console.log("MANUAL INTERVENTION - stop this script and run 30-serve-register!")
});

// This will serve the index.html and the index.js which registers the service-worker.js
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(8080);
