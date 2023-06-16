const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  insert(tile) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [tile.name]
    );
  }

  update(tile) {
    console.error(tile.id);
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [tile.name, tile.id]
    );
  }

  isTileExists(tile) {
    return this.connection.query(
      `SELECT *
      FROM ${this.table}
      WHERE coord_x = ?
      AND coord_y = ?`,
      [tile.coord_x, tile.coord_y]
    );
  }
}

module.exports = TileManager;
