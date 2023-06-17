const model = require("../models");

const getAllBoats = (req, res) => {
  model.boat
    .findAll()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Pb to retreive all boat");
    });
};

module.exports = {
  getAllBoats,
};
