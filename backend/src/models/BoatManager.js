const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findByName(name) {
    return this.connection.query(`SELECT * FROM ${this.table} where name = ?`, [
      name,
    ]);
  }

  updateBoatPosition(boat, id) {
    return this.connection.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [boat.coord_x, boat.coord_y, id]
    );
  }
}

module.exports = BoatManager;
