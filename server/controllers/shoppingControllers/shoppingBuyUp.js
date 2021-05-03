const db = require('../../db.js');

// Increase the buy_qty of a shopping list item by 1

const shoppingBuyUp = (req, res, next) => {
  const item_id = req.params.id;
  res.locals.userId = 1;
  const qStr = `UPDATE shopping 
  SET buy_qty = buy_qty + 1 
  WHERE _id = ${item_id};`;
  db.query(qStr)
    .then((qres) => {
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingListUp error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingBuyUp;
