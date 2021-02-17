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
      pokemon1: '602709cbeab939b69f3b1232',
      pokemon2: '602709cbeab939b69f3b1232',
      winner: '602709cbeab939b69f3b1232',
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
