const models = require("../models");

const isTileExists = (req, res, next) => {
  const boatPosition = req.body;

  models.tile
    .matchedTile(boatPosition)
    .then((results) => {
      if (results[0].length > 0) {
        next();
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
        msgToDev: "Doesn't exist mate, can't do that.",
      });
    });
};

module.exports = {
  isTileExists,
};
