const User = require('../models/User');

// get users, add these filters: name, email from query params
const getUsers = async (req, res) => {
    try {
        const users = await User.find(req.query);
        res.send(users);
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

// update user, use id from /:id
const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }

        // check if user is the same as the one in the token
        if (user._id.toString() !== req.user.id) {
            return res.status(403).send('Forbidden');
        }

        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.email = req.body.email;
        user.password = req.body.password;
        await user.save();
        res.send(user);
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

// delete user, use id from /:id
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        console.log('user id: ', userId)
        const user = await User.findById('66a10aef7b4fac23190009a9');

        if (!user) {
            return res.status(404).send('User not found');
        }
        console.log('user: ', user)
        await user.deleteOne();
        res.send('Deleted successfully!');
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

// get single user, use id from /:id
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send(user);
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

module.exports = { getUsers, updateUser, deleteUser, getUser };