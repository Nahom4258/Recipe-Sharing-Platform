const mongoose = require('mongoose')
const { Schema } = mongoose;

const RecipeSchema = new Schema({
    title: String,
    ingredients: { type: [{ name: String, quantity: Number }] },
    instructions: { type: [String] },
    prep_time: Number,
    comments: [{ type: Schema.ObjectId, ref: 'Comment' }],
    creator: { type: Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Recipe', RecipeSchema);