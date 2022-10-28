import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navcontainer">
            <div className="logo">
                <span className='Logoname' >ArunBooking</span>
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