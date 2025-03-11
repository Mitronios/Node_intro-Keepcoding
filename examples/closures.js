"use strict";

function createVehicle(name) {
  let wheelNumber = 4;
  return {
    greet: function () {
      console.log("Hello I'm,", name, "I have", wheelNumber, "wheels");
    },
    defineWheels: function (value) {
      wheelNumber = value;
    }, //this methods were created inside the scope of createVehicle, so thew are capable of accesing to that scope from outside.
  };
}

const car = createVehicle("Suzuki");

car.defineWheels(8);

setTimeout(car.greet, 2000);
