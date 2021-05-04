const { Router } = require('express');
const authController = require('../controllers/authControllers/authController.js');

const authRouter = Router();

// input: js object with key-value pairs from shopping table
// output: entire shopping table as JSON
authRouter.post(
  '/signup',
  authController.authSignup,
  authController.authCookie,
  (req, res) => {
    console.log('attempting to redirect');
    //res.send('signup complete');
    res.redirect('./api/shopping/');
  },
);

authRouter.post(
  '/signin',
  authController.authSignin,
  authController.authCookie,
  (req, res) => {
    res.redirect('/api/shopping/');
  },
);

// authRouter.use('/', authController.authCheckCookie, (req, res) => {
//   res.redirect('/api/shopping/');
//   next();
// });

module.exports = authRouter;
