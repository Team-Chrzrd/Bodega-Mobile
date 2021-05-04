const express = require("express");

const pantry = express.Router();
const pantryController = require("../controllers/pantryControllers/pantryController.js");
const authController = require("../controllers/authControllers/authController");

// function: query the database for pantry table
// output: return entire pantry table as JSON
pantry.get(
  "/",
  // authController.authCheckCookie,
  pantryController.pantryGet,
  (req, res) => res.status(200).json(res.locals.pantry)
);

// input: JSON from the front end
// function: update the pantry table with the item sent
// output: return updated pantry table as JSON
pantry.post(
  "/submit",
  // authController.authCheckCookie,
  pantryController.pantrySubmit,
  pantryController.pantryGet,
  (req, res) => res.status(200).json(res.locals.pantry)
);

// input: JSON from front end, with an id parameter
// function: update the ispecified by the id param
// output: return updated pantry table as JSON
pantry.post(
  "/update/:id",
  // authController.authCheckCookie,
  pantryController.pantryUpdate,
  pantryController.pantryGet,
  (req, res) => res.status(200).json(res.locals.pantry)
);

// input: item id parameter
// function: increase qty of specified by 1
// output: return updated pantry table as JSON
pantry.put(
  "/itemup/:id",
  // authController.authCheckCookie,
  pantryController.pantryItemUp,
  pantryController.pantryGet,
  (req, res) => res.status(200).json(res.locals.pantry)
);

// input: item id parameter
// function: decrease qty of specified item by 1
// output: return updated pantry table as JSON
pantry.put(
  "/itemdown/:id",
  // authController.authCheckCookie,
  pantryController.pantryItemDown,
  pantryController.pantryGet,
  (req, res) => res.status(200).json(res.locals.pantry)
);

// input: item id parameter
// function: increase par qty of specified item by 1
// output: return updated pantry table as JSON
pantry.put(
  "/parup/:id",
  // authController.authCheckCookie,
  pantryController.pantryParUp,
  pantryController.pantryGet,
  (req, res) => res.status(200).json(res.locals.pantry)
);

// input: item id parameter
// function: decrease par qty of specified item by 1
// output: return updated pantry table as JSON
pantry.put(
  "/pardown/:id",
  // authController.authCheckCookie,
  pantryController.pantryParDown,
  pantryController.pantryGet,
  (req, res) => res.status(200).json(res.locals.pantry)
);

// input: item id parameter
// function: delete specified item in the pantry table
// output: return updated pantry table as JSON
pantry.delete(
  "/delete/:id",
  // authController.authCheckCookie,
  pantryController.pantryDelete,
  pantryController.pantryGet,
  (req, res) => res.status(200).json(res.locals.pantry)
);

module.exports = pantry;
