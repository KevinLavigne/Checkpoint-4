const AbstractManager = require("./AbstractManager");

class TechnoManager extends AbstractManager {
  static table = "techno";

  insert(techno) {
    return this.connection.query(
      `insert into ${TechnoManager.table} (titre,img_link,img_alt) values (?,?,?)`,
      [techno.titre, techno.img_link, techno.img_alt]
    );
  }

  update(techno) {
    return this.connection.query(
      `update ${TechnoManager.table} set ? where id = ?`,
      [techno, techno.id]
    );
  }

  findByProject(id) {
    return this.connection.query(
      `select t.id,t.titre,t.img_link,t.img_alt from ${TechnoManager.table} as t
       inner join projet_has_techno as pht on pht.Projet_id = ?
       where pht.techno_id = t.id`,
      [id]
    );
  }

  deleteDependancy(id) {
    return this.connection.query(
      `delete from projet_has_techno where techno_id = ?`,
      [id]
    );
  }
}

module.exports = TechnoManager;
