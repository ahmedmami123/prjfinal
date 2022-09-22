import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { userRegister } from '../redux/userSlice/userSlice';

function Register({setnav,setpp}) {
  const [register, setRegister] = useState({
    name:"",
    Lastname:"",
    email:"",
    password:"",
  })
  useEffect(() => {
    setnav("nav-login")
    setpp("pp")
}, [])
  const dispatch=useDispatch();
  return (
    // <form className='login'>
    //    <h2>Please Register</h2>
    //    <input type="text" className='input' placeholder='Name' onChange={(e)=>setRegister({...register,name:e.target.value})}/>
    //  <input type="text" className='input' placeholder='Last Name' onChange={(e)=>setRegister({...register,Lastname:e.target.value})}/>
    //  <input type="email" className='input' placeholder='email' onChange={(e)=>setRegister({...register,email:e.target.value})}/>
    //  <input type="password" className='input' placeholder="password"  onChange={(e)=>setRegister({...register,password:e.target.value})} />
  
    //  <div className='bobbox'><input type="checkbox" className='box'/><p>Remember me</p></div>
    //  <button onClick={()=>{
    //   dispatch(userRegister(register))
    //  }}>Register</button>
    //  <Link to="/login"><h5 style={{color:"black",textAlign:"center",width:"400px"}}>you already have account sign in</h5></Link>
    // </form>
    <form className='register-login'>
<div className='div1'>
<h2>Welcome Back</h2>
<p>welcome back please enter your details</p>
<div className='input' >
  <label>Name</label>
  <input placeholder='Name' type="text" onChange={(e)=>setRegister({...register,name:e.target.value})}></input>
  
</div>
<div className='input' >
  <label>LastName</label>
  <input placeholder='LastName' type="text" onChange={(e)=>setRegister({...register,Lastname:e.target.value})}></input>
  
</div>
<div className='input'>
  <label>Email</label>
  <input placeholder='Email' type="email" onChange={(e)=>setRegister({...register,email:e.target.value})}></input>
</div>

<div className='input' >
  <label>Password</label>
  <input placeholder='Password' type="password" onChange={(e)=>setRegister({...register,password:e.target.value})}></input>
  
</div>
<div className='bobbox'><input type="checkbox" className='box'/><p>Remember me</p></div>
<div className='input' >
<button>Register</button>
  
</div>
<div className='input' >
<button className='bt2'><img src='google-logo.png'></img>Sign with Google</button>
  
</div>

</div>

<div className='div2'>
  <img src='people.jpg'></img>
</div>
  </form>
  )
}

export default Register