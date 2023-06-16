const express = require("express");

const router = express.Router();

const boatController = require("./controllers/boatController");

router.get("/boats", boatController.findAllBoats);

module.exports = router;
