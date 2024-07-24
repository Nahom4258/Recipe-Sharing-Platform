const User = require('../models/User');
const jwt = require('jsonwebtoken');

// register, write whole, use jsonwebtoken
const register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(201).send({ user, token });
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

// login, write whole
const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const isMatch = await user.comparePassword(req.body.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.send({ user, token });
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

module.exports = { register, login };