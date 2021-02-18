const express = require('express');
const router = express.Router();
const pokemonFightController = require('../controllers/PokemonFight');

router.post('/pokemon/fight/create', pokemonFightController.create);
router.get('/pokemon/fight/halloffame', pokemonFightController.getHallOfFame);

module.exports = router;
