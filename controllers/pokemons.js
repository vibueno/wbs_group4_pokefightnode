const pokeData = require("../pokedex.json");

const pokeController = {
  getAll: async (req, res) => {
    res.send("Hello Pikachu");
  },
};

module.exports = pokeController;
