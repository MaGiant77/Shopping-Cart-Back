const express= require('express');
const mongoose = require('mongoose');
const cors=require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const dbUrl = require('./config/constant').dbUrl;
mongoose.connect(dbUrl)
.then(()=> console.log("mongodb connected"))
.catch(error=> console.log(error));
// async function createUser(){
//     const Schema = mongoose.Schema;
//     const userModelSchema = new Schema({
//         userId : Schema.Types.ObjectId,
//         userGrade : Number,
//         userName : {type : String, required : true},
//         userPassword : {type : String, required : true}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
//     });
//     const userModel = mongoose.model("users", userModelSchema);
//     const admin = new userModel({
//         userGrade : 0,
//         userName : "joseph",
//         userPassword : "joseph"
//     });
//     await admin.save();
//     console.log("Model Created.");
// };
// createUser();
const port = 5000;
app.get('/', (req, res)=>{
    res.send({message:'Hello World'});
});
require('./routes/login.route.js')(app);

app.listen(port, ()=> console.log(`server is running ${port}`));
