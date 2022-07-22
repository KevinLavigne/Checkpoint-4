const AbstractManager = require("./AbstractManager");

class PersonalityManager extends AbstractManager {
  static table = "personality";

  insert(personality) {
    return this.connection.query(
      `insert into ${PersonalityManager.table} (Nom, Prenom, lien_git, lien_linkedin, img_link, img_alt) values (?,?,?,?,?,?)`,
      [
        personality.Nom,
        personality.Prenom,
        personality.lien_git,
        personality.lien_linkedin,
        personality.img_link,
        personality.img_alt,
      ]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${PersonalityManager.table} set ? where id = ?`,
      [item, item.id]
    );
  }

  findByProject(id) {
    return this.connection.query(
      `select p.id, p.Nom, p.Prenom, p.lien_git, p.lien_linkedin, p.img_link, p.img_alt from ${PersonalityManager.table} as p
       inner join personality_has_projet as php on php.projet_id = ?
       where php.personality_id = p.id`,
      [id]
    );
  }

  deleteDependancy(id) {
    return this.connection.query(
      `delete from personality_has_projet where personality_id = ?`,
      [id]
    );
  }
}

module.exports = PersonalityManager;
