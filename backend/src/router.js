const express = require("express");
const { Authorization } = require("./services/user");
const { VerifyEmail } = require("./services/verify");

const {
  ItemController,
  LanguageController,
  PersonalityController,
  ProjetController,
  TechnoController,
  ExperienceController,
  UserController,
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

router.post("/user/login", VerifyEmail, UserController.login);
router.post("/user/create", UserController.add);
router.get("/checkuser", Authorization, UserController.browse);
router.get("/checkuser/:email", VerifyEmail, UserController.read);
router.get("/user/logout", Authorization, UserController.logout);

module.exports = router;
