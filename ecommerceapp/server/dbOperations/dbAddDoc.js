const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({path:'../.ENV'})

const brand = "Oakley";
const price = "215$";
const color = "Gray";
const shape = "Oval";
const stock = 139;
const hotDeal = false;
const imgURL = "https://assets2.oakley.com/cdn-record-files-pi/8a2df6f6-beb7-4bc8-843d-a99800acdaa6/d5e747bd-107b-4b3f-aa05-ae63010eb737/0OO9438__943805__P21__shad__qt.png?impolicy=OO_ratio&width=2000";
const rating = 4.5;
const size = "S" ;

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }); 
           
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
        
        const sunglasses = mongoose.model('sunglasses', glassesSchema);

        const Glasses = new sunglasses({
            brand: brand,
            price: price,
            color: color,
            shape: shape,
            stock: stock,
            hotDeal: hotDeal,
            imgURL: imgURL,
            rating: rating,
            size: size
        })
        
        await Glasses.save();


    } catch(e){
        console.error(e);
    }
}

connectDB();

