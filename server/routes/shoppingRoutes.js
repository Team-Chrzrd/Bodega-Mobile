const { Router } = require('express');
const shoppingController = require('../controllers/shoppingControllers/shoppingController.js');
const authController = require('../controllers/authControllers/authController.js');

const shopping = Router();

// input: js object with key-value pairs from shopping table
// output: entire shopping table as JSON
shopping.post(
  '/submit',
  shoppingController.submit,
  shoppingController.load,
  (req, res) => res.status(200).json(res.locals.shopping),
);

// input: js object
// output: entire shopping table as JSON
shopping.post(
  '/update/:id',
  // authController.authCheckCookie,
  shoppingController.update,
  shoppingController.load,
  (req, res) => res.status(200).json(res.locals.shopping),
);

// input: id of item to delete
// output: entire shopping table as JSON
shopping.delete(
  '/remove/:id',
  // authController.authCheckCookie,
  shoppingController.remove,
  shoppingController.load,
  (req, res) => res.status(200).json(res.locals.shopping),
);

// input: array of js object that were purchased
// output: entire shopping table as JSON
shopping.post(
  '/checkout',
  // authController.authCheckCookie,
  shoppingController.checkout,
  shoppingController.refresh,
  shoppingController.load,
  (req, res) => res.status(200).json(res.locals.shopping),
);

shopping.post(
  '/refresh',
  // authController.authCheckCookie,
  shoppingController.refresh,
  shoppingController.load,
  (req, res) => res.status(200).json(res.locals.shopping),
);

shopping.post(
  '/addFromPantry/:id',
  // authController.authCheckCookie,
  shoppingController.addFromPantry,
  shoppingController.load,
  (req, res) => res.status(200).json(res.locals.shopping),
);

// output: entire shopping table as JSON
shopping.get(
  '/',
  // authController.authCheckCookie,
  shoppingController.refresh,
  shoppingController.load,
  (req, res) => {
    return res.status(200).json(res.locals.shopping);
  },
);

shopping.post(
  '/listUp/:id',
  // authController.authCheckCookie,
  shoppingController.listUp,
  shoppingController.load,
  (req, res) => {
    return res.status(200).json(res.locals.shopping);
  },
);

shopping.post(
  '/listDown/:id',
  // authController.authCheckCookie,
  shoppingController.listDown,
  shoppingController.load,
  (req, res) => {
    return res.status(200).json(res.locals.shopping);
  },
);

shopping.post(
  '/buyUp/:id',
  // authController.authCheckCookie,
  shoppingController.buyUp,
  shoppingController.load,
  (req, res) => {
    return res.status(200).json(res.locals.shopping);
  },
);

shopping.post(
  '/buyDown/:id',
  // authController.authCheckCookie,
  shoppingController.buyDown,
  shoppingController.load,
  (req, res) => {
    return res.status(200).json(res.locals.shopping);
  },
);

module.exports = shopping;
