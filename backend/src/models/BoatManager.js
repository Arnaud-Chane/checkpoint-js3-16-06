const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  insert(boat) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      boat.name,
    ]);
  }

  update(boat) {
    console.error(boat.id);
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [boat.name, boat.id]
    );
  }
}

module.exports = BoatManager;
