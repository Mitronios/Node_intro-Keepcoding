import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello from node with express");
});

export default app;
