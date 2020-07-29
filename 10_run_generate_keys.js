const fs = require('fs');
const webPush = require('web-push');
var stringify = require('json-stringify-pretty-compact');

console.log("----------------");
console.log("We need to have keys, private and public. ");
console.log("The public key will be sent to the browser JS code before creating a subscription. ")
console.log("Only the public key will be eventually sent to the the client code. ");

let JSONconfig = webPush.generateVAPIDKeys();

console.log("The following are the keys that I have been generating. Now I am done with that. ");
console.log("----------------");
console.log(stringify(JSONconfig));
console.log("----------------");


console.log("Now, I will be saving these keys before you execute the next step.");

fs.writeFileSync('10_data_vapid_keys.json', stringify(JSONconfig));

