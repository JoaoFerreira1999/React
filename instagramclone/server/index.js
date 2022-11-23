const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

const dbConnect = require('./routes/dbConnect');

dbConnect();

const User = require("./db/userModel");

app.post("/register", (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then((hashedPassword) => {
        const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword
        });

        user.save().then((result) => {
            res.status(201).send({
              message: "User Created Successfully",
              result
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Error creating user",
              error
            });
          });
    })
    .catch((e) => {
        res.status(500).send({
            message: "Password not hashed successfully",
            e,
        })
    })
});


app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}` );
});