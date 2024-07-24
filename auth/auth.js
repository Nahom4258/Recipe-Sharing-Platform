// auth middleware
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        if (!token) {
            return res.status(401).send('Unauthorized');
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next()
    }
    catch (e) {
        res.status(401).send('Unauthorized');
    }
}

module.exports = authMiddleware;