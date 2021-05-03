const db = require('../../db.js');

// Retrieve the shopping list

const shoppingGet = (req, res, next) => {
  let qStr = `SELECT shopping.*, pantry.qty AS pantry_qty, pantry.par AS pantry_par FROM shopping LEFT OUTER JOIN pantry ON shopping.pantry_id = pantry._id;`;
  db.query(qStr)
    .then((qres) => {
      res.locals.shopping = qres.rows;
      return next();
    })
    .catch(() => {
      return next({
        log: 'shoppingController.shoppingGet error',
        message: { err: 'SQL query failed' },
      });
    });
};

module.exports = shoppingGet;
