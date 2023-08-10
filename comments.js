// create web server
var http = require('http');
const host = 'localhost';
// create web server object
var server = http.createServer(function(req, res) {

    // set header
    res.setHeader('Content-Type', 'text/html');

    // set body
    res.write('<html><body><h1>Hello World!</h1></body></html>');

    // send
    res.end();

});

// listen to port 3000
server.listen(3000,host, function() {
    console.log('Server is running on port 3000');
});
