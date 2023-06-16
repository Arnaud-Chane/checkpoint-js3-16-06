const express = require("express");

const router = express.Router();

const boatController = require("./controllers/boatController");
const tileController = require("./controllers/tileController");

router.get("/boats", boatController.findAllBoats);

router.get("/tiles", tileController.findAllTiles);

module.exports = router;
