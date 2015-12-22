// apikey model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var promise = new mongoose.Promise;


var ApiKey = new Schema({
    apiKey: String
});

module.exports = mongoose.model('ApiKey', ApiKey);
