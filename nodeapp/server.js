import http from "node:http";
import app from "./app.js";
import { resolve } from "node:path";

const port = process.env.PORT || 3000;

//Special case of use for promises with await, available with the use of ES modules
// await new Promise((resolve) => setTimeout(resolve, 5000));
//Create a promise using await without async and use callback to call resolve after 5 seconds
//Now the server will start 5 seconds later when promise is resolved

//Create http server
const server = http.createServer(app);

server.on("error", (err) => console.error(err));
server.on("listening", () => {
  console.log(`Server started on htttp://localhost:${port}`);
});
server.listen(port);
