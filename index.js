// Create entry point
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
// init of dotenv
dotenv.config();

const app = express();
const { PORT } = process.env || 3000;

/* const mongoDB =
  'mongodb+srv://dbUser:dbPass@cluster0.lwozl.mongodb.net/mongooseTest?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true }); */

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
// urlencoded format
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// import routes
const pokeRoutes = require('./routes/pokemons');

// use postsRoutes
app.use('/', pokeRoutes);

// Starting server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
