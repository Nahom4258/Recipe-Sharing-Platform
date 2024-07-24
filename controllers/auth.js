const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// register, write whole, use jsonwebtoken
const register = async (req, res) => {
    try {
        // check if user email already exists
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(409).send('Email already exists');
        }

        // use bcrypt for password, use async
        req.body.password = await bcrypt.hash(req.body.password, 8);

        const user = new User(req.body);
        await user.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(201).send({ first_name: user.first_name, last_name: user.last_name, email: user.email, token });
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
        
        // use bcryptjs to match passwords
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.send({ first_name: user.first_name, last_name: user.last_name, email: user.email, token });
    }
    catch (e) {
        res.status(500).send('Internal error');
    }
}

module.exports = { register, login };