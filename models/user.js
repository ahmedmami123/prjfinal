const mongoose=require("mongoose");
const schema=mongoose.Schema;

const userSchema = new schema({
name:{
    type:String,
    required:true
},
Lastname:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
user_img:{
    type:String,
default:"https://us.123rf.com/450wm/yupiramos/yupiramos1804/yupiramos180402323/98584341-jeune-homme-avec-la-barbe-hippie-style-avatar-t%C3%AAte-vecteur-de-caract%C3%A8re-illustration.jpg?ver=6"},
phone:{
    type:String,
    default:"XXXXXXXX"
},
address:{
    type:String,
    default:"xxxxxxxxxxxxxxxxxxxxx"
},
Postal_Code:{
    type:String,
    default:""
},
about:{
    type:String,
    default:""
},
option:{
    type:String,
    default:"User"
},
notification:{
        msg:String,
        state:Boolean,
},



  });

  const User = mongoose.model('User', userSchema);
  module.exports=User;