import React from 'react'

const College = () => {
  return (
    <div>
      <nav style={{"fontFamily":"'Advent Pro', sans-serif",color:'white'}} className="navbar navbar-expand-lg navbar-dark ">
        <a style={{fontSize:"50px"}} className="navbar-brand" href="/">Cusat</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div style={{fontSize:"25px"}} className=" ml-auto navbar-nav">
            <a className="nav-item nav-link active" href="/tech">TECH<span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link active" href="/arts">ARTS</a>
            <a className="nav-item nav-link active" href="/sell">SELL</a>          
          </div>
        </div>
      </nav>
    </div>
  )
}

export default College
