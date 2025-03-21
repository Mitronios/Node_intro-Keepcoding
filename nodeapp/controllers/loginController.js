import User from "../models/User.js";

export function index(req, res, next) {
  res.locals.error = "";
  res.locals.email = "";
  res.render("login");
}

export async function postLogin(req, res, next) {
  try {
    const { email, password } = req.body;
    const redir = req.query.redir;
    //Check if user exists in db
    const user = await User.findOne({ email: email });

    //If not, check password --> different password send error
    if (!user || !(await user.comparePassword(password))) {
      res.locals.error = "Invalid credentials";
      res.locals.email = email;
      res.render("login");
      return;
    }
    //If user doesn't exists in db but password is ok --> redirect to home
    req.session.userId = user.id;

    res.redirect(redir ? redir : "/");
  } catch (error) {
    next(error);
  }
}

export function logout(req, res, next) {
  req.session.regenerate((err) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect("/");
  });
}
