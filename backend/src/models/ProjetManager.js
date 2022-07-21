const AbstractManager = require("./AbstractManager");

class ProjetManager extends AbstractManager {
  static table = "projet";

  insert(item) {
    return this.connection.query(
      `insert into ${ProjetManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ProjetManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ProjetManager;
