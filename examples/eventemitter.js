"use strict";

const EventEmitter = require("node:events");

const emitter = new EventEmitter();

//Subscription to even everytime it appears
emitter.on("Phone call", (payload) => {
  if (payload.caller === "Sister") {
    return;
  }
  console.log("riing rrring");
});

//Only once, at the first call
emitter.once("Phone call", () => {
  console.log("bzzrr, bzzrr");
});

emitter.emit("Phone call", { caller: "Sister" });
emitter.emit("Phone call", { caller: "Sister" });
emitter.emit("Phone call", { caller: "Dad" });
