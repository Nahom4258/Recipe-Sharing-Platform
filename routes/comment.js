const commentRouter = require('express').Router();

const { getComments, getComment, createComment, updateComment, deleteComment } = require('../controllers/comment');

commentRouter.get('/', getComments);
commentRouter.get('/:id', getComment);
commentRouter.post('/', createComment);
commentRouter.put('/:id', updateComment);
commentRouter.delete('/:id', deleteComment);

module.exports = commentRouter;