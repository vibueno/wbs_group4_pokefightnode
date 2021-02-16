const express = require('express');
const router = express.Router();
const pokeController = require('../controllers/Pokemon');

router.get('/pokemon/:id/:info', pokeController.mongoGetInfo);
router.get('/pokemon/:id', pokeController.mongoGetById);
router.get('/pokemon', pokeController.mongoGetAll);

module.exports = router;
