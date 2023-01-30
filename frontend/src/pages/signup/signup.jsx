import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./signup.css"

const Signup = () => {
    const [username,setusername]=useState("")   
    const [password,setpassword]=useState("")   
    const [email,setemail]=useState("") 
    
    const history=useNavigate();

    async function Onsubmit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:5500/signup",{
                username,email,password
            }).then(res=>{
              if(res.data=="saved"){
                  alert("SUCCESSFULLY SIGNed in")
                  history("/login")
              }
              else{
                alert("sigin again")
              }
            })
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className='signin container'>
     <div >
     <h1>Create new<br/>Account</h1>
     </div>
     <div>
     <form action='POST' className=' justify-content-center form-group'  onSubmit={Onsubmit}>
        <input type="text" name="username" className='justify-content-center form-control' style={{width:"40%",marginLeft:"50px"}} aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{setusername(e.target.value)}} value={username} placeholder='name' required/>
        <br/>
        <input type="email" name='email' className='form-control col-sm-3' aria-label="Default" aria-describedby="inputGroup-sizing-default" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='email' required/>
        <br/>
        <input type="password" name="password" className='form-control col-sm-3' aria-label="Default" aria-describedby="inputGroup-sizing-default" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='password' required/>
        <br/>
        <button type='submit' className='btn btn-primary' >Submit</button>
      </form>
     </div>
    </div>
  )
}

export default Signup
