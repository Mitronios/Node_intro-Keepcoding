// Load HTTP library
const http = require("node:http");

// Define a server
const server = http.createServer(function (request, response) {
  response.writeHead(200, { "content-type": "text/html" }); //Header of the content
  response.end(`Wake up, <b>Neo</b>... follow the white rabbit`); // content
});

// Start the server
server.listen(1337, "127.0.0.1");

console.log("Server started on http://127.0.0.1:1337");
