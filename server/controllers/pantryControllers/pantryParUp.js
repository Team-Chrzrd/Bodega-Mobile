const db = require("../../db.js");

// increase pantry par qty by 1
const pantryParUp = (req, res, next) => {
  let id = req.params.id;

  let pantryParUp = `UPDATE pantry SET par = par + 1 WHERE _id = $1;`;
  let values = [id];

  db.query(pantryParUp, values)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({
        log: "pantryController.pantryParUp " + `${err}`,
        message: {
          err: "SQL query failed",
        },
      });
    });
};

module.exports = pantryParUp;
