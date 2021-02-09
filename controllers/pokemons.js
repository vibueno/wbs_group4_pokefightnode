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
  getInfo: async (req, res) => {
    const { id, info } = req.params;

    try {
      const pokeId = pokeData.filter(pokemon => pokemon.id == id);
      if (!pokeId[0][info]) res.sendStatus(404);
      else res.status(200).send(pokeId[0][info]);
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
};
module.exports = pokeController;
