const types = require('mongoose').Schema.Types;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    content: String,
    date: Date,
    author: { type: Schema.ObjectId, ref: 'User' },
    recipe: { type: Schema.ObjectId, ref: 'Recipe'}
});

module.exports = mongoose.model('Comment', CommentSchema);