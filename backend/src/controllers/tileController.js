const models = require("../models");

const getAllTiles = (req, res) => {
  models.tile
    .findAll()
    .then((results) => {
      res.status(200).send(results[0]);
    })
    .catch((err) => {
      res.status(500).send("Pb to retreive all the tiles. Error : ", err);
    });
};

module.exports = {
  getAllTiles,
};
