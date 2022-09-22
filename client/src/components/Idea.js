import React, { useState } from 'react'
import "./Idea.css";

function Idea({el}) {
  const [show, setshow] = useState(false);

  return (
    <div className="idea">
    <div className="user">
      <div><img src={el?.user_img}/></div>
    </div>
    <div className="sousidea">
      <div className="nameuser">
        <p>{el?.user_name}</p>
      </div>
      <div className="titre">
        <p>{el?.description}</p>
      </div>
      <div className="cle">
        <div>
          {" "}
          <p>{el?.Available_Resources}</p>
        </div>
        <div>
          {" "}
          <p>{el?.Unavailable_Resources}</p>
        </div>
        <div>
          {" "}
          <p>{el?.Number_Employees} Employees</p>
        </div>
        <div>
          {" "}
          <p>{(el.vote).length} vote</p>
        </div>
      </div>
      {show?<div className="modaldiv">
            <div className="sousmodal" >
              <div className="delete" onClick={()=>setshow(!show)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
</div>
<h3>{el.description}</h3>
<label>{el.longDescription}</label>
<div className="Resources">
  <div className="div1">
    <div><h5 style={{color:"#137bc3",fontSize:"17px"}}>Available Resources</h5></div>
    <div><label>{el. Available_Resources}</label></div>
  </div>
  <div className="div1">
    <div><h5 style={{color:"#137bc3",fontSize:"17px"}}>Unavailable Resources</h5></div>
    <div><label>{el.Unavailable_Resources}</label></div>
  </div>
  <div className="div1">
    <div><h5 style={{color:"#137bc3",fontSize:"17px"}}>Unavailable Resources</h5></div>
    <div><label>{el.Number_Employees} Employees</label></div>
  </div>
  <div className="div1">
    <div><h5 style={{color:"#137bc3",fontSize:"17px"}}>Unavailable Resources</h5></div>
    <div><label>{el.project_Cost} </label></div>
  </div>
  <div className="div1">
    <div><h5 style={{color:"#137bc3",fontSize:"17px"}}>Unavailable Resources</h5></div>
    <div><label>{el.budget}</label></div>
  </div>
</div>

  </div>
          </div>:null}

    </div>

    <div className="button">
      <button onClick={()=>setshow(!show)}>Read more</button>
    </div>
  </div>
  )
}

export default Idea