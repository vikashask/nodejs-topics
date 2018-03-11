var http = require('http');
var fs = require('fs');

// reading a file
http.createServer(function (req, res) {
  fs.readFile('./file/test.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

// run localhost:8080