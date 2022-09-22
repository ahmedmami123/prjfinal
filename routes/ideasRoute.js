const express = require("express");
const Idea = require("../models/ideasModel");

const ideaRouter=express.Router();


//post idea
ideaRouter.post("/add",async(req,res)=>{
    try {
        let newIdea= new Idea(req.body);
        let result=await newIdea.save();
        res.send({idea:result,msg:"idea is added"})
    } catch (error) {
      console.log(error)  
    }
});




//get all ideas
ideaRouter.get("/",async(req,res)=>{
  try {
    let result=await Idea.find().sort(
      {
        vote:-1,
      }
    );
    res.send({idea:result,msg:"all ideas"})
  } catch (error) {
    console.log(error)
  }
 });
//get idea by id 
ideaRouter.get("/:id",async(req,res)=>{
  try {
    let result=await Idea.findById(req.params.id);
    res.send({idea:result,msg:"all ideas"})
  } catch (error) {
    console.log(error)
  }
 });

// delete idea*
ideaRouter.delete("/:id",async(req,res)=>{
  try {
    let result=await Idea.findByIdAndDelete(req.params.id);
    res.send({msg:"idea is delete"})
  } catch (error) {
    console.log(error)
  }
 });
 //update idea
 ideaRouter.put("/:id",async(req,res)=>{
  try {
    let result=await Idea.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}},{new:true});
    res.send({msg:"idea is updated "})
  } catch (error) {
    console.log(error)
  }
 });
 //update option
 ideaRouter.put("/status/:id",async(req,res)=>{
  
  try {
    let result=await Idea.findByIdAndUpdate({_id:req.params.id},{$set:{status:true}},{new:true});
    res.send({msg:"idea is updated ",result:result})
  } catch (error) {
    console.log(error)
  }
 });
 ideaRouter.put("/validat/:id",async(req,res)=>{
  
  try {
    let result=await Idea.findByIdAndUpdate({_id:req.params.id},{$set:{validat:true}},{new:true});
    res.send({msg:"idea is updated ",result:result})
  } catch (error) {
    console.log(error)
  }
 });
 //update vote
  //update idea
  ideaRouter.put("/vote/:id",async(req,res)=>{
    try {
      let result=await Idea.findByIdAndUpdate({_id:req.params.id},{$set:{vote:req.body}},{new:true});
      res.send({msg:"idea is updated "})
    } catch (error) {
      console.log(error)
    }
   });
     //update idea
  ideaRouter.put("/like/:id",async(req,res)=>{
    try {
      let result=await Idea.findByIdAndUpdate({_id:req.params.id},{$set:{like:req.body}},{new:true});
      res.send({msg:"idea is updated "})
    } catch (error) {
      console.log(error)
    }
   });
  //update 
  ideaRouter.put("/status1/:id",async(req,res)=>{
  
    try {
      let result=await Idea.findByIdAndUpdate({_id:req.params.id},{$set:{status:false}},{new:true});
      res.send({msg:"idea is updated ",result:result})
    } catch (error) {
      console.log(error)
    }
   });
  //update vote
  ideaRouter.put("/vote/:id",async(req,res)=>{
  
    try {
      let result=await Idea.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}},{new:true});
      res.send({msg:"idea is updated ",result:result})
    } catch (error) {
      console.log(error)
    }
   });
module.exports=ideaRouter;