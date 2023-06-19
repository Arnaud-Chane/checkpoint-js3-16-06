const models = require("../models");

const resetTheGame = (req, res) => {
  models.tile
    .resetTreasureTile()
    .then((row) => {
      if (row[0] == null) {
        res.status(404).send("Nope");
      } else {
        res.status(201).send(row[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("PB to reset the game.");
    });
};

module.exports = {
  resetTheGame,
};
