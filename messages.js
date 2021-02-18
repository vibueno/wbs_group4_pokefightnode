const messages = {
  msgServerStarted: 'Server started',
  msgMongoDBError: 'Internal mongodb error',
  msgPageNotFound:
    "The requested page does not exist. But don't worry, we all have felt lost at some point in our lives",
  msgInvalidIdFormat:
    'Incorrect id format. Only positive integers greater than 0 are valid ids',
  msgPokemonUnknown: "One or more pokemon don't exist in the database",
  msgPokemonInfoNotFetchable: 'The requested info cannot be fetched',
  msgPokemonFightInsertFailure: 'Error inserting pokemon fight',
  msgPokemonFightInsertSuccess: 'Pokemon fight inserted successfully',
  msgInvalidFightResult: 'There must one and only one winner',
  msgInvalidFightResultFormat: 'Invalid fight result format',
  msgInvalidWinner:
    'The winner must be one of the pokemons who took part in the fight',
  msgPokemonHallOfFameFailure:
    'There was a problem fetching the pokemon hall of fame from the server',
};

module.exports = messages;
