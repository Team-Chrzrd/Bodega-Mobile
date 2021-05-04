const db = require('../../db.js');

// decrease the pantry item qty by 1
const pantryItemUp = (req, res, next) => {
    let id = req.params.id;

    let pantryUp = `UPDATE pantry SET qty = qty + 1 WHERE _id = $1;`;
    let values = [id];

    db.query(pantryUp, values)
        .then(() => {
            return next();
        })
        .catch((err) => {
            return next({
                log: 'pantryController.pantryItemUp ' + `${err}`,
                message: {
                    err: 'SQL query failed'
                }
            });
        });
}

module.exports = pantryItemUp;