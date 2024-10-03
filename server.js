const express= require('express');
const mongoose = require('mongoose');
const cors=require("cors");
const productModel = require('./models/product.model.js');
const app = express();

app.use(cors());
app.use(express.json());
const dbUrl = require('./config/constant').dbUrl;
mongoose.connect(dbUrl)
.then(()=> console.log("mongodb connected"))
.catch(error=> console.log(error));
// async function createProduct(){
//     const Schema = mongoose.Schema;
//     const userModelSchema = new Schema({
//         productCount  : Number,
//         productName : {type : String, required : true},
//         userPassword : {type : String, required : true}
//     });
//     const userModel = mongoose.model("product", userModelSchema);
//     const producttemp = new userModel({
//         productCount : 0,
//         productName : "Benz",
//     });
//     await producttemp.save();
//     console.log("Model Created.");
// };
// createProduct();

const port = 5000;
app.get('/', (req, res)=>{
    res.send({message:'Hello World'});
});
require('./routes/login.route.js')(app);
require('./routes/productList.route.js')(app);
// const data = new productModel({
//     productCount : 0,
//     productName : "Chevrolet"
// });
// data.save();

app.listen(port, ()=> console.log(`server is running ${port}`));
