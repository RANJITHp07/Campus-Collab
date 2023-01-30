import React from 'react'

const   Navbar = () => {
  return (
    <div>
      <nav style={{"fontFamily":"'Advent Pro', sans-serif",color:'white'}} className="navbar navbar-expand-lg navbar-dark ">
        <a style={{fontSize:"50px"}} className="navbar-brand" href="/">Campus Collab</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div style={{fontSize:"25px"}} className=" ml-auto navbar-nav">
            <a className="nav-item nav-link active" href="#">About<span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link active" href="/community">Community</a>
            <a className="nav-item nav-link active" href="/clgsignup">Create Community</a>          
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
