const mongoose = require("mongoose");
const ideaSchema = new mongoose.Schema({
  user_img: String,
  user_name: String,
  user_id:String,
  description: String,
  longDescription: String,
  Available_Resources: String,
  Unavailable_Resources: String,
  Number_Employees:String,
  project_Cost: String,
  budget: String,
  vote: { type: [String], default: []},
  like: { type: [String], default: [] },

  status: { type: Boolean, default: false },
  validat: { type: Boolean, default: false },
});

const Idea = mongoose.model("Idea", ideaSchema);
module.exports = Idea;
