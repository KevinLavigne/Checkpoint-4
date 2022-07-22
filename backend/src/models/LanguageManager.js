const AbstractManager = require("./AbstractManager");

class LanguageManager extends AbstractManager {
  static table = "language";

  insert(item) {
    return this.connection.query(
      `insert into ${LanguageManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${LanguageManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = LanguageManager;
