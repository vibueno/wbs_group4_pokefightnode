const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  id: Number,
  name: Array,
  type: Array,
  base: Array,
  abilities: { normal: Array, hidden: Array },
  description: String,
  eggGroups: Array,
  family: {
    id: Number,
    evolutionStage: Number,
    evolutionLine: Array,
  },
  gen: Number,
  gender: Array,
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
