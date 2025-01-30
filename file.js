
var http = require("http");
var fs = require("fs");
var path = require("path");
var port = 2000;

http.createServer(function (request, response) {
    
    var path = __dirname + '/file.html'; 

    fs.readFile(path, "utf8", function (err, data) {
        if (err) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.end("Error reading file\n");
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(data);
        }
    });

}).listen(port);

console.log(`Server running at http://localhost:${port}/`);




