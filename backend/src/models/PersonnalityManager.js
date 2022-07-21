const AbstractManager = require("./AbstractManager");

class PersonalityManager extends AbstractManager {
  static table = "personality";

  insert(item) {
    return this.connection.query(
      `insert into ${PersonalityManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${PersonalityManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }

  findByProject(id) {
    return this.connection.query(
      `select p.id, p.Nom, p.Prenom, p.lien_git, p.lien_linkedin, p.img_link, p.img_alt from ${PersonalityManager.table} as p
       inner join personality_has_projet as php on php.Projet_id = ?
       where php.personality_id = p.id`,
      [id]
    );
  }
}

module.exports = PersonalityManager;
