const db = require('../../db.js');

// Decrease the buy_qty of a shopping list item by 1

const shoppingBuyDown = (req, res, next) => {
  const item_id = req.params.id;
  const qStr = `UPDATE shopping 
  SET buy_qty = buy_qty - 1 
  WHERE _id = ${item_id};`;
  db.query(qStr)
    .then((qres) => {
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingListDown error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingBuyDown;
