import session from "express-session";

const INACTIVITY_EXPIRATION_2_DAYS = 1000 * 60 * 60 * 24 * 2; // 48 hours

//middleware for the sessions
export const middleware = session({
  name: "nodeapp-session",
  secret: "xthaM7yJ8L6R7UWTK19SsBRjkEkYmr",
  saveUninitialized: true, //Creates an empty session for every user, logged or not
  resave: false, //this and above are not absolutely necessary
  cookie: { maxAge: INACTIVITY_EXPIRATION_2_DAYS },
});

export function useSessionsInViews(req, res, next) {
  res.locals.session = req.session;
  next();
}
