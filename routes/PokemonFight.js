const express = require('express');
const router = express.Router();
const pokemonFightController = require('../controllers/PokemonFight');
const appController = require('../controllers/App');

router.post('/create', pokemonFightController.create);
router.get('/halloffame', pokemonFightController.getHallOfFame);
router.get('*', appController.pageNotFound);

module.exports = router;
