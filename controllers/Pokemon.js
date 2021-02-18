const Pokemon = require('../models/Pokemon');

const {
  httpOK,
  httpBadRequest,
  httpNotFound,
  httpServerError,
  resOpSuccess,
  resOpFailure,
} = require('../constants');

const {
  msgInvalidIdFormat,
  msgMongoDBError,
  msgPokemonInfoNotFetchable,
} = require('../messages');

const buildResponse = require('../utils/response');
const { validId, validInfoRequest } = require('../utils/validations');

const pokemonController = {
  getAll: async (req, res) => {
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
              msgMongoDBError,
              e.message
            )
          );
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;

    try {
      if (!validId(id))
        throw buildResponse(httpBadRequest, resOpFailure, msgInvalidIdFormat);
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
              msgMongoDBError,
              e.message
            )
          );
    }
  },
  getInfo: async (req, res) => {
    const { id, info } = req.params;
    try {
      if (!validId(id))
        throw buildResponse(httpBadRequest, resOpFailure, msgInvalidIdFormat);
      const pokemon = await Pokemon.find({ id: parseInt(id) });

      if (!validInfoRequest(info))
        throw buildResponse(
          httpBadRequest,
          resOpFailure,
          msgPokemonInfoNotFetchable
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
              msgMongoDBError,
              e.message
            )
          );
    }
  },
};

module.exports = pokemonController;
