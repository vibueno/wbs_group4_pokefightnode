const PokemonFight = require('../models/PokemonFight');

const {
  httpOK,
  httpServerError,
  resOpSuccess,
  resOpFailure,
} = require('../constants');

const buildResponse = require('../utils/response');

const pokemonFightController = {
  create: async (req, res) => {
    const fight = new PokemonFight({
      pokemon1: {
        id: 1,
        name: 'test',
        winner: false,
      },
      pokemon2: {
        id: 1,
        name: 'test',
        winner: true,
      },
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
