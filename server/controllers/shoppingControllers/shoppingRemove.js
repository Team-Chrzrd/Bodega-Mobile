const db = require('../../db.js');

// Delete an item from the shopping list;

const shoppingRemove = (req, res, next) => {
  const item_id = req.params.id;
  const qStr = `DELETE FROM shopping 
  WHERE _id = ${item_id}
  RETURNING *;`;
  db.query(qStr)
    .then((qres) => {
      res.locals.deletedItem = qres.rows;
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingDelete error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingRemove;
