"use strict";

function logAfterTwoSeconds(text, callback) {
  setTimeout(function () {
    console.log(text);
    callback();
  }, 2000);
}

logAfterTwoSeconds("Hello", function () {
  logAfterTwoSeconds("Hello Again", function () {
    console.log("The end");
  });
});
