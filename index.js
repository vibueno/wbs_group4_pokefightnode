const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
// init of dotenv
dotenv.config();
const { PORT } = process.env;

const db = require('./utils/db');
const { httpNotFound, resOpFailure } = require('./constants');

const { msgServerStarted } = require('./messages');

const buildResponse = require('./utils/response');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// import routes
const pokemonRoutes = require('./routes/Pokemon');
const appRoutes = require('./routes/App');

app.use('/', pokemonRoutes);

app.use('*', appRoutes);

app.listen(PORT, () => console.log(msgServerStarted));
