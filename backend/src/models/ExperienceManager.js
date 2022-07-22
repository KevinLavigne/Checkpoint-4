const AbstractManager = require("./AbstractManager");

class ExperienceManager extends AbstractManager {
  static table = "experience";

  insert(experience) {
    return this.connection.query(
      `insert into ${ExperienceManager.table} (titre, description, language_id) values (?,?,?)`,
      [experience.titre, experience.description, experience.language_id]
    );
  }

  findAll(language) {
    return this.connection.query(
      `select * from  ${this.table} where language_id = ?`,
      [language]
    );
  }

  update(experience) {
    return this.connection.query(
      `update ${ExperienceManager.table} set ? where id = ?`,
      [experience, experience.id]
    );
  }
}

module.exports = ExperienceManager;
