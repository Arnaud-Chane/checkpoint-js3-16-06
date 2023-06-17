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
        res
          .status(500)
          .send("Pd at retrieving boat by its name. Error : ", err);
      });
  } else {
    models.boat
      .findAll()
      .then((results) => {
        res.status(200).send(results[0]);
      })
      .catch((err) => {
        res.status(500).send("Pb to retrieve all the boats. Error : ", err);
      });
  }
};

module.exports = {
  getAllBoatsOrByName,
};
