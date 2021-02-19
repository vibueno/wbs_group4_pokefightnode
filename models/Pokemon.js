const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    english: String,
    japanese: String,
    chinese: String,
    french: String,
  },
  type: [String],
  base: {
    HP: Number,
    Attack: Number,
    Defense: Number,
    'Sp. Attack': Number,
    'Sp. Defense': Number,
    Speed: Number,
  },
  abilities: {
    normal: [String],
    hidden: [String],
  },
  description: String,
  eggGroups: [String],
  family: {
    id: Number,
    evolutionStage: Number,
    evolutionLine: [String],
  },
  gen: Number,
  gender: [Number],
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
