// See doc/databasemerge.md

const main = async () => {
  const pokemon = [];

  //make sure to change the values inside the loop for each round
  for (let i = 601; i <= 807; i++) {
    const pokemonResponse = await fetch(
      `https://pokeapi.glitch.me/v1/pokemon/${i}`
    );
    const pokemonResponseJSON = await pokemonResponse.json();

    pokemon.push(pokemonResponseJSON);
  }

  console.log(JSON.stringify(pokemon));
};

main();
