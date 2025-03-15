import http from "node:http";
import app from "./app.js";

const port = process.env.PORT || 3000;

//Create http server
const server = http.createServer(app);

server.on("listening", () => {
  console.log(`Server started on htttp://localhost:${port}`);
});
server.listen(port);
