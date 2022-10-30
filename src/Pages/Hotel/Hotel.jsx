import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Headers/Header'
import './Hotel.scss'
import PlaceIcon from '@mui/icons-material/Place';
// import Footer from '../../Components/Footer/Footer'
import { positions } from '@mui/system';
function Hotel() {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className='Hotel'>
        <div className="HotelContainer">
            
            <div className="top">
                <div className="lefttop">
                    <span className='title'>Tower Street Apartmenets</span>
                    <div className="adds">
                        <PlaceIcon className='iconss'/>
                        <span className='add'>5 Bastowa, Old Town, 33-332 KraKow, Poland</span>
                    </div>
                    <span className='loc'>Excellent location - 500m from center</span>
                    <span className='info'>Book a stay over $114 at this property and get a free airport taxi</span>
                </div>
                <div className="righttop">
                    <button> Reserve or Book Now!</button>
                </div>
            </div>
            <div className="bottom">
                <div className="imgrow1">
                    <img className='imgs' src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <img className='imgs' src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <img className='imgs' src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                </div>
                <div className="imgrow2">
                <img className='imgs' src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <img className='imgs' src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <img className='imgs' src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                </div>
            </div>

            <div className="descriptionbox">
                <div className="leftdescript">
                    <h3>Stay in the heart of Krakow</h3>
                    <p>The hotel industry is one of the most important components of the wider service industry, catering for customers who require overnight accommodation. It is closely associated with the travel industry and the hospitality industry, although there are notable differences in scope. In this article, you will learn more about the hotel industry, its links to those other service industry sectors, and the range of hotel and guest accommodation types that exist.</p>
                </div>
                <div className="rightdescript">
                    <h5>Perfect for a night stay</h5>
                    <p>The hotel offers 352 well-equipped rooms where it’s modern interiors feature a comfortable living home suitable for friends, family & business travelers.</p>

                    <span>$945</span>

                    <button>Reserve or book now</button>
                </div>

            </div>

            
    



        </div>
    </div>

    <div className='Footers'>
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
    </>
  )
}

export default Hotel