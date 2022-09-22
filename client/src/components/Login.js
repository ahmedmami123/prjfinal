import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { userLogin, userRegister } from '../redux/userSlice/userSlice';
import "./Register-login.css"

function Login({setnav,setpp}) {

  useEffect(() => {
      setnav("nav-login")
      setpp("pp")
      
  }, [])
  
  const [login, setLogin] = useState({
    
    email:"",
    password:"",
  })
  const [loginemail, setloginemail] = useState(false);
  const [loginpassword, setloginpassword] = useState(false);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  console.log(loginemail)
  function clickerror (){
if(!isValidEmail(login?.email) ){
  setloginemail(true);
}else{
  setloginemail(false);

}
if(login?.password.length<6){
  setloginpassword(true);

}else{
  setloginpassword(false);

}




if(login?.email.length!=0 && login?.password.length>=6){
  dispatch(userLogin(login));
  setTimeout(()=>{
    navigate("/profil");
    
    },2000);
   

}
  }
  const [register, setRegister] = useState({
    name:"",
    Lastname:"",
    email:"",
    password:"",
  })
  const [registername, setregistername] = useState(false);
  const [registerlastname, setregisterlastname] = useState(false);

  const [registeremail, setregisteremail] = useState(false);
  const [registerpassword, setregisterpassword] = useState(false);
  function clickerrorregister (){
    if(register?.name.length==0){
      setregistername(true);
    }else{
      setregistername(false);
    
    }
    if(register?.Lastname.length==0){
      setregisterlastname(true);
    
    }else{
      setregisterlastname(false);
    
    }
    if(!isValidEmail(register?.email) ){
      setregisteremail(true);
    }
    else{
      setregisteremail(false);
    
    }
    if(register?.password.length<6){
      setregisterpassword(true);
    
    }else{
      setregisterpassword(false);
    
    }
    
    
    
    
    if(register?.Lastname.length!=6 &&register?.name.length!=0&& register?.email.length!=0 && register?.password.length>=6){
      dispatch(userRegister(register));
      setTimeout(()=>{
        navigate("/profil");
        },2000);
       
    
    }
      }
  const dispatch=useDispatch();
  const isAuth =localStorage.getItem("token");
  let navigate=useNavigate();
  const [show, setshow] = useState(false);
  return (
<div className='modallogin'>
<div className='register-login'>
<div className='div1'>
<h2>Welcome Back</h2>
<p>welcome back please enter your details</p>
<div className='input'>
  <label>Email {loginemail?<label style={{color:"red"}}>error</label>:null}</label>
  <input placeholder='Email' type="email" onChange={(e)=>setLogin({...login,email:e.target.value})} required></input>
</div>
<div className='input' >
  <label>Password{loginpassword?<label style={{color:"red"}}>error</label>:null}</label>
  <input placeholder='Password' type="password"  onChange={(e)=>setLogin({...login,password:e.target.value})}></input>
  
</div>
<div className='bobbox'><input type="checkbox" className='box'/><p>Remember me</p></div>
<div className='input' >
<button onClick={()=>{
clickerror();      
  }}>Sign in</button>
  
</div>

<h5 onClick={()=>{setshow(!show);
console.log(show)}} style={{color:"black",textAlign:"center",width:"400px",width:"350px",display:"flex",justifyContent:"flex-start",textAlign:"left",marginTop:"-10px"}}>Register Now</h5>
</div>

<div className='div1'>
<h2>Welcome Back</h2>
<p>welcome back please enter your details</p>
<div className='input' >
  <label>Name {registername?<label style={{color:"red"}}>error</label>:null}</label>
  <input placeholder='Name' type="text" onChange={(e)=>setRegister({...register,name:e.target.value})}></input>
  
</div>
<div className='input' >
  <label>LastName {registerlastname?<label style={{color:"red"}}>error</label>:null}</label>
  <input placeholder='LastName' type="text" onChange={(e)=>setRegister({...register,Lastname:e.target.value})}></input>
  
</div>
<div className='input'>
  <label>Email {registeremail?<label style={{color:"red"}}>error</label>:null}</label>
  <input placeholder='Email' type="email" onChange={(e)=>setRegister({...register,email:e.target.value})}></input>
</div>

<div className='input' >
  <label>Password {registerpassword?<label style={{color:"red"}}>error</label>:null}</label>
  <input placeholder='Password' type="password" onChange={(e)=>setRegister({...register,password:e.target.value})}></input>
  
</div>
<div className='bobbox'><input type="checkbox" className='box'/><p>Remember me</p></div>
<div className='input' >
<button onClick={()=>{
     clickerrorregister();
     }}>Register</button>
  
</div>
<h5 onClick={()=>{setshow(!show);
console.log(show)}} style={{color:"black",textAlign:"center",width:"400px",width:"350px",display:"flex",justifyContent:"flex-start",textAlign:"left",marginTop:"-10px"}}>Sign In Now</h5>


</div>





<div  className={show? "div3":"div2"}>

  <img src='people.jpg'/>
 
</div>
<div className={show? "hello1":"hello"}>
  <h1>Hello World.</h1>
{show ?
  <div className='logfbgo'>

<button className='btn1'><img src='google-logo.png' width="25px" style={{marginRight:"5px"}}/>Register with Google</button>
    <button className='btn2'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>Register with Facebook</button>
</div>:  <div className='logfbgo'>  <button className='btn1'><img src='google-logo.png' width="25px" style={{marginRight:"5px"}}/>Login with Google</button>
  <button className='btn2'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>Login with Facebook</button>
  </div>

}
</div>
  </div>
</div>
  )
}

export default Login