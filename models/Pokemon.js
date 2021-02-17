const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  id: Number,
  name: Object,
  type: [
    {
      type: String,
    },
  ],
  base: Object,
  abilities: {
    normal: [
      {
        type: String,
      },
    ],
    hidden: [
      {
        type: String,
      },
    ],
  },
  description: String,
  eggGroups: [
    {
      type: String,
    },
  ],
  family: {
    id: Number,
    evolutionStage: Number,
    evolutionLine: Array,
  },
  gen: Number,
  gender: [
    {
      type: Number,
    },
  ],
  height: String,
  legendary: Boolean,
  mega: Boolean,
  mythical: Boolean,
  species: String,
  sprite: String,
  spriteback: String,
  spritefront: String,
  starter: Boolean,
  ultraBeast: Boolean,
  weight: String,
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
