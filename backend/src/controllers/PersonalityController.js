const models = require("../models");

class personalityController {
  static browse = (req, res) => {
    models.personality
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
    models.personality
      .findByProject(req.params.id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static fullProfile = async (req, res) => {
    try {
      let home = "";
      const profile = await models.personality.find(1);
      home = profile[0];

      const experiences = await models.experience.findAll(req.params.language);

      home[0].experiences = experiences[0];

      const techno = await models.techno.findAll();

      home[0].techno = techno[0];

      res.status(200).json(home);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  static read = (req, res) => {
    models.personality
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
    const personality = req.body;

    // TODO validations (length, format...)

    models.personality
      .update(personality, personality.id)
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
    const personality = req.body;

    // TODO validations (length, format...)

    models.personality
      .insert(personality)
      .then(([result]) => {
        res.status(201).send({ ...personality, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = async (req, res) => {
    try {
      await models.personality.deleteDependancy(req.params.id);

      await models.personality.delete(req.params.id);
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };
}

module.exports = personalityController;
