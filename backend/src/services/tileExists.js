const models = require("../models");

const isTileExits = (req, res, next) => {
  const boatPosition = req.body;

  models.tile
    .isTileExits(boatPosition)
    .then((results) => {
      if (results) {
        res.sendStatus(204);
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
  isTileExits,
};
