const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
})

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;