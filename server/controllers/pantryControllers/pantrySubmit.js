const db = require("../../db.js");

// addes a new item into the pantry table
const pantrySubmit = (req, res, next) => {
  // console.log(req.body);
  let { item_name, note, unit, qty, category, par } = req.body;
  // let userId = res.locals.userId;
  if (qty === "null") qty = 0;

  // for testing
  // hardcoded user id to be 1
  const userId = 1;

  const insert = `INSERT INTO pantry (user_id, item_name, note, unit, qty, category, par) VALUES ($1, $2, $3,
        $4, $5, $6, $7);`;
  const values = [userId, item_name, note, unit, qty, category, par];

  db.query(insert, values)
    .then(() => next())
    .catch((err) =>
      next({
        log: "pantryController.pantrySubmit " + `${err}`,
        message: {
          err: "SQL query failed",
        },
      })
    );
};

module.exports = pantrySubmit;
