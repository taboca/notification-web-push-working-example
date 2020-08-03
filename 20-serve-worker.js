const express    = require('express');
const path       = require('path');
var bodyParser   = require('body-parser');
const app        = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public')));

console.log("Localhost serving at http://localhost:8080");
app.listen(8080);
