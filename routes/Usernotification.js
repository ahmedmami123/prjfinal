const express = require("express");
const UserNotification = require("../models/Usernotification");

const usernotifRouter=express.Router();


//post idea
usernotifRouter.post("/add",async(req,res)=>{
    try {
        let newnotif= new UserNotification(req.body);
        let result=await newnotif.save();
        res.send({usernotification:result,msg:"notification is added"})
    } catch (error) {
      console.log(error)  
    }
});

//get all ideas
usernotifRouter.get("/",async(req,res)=>{
  try {
    let result=await UserNotification.find();
    res.send({usernotification:result,msg:"all notification"})
  } catch (error) {
    console.log(error)
  }
 });
 //update
 usernotifRouter.put("/validate/:id",async(req,res)=>{
  
  try {
    let result=await UserNotification.findByIdAndUpdate({_id:req.params.id},{$set:{validat:false}},{new:true});
    res.send({msg:"notification is updated ",result:result})
  } catch (error) {
    console.log(error)
  }
 });

 usernotifRouter.delete("/:id",async(req,res)=>{
  try {
    let result=await UserNotification.findByIdAndDelete(req.params.id);
    res.send({msg:"notif is delete"})
  } catch (error) {
    console.log(error)
  }
 });

 //update idea


 
module.exports=usernotifRouter;