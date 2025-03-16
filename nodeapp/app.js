import path from "node:path"; //This help us handle the use of system path for windows, linux and mac
import { fileURLToPath } from "node:url"; //because of ES modules
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import * as homeController from "./controllers/homeController.js";
import ejs from "ejs";

const app = express();
const __filename = fileURLToPath(import.meta.url); //obtain filename.
const __dirname = path.dirname(__filename); //obtain directory.

app.set("views", "views"); //Views folder, this is for setting the ejs
// app.set("view engine", "ejs");
app.set("view engine", "html");
app.engine("html", ejs.__express);
app.locals.appName = "NodeApp"; //third option for appName, as local for entire app

// app.use((req, res, next) => {
//   //With next we create a 'middleware'
//   //A middleware should answer or return the next
//   console.log("Receiving request: type", req.method, "to", req.url);
//   next(); //This returns next and passes the control to the next execution
// });
//Morgan replaces all of the above
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

/**
 * Application routes
 */

//Here index comes from homeController using MVC
app.get("/", homeController.index);
app.get("/param_in_route/:num?", homeController.paramInRoute);
app.get(
  "/param_in_route_multiple/:product/size/:size([0-9]+)/color/:color",
  homeController.paramInRouteMultiple
);

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
  // res.send("Something went wrong: " + err.message);

  //Set locals, including erro information in development
  res.locals.message = err.message;
  res.locals.error = process.env.NODEAPP_ENV === "development" ? err : {};

  res.render("error");
});
export default app;
