const express = require('express');
const apiRouter = express.Router();
const pantryRoutes = require('./pantryRoutes.js');
const shopping = require('./shoppingRoutes.js');

apiRouter.use('/pantry', pantryRoutes);

apiRouter.use('/shopping', shopping);

module.exports = apiRouter;
