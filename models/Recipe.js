import { type } from 'express/lib/response';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const RecipeSchema = new Schema({
    title: String,
    ingredients: { type: [{ name: String, quantity: Number }] },
    instructions: { type: [String] },
    prep_time: Number
});

module.exports = mongoose.model('Recipe', RecipeSchema);