const pokeData = require("../pokedex.json");

const pokeController = {
  getAll: async (req, res) => {
    res.status(200).send(pokeData);
  },
};

module.exports = pokeController;
