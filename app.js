const express = require('express');
const mongoose = require('mongoose');
const mainRouter = require('./routes/routes');
const swaggerDocs = require('./swagger');

require('dotenv').config();

const app = express();
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', mainRouter)

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

mongoose.connect(uri,)
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(PORT, () => {
            console.log(`Server connected to http://localhost:${PORT}`);
        })
        swaggerDocs(app, PORT);
    })
    .catch(err => console.error('Failed to connect to MongoDB', err));