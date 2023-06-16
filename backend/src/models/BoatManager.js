const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findByName(name) {
    return this.connection.query(`select * from ${this.table} where name = ?`, [
      name,
    ]);
  }

  updateBoat(boat) {
    return this.connection.query(
      `update ${this.table} set coord_x = ?, coord_y = ? where id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
  }
}

module.exports = BoatManager;
