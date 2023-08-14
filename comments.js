// create web server

var server = http.createServer(function(req, res) {
  // create request router
  var router = new Router();

  // register routes
  router.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>Hello World!</h1></body></html>');
  });

  router.get('/foo', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>Foo!</h1></body></html>');
  });

  router.get('/bar', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>Bar!</h1></body></html>');
  });

  // dispatch request
  router.dispatch(req, res);
});

server.listen(3000);

