const messages = {
  msgServerStarted: 'Server started',
  msgPageNotFound:
    "The requested page does not exist. But don't worry, we all have felt lost at some point in our lives",
  msgInvalidIdFormat:
    'Incorrect id format. Only positive integers greater than 0 are valid ids',
  msgPokemonUnknown: "One or more pokemon don't exist in the database",
  msgPokemonFightInsertFailure: 'Error inserting pokemon fight',
  msgPokemonFightInsertSuccess: 'Pokemon fight inserted successfully',
  msgInvalidFightResult: 'There must one and only one winner',
  msgInvalidFightResultFormat: 'Invalid fight result format',
  msgInvalidWinner:
    'The winner must be one of the pokemons who took part in the fight',
};

module.exports = messages;
