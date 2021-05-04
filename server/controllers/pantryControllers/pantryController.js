// individual middlewares are modularized in their own files
// pantryController combines all the middlewares into a single ojbect
const pantryGet = require('./pantryGet');
const pantrySubmit = require('./pantrySubmit');
const pantryUpdate = require('./pantryUpdate');
const pantryItemUp = require('./pantryItemUp');
const pantryItemDown = require('./pantryItemDown');
const pantryParUp = require('./pantryParUp');
const pantryParDown = require('./pantryParDown');
const pantryDelete = require('./pantryDelete');

module.exports = {
    pantryGet,
    pantrySubmit,
    pantryUpdate,
    pantryItemUp,
    pantryItemDown,
    pantryParUp,
    pantryParDown,
    pantryDelete
};