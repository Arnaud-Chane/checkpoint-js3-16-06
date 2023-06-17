const express = require("express");

const router = express.Router();

const tileController = require("./controllers/tileController");

router.get("/tiles", tileController.getAllBoats);

module.exports = router;
