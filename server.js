#Add the file
#Create the Java Script file
#Save the file was server.js
# Finaly start the port


var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, i know nodejitsu.')
  res.end();
}).listen(8080);
console.log('> http server has started on port 8080');
