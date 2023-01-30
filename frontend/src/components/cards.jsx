import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Cards = ({card}) => {
  const[college,setcollege]=useState("")

const history=useNavigate()
  function onsubmit(){
     setcollege(card.clgname);
     history(`/college/${college}`)
  }
  return (
    <div>
  
    <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-3 m-3">
      <img style={{width:"300px",height:"200px"}}  src={card.img[0]} class="" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"> College:{card.clgname}</h5>
        <p class="card-text">Address{card.address}</p>
        <p class="card-text">{card.desc}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <hr/>
        <button className="btn btn-primary" value={card.clgname} onClick={()=>{onsubmit()}}>Enter</button>
      </div>
    </div>
  </div>
</div>
</div>
    
  )
}

export default Cards
