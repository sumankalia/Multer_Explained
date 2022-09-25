const express = require("express");
const csvController = require("../controllers/userController");

const router = express.Router();

//post create new media
router.get(
  "/all",
  csvController.getAllUsers
);

module.exports = router;
