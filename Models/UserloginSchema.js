const mongoose = require('mongoose');

const UserloginSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },

    email: {
        type: String,
        trim: true,
        required: true
    },

    password: {
        type: String,
        trim: true,
        required: true,
    }
})

const userlogin = mongoose.model('userlogin', UserloginSchema);

module.exports = userlogin;