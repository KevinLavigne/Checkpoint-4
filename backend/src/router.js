const express = require("express");

const {
  ItemController,
  LanguageController,
  PersonalityController,
  ProjetController,
  TechnoController,
  ExperienceController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/languages", LanguageController.browse);

router.get("/personalitys", PersonalityController.browse);
router.get("/personalityByProjet/:id", PersonalityController.browseByProjet);

router.get("/projets", ProjetController.browse);
router.get("/fullProject/:id", ProjetController.browseFullProjet);
router.get("/fullProjects", ProjetController.browseFullProjets);

router.get("/experiences", ExperienceController.browse);

router.get("/home", PersonalityController.fullProfile);

router.get("/technos", TechnoController.browse);
router.get("/technoByProjet/:id", TechnoController.browseByProjet);

module.exports = router;
