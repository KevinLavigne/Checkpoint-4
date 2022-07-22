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
  MaillerController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/languages", LanguageController.browse);

router.get("/personality", PersonalityController.browse);
router.get("/personalityByProjet/:id", PersonalityController.browseByProjet);
router.put("/personality", PersonalityController.edit);
router.post("/personality", PersonalityController.add);
router.delete("/personality/:id", PersonalityController.delete);

router.get("/projets/:language", ProjetController.browse);
router.get("/fullProject/:id", ProjetController.browseFullProjet);
router.get("/Projet/:language", ProjetController.browseFullProjets);
router.put("/Projet", ProjetController.edit);
router.post("/Projet", ProjetController.add);
router.delete("/Projet/:id", ProjetController.delete);

router.get("/experience/:language", ExperienceController.browse);
router.put("/experience", ExperienceController.edit);
router.post("/experience", ExperienceController.add);
router.delete("/experience/:id", ExperienceController.delete);

router.get("/home/:language", PersonalityController.fullProfile);

router.get("/techno", TechnoController.browse);
router.get("/technoByProjet/:id", TechnoController.browseByProjet);
router.put("/techno", TechnoController.edit);
router.post("/techno", TechnoController.add);
router.delete("/techno/:id", TechnoController.delete);

router.post("/user/login", VerifyEmail, UserController.login);
router.post("/user/create", UserController.add);
router.get("/checkuser", Authorization, UserController.browse);
router.get("/checkuser/:email", VerifyEmail, UserController.read);
router.get("/user/logout", Authorization, UserController.logout);

router.post("/sendEmail", MaillerController.sendMail);

module.exports = router;
