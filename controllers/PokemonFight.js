const PokemonFight = require('../models/PokemonFight');

const {
  httpOK,
  httpBadRequest,
  httpServerError,
  resOpSuccess,
  resOpFailure,
} = require('../constants');

const buildResponse = require('../utils/response');

const { validId, validFightResultFormat } = require('../utils/validations');

const getPokemonMongoId = require('../utils/pokemon');

const pokemonFightController = {
  create: async (req, res) => {
    if (!validFightResultFormat(req.body))
      return res
        .status(httpBadRequest)
        .json(
          buildResponse(
            httpBadRequest,
            resOpFailure,
            'Invalid fight result format'
          )
        );

    const { pokemon1, pokemon2, winner } = req.body;

    if (!validId(pokemon1) || !validId(pokemon2) || !validId(winner))
      return res
        .status(httpBadRequest)
        .json(
          buildResponse(
            httpBadRequest,
            resOpFailure,
            'Incorrect id format. Only positive integers greater than 0 are valid ids'
          )
        );

    const pokemon1MongoId = await getPokemonMongoId(pokemon1);
    const pokemon2MongoId = await getPokemonMongoId(pokemon2);
    const winnerMongoId = await getPokemonMongoId(winner);

    if (!pokemon1MongoId || !pokemon2MongoId || !winnerMongoId)
      return res
        .status(httpBadRequest)
        .json(
          buildResponse(
            httpBadRequest,
            resOpFailure,
            "One or more pokemon don't exist in the database"
          )
        );

    const fight = new PokemonFight({
      pokemon1: pokemon1MongoId,
      pokemon2: pokemon2MongoId,
      winner: winnerMongoId,
    });

    await fight.save(err => {
      if (err)
        res
          .status(httpServerError)
          .json(
            buildResponse(
              httpServerError,
              resOpFailure,
              'Error inserting pokemon fight',
              err.message
            )
          );
      else {
        res
          .status(httpOK)
          .json(
            buildResponse(
              httpOK,
              resOpSuccess,
              'Pokemon fight inserted successfully'
            )
          );
      }
    });
  },
};
module.exports = pokemonFightController;
