var mongoose = require('mongoose'),
    bcrypt = require('bcrypt')

module.exports = mongoose.model('User', mongoose.Schema({
    name     : String,
    email    : String,
    password : String,
    created  : Number // Date.now()
}))
