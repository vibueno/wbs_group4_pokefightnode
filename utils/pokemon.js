const Pokemon = require('../models/Pokemon');

const getPokemonMongoId = async pokemonId => {
  const pokemonMongoId = await Pokemon.find({
    id: parseInt(pokemonId),
  }).select('_id');
  return pokemonMongoId[0];
};

module.exports = getPokemonMongoId;
