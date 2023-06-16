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
  models.boat
    .find(req.params.id)
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
  const boat = req.body;
  models.boat
    .insert(boat)
    .then(([result]) => {
      res.location(`/boats/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editBoat = (req, res) => {
  const boat = req.body;
  boat.id = parseInt(req.params.id, 10);
  models.boat
    .update(boat)
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
  models.boat
    .delete(req.params.id)
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
