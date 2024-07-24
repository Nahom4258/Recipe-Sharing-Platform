const express = require('express');
const commentRouter = require('./comment');
const userRouter = require('./user');
const recipeRouter = require('./recipe');
const authRouter = require('./auth');
const authMiddleware = require('../auth/auth');
const mainRouter = express.Router();

// mainRouter.use('/', (req, res) => {
//     res.send('Welcome to the Recipe API')
// })
mainRouter.use('/auth', authRouter)
mainRouter.use('/comments', authMiddleware, commentRouter)
mainRouter.use('/users', authMiddleware, userRouter)
mainRouter.use('/recipes', authMiddleware, recipeRouter)

module.exports = mainRouter;