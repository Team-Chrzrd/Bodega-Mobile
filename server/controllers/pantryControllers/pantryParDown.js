const db = require("../../db.js");

// decrease pantry item par by 1
const pantryParDown = (req, res, next) => {
  let id = req.params.id;

  let pantryParDown = `UPDATE pantry SET par = par - 1 WHERE _id = $1;`;
  let values = [id];

  db.query(pantryParDown, values)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({
        log: "pantryController.pantryParDown " + `${err}`,
        message: {
          err: "SQL query failed",
        },
      });
    });
};

module.exports = pantryParDown;
