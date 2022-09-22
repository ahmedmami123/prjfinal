import React from 'react'
import "./Notification.css";

function Notification({el}) {
  return (
    <div  className={el.validat? 'notif notif1':'notif'}>
<div className='img'>
    <img src={el.user_img}/>
</div>
<h3>{el.Lastname} {el.user_name} {el.description}</h3>
<button><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg></button>
    </div>
  )
}

export default Notification