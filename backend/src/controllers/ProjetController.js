const models = require("../models");

class ProjetController {
  static browse = (req, res) => {
    models.projet
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseFullProjet = async (req, res) => {
    try {
      let projet = "";
      const projets = await models.projet.find(req.params.id);
      projet = projets[0];
      const personality = await models.personality.findByProject(req.params.id);

      const techno = await models.techno.findByProject(req.params.id);

      projet[0].personality = personality[0];
      projet[0].techno = techno[0];

      res.status(200).json(projet);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  static browseFullProjets = async (req, res) => {
    try {
      let projet = "";
      const projets = await models.projet.findAllByLanguage(
        req.params.language
      );
      projet = projets[0];
      if (projet) {
        const personality = await Promise.all(
          projet.map((proj) =>
            models.personality.findByProject(proj.id).then((final) => final[0])
          )
        );
        const techno = await Promise.all(
          projet.map((proj) =>
            models.techno.findByProject(proj.id).then((final) => final[0])
          )
        );

        for (let i = 0; i < projets.length; i++) {
          projet[i].personality = personality[i];
          projet[i].techno = techno[i];
        }
        if (projet[projet.length - 1]) {
          projet[projet.length - 1].personality =
            personality[projet.length - 1];
          projet[projet.length - 1].techno = techno[projet.length - 1];
        }
      }

      res.status(200).json(projet);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  static read = (req, res) => {
    models.projet
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
    const projet = req.body;

    // TODO validations (length, format...)

    models.projet
      .update({
        id: projet.id,
        titre: projet.titre,
        description: projet.description,
        repo_link: projet.repo_link,
        img_link: projet.img_link,
        img_alt: projet.img_alt,
        language_id: projet.language_id,
      })
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
    const projet = req.body;

    // TODO validations (length, format...)

    models.projet
      .insert(projet)
      .then(([result]) => {
        res.status(201).send({ ...projet, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = async (req, res) => {
    try {
      await models.projet.deleteDependancyTechno(req.params.id);

      await models.projet.deleteDependancyPersonality(req.params.id);

      await models.projet.delete(req.params.id);

      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };
}

module.exports = ProjetController;
