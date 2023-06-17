const models = require("../models");

const getAllBoats = (req, res) => {
  models.boat
    .findAll()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Pb to retrieve all the boats");
    });
};

module.exports = {
  getAllBoats,
};
