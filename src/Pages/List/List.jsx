import React, {useState} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Headers/Header'
import './List.scss'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
function List() {

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [open,setOpen] = useState(false)

  return (
    <div>
    <Navbar/>
    <Header/>
    <div className="List">
      <div className="listcontainer">
      <div className="search">
        <h3>Search</h3>
        <h5>Destination</h5>
        <input className='destin' type="text" placeholder="Kuala Lumpur"/>
        <h5>Check-in date</h5>
        <span className='labelspan' onClick={()=>{setOpen(!open);}} >{`${format(state[0].startDate,"dd/MM/yyyy")} to ${format(state[0].endDate,"dd/MM/yyyy")}`}</span>
        {open &&
        <DateRange

              editableDateInputs={true}
              onChange={item => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className="Dates"
              minDate={new Date()}
              
            />
        }

          <h5>Options</h5>
          {/* <div className="values"></div> */}
          <div className="valuelist">
            <span>Min price (per night)</span>
            <span className='inputs'>values</span>
          </div>
          <div className="valuelist">
            <span>Max price (per night)</span>
            <span className='inputs'>0</span>
          </div>
          <div className="valuelist">
            <span>Adult</span>
            <span className='inputs'>1</span>
          </div>
          <div className="valuelist">
            <span>Children</span>
            <span className='inputs'>1</span>
          </div>
          <div className="valuelist">
            <span>Room</span>
            <span className='inputs'>1</span>
          </div>

          <button className='searchbutton'> Search </button>

      </div>
      <div className="results">
        

        <div className="resultscontainer">
          <div className="resultsImg">
              <img className="imge" src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>

          <div className="resultsdescrip">

            <div className="leftdescript">
              <span className='title'>Tower Street Apartments</span>
              <span className='distance'>500m from center</span>
              <span className='free'>Free airpot taxi</span>
              <span className='type'>Studio apartment with air conditioning</span>
              <span className='descript'>Entire studio + 1 bathroom + 21m<sup>2</sup> 1 full bed</span>
              <span className='flexi'>Free cancellation</span>
              <span className='info'>you can cancel later, so lock in this great price today!</span>
             
            </div>
              <div className="rightdescript">
                  <div className="top">
                    <span>Excellent </span>
                    <span className='rate'>8.9</span>
                  </div>
                  <div className="bottom">
                    <span>$112</span>
                    <span className='inc'>includes taxes and fees</span>
                    <button className='searchbutton'> See availability </button>
                  </div>
              </div>
            </div>
         
        </div>


        {/* ======== */}

        <div className="resultscontainer">
          <div className="resultsImg">
              <img className="imge" src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>

          <div className="resultsdescrip">

            <div className="leftdescript">
              <span className='title'>Tower Street Apartments</span>
              <span className='distance'>500m from center</span>
              <span className='free'>Free airpot taxi</span>
              <span className='type'>Studio apartment with air conditioning</span>
              <span className='descript'>Entire studio + 1 bathroom + 21m<sup>2</sup> 1 full bed</span>
              <span className='flexi'>Free cancellation</span>
              <span className='info'>you can cancel later, so lock in this great price today!</span>
             
            </div>
              <div className="rightdescript">
                  <div className="top">
                    <span>Excellent </span>
                    <span className='rate'>8.9</span>
                  </div>
                  <div className="bottom">
                    <span className='money'>$112</span>
                    <span className='inc'>includes taxes and fees</span>
                    <button className='searchbutton'> See availability </button>
                  </div>
              </div>
            </div>
         
        </div>

         {/* ======== */}

         <div className="resultscontainer">
          <div className="resultsImg">
              <img className="imge" src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>

          <div className="resultsdescrip">

            <div className="leftdescript">
              <span className='title'>Tower Street Apartments</span>
              <span className='distance'>500m from center</span>
              <span className='free'>Free airpot taxi</span>
              <span className='type'>Studio apartment with air conditioning</span>
              <span className='descript'>Entire studio + 1 bathroom + 21m<sup>2</sup> 1 full bed</span>
              <span className='flexi'>Free cancellation</span>
              <span className='info'>you can cancel later, so lock in this great price today!</span>
             
            </div>
              <div className="rightdescript">
                  <div className="top">
                    <span>Excellent </span>
                    <span className='rate'>8.9</span>
                  </div>
                  <div className="bottom">
                    <span>$112</span>
                    <span className='inc'>includes taxes and fees</span>
                    <button className='searchbutton'> See availability </button>
                  </div>
              </div>
            </div>
         
        </div>





      </div>
      </div>
    </div>
    </div>
  )
}

export default List