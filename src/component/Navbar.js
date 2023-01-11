import React,{useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'
function Navbar() {
  let location= useLocation();
  useEffect(()=>{

  },[])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className={`nav-link ${location.pathname === "/"? "active" : ""}`} to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/about"? "active" : ""}`} to="/about">About</Link>
      </li>
    </ul>
    
  </div>
  <form className="d-flex">
      <Link className='btn btn-primary mx-2' to='/login' role='button'>Login</Link>
      <Link className='btn btn-primary mx-2' to='/signup' role='button'>SignUp</Link>
    </form>
</nav>
    
  )
}

export default Navbar