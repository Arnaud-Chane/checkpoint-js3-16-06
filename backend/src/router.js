const express = require("express");

const router = express.Router();

const tileController = require("./controllers/tileController");
const boatController = require("./controllers/boatController");

router.get("/tiles", tileController.getAllTiles);
router.get("/boats", boatController.getAllBoatsOrByName);

module.exports = router;
