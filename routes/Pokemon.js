const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/Pokemon');
const pokemonFightController = require('../controllers/PokemonFight');

// get request to homepage
router.get('/', (req, res) => {
  res.redirect('/pokemon');
});

router.post('/pokemon/fight/create', pokemonFightController.create);

router.get('/pokemon/:id/:info', pokemonController.getInfo);
router.get('/pokemon/:id', pokemonController.getById);
router.get('/pokemon', pokemonController.getAll);

module.exports = router;
