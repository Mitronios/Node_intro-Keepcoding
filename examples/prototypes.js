"use strict";

function Person(name) {
  this.name = name;
  //   this.greet = function () {
  //     console.log("Hello I'm,", this.name);//Here we are creating a function greet for every person
  //If I create one million of person I will be repeating the functin one million times
  //This is why protoptypes exists
  //   };
}

const peter = new Person("Peter");
const mary = new Person("Mary");

//Using prototypes
Person.prototype.greet = function () {
  console.log("Heelo I'm", this.name);
};

peter.greet();
mary.greet();
