const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch(e){
        console.error(e);
    }
}

module.exports = connectDB;