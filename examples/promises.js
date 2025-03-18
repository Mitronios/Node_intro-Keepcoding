"use strict";

//Let's create a function that returns a promise
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

const myPromise = sleep(1000);

myPromise
  .then(() => {
    console.log("One second");
    // return sleep(1000);
    throw new Error("Uh Oh! fatal error!");
  })
  .then(() => {
    console.log("Two seconds");
    return sleep(2000);
  })
  .then(() => {
    console.log("Four seconds");
    return sleep(2000);
  })
  .catch((err) => {
    console.error("Something went wrong:", err.message);
  });
