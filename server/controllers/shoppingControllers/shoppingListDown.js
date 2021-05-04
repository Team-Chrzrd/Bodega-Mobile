const db = require('../../db.js');

// Decrease the list_qty of a shopping item by 1

const shoppingListDown = (req, res, next) => {
  const item_id = req.params.id;
  const qStr = `UPDATE shopping 
  SET list_qty = list_qty - 1 
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

module.exports = shoppingListDown;
