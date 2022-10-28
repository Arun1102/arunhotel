import React from 'react'
import './Footer.scss'
function Footer() {
  return (
    <div className='Footer'>
        <div className="Footercontainer">
            <h1><b>Save time, save Money!</b></h1>
            <span>Sign up and we'll spend the best deals to you</span>
            <div className="subscribeinput">
            <input className='input' type="text" placeholder="Your Email"></input>
            <button>Subscribe</button>
            </div>

            <div className="copyright">
              @Copyright2022ArunDev
            </div>
        </div>
    </div>
  )
}

export default Footer