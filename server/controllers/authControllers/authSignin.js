const bcrypt = require("bcryptjs");
const db = require("../../db.js");

const authSignin = (req, res, next) => {
  // write code here
  // take user info from client
  const qStr = `SELECT * FROM auth WHERE user_name = ${req.body.username};`;
  db.query(qStr).then((qres) => {
    const user = qres.rows[0] ? qres.rows[0] : false;
    if (!user) res.redirect("/signup");
    bcrypt
      .compare(req.body.password, user.passkey)
      .then((result) => {
        if (result) {
          res.locals.username = req.body.username;
          return next();
        }
        return res.redirect("/signin");
      })
      .catch(() =>
        next({
          log: "authController.authSignin error",
          message: { err: "bcrypt failed" },
        })
      )
      .catch(() =>
        next({
          log: "authController.authSignin error",
          message: { err: "SQL query failed" },
        })
      );
  });
};

module.exports = authSignin;
