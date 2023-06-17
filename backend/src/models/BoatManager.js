const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findByName(name) {
    return this.connection.query(
      `SELECT b.id, b.coord_x, b.coord_y, b.name, t.type, t.has_treasure
        FROM ${this.table} b
        JOIN tile t on b.coord_x = t.coord_x AND b.coord_y = t.coord_y
        WHERE name = ?`,
      [name]
    );
  }

  updateBoatPosition(boat, id) {
    return this.connection.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [boat.coord_x, boat.coord_y, id]
    );
  }

  resetBoat() {
    return this.connection.query(
      `update ${this.table} set coord_x = 1, coord_y = 1 where id = 1`
    );
  }
}

module.exports = BoatManager;
