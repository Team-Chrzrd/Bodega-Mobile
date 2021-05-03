const db = require('../../db.js');

// Add a new item to the shopping list

const shoppingSubmit = (req, res, next) => {
  const newItem = req.body;
  const qStr = `INSERT INTO shopping (user_id, item_name, note, unit, list_qty, buy_qty, category) VALUES ('1', '${newItem.item_name}', '${newItem.note}', '${newItem.unit}', '${newItem.list_qty}', '0','${newItem.category}')
  RETURNING *;`;
  db.query(qStr)
    .then((qres) => {
      res.locals.newItem = qres.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'shoppingController.shoppingSubmit error',
        message: { err: 'SQL query failed' },
      });
    });
};

module.exports = shoppingSubmit;
