"use strict";

const { resolve } = require("path");

const ingredients = ["salt", "pepper", "rice", "lentils", "carrots"];

function put(ingredient) {
  return new Promise((resolve) => {
    console.log("putting ", ingredient);
    resolve(ingredient);
  });
}

const result = ingredients.map((i) => put(i));

// console.log(result);
Promise.all(result).then((results) => {
  console.log("Finished with: ", results);
});
