const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on(
    'error',
    console.error.bind(console.error, 'Error in connecting to MongoDB')
);

db.once('open', function () {
    console.log('Connected to Database :: Mongodb');
});

exports.module = db;
