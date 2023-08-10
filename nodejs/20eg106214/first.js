var http = require('http');
http.createServer(function (req, res){
res.WriteHead(200'{'Content-Type':'text/html'});
res.write("Hello World");
res.write("\nWelcome to the first node server");
res.end();
(
}).listen(4200);
console.log("The server is running at localhost:4200...");