// Create entry point
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
// init of dotenv
dotenv.config();

const db = require('./utils/db');

const { PORT } = process.env;

const app = express();

app.use(bodyParser.json());
// urlencoded format
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// import routes
const pokeRoutes = require('./routes/Pokemon');

// use postsRoutes
app.use('/', pokeRoutes);

// Starting server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
