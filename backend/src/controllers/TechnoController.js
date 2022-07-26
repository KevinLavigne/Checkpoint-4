const models = require("../models");

class TechnoController {
  static browse = (req, res) => {
    models.techno
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseByProjet = (req, res) => {
    models.techno
      .findByProject(req.params.id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.techno
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const techno = req.body;

    // TODO validations (length, format...)

    models.techno
      .update(techno, techno.id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const techno = req.body;

    // TODO validations (length, format...)

    models.techno
      .insert(techno)
      .then(([result]) => {
        res.status(201).send({ ...techno, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = async (req, res) => {
    try {
      await models.techno.deleteDependancy(req.params.id);

      await models.techno.delete(req.params.id);

      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };
}

module.exports = TechnoController;
