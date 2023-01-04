const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ dest: 'uploads/' })

const port = process.env.PORT;

const dbConnect = require('./routes/dbConnect');

dbConnect();

const User = require("./db/userModel");
const postModel = require("./db/postModel");


app.post("/register", (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then((hashedPassword) => {
        const user = new User({
          username: req.body.username.toLowerCase(),
          email: req.body.email.toLowerCase(),
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

app.post("/login", (req, res) => {
    User.findOne({ email: req.body.email})
    .then((user) => {
      bcrypt.compare(req.body.password, user.password, function(err, result) {
        if(result == true){
          const userDetails = {
            id: user._id,
            username: user.username,
            email: user.email
          }

          res.send(userDetails);
        }else{
          const errorDetails = {
            type: "Not matched",
            message: "Passwords do not match"
          }
          res.send(errorDetails);
        }
      })})
    .catch((e) => {
      res.status(404).send({
        message: "Invalid username or password",
        e
      })
    });
});

app.post("/api/image" , upload.single('image'), (req, res) => {
    console.log(req.file);
    if(!req.file){
      res.send({code: 500, msg: 'err'})
    }else{
      res.send({code: 200, msg: 'upload successful'})
    }
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}` );
});