//const pokeData = require('../data/pokedex.json');
const Pokemon = require('../models/Pokemon');

const buildResponse = require('../utils/response');
const { validId } = require('../utils/validations');

const pokeController = {
  mongoGetAll: async (req, res) => {
    try {
      const pokemonList = await Pokemon.find({}).sort({
        id: 1,
      });

      res
        .status(200)
        .json(
          buildResponse(
            200,
            `Succesfully fetched ${pokemonList.length} pokemon`,
            pokemonList
          )
        );
    } catch (e) {
      console.error(Error(e.message));
      if (e.status) res.status(e.status).json(e);
      else
        res
          .status(500)
          .json(buildResponse(500, 'Internal mongodb error', e.message));
    }
  },

  mongoGetById: async (req, res) => {
    const { id } = req.params;

    try {
      if (!validId(id)) throw buildResponse(400, 'Incorrect id format');
      const pokemon = await Pokemon.find({ id: parseInt(id) });
      res
        .status(200)
        .json(
          buildResponse(
            200,
            `Succesfully fetched pokemon with id ${id}`,
            pokemon
          )
        );
    } catch (e) {
      console.error(Error(e.message));
      if (e.status) res.status(e.status).json(e);
      else
        res
          .status(500)
          .json(buildResponse(500, 'Internal mongodb error', e.message));
    }
  },
  mongoGetInfo: async (req, res) => {
    const { id, info } = req.params;
    try {
      if (!validId(id)) throw buildResponse(400, 'Incorrect id format');
      const pokemon = await Pokemon.find({ id: parseInt(id) });
      const pokemonInfo = pokemon[0][info];
      res
        .status(200)
        .json(
          buildResponse(
            200,
            `Succesfully fetched ${info} from pokemon with id ${id}`,
            pokemonInfo
          )
        );
    } catch (e) {
      console.error(Error(e.message));
      if (e.status) res.status(e.status).json(e);
      else
        res
          .status(500)
          .json(buildResponse(500, 'Internal mongodb error', e.message));
    }
  },

  /*
  getAll: async (req, res) => {
    res.status(200).send(pokeData);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const pokemon = pokeData.filter(item => item.id == id);
    res.status(200).send(pokemon);
  },
  getInfo: async (req, res) => {
    const { id, info } = req.params;

    try {
      const pokeId = pokeData.filter(pokemon => pokemon.id == id);
      if (!pokeId[0][info]) res.sendStatus(404);
      else res.status(200).send(pokeId[0][info]);
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  */
};

module.exports = pokeController;
