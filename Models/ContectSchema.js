const mongoose = require('mongoose');
const validator = require('validator');

const ContectSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        requird: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    message: {
        type: String,
        trim: true,
        required: true
    }
})

const Contect = mongoose.model('Contect', ContectSchema);
module.exports = Contect