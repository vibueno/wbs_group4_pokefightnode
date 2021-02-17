const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { validWinners, isSet } = require('../utils/validations');
const { msgInvalidFightResult } = require('../constants');

const pokemonFightSchema = new Schema({
  date: { type: Date, default: Date.now() },
  pokemon1: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    winner: {
      type: Boolean,
      required: true,
      validate: {
        validator: function (value) {
          return validWinners(value, this.pokemon2.winner);
        },
        message: msgInvalidFightResult,
      },
    },
  },

  pokemon2: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    winner: {
      type: Boolean,
      required: true,
      validate: {
        validator: function (value) {
          return validWinners(value, this.pokemon1.winner);
        },
        message: msgInvalidFightResult,
      },
    },
  },
});

module.exports = mongoose.model('PokemonFight', pokemonFightSchema);
