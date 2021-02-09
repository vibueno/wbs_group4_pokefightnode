const express = require('express');
const router = express.Router();
const pokeController = require('../controllers/pokemons');

// show all users
router.get('/:id/:info', pokeController.getInfo);
router.get('/:id', pokeController.getById);
router.get('/', pokeController.getAll);

module.exports = router;
