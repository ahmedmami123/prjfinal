const mongoose = require("mongoose");
const userNotificationSchema = new mongoose.Schema({
  user_id:String,
  name_prj:String,
  name:String,
  description:String,
  description1:String,
  validat: { type: Boolean, default: true },
},{
  timestamps:true
});

const UserNotification = mongoose.model("usernotification",userNotificationSchema);
module.exports =UserNotification ;