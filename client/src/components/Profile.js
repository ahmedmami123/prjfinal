import { body } from "express-validator";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateuser } from "../redux/userSlice/userSlice";

import "./Profile.css";


function Profile({setnav,setpp,ping,setPing}) {
  useEffect(() => {
    setnav("nav-login")
    setpp("pp")
    
}, [])
// const [url1, seturl1] = useState()
const [file, setfile] = useState()

const [Editprofil, setEditprofil] = useState({

})

const user=useSelector((state)=>state.user?.user);
console.log(user)
const dispatch=useDispatch();
const uploadimg=()=>{
  const data =new FormData()
  data.append("file",file)
  data.append("upload_preset","ahmedmami")
  data.append("cloud_name","dwikjrexb")
  fetch("https://api.cloudinary.com/v1_1/dwikjrexb/image/upload",{
    method:"post",
    body:data
  })
  .then(res=>res.json())
  .then(data=>{
    
    // seturl1(data.secure_url)
   var url1=data.secure_url
    console.log("url",url1)
  
    setTimeout(() => {
      setEditprofil({...Editprofil,user_img:url1})
      setPing(!ping)
    }, 2000);
  })
  .catch(err=>{
    console.log("err",err)
  })
}

  return (
        // <div>hello {user? user.name:<h1>loading ...</h1>}</div>

         <div className="profil">
{user?
      <div className="div1">
        <div className="cov">
          <img src="https://st4.depositphotos.com/1336339/41405/i/600/depositphotos_414058172-stock-photo-men-leather-accessory-closeup-handmade.jpg"/>
        </div>
        <div className="userimg">
<img src={user.user_img}/>          </div>
 <div className="descri">
<h2>{user.Lastname +" "+ user.name}</h2>
<p>{user.email}</p>
<p>{user.phone}</p>
<p>{user.address}</p>

        </div>
      </div>:<img src="https://assets.materialup.com/uploads/b68f4460-aaa9-4e19-99d8-232dfea1c537/preview.gif"/>}
      {user? <div className="div2">
        <div><p>Edit Profile
</p></div>
<div>
  <label>First Name</label><label>Last Name</label>
  <input type="text" defaultValue={user.name} onChange={(e)=>setEditprofil({...Editprofil,name:e.target.value})}/>

  <input type="text" defaultValue={user.Lastname} onChange={(e)=>setEditprofil({...Editprofil,Lastname:e.target.value})}/>
</div>
<div>
  <label>Email address</label><label>Password</label>
  <input type="text" defaultValue={user.email} onChange={(e)=>setEditprofil({...Editprofil,email:e.target.value})}/>

  <input type="text" placeholder="Password" onChange={(e)=>setEditprofil({...Editprofil,password:e.target.value})}/>
</div>
<div>
  <label>Address</label><label>phone number</label>
  <input type="text" defaultValue={user.address} onChange={(e)=>setEditprofil({...Editprofil,address:e.target.value})}/>

  <input type="text" defaultValue={user.phone}onChange={(e)=>setEditprofil({...Editprofil,phone:e.target.value})}/>
</div>
<div>
  <label>Postal Code</label><label>photo</label>
  <input type="number" defaultValue={user.Postal_Code} onChange={(e)=>setEditprofil({...Editprofil,Postal_Code:e.target.value})}/>

  <input type="file"   onChange={(e)=>setfile(e.target.files[0])}/>
<button onClick={()=>{
  
    uploadimg();
  
    setPing(!ping);
}}></button>
</div>
{/* <div>
  <label >About me</label>
  <textarea  type="text" placeholder="About me" defaultValue={user.about} onChange={(e)=>setEditprofil({...Editprofil,about:e.target.value})}/>


</div> */}
<div>
<button onClick={()=>{

  setTimeout(() => {
    dispatch(updateuser({id:user._id,Editprofil}));
    setPing(!ping);
  }, 5000);

  }}>UPDATE PROFILE</button>

</div>
<div>

</div>
      </div>:<img src="https://assets.materialup.com/uploads/b68f4460-aaa9-4e19-99d8-232dfea1c537/preview.gif"/>}
    </div>
  );
}

export default Profile;
