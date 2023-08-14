// create web server
const server = http.createServer(app);

// start listening to incoming requests
server.listen(port);
console.log(`Server is running on port ${port}`);
