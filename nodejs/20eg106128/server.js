var http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world');
});

server.listen(4200);
console.log('now listening to port 4200');                                                                                                                    