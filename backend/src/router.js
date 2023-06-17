const express = require("express");

const router = express.Router();

const tileController = require("./controllers/tileController");
const boatController = require("./controllers/boatController");

const tileExists = require("./services/tileExists");
const resetGame = require("./services/resetGame");

router.get("/tiles", tileController.getAllTiles);
router.get("/boats", boatController.getAllBoatsOrByName);

router.put(
  "/boats/:id",
  tileExists.isTileExists,
  boatController.updateBoatPosition
);

router.post("/games", resetGame.resetTheGame);

module.exports = router;
