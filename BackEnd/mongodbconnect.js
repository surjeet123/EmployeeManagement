const Mongoose = require('mongoose');

Mongoose.Promise = require('bluebird');

require('dotenv').config();

Mongoose.connect("mongodb+srv://NishantChand:password291197@cluster0.g1yva.mongodb.net/employee-database?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true , retryWrites:false, useFindAndModify: false });

const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
}); 

exports.db = db;