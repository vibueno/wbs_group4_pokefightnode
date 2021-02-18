// See doc/databasemerge.md

const { MongoClient } = require('mongodb');

const dbname1 = 'pokemon1';
const dbname2 = 'pokemon2';

const main = async () => {
  const client = new MongoClient('mongodb://localhost:27017', {
    useUnifiedTopology: true,
  });

  let pokemon1;
  let pokemon2;

  try {
    await client.connect();

    pokemon2 = await client
      .db(dbname2)
      .collection('pokemon')
      .find({})
      .toArray();

    const UpdatePokemon = async () => {
      await Promise.all(
        pokemon2.map(async pokemon => {
          const result = await client
            .db(dbname1)
            .collection('pokemon')
            .updateOne(
              { id: parseInt(pokemon.number) },
              {
                $set: {
                  description: pokemon.description,
                  sprite: pokemon.sprite,
                  spritefront: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(
                    pokemon.number
                  )}.png`,
                  spriteback: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${parseInt(
                    pokemon.number
                  )}.png`,
                  species: pokemon.species,
                  abilities: pokemon.abilities,
                  eggGroups: pokemon.eggGroups,
                  gender: pokemon.gender,
                  height: pokemon.height,
                  weight: pokemon.weight,
                  family: pokemon.family,
                  starter: pokemon.starter,
                  legendary: pokemon.legendary,
                  mythical: pokemon.mythical,
                  ultraBeast: pokemon.ultraBeast,
                  mega: pokemon.mega,
                  gen: pokemon.gen,
                },
              }
            );
        })
      );
    };

    await UpdatePokemon();
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

main();
