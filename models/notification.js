const mongoose = require("mongoose");
const notificationSchema = new mongoose.Schema({
  user_img: String,
  user_name: String,
  Lastname:String,
  description:String,
  validat: { type: Boolean, default: true },
},{
  timestamps:true
});

const Notification = mongoose.model("notification",notificationSchema);
module.exports =Notification ;