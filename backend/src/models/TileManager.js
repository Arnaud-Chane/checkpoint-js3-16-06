const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  matchedTile(tile) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE coord_x = ? AND coord_Y = ?`,
      [tile.coord_x, tile.coord_y]
    );
  }

  resetTreasureTile() {
    return this.connection.query(
      `
      UPDATE tile SET has_treasure = 0;
      UPDATE tile SET has_treasure = 1 where type = 'island' ORDER BY RAND() LIMIT 1;
      `
    );
  }
}

module.exports = TileManager;
