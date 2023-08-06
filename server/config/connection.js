const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rohitnayyar54:160298rn!@book-search-engine.povauw9.mongodb.net/");

module.exports = mongoose.connection;



// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');