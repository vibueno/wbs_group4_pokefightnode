// Create entry point
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
// init of dotenv
dotenv.config();
const { PORT } = process.env;

const db = require('./utils/db');
const { httpNotFound, resOpFailure } = require('./utils/constants');

const buildResponse = require('./utils/response');

const app = express();

app.use(bodyParser.json());
// urlencoded format
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// import routes
const pokeRoutes = require('./routes/Pokemon');

// use postsRoutes
app.use('/', pokeRoutes);

app.get('*', function (req, res) {
  res
    .status(httpNotFound)
    .send(
      buildResponse(
        httpNotFound,
        resOpFailure,
        "The requested page does not exist. But don't worry, we all have felt lost at some point in our lives."
      )
    );
});

// Starting server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
