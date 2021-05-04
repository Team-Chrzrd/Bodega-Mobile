const db = require("../../db.js");

// retreve pantry table for user whose user_id is in the request
const pantryGet = (req, res, next) => {
  const getPantry = "SELECT * FROM pantry WHERE user_id = $1;";
  // let values = [res.locals.userID];

  // testing values
  // hardcoded the user_id as 1
  const values = [1];

  db.query(getPantry, [1])
    .then((result) => {
      res.locals.pantry = result.rows;
      // console.log(res.locals.pantry);
      return next();
    })
    .catch((err) =>
      next({
        log: "pantryController.pantryGet " + `${err}`,
        message: {
          err: "SQL query failed",
        },
      })
    );
};

module.exports = pantryGet;
