const models = require("../models");

const getAllTiles = (req, res) => {
  models.tile
    .findAll()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Pb to retreive all the tiles");
    });
};

module.exports = {
  getAllTiles,
};
