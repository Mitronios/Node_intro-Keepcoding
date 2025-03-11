console.log("I'm a module");

module.exports = {
  sum(a, b) {
    return a + b;
  },
  myText: "",
};

//Similar sintax as above
module.exports.sum = (a, b) => {
  return a + b;
};
module.exports.myText = "";

exports.myText2 = "This is my text 2";
