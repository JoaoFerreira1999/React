const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const port = process.env.PORT;
const API_KEY = process.env.API_KEY;

app.post('/search', (req, res) => {
    console.log(req.body.date);
    axios.get("http://api.weatherapi.com/v1/future.json?key=" + API_KEY + "&q=" + req.body.location +"&dt=" + req.body.date)
    .then(result => {
      console.log(result.data.forecast);
      res.send(result.data);
    })
    .catch((err) => {
        console.log(err);
    })
});


app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}` );
});