const models = require("../models");

const getAllBoatsOrByName = (req, res) => {
  const { name } = req.query;

  if (name) {
    models.boat
      .findByName(name)
      .then((results) => {
        res.status(200).send(results[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } else {
    models.boat
      .findAll()
      .then((results) => {
        res.status(200).send(results[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }
};

module.exports = {
  getAllBoatsOrByName,
};
