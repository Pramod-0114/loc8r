var http = require('http');
http.createServer(function(req,res) {
  res.writeHead(200,{'content-Type': 'text/html'});
  res.write(req.url);
  res.write("present at anurag university");
  res.end();
}).listen(4200);