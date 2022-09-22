const express = require("express");
const Notification = require("../models/notification");

const notifRouter=express.Router();


//post idea
notifRouter.post("/add",async(req,res)=>{
    try {
        let newnotif= new Notification(req.body);
        let result=await newnotif.save();
        res.send({notification:result,msg:"notification is added"})
    } catch (error) {
      console.log(error)  
    }
});

//get all ideas
notifRouter.get("/",async(req,res)=>{
  try {
    let result=await Notification.find();
    res.send({notification:result,msg:"all notification"})
  } catch (error) {
    console.log(error)
  }
 });
 //update
 notifRouter.put("/validat/:id",async(req,res)=>{
  
  try {
    let result=await Notification.findByIdAndUpdate({_id:req.params.id},{$set:{validat:false}},{new:true});
    res.send({msg:"notification is updated ",result:result})
  } catch (error) {
    console.log(error)
  }
 });



 //update idea


 
module.exports=notifRouter;