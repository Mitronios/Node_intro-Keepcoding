const modules = require("./module");
const modules2 = require("./module");
const modules3 = require("./module");
const modules4 = require("./module");

//JS modules (EcmaScript)
const moduleES = require("./modules-es.mjs");

console.log(modules3.sum(4, 5));

modules3.myText = "Assigned text for modules3";

console.log(modules4.myText);
//In this example we are creating always the same object reference,
// It doesn't matter how many times we are calling it
//It will load only once
//This is what we call a singleton, only one can exist

//Using ES modules

console.log(moduleES.default.sum(4, 9));
console.log(moduleES.myText);
