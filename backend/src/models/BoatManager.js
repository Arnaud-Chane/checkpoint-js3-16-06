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
}

module.exports = BoatManager;
