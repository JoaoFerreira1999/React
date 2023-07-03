const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const connectDB = require('./dbOperations/dbConn')
require('dotenv').config();

const app = express();

//connect to MongoDB
connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT;


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () =>{
        console.log('Server is running');
    })
})