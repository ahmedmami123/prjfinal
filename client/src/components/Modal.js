import React, { useState } from 'react'
import "./Home.css";
function Modal({el}) {
    const [showmodal, setShowmodal] = useState(false);
  return (
    <div className="div">
    <div className="circle"><img src={el.img}/></div>
  <p>{el.titre}</p>
  <span onClick={()=>setShowmodal(!showmodal)}>Read more</span>
  
  {
   showmodal? <div className="modal">
   <div className="sous">
    <div className='exit' onClick={()=>setShowmodal(!showmodal)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="gray" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
    </div>

  
    <img src={el.imgg}/>
 
   </div>
  </div>:null
  }
  </div>
  )
}

export default Modal