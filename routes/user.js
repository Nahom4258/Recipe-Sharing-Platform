const userRouter = require('express').Router();
const { getUsers, getUser, updateUser, deleteUser } = require('../controllers/user');

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;