const db = require('../../db.js');

module.exports = {
  Query: {
    async getPantryItems(root, args, context) {
      try {
        const getPantry = 'SELECT * FROM pantry WHERE user_id = $1;';
        // hardcoded the user_id as 1
        const result = await db.query(getPantry, [1]);

        return result.rows;
      } catch (error) {
        console.log('error in pantry.js/getPantryItems', error);
        return [];
      }
    },
  },

  Mutation: {
    async pantrySubmit(_, args) {
      try {
        // console.log(req.body);
        let { itemName, note, unit, qty, category, par } = args;
        // let userId = res.locals.userId;
        if (qty === 'null') qty = 0;

        // for testing
        // hardcoded user id to be 1
        const userId = 1;

        const insert = `INSERT INTO pantry (user_id, item_name, note, unit, qty, category, par) VALUES ($1, $2, $3,
            $4, $5, $6, $7);`;
        const values = [userId, itemName, note, unit, qty, category, par];
        await db.query(insert, values);
        return { success: true };
      } catch (error) {
        console.log('error in shopping.js/pantryQtyUp', error);
        return { success: false };
      }
    },

    async pantryUpdate(_, args) {
      try {
        // destructuring from request
        let { itemName, note, unit, qty, category, par, itemId } = args;
        if (qty === 'null' || qty < 0) qty = 0;

        const update =
          'UPDATE pantry SET item_name = $1, note = $2, unit = $3, qty = $4, category = $5, par = $6 WHERE _id = $7;';
        const values = [itemName, note, unit, qty, category, par, itemId];

        await db.query(update, values);
        return { success: true };
      } catch (error) {
        console.log('error in shopping.js/pantryQtyUp', error);
        return { success: false };
      }
    },

    async pantryQtyUp(_, args) {
      try {
        const id = args.itemId;
        const pantryUp = 'UPDATE pantry SET qty = qty + 1 WHERE _id = $1;';
        const values = [id];

        await db.query(pantryUp, values);
        return { success: true };
      } catch (error) {
        console.log('error in pantry.js/pantryQtyUp', error);
        return { success: false };
      }
    },

    async pantryQtyDown(_, args) {
      try {
        const id = args.itemId;
        const pantryUp = 'UPDATE pantry SET qty = qty - 1 WHERE _id = $1;';
        const values = [id];

        await db.query(pantryUp, values);
        return { success: true };
      } catch (error) {
        console.log('error in pantry.js/pantryQtyDown', error);
        return { success: false };
      }
    },

    async pantryParUp(_, args) {
      try {
        const id = args.itemId;
        const pantryUp = 'UPDATE pantry SET par = par + 1 WHERE _id = $1;';
        const values = [id];

        await db.query(pantryUp, values);
        return { success: true };
      } catch (error) {
        console.log('error in pantry.js/pantryParUp', error);
        return { success: false };
      }
    },

    async pantryParDown(_, args) {
      try {
        const id = args.itemId;
        const pantryUp = 'UPDATE pantry SET par = par - 1 WHERE _id = $1;';
        const values = [id];

        await db.query(pantryUp, values);
        return { success: true };
      } catch (error) {
        console.log('error in pantry.js/pantryParDown', error);
        return { success: false };
      }
    },

    async pantryRemove(_, args) {
      try {
        const { itemId } = args;

        const deletePantry = 'DELETE FROM pantry WHERE _id = $1;';
        const deleteShopping =
          'UPDATE shopping SET pantry_id = null WHERE pantry_id = $1;';
        const values = [itemId];

        await db.query(deletePantry, values);
        await db.query(deleteShopping, values);

        return { success: true };
      } catch (error) {
        console.log('error in pantry.js/pantryRemove', error);
        return { success: false };
      }
    },
  },
};
