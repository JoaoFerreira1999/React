const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide an Username!"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: false,
    },
    description: {
        type: String,
        required: [true, "Please provide a Password!"],
        unique: false,
    },
    image: 
    {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model.Users || mongoose.model("Image", imageSchema);