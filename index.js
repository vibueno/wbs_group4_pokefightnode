// Create entry point
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// init of dotenv
dotenv.config();

const app = express();
const { PORT } = process.env || 3000;

app.use(cors());

// import routes
const pokeRoutes = require('./routes/pokemons');

// use postsRoutes
app.use('/', pokeRoutes);

// Starting server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
