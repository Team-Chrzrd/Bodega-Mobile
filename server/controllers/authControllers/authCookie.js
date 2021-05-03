const db = require('../../db');

const authCookie = (req, res, next) => {
  // write code here
  let userId;
  const qStr = `SELECT * FROM auth WHERE user_name = '${req.body.username}';`;

  db.query(qStr)
    .then((record) => {
      const user = record.rows[0];
      const userId = user._id;
      console.log('file: authCookie.js ~ line 12 ~ .then ~ userId', userId);

      res.cookie('ssid', userId, { httpOnly: true });
      res.locals.userId = userId;
      console.log('end of authCookie');
      return next();
    })
    .catch(() =>
      next({
        log: 'authController.authCookie error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = authCookie;
