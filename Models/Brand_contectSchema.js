const mongoose = require('mongoose');
// const validator = require('validator');

const Brand_contectSchema = new mongoose.Schema({

    first_name: {
        type: String,
        trim: true,
        required: true
    },

    last_name: {
        type: String,
        trim: true,
        required: true
    },

    mail: {
        type: String,
        trim: true,
        required: true
    },

    company_name: {
        type: String,
        trim: true,
        required: true,
    },

    company_website: {
        type: String,
        trim: true,
        required: true,
    },

    company_phone: {
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

const Brand_contect = mongoose.model('Brand_contect', Brand_contectSchema);

module.exports = Brand_contect