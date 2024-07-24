const userRouter = require('express').Router();
const { getUsers, getUser, updateUser, deleteUser } = require('../controllers/user');

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.put('/:id', updateUser);

module.exports = userRouter;