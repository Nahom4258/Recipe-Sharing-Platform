const express = require('express');
const mongoose = require('mongoose');
const mainRouter = require('./routes/routes');

require('dotenv').config();

const app = express();
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(mainRouter)

const uri = process.env.MONGODB_URI;

mongoose.connect(uri,)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
})