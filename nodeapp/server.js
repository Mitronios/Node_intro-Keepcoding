import http from "node:http";
import app from "./app.js";

const port = process.env.PORT || 3000;

//create http server
const server = http.createServer(app);

server.on("listening", () => {
  console.log(`Server stated on port http://localhost:${port}`);
});
server.listen(port);
