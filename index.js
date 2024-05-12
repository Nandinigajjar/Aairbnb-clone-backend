require('dotenv').config();
var cors = require('cors')

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

// Express
const app = express();
app.use(cors())
app.use(express.json());

// Routes
const routes = require('./routes');
app.use('/api', routes)

// MongoDB
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

// Start Server
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
