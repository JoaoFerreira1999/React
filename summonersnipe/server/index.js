const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser')
require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT;

app.get('/summoner', (req, res) => {
    
});

app.listen(port, () => {
    console.log('Server is running');
});