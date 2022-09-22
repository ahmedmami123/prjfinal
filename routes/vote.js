const express = require("express");
const Vote = require("../models/vote");

const voteRouter=express.Router();

voteRouter.post("/add",async(req,res)=>{
    try {
        let newId = new Idea(req.body);
        let result=await newIdea.save();
        res.send({idea:result,msg:"idea is added"})
    } catch (error) {
      console.log(error)  
    }
});




//get all ideas
voteRouter.get("/",async(req,res)=>{
  try {
    let result=await Idea.find();
    res.send({idea:result,msg:"all ideas"})
  } catch (error) {
    console.log(error)
  }
 });



//delete
// delete idea*
voteRouter.delete("/:id",async(req,res)=>{
    try {
      let result=await Idea.findByIdAndDelete(req.params.id);
      res.send({msg:"idea is delete"})
    } catch (error) {
      console.log(error)
    }
   });
 
module.exports=voteRouter;