const db = require('../../db.js');

// increase the pantry item qty by 1
const pantryItemDown = (req, res, next) => {
    let id = req.params.id;

    let pantryDown = `UPDATE pantry SET qty = qty - 1 WHERE _id = $1;`;
    let values = [id];

    db.query(pantryDown, values)
        .then(() => {
            return next();
        })
        .catch((err) => {
            return next({
                log: 'pantryController.pantryItemDown ' + `${err}`,
                message: {
                    err: 'SQL query failed'
                }
            });
        });
}

module.exports = pantryItemDown;