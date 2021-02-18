const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Dotenv set-up
const dotenv = require('dotenv');
dotenv.config();

const { PORT } = process.env;

// Own imports
const db = require('./utils/db');
const { httpNotFound, resOpFailure } = require('./variables/constants');
const { msgServerStarted } = require('./variables/messages');
const buildResponse = require('./utils/response');

// Start express
const app = express();

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Routes
const pokemonRoutes = require('./routes/Pokemon');
const pokemonFightRoutes = require('./routes/PokemonFight');
const appRoutes = require('./routes/App');

app.use('/pokemon/fight/', pokemonFightRoutes);
app.use('/', pokemonRoutes);

app.use('*', appRoutes);

// Server start
app.listen(PORT, () => console.log(msgServerStarted));
