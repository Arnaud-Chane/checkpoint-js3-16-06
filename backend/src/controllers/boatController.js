const models = require("../models");

const findAllBoatsOrByName = (req, res) => {
  const { name } = req.query;

  if (name) {
    models.boat
      .findByName(name)
      .then((row) => {
        if (row[0] == null) {
          res.status(404).send("Nope");
        } else {
          res.status(200).send(row[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    models.boat
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
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
    .updateBoat(boat)
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
  findAllBoatsOrByName,
  findBoatById,
  createNewBoat,
  editBoat,
  deleteBoat,
};
