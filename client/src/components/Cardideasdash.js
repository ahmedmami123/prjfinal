import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteidea, updateidea, updateideastatus, updateideastatus1, updatevalidate } from "../redux/ideasslice/IdeaSlice";
import { addnotifuser } from "../redux/UserNotificationSlice/UserNotificationSlice";

import "./Cardideasdash.css";

function Cardideasdash({ el, show2,ping,setPing }) {
  useEffect(() => {
  
    setPing(!ping)
}, [])
  const idea = useSelector((state) => state.idea.ideas);
  const user = useSelector((state) => state?.user?.user);

  const [notification, setnotification] = useState({
    
    user_id:el?.user_id,
    name_prj:el?.description,

    description:"Idea valide",
    description1:"Your idea is successful",
  })
  const [notification1, setnotification1] = useState({
    
    user_id:el?.user_id,
    name_prj:el?.description,


    description:" idea is successful",
  })

const dispatch=useDispatch();

  return (
    <div className="card1">
      <img src={el.user_img} />
      <h4>{el?.user_name}</h4>
      <p>
        Lorem Ipsum is simply dummy text printing and type setting industry
        Lorem Ipsum been industry standard dummy text ever since when unknown
        printer took a galley.
      </p>
      <div>
      {el.status ?  
        <button className="btn1" onClick={()=>{
setTimeout(() => {
 dispatch(updateideastatus1({id:el._id}));



 

 

 setPing(!ping);
}, 2000);

       }}>INVALID</button>: <button className="btn1" onClick={()=>{


 
        setTimeout(() => {
         dispatch(updateideastatus({id:el._id}));
         dispatch(addnotifuser(notification));
         setPing(!ping);
       }, 2000);
        
               }}>valid</button>}
        <button className="btn2" onClick={()=>{
 
 
 setTimeout(() => {
   dispatch(deleteidea(el._id));
setPing(!ping);
 }, 3000);

   }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </button>
        {!show2 ? <button className="btn1" onClick={()=>{


 
setTimeout(() => {
 dispatch(updatevalidate({id:el._id}));
 dispatch(addnotifuser(notification1));
 setPing(!ping);
}, 2000);

       }}>SUCCESSFUL </button> : null}
      </div>
    </div>
  );
}

export default Cardideasdash;
