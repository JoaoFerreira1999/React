const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const connectDB = require('./dbOperations/dbConn')
const glassesSchema = require('./Schemas/glassesSchema')
require('dotenv').config();

const app = express();

//connect to MongoDB
connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT;

app.get('/hotdeals', async (req, res) =>{

    const hotDeals = await glassesSchema.find({ hotDeal: true }).exec();
    console.log(hotDeals);

    res.send(hotDeals);
});

app.get('/shop', async (req, res) =>{
    const hotDeals = await glassesSchema.find().exec();
    console.log(hotDeals);

    res.send(hotDeals);
});


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () =>{
        console.log('Server is running');
    })
})