const AbstractManager = require("./AbstractManager");

class ExperienceManager extends AbstractManager {
  static table = "experience";

  insert(experience) {
    return this.connection.query(
      `insert into ${ExperienceManager.table} (title) values (?)`,
      [experience.title]
    );
  }

  update(experience) {
    return this.connection.query(
      `update ${ExperienceManager.table} set title = ? where id = ?`,
      [experience.title, experience.id]
    );
  }
}

module.exports = ExperienceManager;
