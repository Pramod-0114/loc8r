var http = require('http');
http.createServer(function(req,res) {
  res.writeHead(200,{'content-Type': 'text/html'});
  res.write("hello world");
  res.write("\nwelcome to the virtual world");
  res.end();
}
).listen(4200);

console.log("the server is running at local host:4200....");