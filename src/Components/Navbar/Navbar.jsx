import React from 'react'
import './navbar.scss'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navcontainer">
            <div className="logo">
              <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                <span className='Logoname' >ArunBooking</span>
                </Link>
            </div>
            <div className="buttons">
              <button className='regbutton'>Register</button>
              <button className='logbutton'>Login</button>
            </div>

           
        </div>
        
    </div>
  )
}

export default Navbar