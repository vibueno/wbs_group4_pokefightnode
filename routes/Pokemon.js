const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/Pokemon');
const pokemonFightController = require('../controllers/PokemonFight');

// get request to homepage
router.get('/', (req, res) => {
  res.redirect('/pokemon');
});

router.get('/pokemon/fight/create', pokemonFightController.create);

router.get('/pokemon/:id/:info', pokemonController.mongoGetInfo);
router.get('/pokemon/:id', pokemonController.mongoGetById);
router.get('/pokemon', pokemonController.mongoGetAll);

module.exports = router;
