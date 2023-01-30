import React,{useState} from 'react'
import axios from "axios";
import {useNavigate,Link} from "react-router-dom"
import "./login.css"

const Login = () => {
    const [password,setpassword]=useState("")   
    const [email,setemail]=useState("") 
    
   const history=useNavigate() 
   
    async function Onsubmit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:5500/login",{
                email,password
            })
            .then(res=>{
                if(res.data=="correct user"){
                     alert("YOU ARE SUCCESFULLY LOGGED IN")
                      history("/")
                }
                else if(res.data=="Wrongpassword"){
                    alert("wrong password")
                }
                else{
                    alert("wrong email")
                }
            }).catch(e=>{
                alert("Wrong details")
                console.log(e)
            })
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className='head'>
    <div>
        Login
    </div>
      <form action='POST' className='mx-auto'  onSubmit={Onsubmit}>
        <input type="email" name="email" className='form-control col-sm-3' aria-label="Default" aria-describedby="inputGroup-sizing-default" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='email' required/>
        <br></br>
        <input type="password" name="password" className='form-control col-sm-3' aria-label="Default" aria-describedby="inputGroup-sizing-default" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='password' required/>
        <br></br>
        <button type='submit' className='btn btn-primary' >submit</button>
      </form>
    </div>
  )
}

export default Login
