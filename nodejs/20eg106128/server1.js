var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('file read sucessfully ');
  
  res.end();
}).listen(4200);