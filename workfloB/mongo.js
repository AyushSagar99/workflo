const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://saggarayush:27dQaNH1lbzzKlYp@cluster0.8rvr6mf.mongodb.net/workflow")
.then(()=>{
    console.log("MongoDb connected")
})
.catch((err)=>{
    console.log(err);
})

const user= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
})

const User = mongoose.model("User", user);

module.exports={User};