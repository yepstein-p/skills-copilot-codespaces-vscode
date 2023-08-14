// create web server
var server = http.createServer(function(request, response) {
    // send the http header
    response.writeHead(200, {'Content-Type': 'text/html'});
    // send the response body
    response.end('Hello World\n');
});

// listen on port 8080
server.listen(8080);

// print URL for accessing server
console.log('Server running')


