const AbstractManager = require("./AbstractManager");

class TechnoManager extends AbstractManager {
  static table = "techno";

  insert(techno) {
    return this.connection.query(
      `insert into ${TechnoManager.table} (title) values (?)`,
      [techno.title]
    );
  }

  update(techno) {
    return this.connection.query(
      `update ${TechnoManager.table} set title = ? where id = ?`,
      [techno.title, techno.id]
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
}

module.exports = TechnoManager;
