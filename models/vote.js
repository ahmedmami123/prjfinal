const mongoose=require("mongoose");
const schema=mongoose.Schema;

const voteSchema = new schema({
Vote:{
    type:String,
    required:true
},
});

  const Vote = mongoose.model('Vote', voteSchema);
  module.exports=Vote;