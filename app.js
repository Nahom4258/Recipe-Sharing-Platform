const express = require('express');
const mongoose = require('mongoose');
const mainRouter = require('./routes/routes');

require('dotenv').config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(mainRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
})