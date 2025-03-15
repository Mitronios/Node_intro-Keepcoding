import express from "express";
import http from "node:http";

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello from node with express");
});

//Create http server
const server = http.createServer(app);

server.on("listening", () => {
  console.log("Server started on htttp://localhost:3000");
});
server.listen(3000);
