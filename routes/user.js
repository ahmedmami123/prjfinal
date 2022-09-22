const express = require("express");

const User = require("../models/user");
const bcrypt=require("bcrypt");

const userRouter=express.Router();
const jwt=require("jsonwebtoken");
const{loginRules,registerRules,validation}=require("../middleware/validator");
const isAuth=require("../middleware/passport");
//del
userRouter.delete("/:id",async(req,res)=>{
  try {
    let result=await User.findByIdAndDelete(req.params.id);
    res.send({msg:"idea is delete"})
  } catch (error) {
    console.log(error)
  }
 });
//put
userRouter.put("/:id",async(req,res)=>{
    const {name,lastname,email,password,user_img,phone,address,about,Postal_Code}=req.body

    try {
      let result=await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
      res.send({msg:"idea is updated "})
    } catch (error) {
      console.log(error)
    }
   });
   //get user
   userRouter.get("/get",async(req,res)=>{
    try {
      let result=await User.find();
      res.send({user:result,msg:"all users"})
    } catch (error) {
      console.log(error)
    }
   });
//register
userRouter.post("/register",registerRules(),validation, async(req,res)=>{
    const {name,lastname,email,password,user_img,phone,address,about,Postal_Code}=req.body

    try {
        const newUser= new User(req.body);
//check if email exist
const searchUser=await User.findOne({email});
if(searchUser){
    return res.send({msg:"email already exist"})
}

        //hash password
        const salt=10;
        const genSalt= await bcrypt.genSalt(salt);
        const hashedPassword= await bcrypt.hash(password,genSalt);
        newUser.password=hashedPassword
      console.log(hashedPassword);
       newUser.password=hashedPassword;
    
//save user
        const result=await newUser.save();
           //generate a token
        const payload={
            _id:result._id,
            name:result.name,
        }
       const token=await jwt.sign(payload,process.env.SecretOrKey,{
        expiresIn:3600,
    });
    //**********
        res.send({user:result,msg:"user is saved",token:`Bearer ${token}`})
    } catch (error) {
      res.send("can not save the user") ;
      console.log(error)
    }
});
//login
userRouter.post("/login",loginRules(),validation, async(req,res)=>{
    const {email,password}=req.body;
try {
    //fin of the user exist
    const searchedUser=await User.findOne({email});
    //if the email not exist
    if(!searchedUser){
        return res.status(400).send({msg:"bad credential"});
    }
    //password are 
    const match=await bcrypt.compare(password,searchedUser.password);

    if(!match){
        return res.status(400).send({msg:"bad credential"});
    }
    //cree un token 
    const payload={
        _id:searchedUser._id,
    }
    const token=await jwt.sign(payload,process.env.SecretOrKey,{
        expiresIn:3600,
    });
    console.log(token);
        //send the user
        res.status(200).send({user:searchedUser,msg:"success",token:`Bearer ${token}`})
} catch (error) {
    res.send({msg:"can not get th user"});
}
})

userRouter.get ("/current", isAuth(), (req,res)=> {
    // console.log(req)
   res.status(200).send({req:req.user});

});
module.exports=userRouter;