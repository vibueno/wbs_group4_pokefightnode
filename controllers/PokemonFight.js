const Pokemon = require('../models/Pokemon');
const PokemonFight = require('../models/PokemonFight');

const {
  httpOK,
  httpBadRequest,
  httpServerError,
  resOpSuccess,
  resOpFailure,
  hallOfFameDefaultLimit,
} = require('../constants');

const {
  msgInvalidFightResultFormat,
  msgInvalidIdFormat,
  msgPokemonUnknown,
  msgPokemonFightInsertFailure,
  msgPokemonFightInsertSuccess,
  msgPokemonHallOfFameFailure,
} = require('../messages');

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
            msgInvalidFightResultFormat
          )
        );

    const { pokemon1, pokemon2, winner } = req.body;

    if (!validId(pokemon1) || !validId(pokemon2) || !validId(winner))
      return res
        .status(httpBadRequest)
        .json(buildResponse(httpBadRequest, resOpFailure, msgInvalidIdFormat));

    const pokemon1MongoId = await getPokemonMongoId(pokemon1);
    const pokemon2MongoId = await getPokemonMongoId(pokemon2);
    const winnerMongoId = await getPokemonMongoId(winner);

    if (!pokemon1MongoId || !pokemon2MongoId || !winnerMongoId)
      return res
        .status(httpBadRequest)
        .json(buildResponse(httpBadRequest, resOpFailure, msgPokemonUnknown));

    const fight = new PokemonFight({
      pokemon1: pokemon1MongoId,
      pokemon2: pokemon2MongoId,
      winner: winnerMongoId,
    });

    await fight.save((err, fight) => {
      if (err)
        res
          .status(httpServerError)
          .json(
            buildResponse(
              httpServerError,
              resOpFailure,
              msgPokemonFightInsertFailure,
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
              msgPokemonFightInsertSuccess,
              fight
            )
          );
      }
    });
  },

  /*
    Returns the number of victories for a list of pokemons
    limited by req.query.limit || hallOfFameDefaultLimit
  */
  getHallOfFame: async (req, res) => {
    const limit = req.query.limit
      ? parseInt(req.query.limit)
      : hallOfFameDefaultLimit;

    const pokemonHallOfFame = await PokemonFight.aggregate([
      {
        $group: {
          _id: { pokemon: '$winner' },
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
    ])
      .limit(limit)
      .exec((err, pokemonWinners) => {
        Pokemon.populate(
          pokemonWinners,
          { path: '_id' },
          (err, populatedpokemonWinners) => {
            if (err)
              return res
                .status(httpServerError)
                .json(
                  buildResponse(
                    httpServerError,
                    resOpFailure,
                    msgPokemonHallOfFameFailure,
                    err.message
                  )
                );
            else {
              const hallOfFame = populatedpokemonWinners.map(winner => ({
                id: winner._id.id,
                name: winner._id.name.english,
                picture: winner._id.spritefront,
                victorycount: winner.count,
              }));

              return res
                .status(httpOK)
                .json(
                  buildResponse(
                    httpOK,
                    resOpSuccess,
                    `Successfully fetched top ${hallOfFame.length} pokemon from hall of fame`,
                    hallOfFame
                  )
                );
            }
          }
        );
      });
  },
};
module.exports = pokemonFightController;
