import express from "express";
import createError from "http-errors";
import logger from "morgan";

const app = express();

// app.use((req, res, next) => {
//   //With next we create a 'middleware'
//   //A middleware should answer or return the next
//   console.log("Receiving request: type", req.method, "to", req.url);
//   next(); //This returns next and passes the control to the next execution
// });
//Morgan replaces all of the above
app.use(logger("dev"));

//In this example this will be the next execution
app.get("/", (req, res, next) => {
  res.send("Hello from node with express");
});

//Here we're changing default message for things that are not defined yet
//Like a request to /cat
//Catch 404 and send error
app.use((req, res, next) => {
  // const error = new Error("I can't find your request");
  // error.status = 404;
  next(createError(404)); //using createError library
}); //Here the use of next passes execution to our error handler

//error handler (should be created alway at the end, the last.)
app.use((err, req, res, next) => {
  //This is for error handling and the only one receiving 4 parameters
  res.status(err.status || 500); //Si no es el error definido, asumimos q es el servidor por eso codigo 500
  res.send("Something went wrong: " + err.message);
});
export default app;
