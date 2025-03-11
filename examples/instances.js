"use strict";

//Create a function to be used as an object constructor
//Is a function capacity in JavaScript
function Fruit(name) {
  this.name = name;
  this.greet = function () {
    console.log("Hello, I'm a", this.name); //Here we can use an arrow function instead.
  };
}

const lemon = new Fruit("Lemon");
lemon.greet();

// setTimeout(lemon.greet, 2000); //Here we're not passing this so JS cannot understand, it returns undefined

// const myFunc = limon.saluda;
// myFunc()// Same as befor. Js can't find this

// So, how do we show this to the function?

setTimeout(lemon.greet.bind(lemon), 2000); //bind, "sticks this with glue" el this para que lo encuentre.

//Also using an arrow function inside the constructor. Why? because arrow functions us a 'sintactic this'
