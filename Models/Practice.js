const mongoose = require("mongoose");

const practice = new mongoose.Schema({
    imagename: {
        required: true,
    },
})
const practiceSchema = mongoose.model('practice', practice);
module.exports = practiceSchema;