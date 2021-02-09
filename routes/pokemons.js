const express = require('express');
const router = express.Router();
const pokeController = require('../controllers/pokemons');

// show all users
router.get('/pokemon/:id/:info', pokeController.getInfo);
router.get('/pokemon/:id', pokeController.getById);
router.get('/pokemon', pokeController.getAll);

module.exports = router;
