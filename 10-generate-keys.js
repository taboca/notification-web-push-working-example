const webPush = require('web-push');
var stringify = require('json-stringify-pretty-compact');

console.log("----------------");
console.log("These are keys, private and public. ");
console.log("The public key will be sent to the browser JS code before creating a subscription. ")
console.log("Only the public key will be eventually sent to the the client code. ");

let JSONconfig = webPush.generateVAPIDKeys();

console.log("Copy the following key file config as 15_vapid_keys.json:");
console.log("----------------");
console.log(stringify(JSONconfig));
console.log("----------------");

