import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import "./Dashboard.css"
import { getidea } from '../redux/ideasslice/IdeaSlice';
import CardIdeas from './CardIdeas';
import Cardideasdash from './Cardideasdash';
import UserCard from './UserCard';
import { getuser } from '../redux/userSlice/userSlice';
import Notification from './Notification';
import { getnotification, updatenoti } from '../redux/notifcationSlice/notifcationSlice';
export default function Dashboard({setnavbardash, setpp,ping, setPing }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user);
  const idea = useSelector((state) => state.idea?.ideas);
  const users = useSelector((state) => state?.user?.users);
  const notif = useSelector((state) => state?.notification?.notifications);
const [search1, setsearch1] = useState("User")
  const [leng, setleng] = useState(0);
  const [search, setsearch] = useState("");

var b=0;
  for (let i = 0; i < notif?.length; i++) {
    if(notif[i]?.validat==true){
      b+=1;

    }
  }
  console.log("b",b)
  useEffect(() => {
    dispatch(getidea());
    dispatch(getuser());
    dispatch(getnotification());

    setnavbardash("navdash")
    setpp("pp")
    setPing(!ping);
}, []);
const [show1, setshow1] = useState(true);
const [show2, setshow2] = useState(false);
const [show3, setshow3] = useState(false);
const [showidea, setshowidea] = useState(true);
const [showuser, setshowuser] = useState(false);
const [shownotificaton, setshownotificaton] = useState(false);
const [length, setlength] = useState(0)  
return (
    <div className='dashboard'>
   <div className='left'>
    <div className='sousleft1'><img src='dashboard-5481.svg' width="25px"/><h2>Dashboard</h2></div>
  <div className='user'>
    <div className='user-img'>
      <img src={user?.user_img}/>
    </div>
    <h3 style={{color:"rgba(255, 255, 255, 0.603)"}}>ahmed mami</h3>
<div className='list'>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg> <Link to="/"><p>Home</p></Link>
<div className='rot'></div>
</div>



 <div className='list' onClick={()=>{setshowidea(true);


setshowuser(false);
setshownotificaton(false)
}}>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg> <p>Ideas</p>
<div  className={showidea? "rot1":""}></div>
</div>
<div className='list' onClick={()=>{setshowidea(false);


setshowuser(true);
setshownotificaton(false)
}}>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg> <p>Users</p>
<div className={showuser? "rot1":""}></div>
</div>
<div className='list' onClick={()=>{setshowidea(false);


setshowuser(false);
setshownotificaton(true)

setTimeout(() => {
  notif.map((el)=>
  dispatch(updatenoti({id:el._id}))

  )


  setPing(!ping);
}, 10000);
}}>
  {b>0?
  <div className='noti'>
    {b}
  </div>
:null
}
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg> <p>Notification</p>
<div className={shownotificaton? "rot1":""}></div>
</div>


  </div>
  </div>
  <div className='right'>
    <div className='search'>
      <p>Dashboard</p>
      <input type="text" placeholder='Search...' onChange={(e)=>setsearch(e.target.value)}/>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
    </div>
 
    {
      showidea?  <div className='map'>
      <div className='top'>
        <div className={show1?"bot":""} onClick={()=>{
          setshow1(true);
          setshow2(false)
          setshow3(false)
        }}>ACCPTABLE IDEAS</div>

        <div  onClick={()=>{
          setshow1(false);
          setshow2(true)
          setshow3(false)
        }}className={show2?"bot":""}>INVALID IDEAS</div>
        <div  onClick={()=>{
          setshow1(false);
          setshow2(false)
          setshow3(true)
        }} className={show3?"bot":""}>SUCCESSFUL IDEAS</div>

      </div>
      {showidea}
 {
  show1?      <div className='bottom'>
  {idea ? (
        idea?.filter((el)=>el.status==true && el.validat==false && el.description.toLowerCase().includes(search.toLowerCase())).map((el) => <Cardideasdash setPing={setPing} ping={ping} el={el} idea={idea} />)
      ) : 
        <img src="https://smart-l.ch/wp-content/plugins/crazy-call-to-action-box/css/loader.gif" />
      }
  </div>:null
 }
  {
  show2?      <div className='bottom'>
  {idea ? (
           idea?.filter((el)=>el.status==false && el.validat==false && el.description.toLowerCase().includes(search.toLowerCase())).map((el) => <Cardideasdash setPing={setPing} ping={ping} el={el} show2={show2}idea={idea}/>)
      ) : 
        <img src="https://smart-l.ch/wp-content/plugins/crazy-call-to-action-box/css/loader.gif" />
      }
  </div>:null
 }
  {
  show3? 
       <div className='bottom'>
  {idea ? (
           idea?.filter((el)=> el.validat==true && el.description.toLowerCase().includes(search.toLowerCase())).map((el) => <Cardideasdash setPing={setPing} ping={ping} el={el} idea={idea} />)
      ) : 
        <img src="https://smart-l.ch/wp-content/plugins/crazy-call-to-action-box/css/loader.gif" />
      }
  </div>:null
 }
    </div>:null
    }
    {
      showuser?<div className='map'>
        <div className='top'>
        <select name="pets" id="pet-select" onChange={(e)=>setsearch1(e.target.value)}>
        <option value="User">User</option>
    <option value="Admin">Admin</option>
    <option value="Investor">Investor</option>
    </select>
       </div>
      <div className='bottom'>
        {
  users?.filter((el)=>el.option==search1 && (el.name.toLowerCase().includes(search.toLowerCase()) || el.Lastname.toLowerCase().includes(search.toLowerCase()))).map((el)=><UserCard el={el} ping={ping} setPing={setPing}/>)

        }
  </div>
      </div>:null
    }
        {
      shownotificaton?<div className='map'>
    <div className='bottom'>
{notif.map((el)=><Notification el={el} length={length} setlength={setlength}/>).reverse()}

    </div>
      </div>:null
    }
  </div>
    </div>
  )
}
