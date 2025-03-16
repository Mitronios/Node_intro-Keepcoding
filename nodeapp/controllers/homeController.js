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
