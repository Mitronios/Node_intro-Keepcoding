import express from "express";
import http from "node:http";

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello from res");
});

//create http server
const server = http.createServer(app);

server.on("listening", () => {
  console.log("Server stated on port http://localhost:3000");
});
server.listen(3000);
