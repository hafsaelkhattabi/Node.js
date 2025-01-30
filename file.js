var fs = require("fs");

var data = fs.readFileSync('welcome.txt');

console.log(data.toString());
