import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getusernotification, updateusernoti } from "../redux/UserNotificationSlice/UserNotificationSlice";
import { logout } from "../redux/userSlice/userSlice";

import "./Navbar.css";
function Navbar({ navStyle, pp, navbardash ,ping,setPing}) {
  const [show0, setShow0] = useState(false);
  const [show, setShow] = useState(false);
  const [navpos, setNavpos] = useState(false);

  const user = useSelector((state) => state?.user?.user);
  const notif = useSelector((state) => state?.usernotification?.Usernotifications);
  useEffect(() => {
    
    dispatch(getusernotification());


  }, [ping]);

  const changePos = () => {
    if (window.scrollY >= 90) {
      setNavpos(true);
    } else {
      setNavpos(false);
    }
  };
  window.addEventListener("scroll", changePos);
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [showhome, setShowhome] = useState(false);
  const [showabout, setShowabout] = useState(false);
  const [showcontact, setShowcontact] = useState(false);
  const [showidea, setShowidea] = useState(false);

  var b=0;
  for (let i = 0; i < notif?.length; i++) {
    if(notif[i]?.validat==true){
      if(notif[i]?.user_id===user?._id){
        b+=1;
      }      

    }
  }

  return (
    <div>
      <div
        className={
          navpos
            ? `${navbardash} nav-bar1 nav-bar2`
            : `${navStyle} nav-bar1 ${navbardash}`
        }
      >
        <div className="sous-nav">
          {" "}
          <img src="logo.svg" width="38px"></img>
          <h2 className={navpos ? `${pp} h2 h21` : `${pp} h2`}>Tomicrea</h2>
        </div>
        <div className="sous-nav2" >
          <Link to="/"><div className={showhome? "active":""} onClick={()=>{
            setShowhome(true);
            setShowabout(false);
            setShowcontact(false);
            setShowidea(false);



          }}>
          <p className={navpos ? `${pp} p p1` : `${pp} p`}>Home</p>

          </div>
          </Link>
          <Link to="/about">
          <div  className={showabout? "active":""} onClick={()=>{
            setShowhome(false);
            setShowabout(true);
            setShowcontact(false);
            setShowidea(false);



          }}>
          <p className={navpos ? `${pp} p p1` : `${pp} p`}>About</p>
          </div>
          </Link>
          <Link to="/contact">
            {" "}
            <div className={showcontact? "active":""} onClick={()=>{
            setShowhome(false);
            setShowabout(false);
            setShowcontact(true);
            setShowidea(false);



          }}>

            <p className={navpos ? `${pp} p p1` : `${pp} p`}>Contact</p>

            </div>
          </Link>
          <Link to="/idea">
<div className={showidea? "active":""} onClick={()=>{
            setShowhome(false);
            setShowabout(false);
            setShowcontact(false);
            setShowidea(true);



          }}>           <p className={navpos ? `${pp} p p1` : `${pp}  p`}>Idea</p>
</div>
</Link>
        </div>

        <div className="sous-nav">
          {" "}
          <Link to="/login">
            {!isAuth ? (
              <button onClick={()=>{
                setShowhome(false);
                setShowabout(false);
                setShowcontact(false);
                setShowidea(false);
    
    
    
              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-box-arrow-in-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>{" "}
                sign in
              </button>
            ) : null}
          </Link>
          {isAuth ? (
            <div className="notnotif" onClick={()=>
              setTimeout(() => {
                notif.filter((el)=>el.user_id===user?._id).map((el)=>
                dispatch(updateusernoti({id:el._id}))
              
                )
              
              
                setPing(!ping);
              }, 10000)
              }>
              {b>0?<div className="div"></div>
:null}
              <details class="dropdown1" >
    <summary role="button">
    <svg  className="svgg" style={{marginRight:"20px"}} xmlns="http://www.w3.org/2000/svg" width="25" height="25"  class="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
          </svg>
    </summary>
    <ul>
      {notif?.filter((el)=>el.user_id===user?._id).map((el)=><li className={el.validat? 'li li1':'li'}>{el.name} {el.name_prj}{el.description}</li>).reverse()}
     
  </ul>
</details>
              {/* 
 <svg style={{marginRight:"20px"}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
          </svg> */}
            </div>
           
          ) : null}
          {isAuth ? (
            
            <div className="user-img">
              <img src={user?.user_img}></img>
            </div>
          ) : null}
          {isAuth ? (
            <p
              onClick={() => setShow(!show)}
              className={navpos ? `${pp} p p1` : `${pp}  p`}
              style={{ fontWeight: "600" }}
            >
              <div class="dropdown" onmouseout="clearCoor()">
                <input type="checkbox" id="dropdown" />

                <label class="dropdown__face" for="dropdown">
                  <div class="dropdown__text">
                    {user?.Lastname} {user?.user_name} 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      class="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </div>
                </label>

                <div class="dropdown__items">
              {
                user?.option=="Admin"?  <Link  to="/dashboard">
                <div className="dropdiv">
                 <div className="icon"> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-workspace"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                  </svg></div>
                  <p>Dashboard</p>{" "}
                </div>
                </Link>:null
              }
                  <Link to="/profil">
                  <div className="dropdiv" >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                    <p onClick={()=>{
                      setShowhome(false);
                      setShowabout(false);
                      setShowcontact(false);
                      setShowidea(false);
                    }}>My Profil</p>
                  </div>
                  </Link>
                  <div
                    onClick={() => {
                      dispatch(logout());
                      navigate("/login");
                      setShow(!show);
                      setShowhome(false);
                setShowabout(false);
                setShowcontact(false);
                setShowidea(false);
                    }}
                    className="dropdiv"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-box-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                      />
                    </svg>{" "}
                    <p>Logout</p>
                  </div>
                </div>
              </div>
            </p>
          ) : null}
        </div>

  
      </div>
    </div>
  );
}

export default Navbar;
