const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findByName(name) {
    return this.connection.query(
      `
      select b.id, b.coord_x, b.coord_y, b.name, t.type
      from ${this.table} b
      join tile t on b.coord_x = t.coord_x and b.coord_y = t.coord_y
      where name = ?
      `,
      [name]
    );
  }

  updateBoat(boat) {
    return this.connection.query(
      `update ${this.table} set coord_x = ?, coord_y = ? where id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
  }
}

module.exports = BoatManager;
