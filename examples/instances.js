"use strict";

//Create a function to be used as an object constructor
//Is a function capacity in JavaScript
function Fruta(name) {
  this.name = name;
  this.greet = function () {
    console.log("Hello, I'm a", this.name);
  };
}

const lemon = new Fruta("Lemon");

console.log(lemon);
lemon.greet();
