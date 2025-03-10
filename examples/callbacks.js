"use strict";

function sum(a, b, callback) {
  const result = a + b;
  callback(result);
}

const operationDone = sum(3, 6, function (result) {
  console.log("Operation finnished, the result is:", result);
});
