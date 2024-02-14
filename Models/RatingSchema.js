const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    message:{
        type:String,
        trim:true,
        require:true
    }
})

const Rating = mongoose.model('Rating',RatingSchema);
module.exports = Rating;