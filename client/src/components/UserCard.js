import React, { useState } from 'react'
import "./UserCard.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser, updateuser } from '../redux/userSlice/userSlice';

function UserCard({el,ping,setPing}) {
  const dispatch=useDispatch();

  const [Editprofil, setEditprofil] = useState({
})
  console.log(Editprofil)
  return (
    <div className='usercard'>
<div className='cov'>
  <img src='https://st4.depositphotos.com/1336339/41405/i/600/depositphotos_414058172-stock-photo-men-leather-accessory-closeup-handmade.jpg'/>

</div>
<div className='img'>
  <img src={el.user_img}/>
</div>
<h4>{el.Lastname} {el.name}</h4>
<h4>{el.email}</h4>
<h4>{el.option}</h4>
<div className='update' >
  <button className='btn1' onClick={()=>{
       setTimeout(() => {
        dispatch(deleteuser(el._id));
     setPing(!ping);
      }, 2000);
      
  
      }}>
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>

  </button>
  <select name="pets" id="pet-select" onChange={(e)=>setEditprofil({...Editprofil,option:e.target.value})}>
    <option value=""  >--choose an option--</option>
    
    <option value="User">User</option>
    <option value="Admin">Admin</option>
    <option value="Investor">Investor</option>
</select>
  <button className='btn2' onClick={()=>{
     
      
        setTimeout(() => {
          dispatch(updateuser({id:el._id,Editprofil}));
          setPing(!ping);
        }, 3000);
      }}>
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-recycle" viewBox="0 0 16 16">
  <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
</svg>
  </button>
</div>

    </div>
  )
}

export default UserCard