const mongoose = require('mongoose');
const validator = require('validator');


const CreatorSchema = new mongoose.Schema({
    creator_name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is not valid")
            }
        }
    },
    mobilenumber: {
        type: Number,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("Password  is not valid")
            }
        }
    },

})

const Creatorlogin = mongoose.model('Creatorlogin', CreatorSchema)
module.exports = Creatorlogin;