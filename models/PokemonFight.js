const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { validWinners, isSet } = require('../utils/validations');

const pokemonFightSchema = new Schema({
  date: { type: Date, default: Date.now() },
  pokemon1: {
    type: {
      id: {
        type: Number,
        required: function (value) {
          return isSet(value);
        },
      },
      name: {
        type: String,
        required: function (value) {
          return isSet(value);
        },
      },
      winner: {
        type: Boolean,
        required: function (value) {
          return isSet(value);
        },
        validate: {
          validator: function (value) {
            return validWinners(value, this.pokemon2.winner);
          },
          message: 'There can be only one winner',
        },
      },
    },
    required: function (value) {
      return isSet(value);
    },
  },
  pokemon2: {
    type: {
      id: {
        type: Number,
        required: function (value) {
          return isSet(value);
        },
      },
      name: {
        type: String,
        required: function (value) {
          return isSet(value);
        },
      },
      winner: {
        type: Boolean,
        required: function (value) {
          return isSet(value);
        },
        validate: {
          validator: function (value) {
            return validWinners(value, this.pokemon1.winner);
          },
          message: 'There can be only one winner',
        },
      },
    },
    required: function (value) {
      return isSet(value);
    },
  },
});

module.exports = mongoose.model('PokemonFight', pokemonFightSchema);
