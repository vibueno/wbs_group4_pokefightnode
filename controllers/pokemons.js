const pokeData = require('../pokedex.json');

const pokeController = {
  getAll: async (req, res) => {
    res.send('Hello Pikachu');
  },
  getById: async (req, res) => {
    let { id } = req.params;
    const pokemon = pokeData.filter(index => index.id == id);
    res.send(pokemon);
  },
};

module.exports = pokeController;
