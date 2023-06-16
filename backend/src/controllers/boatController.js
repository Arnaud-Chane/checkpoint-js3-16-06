const models = require("../models");

const findAllBoats = (req, res) => {
  models.boat
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const findBoatById = (req, res) => {
  models.Boat.find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createNewBoat = (req, res) => {
  const Boat = req.body;
  models.Boat.insert(Boat)
    .then(([result]) => {
      res.location(`/Boats/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editBoat = (req, res) => {
  const Boat = req.body;
  Boat.id = parseInt(req.params.id, 10);
  models.Boat.update(Boat)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteBoat = (req, res) => {
  models.Boat.delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  findAllBoats,
  findBoatById,
  createNewBoat,
  editBoat,
  deleteBoat,
};
