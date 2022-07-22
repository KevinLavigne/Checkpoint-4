const AbstractManager = require("./AbstractManager");

class ProjetManager extends AbstractManager {
  static table = "projet";

  insert(item) {
    return this.connection.query(
      `insert into ${ProjetManager.table} (titre,description,repo_link,img_link,img_alt,language_id) values (?,?,?,?,?,?)`,
      [
        item.titre,
        item.description,
        item.repo_link,
        item.img_link,
        item.img_alt,
        item.language_id,
      ]
    );
  }

  findAllByLanguage(language) {
    return this.connection.query(
      `select * from  ${this.table} where language_id = ?`,
      [language]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ProjetManager.table} set ? where id = ?`,
      [item, item.id]
    );
  }

  deleteDependancyTechno(id) {
    return this.connection.query(
      `delete from projet_has_techno where Projet_id = ?`,
      [id]
    );
  }

  deleteDependancyPersonality(id) {
    return this.connection.query(
      `delete from personality_has_projet where projet_id = ?`,
      [id]
    );
  }
}

module.exports = ProjetManager;
