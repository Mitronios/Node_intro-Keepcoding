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

//Simple inheritance
//Let's create Agents from Matrix

function Agent(name) {
  //inherit constructor from Person
  Person.call(this, name); //Similar to super() in Python
}

Object.setPrototypeOf(Agent.prototype, Person.prototype);

const smith = new Agent("Smith");

smith.greet();

//Multiple inheritance

//Now we want agents to inherit 'superpowers'

function SuperPower() {
  this.fly = function () {
    console.log(this.name, "Fly");
  };
}

//copying all properties from superpowers
Object.assign(Agent.prototype, new SuperPower());

smith.fly();

console.log(smith);
console.log(Agent.prototype);
console.log(smith instanceof Person);
console.log(smith instanceof Agent);
console.log(smith instanceof SuperPower);
