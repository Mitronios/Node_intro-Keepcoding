"use strict";

function logAfterTwoSeconds(text, callback) {
  setTimeout(function () {
    console.log(text);
    callback();
  }, 2000);
}

/*
logAfterTwoSeconds("Hello", function () {
  logAfterTwoSeconds("Hello Again", function () {
    console.log("The end");
  });
});
*/
//Here we are using callbacks to make the function asynchronous

//callbacks loop maker
function serial(n, funcWeWantToExecute, lastCallBack) {
  if (n === 0) {
    //End here
    lastCallBack();
    return;
  }
  n = n - 1;
  funcWeWantToExecute("Hello" + n, function () {
    serial(n, funcWeWantToExecute, lastCallBack);
  });
}

serial(5, logAfterTwoSeconds, function () {
  console.log("The End");
});
