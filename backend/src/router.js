const express = require("express");

const router = express.Router();

const boatController = require("./controllers/boatController");
const tileController = require("./controllers/tileController");
const isTileExist = require("./services/tileExists");

router.get("/boats", boatController.findAllBoatsOrByName);
router.put("/boats/:id", isTileExist, boatController.editBoat);

router.get("/tiles", tileController.findAllTiles);

module.exports = router;
