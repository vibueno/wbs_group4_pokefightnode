This document describes the process we implemented in order to merge in one database all the information we needed.
The aim was to take the JSON we got from the teacher and merge it with some more information we got from another API. Additionally we also added the front and back pictures.

These are the steps needed:

1. Run tools/getPokemonFromApi.js in the Opera console with VPN enabled 3 times (one for documents 1-300, another for 301-600 and a last one for 601-807) and copy the results to 3 text files.

The reason behind this strange step is that the API only allows querying for one specific Pokemon and after around 400 requests you get banned. Using the Opera VPN, you can get a new IP by restarting the browser.

2. Remove all arrays outside objects and commas between objects with a text editor with no add-ons (otherwise the editor may crash due to the size of the file)

3. Run these commands to import all data:

```bash
mongoimport --host=localhost --db=pokemon1 --collection=pokemon --drop pokemon1.json
mongoimport --host=localhost --db=pokemon2 --collection=pokemon --drop pokemon2.1.json
mongoimport --host=localhost --db=pokemon2 --collection=pokemon pokemon2.2.json
mongoimport --host=localhost --db=pokemon2 --collection=pokemon pokemon2.3.json
```

4. Run tools/mergeCollections.js

5. Export the resulting database:

```bash
mongoexport --host=localhost --db=pokemon1 --collection=pokemon --out=pokemonmerged.json
```

6. Import it into Atlas:

```bash
mongoimport --uri "mongodb+srv://sandbox.2sbee.mongodb.net/pokemon" --username m001-student --drop --collection=pokemon pokemonmerged.json
```
