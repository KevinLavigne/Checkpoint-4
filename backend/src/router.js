const express = require("express");

const {
  ItemController,
  LanguageController,
  PersonalityController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/languages", LanguageController.browse);

router.get("/personalitys", PersonalityController.browse);
router.get("/perosnalityByProjet/:id", PersonalityController.browseByProjet);

module.exports = router;
