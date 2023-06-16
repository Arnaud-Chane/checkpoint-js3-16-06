const models = require("../models");

const isTileExist = async (req, res, next) => {
  const tiles = req.body;

  models.tile
    .isTileExists(tiles)
    .then((tile) => {
      if (tile[0].length > 0) {
        next();
      } else {
        res.status(404).send("Not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = isTileExist;
