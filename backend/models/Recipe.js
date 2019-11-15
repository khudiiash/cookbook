const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: Array, required: true },
  preparation: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;