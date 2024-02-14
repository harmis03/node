const mongoose = require('mongoose');

const MulterSchema = new mongoose.Schema({
    imagename: {
        type: String,
        trim: true,
        required: true,
    }
})

const Multer = mongoose.model('Multer', MulterSchema);

module.exports = Multer;