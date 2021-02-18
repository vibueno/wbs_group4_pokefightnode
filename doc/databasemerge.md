This document describes the process we implemented in order to merge in one database all the information we needed.
The aim was to take the JSON we got from the teacher and merge it with some more information we got from another API. Additionally we also added the front and back pictures.

These are the steps needed:

1. Run tools/getPokemonFromApi.js in the Opera console with VPN enabled 3 times (one for documents 1-300, another for 301-600 and a last one for 601-807) and copy the results to 3 text files.

The reason behind this strange step is that the API only allows querying for one specific Pokemon and after around 400 requests you get banned. Using the Opera VPN, you can get a new IP by restarting the browser.

2. Run these commands to import all data:

```bash
mongoimport --uri "mongodb+srv://cluster0.a2pva.mongodb.net/wbs_group4_pokefight" --username wbs_group4_pokefight --drop --collection=pokemon --jsonArray pokedex.json
mongoimport --uri "mongodb+srv://cluster0.a2pva.mongodb.net/wbs_group4_pokefight" --username wbs_group4_pokefight --drop --collection=pokemon --jsonArray pokemon1.json
mongoimport --uri "mongodb+srv://cluster0.a2pva.mongodb.net/wbs_group4_pokefight" --username wbs_group4_pokefight --drop --collection=pokemon --jsonArray pokemon2.1.json
mongoimport --uri "mongodb+srv://cluster0.a2pva.mongodb.net/wbs_group4_pokefight" --username wbs_group4_pokefight --collection=pokemon2 --jsonArray pokemon2.2.json
mongoimport --uri "mongodb+srv://cluster0.a2pva.mongodb.net/wbs_group4_pokefight" --username wbs_group4_pokefight --collection=pokemon2 --jsonArray pokemon2.3.json
```

3. Run tools/mergeCollections.js

4. Export the resulting database:

```bash
mongoexport --host=localhost --db=pokemon1 --collection=pokemon --out=pokemonmerged.json
```

5. Import it into Atlas:

```bash
mongoimport --uri "mongodb+srv://sandbox.2sbee.mongodb.net/wbs_group4_pokefight" --username m001-student --drop --collection=pokemons --jsonArray pokemonmerged.json
```
