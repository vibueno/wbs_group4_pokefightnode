const pokeData = require('../pokedex.json');

const pokeController = {
  getAll: async (req, res) => {
    res.send(pokeData);
  },
  getInfo: async (req, res) => {
    const { id } = req.params;
    console.log(id);

    try {
      const pokeInfo = pokeData.filter(pokemon => pokemon.id === id);

      console.log(pokeInfo);
      res.send('Testing');
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
};

module.exports = pokeController;
