const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const connectDB = require('./dbOperations/dbConn')
const glassesSchema = require('./Schemas/glassesSchema')
const userModel = require('./Schemas/dbUserSchema')
const bcrypt = require('bcrypt');
require('dotenv').config();

const jwt  = require('jsonwebtoken');

const app = express();

//connect to MongoDB
connectDB();

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
}));
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

const saltRounds = 10;

app.post('/register', async (req, res) => {
    console.log(req.body);
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            console.log(salt);
            const user = new userModel({
                name: name,
                email: email,
                password: hash
            });

            const userExists = await userModel.exists({email: email});

            if(userExists) {
                res.json({
                    auth: false,
                    message: "Email already in use!"
                })
            } else {
                user.save();
                console.log("User Registered Successfully!");

                const registeredDetails = [name, email];

                const accessToken = jwt.sign({email}, process.env.JWT_SECRET, {
                    expiresIn: 300,
                });

                res.json({
                    auth: true,
                    token: accessToken,
                    details: registeredDetails,
                });
            }
        });
    })
});

app.post('/login', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const queryResult = await userModel.find({ email: email}).exec();

    console.log(queryResult[0]);

    if(queryResult[0] !== null) {
        const hashedPassword = queryResult[0].password;
        

        bcrypt.compare(password, hashedPassword).then(result => {
            if(result == true) {
                const loginDetails = [queryResult[0].email, queryResult[0].password]

                const accessToken = jwt.sign({email}, process.env.JWT_SECRET, {
                    expiresIn: 300,
                });

                res.json({
                    auth: true,
                    token: accessToken,
                    details: loginDetails,
                });

            } else {
                res.json({
                    message: "Passwords do not match!"
                })
            }
        })
    }
});

const verifyJWT = (req, res, next) => {
    const token = req.headers["authorization"];

    if(!token) {
        res.send("Token Required!")
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err){
                res.json({
                    auth: false,
                    message: "Failed to Authenticate!"
                })
            } else {
                req.email = user;
                next();
            }
        })
    }
}

app.get('/isUserAuth', verifyJWT , (req, res) => {
    res.send("Successfully Authenticated!");
});


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () =>{
        console.log('Server is running');
    })
})