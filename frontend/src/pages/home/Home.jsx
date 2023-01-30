import React from 'react'
import Navbar from '../../components/navbar'
import "./home.css"

const Home = () => {
  return (
    <div className='main'>
     <Navbar/>
     <div className='title'>
        <h1 style={{fontFamily:" 'Monoton', cursive",color:"white"}}>ALL YOU NEED IS<br/> ONE CLICK SIMPLER</h1>
      </div>
    </div>
  )
}

export default Home
