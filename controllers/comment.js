const Comment = require('../models/Comment');
const User = require('../models/User');

const createComment = async (req, res) => {
    try {
        // check if body.author exists in User collection, else return 404
        const author_id = req.body.author;
        const author = await User.findById(author_id);

        if (!author) {
            return res.status(404).send('Author not found');
        }

        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).send(comment);
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

const updateComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).send('Comment not found');
        }
        comment.content = req.body.content;
        await comment.save();
        res.send(comment);
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).send('Comment not found');
        }
        await comment.remove();
        res.send(comment);
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

// get comments, add these filters: date, author from query params
const getComments = async (req, res) => {
    try {
        const comments = await Comment.find(req.query);
        res.send(comments);
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

// get single comment
const getComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).send('Comment not found');
        }
        res.send(comment);
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

module.exports = { createComment, updateComment, deleteComment, getComments, getComment };