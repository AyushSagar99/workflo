const express=require("express");
const cors=require("cors");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {User}=require("./mongo")


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.post("/signup",async (req,res)=>{
    const {name,email,password}=req.body;

    try{
        const check=await User.findOne({email:email});
        if(check){
            return res.status(409).json({message:"User already exist"})
        }else{
            const newUser = await User.create({ name, email, password });
            return res.status(201).json({message:"Signed In",name})
        }
    }
    catch(e){
        console.log(e);
    }
})

app.post("/login", async(req,res)=>{
    const {email,password}=req.body;

    try{
        const user=await User.findOne({email:email});
        if(!user){
            return res.json({message:"User not exist"})
        }else{
            return res.status(201).json({message:"Loged In"})
        }
    }
    catch(e){
        console.log(e);
    }
})

app.listen(8000, () => {
    console.log("port connected");
  });