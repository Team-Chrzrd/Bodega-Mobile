const db = require('../../db.js');

// Update a shopping item with new data;

const shoppingUpdate = (req, res, next) => {
  const item_id = req.params.id;
  const item = req.body;
  const qStr = `UPDATE shopping 
  SET (item_name, note, unit, list_qty, buy_qty, category) = ('${item.item_name}', '${item.note}', '${item.unit}', ${item.list_qty}, ${item.buy_qty}, '${item.category}') 
  WHERE _id = ${item_id};`;
  db.query(qStr)
    .then(() => {
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingUpdate error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingUpdate;
