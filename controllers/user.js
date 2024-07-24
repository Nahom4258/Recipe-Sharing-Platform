const User = require('../models/User');

// get profile, use id from /:id
const getProfile = async (req, res) => {
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
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        await user.remove();
        res.send(user);
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}