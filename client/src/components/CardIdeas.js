import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateidea, updatelike, updatevote } from "../redux/ideasslice/IdeaSlice";
import { addnotifuser } from "../redux/UserNotificationSlice/UserNotificationSlice";
import "./CardIdeas.css";

function CardIdeas({ el,ping,setPing }) {
  const dispatch=useDispatch()
  const user = useSelector((state) => state?.user?.user);
  const users = useSelector((state) => state?.user?.users);
  const isAuth = localStorage.getItem("token");

  const [notification, setnotification] = useState({

    user_id:el?.user_id,
    name_prj:'',
name:user?.name,
    description:"liked your idea",
  })
  const [notification1, setnotification1] = useState({
    
    user_id:el?.user_id,
    name_prj:'',
name:user?.name,
    description:"Voted your idea",
  })
var showlike=el.like.findIndex(el=>el===user?._id);
var showvote = el.vote.findIndex(el=>el===user?._id);
const [show, setshow] = useState(false);
  console.log(showlike)
console.log(el.vote);
useEffect(() => {
}, []);
// const handleVote =()=> {dispatch(updatevote({id:el._id,ideas:[...el.vote,user._id]}))}
// const handleInvote=()=>{dispatch(updatevote({id:el._id,ideas:el.vote.filter(el=>el!=user._id)}))}
  return (
    <div className="card">
      <div className="img">
        <img src={el.user_img} />
      </div>
      <h4>{el.user_name}</h4>
      <p>
   {el.description}
      </p>
     {isAuth? <div className="div">
        <div>
          {showlike<0 ? (
            <button className="button1" onClick={() => {
              // handleVote()
              dispatch(updatelike({id:el._id,ideas:[...el.like,user._id]}))
              dispatch(addnotifuser(notification));

      setTimeout(() => {
        setPing(!ping);

      }, 2000);
              // setshowvote(!showvote)
              }}>
              <svg
                className="svg1"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="gray"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
              <h4 className="like">{(el.like).length} like</h4>
            </button>
          ) : (
            <button className="button1"onClick={() => {
            
              // handleInvote();
              dispatch(updatelike({id:el._id,ideas:el.like.filter(el=>el!=user._id)}))
              setTimeout(() => {
                setPing(!ping)
        
              }, 1000);

              // setshowvote(!showvote)
              }} >
              <svg
                className="svg1"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="red"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
              <h4 className="like">{(el.like).length} like</h4>
            </button>
          )}
          <p>like</p>
        </div>
        <div>
          {" "}
          <button className="button" onClick={()=>setshow(!show)}>Read more</button>{" "}
          {show?<div className="modaldiv">
            <div className="sousmodal" onClick={()=>setshow(!show)}>
              <div className="delete"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
</div>
<h3>{el.description}</h3>
<label>The burning of fossil fuels pollutes the air and contributes to global warming. Time to get rid of this ancient energy source, and use energy more efficiently:

Install solar cells on the university’s rooftops
Optimise the ventilation, air-conditioning and heating of building management systems
Reduce the brightness of computer screens
Install automatic movement sensors to switch off lights in buildings
Turn PCs off or into stand-by mode when idle</label>
<div className="Resources
">
  
</div>
  </div>
          </div>:null}
       </div>
       {user?.option=="Investor"?<div>
          {showvote<0 ? (
            <button className="button1" onClick={() => {
              // handleVote()
              dispatch(updatevote({id:el._id,ideas:[...el.vote,user._id]}))
              dispatch(addnotifuser(notification1));

      setTimeout(() => {
        setPing(!ping);

      }, 2000);
              // setshowvote(!showvote)
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#00fe90"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <h4 className="vote">{(el.vote).length} vote</h4>
            </button>
          ) : (
            <button className="button1" onClick={() => {
            
              // handleInvote();
              dispatch(updatevote({id:el._id,ideas:el.vote.filter(el=>el!=user._id)}))
              setTimeout(() => {
                setPing(!ping)
        
              }, 1000);

              // setshowvote(!showvote)
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="red"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
              <h4 className="vote">{(el.vote).length} vote</h4>
            </button>
          )}
          <p>vote</p>
        </div>:null}
        
      </div>:null}
    </div>
  );
}

export default CardIdeas;
