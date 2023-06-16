const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  insert(tile) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      tile.name,
    ]);
  }

  update(tile) {
    console.error(tile.id);
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [tile.name, tile.id]
    );
  }
}

module.exports = TileManager;
