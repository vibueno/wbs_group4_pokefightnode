const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { msgInvalidWinner } = require('../variables/messages.js');

const pokemonFightSchema = new Schema({
  date: { type: Date, default: () => Date.now() },
  pokemon1: { type: mongoose.Types.ObjectId, ref: 'Pokemon', required: true },
  pokemon2: { type: mongoose.Types.ObjectId, ref: 'Pokemon', required: true },
  winner: {
    type: mongoose.Types.ObjectId,
    ref: 'Pokemon',
    required: true,
    validate: {
      validator: function (value) {
        return (
          value._id.equals(this.pokemon1._id) ||
          value._id.equals(this.pokemon2._id)
        );
      },
      message: msgInvalidWinner,
    },
  },
});

module.exports = mongoose.model('PokemonFight', pokemonFightSchema);
