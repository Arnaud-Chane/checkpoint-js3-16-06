const express = require("express");

const router = express.Router();

const tileController = require("./controllers/tileController");
const boatController = require("./controllers/boatController");

const tileExists = require("./services/tileExists");

router.get("/tiles", tileController.getAllTiles);
router.get("/boats", boatController.getAllBoatsOrByName);

router.put(
  "/boats/:id",
  tileExists.isTileExists,
  boatController.updateBoatPosition
);

module.exports = router;
