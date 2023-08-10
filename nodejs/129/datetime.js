var http = require('http');
var dt = require('./fm.js');

http.createServer(function(req,res) {
  res.writeHead(200,{'content-Type': 'text/html'});
  res.write("the date and time are currently: "+dt.myDateTime())
  res.end();
}).listen(4200);