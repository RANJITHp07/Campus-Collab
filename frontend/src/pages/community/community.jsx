import React,{useState} from 'react'
import Cards from '../../components/cards';

import useFetch from '../../hooks/hooks';

const Community = () => {
    const{data,loading,error,reFetch}=useFetch("http://localhost:5500/community");
    const[college,setcollege]=useState("");
    async function Onsubmit(e){
      e.preventDefault();
      reFetch(`http://localhost:5500/getby?college=${college}`)
    }
  return (
    <div>
    <nav style={{"fontFamily":"'Advent Pro', sans-serif",color:'white',marginBottom:"40px"}} class="navbar navbar-light  justify-content-between">
  <a style={{fontSize:"50px"}} class="navbar-brand">Campus Collab</a>
  <form class="form-inline" onSubmit={Onsubmit}>
    <input class="form-control mr-sm-2" onChange={function(e){setcollege(e.target.value)}}  type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
    <div className='container'>
   <div className='row'>
   {
    data.map(card=>(
       <div className='col-md-4'>
         <Cards card={card} key={card._id}/>
      </div>
   ))}
   </div>
   </div>
    </div>
  )
}

export default Community
