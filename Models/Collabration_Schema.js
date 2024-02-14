const mongoose = require('mongoose');

const Collabration_Schema = new mongoose.Schema({
    image: {
        type: String,
        trim: true,
        required: true
    },
    collab_name: {
        type: String,
        trim: true,
        required: true
    },
    collab_content: {
        type: String,
        trim: true,
        required: true
    },
    payment: {
        type: Number,
        trim: true,
        required: true
    },
    followers: {
        type: Number,
        trim: true,
        required: true
    },
    engagement: {
        type: Number,
        trim: true,
        required: true
    },
    min_age: {
        type: String,
        trim: true,
        required: true
    },
    max_age: {
        type: String,
        trim: true,
        required: true
    },
    residence: {
        type: String,
        trim: true,
        required: true
    },
    Compensation: {
        type: String,
        trim: true,
        required: true
    },
    Campaign_Description: {
        type: String,
        trim: true,
        required: true
    },
    Deliverables: {
        type: String,
        trim: true,
        required: true
    }
})

const Collabration = mongoose.model('Collabration', Collabration_Schema);
module.exports = Collabration