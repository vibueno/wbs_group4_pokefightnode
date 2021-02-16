const Pokemon = require('../models/Pokemon');

const buildResponse = require('../utils/response');
const { validId, validInfoRequest } = require('../utils/validations');
const {
  httpOK,
  httpBadRequest,
  httpNotFound,
  httpServerError,
  resOpSuccess,
  resOpFailure,
} = require('../utils/constants');

const pokeController = {
  mongoGetAll: async (req, res) => {
    try {
      const pokemonList = await Pokemon.find({}).sort({
        id: 1,
      });

      res
        .status(httpOK)
        .json(
          buildResponse(
            httpOK,
            resOpSuccess,
            `Succesfully fetched ${pokemonList.length} pokemon`,
            pokemonList
          )
        );
    } catch (e) {
      console.error(Error(e.message));
      if (e.status) res.status(e.status).json(e);
      else
        res
          .status(httpServerError)
          .json(
            buildResponse(
              httpServerError,
              resOpFailure,
              'Internal mongodb error',
              e.message
            )
          );
    }
  },

  mongoGetById: async (req, res) => {
    const { id } = req.params;

    try {
      if (!validId(id))
        throw buildResponse(
          httpBadRequest,
          resOpFailure,
          'Incorrect id format. Only positive integers greater than 0 are valid ids'
        );
      const pokemon = await Pokemon.find({ id: parseInt(id) });

      if (!pokemon.length)
        throw buildResponse(
          httpNotFound,
          resOpSuccess,
          `Pokemon with id ${id} does not exist`
        );

      res
        .status(httpOK)
        .json(
          buildResponse(
            httpOK,
            resOpSuccess,
            `Succesfully fetched pokemon with id ${id}`,
            pokemon[0]
          )
        );
    } catch (e) {
      console.error(Error(e.message));
      if (e.status) res.status(e.status).json(e);
      else
        res
          .status(httpServerError)
          .json(
            buildResponse(
              httpServerError,
              resOpFailure,
              'Internal mongodb error',
              e.message
            )
          );
    }
  },
  mongoGetInfo: async (req, res) => {
    const { id, info } = req.params;
    try {
      if (!validId(id))
        throw buildResponse(
          httpBadRequest,
          resOpFailure,
          'Incorrect id format'
        );
      const pokemon = await Pokemon.find({ id: parseInt(id) });

      if (!validInfoRequest(info))
        throw buildResponse(
          httpBadRequest,
          resOpFailure,
          'The requested info cannot be fetched'
        );

      if (!pokemon.length)
        throw buildResponse(
          httpNotFound,
          resOpSuccess,
          `Pokemon with id ${id} does not exist`
        );
      const pokemonInfo = pokemon[0][info.toLowerCase()];
      res
        .status(httpOK)
        .json(
          buildResponse(
            httpOK,
            resOpSuccess,
            `Succesfully fetched ${info} from pokemon with id ${id}`,
            pokemonInfo
          )
        );
    } catch (e) {
      console.error(Error(e.message));
      if (e.status) res.status(e.status).json(e);
      else
        res
          .status(httpServerError)
          .json(
            buildResponse(
              httpServerError,
              resOpFailure,
              'Internal mongodb error',
              e.message
            )
          );
    }
  },
};

module.exports = pokeController;
