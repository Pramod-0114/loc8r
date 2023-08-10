var http = require('http');
http.createServer(function (req,res) {
 res.writeHead(200 , {'Content-Type' : 'text/html'});
 res.write("Hello World");
 res.write("\nWelcome to the first node server");
 res.end();
}
).listen(8081);

console.log("The server is running at local host:4200...");