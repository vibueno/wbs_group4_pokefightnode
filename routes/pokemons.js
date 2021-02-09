const express = require("express");
const router = express.Router();
const pokeController = require("../controllers/pokemons");

router.get("/", pokeController.getAll);

module.exports = router;
