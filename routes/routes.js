const express = require('express');
const commentRouter = require('./comment');
const userRouter = require('./user');
const recipeRouter = require('./recipe');
const authRouter = require('./auth');
const mainRouter = express.Router();

mainRouter.use('/', (req, res) => {
    res.send('Welcome to the Recipe API')
})
mainRouter.use('/auth', authRouter)
mainRouter.use('/comments', commentRouter)
mainRouter.use('/users', userRouter)
mainRouter.use('/recipes', recipeRouter)

module.exports = mainRouter;