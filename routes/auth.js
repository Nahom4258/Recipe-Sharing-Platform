const { login, register } = require('../controllers/auth');

const authRouter = require('express').Router();

// write swagger doc

// for login doc
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login to the application
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       404:
 *         description: User not found
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal error
 */
authRouter.post('/login', login);

// for register
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register to the application
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Register successful
 *       409:
 *         description: Email already exists
 *       500:
 *         description: Internal error
 */
authRouter.post('/register', register);

module.exports = authRouter;