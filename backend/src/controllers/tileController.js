const models = require("../models");

const findAllTiles = (req, res) => {
  models.tile
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const findTileById = (req, res) => {
  models.tile
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

const createNewTile = (req, res) => {
  const tile = req.body;
  models.tile
    .insert(tile)
    .then(([result]) => {
      res.location(`/tiles/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editTile = (req, res) => {
  const tile = req.body;
  tile.id = parseInt(req.params.id, 10);
  models.tile
    .update(tile)
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

const deleteTile = (req, res) => {
  models.tile
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
  findAllTiles,
  findTileById,
  createNewTile,
  editTile,
  deleteTile,
};
