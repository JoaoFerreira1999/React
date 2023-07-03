const mongoose = require('mongoose');

const glassesSchema = new mongoose.Schema({
    brand: String,
    price: String,
    color: String,
    shape: String,
    stock: Number,
    hotDeal: Boolean,
    imgURL: String,
    rating: Number,
    size: String
});

const Glasses = mongoose.model('Glasses', glassesSchema);

module.exports = Glasses;