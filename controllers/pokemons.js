const pokeData = require('../pokedex.json');

const pokeController = {
  getAll: async (req, res) => {
    res.status(200).send(pokeData);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const pokemon = pokeData.filter(item => item.id == id);
    res.status(200).send(pokemon);
  },
};

module.exports = pokeController;
