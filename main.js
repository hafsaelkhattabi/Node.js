var http = require("http");
var port = 3000

http.createServer(function (request, response) {
  
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   response.end('<h1>Hello Node!!!!</h1>\n');
}).listen(port);

console.log(`Server running at http://localhost:${port}/`);
