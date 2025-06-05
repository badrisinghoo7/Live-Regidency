const mongoose = require('mongoose');

require('dotenv').config();

const connect = mongoose.connect(process.env.Mongo_URL);


module.exports = { connect };