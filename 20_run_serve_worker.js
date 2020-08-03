const express    = require('express');
const path       = require('path');
var bodyParser   = require('body-parser');
const app        = express();

const configKeys = require('./10_data_vapid_keys.json');

app.use(bodyParser.json());

// This will serve the index.html and the index.js which registers the service-worker.js
app.use('/', express.static(path.join(__dirname, 'public')));

console.log("Localhost serving at http://localhost:8080");
app.listen(8080);
