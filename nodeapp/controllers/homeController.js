export function index(req, res, next) {
  res.locals.users = [
    { name: "Smith", age: 45 },
    { name: "Brown", age: 28 },
    { name: "Jones", age: 34 },
  ];
  const now = new Date();
  res.locals.isEven = now.getSeconds() % 2 === 0;
  res.locals.actualSecond = now.getSeconds();
  //   res.locals.appName = "NodeApp"; Does the same as below
  res.render("home"); //{ appName: "NodeApp" };
  //Third way as locals in app
}

// /param_in_route/:num
export function paramInRoute(req, res, next) {
  const num = req.params.num;

  res.send("You send me " + num);
}

// param_in_route_multiple/:product/size/:size/color/:color
export function paramInRouteMultiple(req, res, next) {
  const product = req.params.product;
  const size = req.params.size;
  const color = req.params.color;

  res.send(`You are requesting a ${product} of size ${size} in color ${color}`);
}
