const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  isTileExists(tile) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE coord_x = ? AND coord_Y = ?`,
      [tile.coord_x, tile.coord_y]
    );
  }
}

module.exports = TileManager;
