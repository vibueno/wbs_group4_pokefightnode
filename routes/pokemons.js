const express = require('express');
const router = express.Router();
const pokeController = require('../controllers/pokemons');

// show all users
router.get('/:id', pokeController.getInfo);
router.get('/', pokeController.getAll);

module.exports = router;
