const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide an Username!"],
        unique: [true, "Username Exists"],
    },
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exists"],
    },
    password: {
        type: String,
        required: [true, "Please provide a Password!"],
        unique: false,
    }
})

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);