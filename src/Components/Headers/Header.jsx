import React from 'react'
import './Header.scss'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
function Header() {
  return (
    <div className='Header'>
        <div className="headercontainer">
            <div className="lists select">
                <HotelIcon/>
                <span>Stays</span>
            </div>
            <div className="lists">
                <LocalAirportIcon/>
                <span>Flights</span>
            </div>
            <div className="lists">
                <DirectionsCarIcon/>
                <span>Car rentals</span>
            </div>
            <div className="lists">
                <AcUnitIcon/>
                <span>Attractions</span>
            </div>
            <div className="lists">
                <LocalTaxiIcon/>
                <span>Airport taxis</span>
            </div>
        
        </div>

        
    </div>
  )
}

export default Header