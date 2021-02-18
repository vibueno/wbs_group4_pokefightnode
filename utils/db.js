const mongoose = require('mongoose');

const { PORT, DBUSER, DBPASS, DBHOST, DBNAME } = process.env;

const mongoDB = `mongodb+srv://${DBUSER}:${DBPASS}@${DBHOST}/${DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
