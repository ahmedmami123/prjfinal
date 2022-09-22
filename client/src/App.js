import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { useDispatch } from "react-redux";
import { getuser,  logout, userCurrent } from "./redux/userSlice/userSlice";
import Profile from "./components/Profile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import GlobalIdea from "./components/GlobalIdea";
import { getidea } from "./redux/ideasslice/IdeaSlice";
import About from "./components/About";
import Footer from "./components/Footer";
import { getnotification } from "./redux/notifcationSlice/notifcationSlice";
import { getusernotification } from "./redux/UserNotificationSlice/UserNotificationSlice";
import { set } from "mongoose";
function App() {
  const [ping, setPing] = useState(false)
  const [nav, setnav] = useState("")
  const [pp, setpp] = useState("")
  const  [navbardash, setnavbardash] = useState("")
  let navigate=useNavigate();
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getidea());
    dispatch(getuser());
    dispatch(getnotification());
    dispatch(getusernotification());


  }, [ping]);

  return (
    <div className="App">
      <Navbar navStyle={nav} pp={pp} navbardash={navbardash}  ping={ping} setPing={setPing}/>  
      
          {/* <div className="nav-bar">
        <Link to="/login">
          <h3>Login</h3>
        </Link>
        <Link to="/">
          <h3>Register</h3>
        </Link>
        {isAuth?<button onClick={()=>{
          dispatch(logout());
          navigate("/");
          }}>logout</button>:null}
      </div> */}
      <Routes>
      <Route  path="/" element={<Home setnav={setnav}setpp={setpp} setnavbardash={setnavbardash} setPing={setPing} ping={ping}/>}/>
        <Route exact path="/register" element={<Register setnav={setnav}setpp={setpp}/>} />
        <Route path="/login" element={<Login setnav={setnav} setpp={setpp} />} />
        <Route element={<PrivateRoute/>}>
          <Route  path="/profil" element={<Profile  setnav={setnav} setpp={setpp} ping={ping} setPing={setPing}/>}/>
        </Route>
        <Route  path="/contact" element={<Contact setnav={setnav}setpp={setpp}/> } />
        <Route  path="/about" element={<About setnav={setnav}setpp={setpp}/> } />

        <Route  path="/dashboard" element={<Dashboard setnavbardash={setnavbardash} setpp={setpp}  ping={ping} setPing={setPing}/>}/>
        <Route  path="/idea" element={<GlobalIdea setnav={setnav}setpp={setpp} ping={ping} setPing={setPing}/> } />

      </Routes>
     
    </div>
  );
}

export default App;
