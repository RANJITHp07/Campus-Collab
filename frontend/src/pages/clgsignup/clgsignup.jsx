import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Clgsignup = () => {

    const [clgname,setclgname]=useState("")   
    const [address,setaddress]=useState("")   
    const [clgemail,setclgemail]=useState("")
    const [desc,setdesc]=useState("")
    const [image,setiamge]=useState("")

    const history=useNavigate()

    async function Onsubmit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:5500/clgsignup",{
                clgname,clgemail,address,image,desc
            }).then(res=>{
              if(res.data=="saved"){
                  alert("SUCCESSFULLY SIGNed in")
                  history("/")
              }
              else if(res.data=="alreadyexist"){
                alert("Already exist")
                history("/clgsignup")
              }
            })
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div>
      <form action='POST' onSubmit={Onsubmit}>
        <input type="text" name="clgname" onChange={(e)=>{setclgname(e.target.value)}} value={clgname} placeholder='College name' required/>
        <br></br>
        <input type="email" name='clgemail' value={clgemail} onChange={(e)=>{setclgemail(e.target.value)}} placeholder=' College email' required/>
        <br></br>
        <input type="text" name="address" value={address} onChange={(e)=>{setaddress(e.target.value)}} placeholder='College address' required/>
        <br></br>
        <input type="text" name="img" value={image} onChange={(e)=>{setiamge(e.target.value)}} placeholder='image' required/>
        <br></br>
        <input type="text" name="desc" value={desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder='description' required/>
        <br></br>
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Clgsignup
