const db = require('../../db.js');

// Find items in shopping list where buy_qty is positive (basket)
// Check if a cooresponding pantry item exists for each item in basket
// if a pantry item exists, update the qty in pantry and the qtys in shopping
// if a pantry item does not exist, create one in pantry and update the qtys in shopping

const shoppingCheckout = (req, res, next) => {
  let qStr = `SELECT * FROM shopping WHERE user_id = '1' AND buy_qty > 0;`;
  return db
    .query(qStr)
    .then((qres) => {
      const basket = qres.rows;
      basket.forEach((item) => {
        if (item.pantry_id) {
          qStr = `SELECT * FROM pantry WHERE _id = ${item.pantry_id};`;
          return db
            .query(qStr)
            .then((qres) => {
              let pantryItem = qres.rows[0];
              qStr = `UPDATE pantry 
            SET qty = ${pantryItem.qty + item.buy_qty}
            WHERE _id = ${item.pantry_id} RETURNING *;`;
              return db.query(qStr);
            })
            .then((qres) => {
              qStr = `UPDATE shopping 
          SET (buy_qty, list_qty) = (0, ${Math.max(
            0,
            item.list_qty - item.buy_qty,
          )}) 
          WHERE _id = ${item._id} RETURNING *;`;
              return db.query(qStr);
            })
            .catch(() => {
              return next({
                log: 'shoppingController.shoppingCheckout if statment error',
                message: { err: 'SQL query failed' },
              });
            });
        } else {
          qStr = `INSERT INTO pantry (user_id, item_name, note, unit, qty, par, category) VALUES ('1','${item.item_name}', '${item.note}', '${item.unit}', '${item.buy_qty}', '0', '${item.category}') RETURNING *;`;
          return db
            .query(qStr)
            .then((qres) => {
              const pantry_id = qres.rows[0]._id;
              qStr = `UPDATE shopping 
          SET (pantry_id, list_qty, buy_qty ) = ('${pantry_id}', ${Math.max(
                0,
                item.list_qty - item.buy_qty,
              )},0 )
          WHERE _id = ${item._id} RETURNING *;`;
              return db.query(qStr);
            })
            .catch(() => {
              return next({
                log: 'shoppingController.shoppingCheckout else statment error',
                message: { err: 'SQL query failed' },
              });
            });
        }
      });
    })
    .then(() => {
      return next();
    })
    .catch(() => {
      return next({
        log: 'shoppingController.shoppingCheckout error',
        message: { err: 'SQL query failed' },
      });
    });
};

module.exports = shoppingCheckout;
