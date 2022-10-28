import React, {useState} from 'react'
import './Search.scss'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BoyIcon from '@mui/icons-material/Boy';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
function Search() {

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  //dates open/close windows state
  const [open,setOpen] = useState(false)
  //rooms,childre,adult open/close windows state
  const [qopen,setQopen] = useState(false)
  //rooms,childre,adult value change state
  const [room, setRoom] = useState({
    adult:1,
    children:0,
    room:1
  })

  const handleOption =(name, value)=>{

    setRoom((prev)=>{return{
      
      ...prev ,
      [name]:value === "i" ? room[name] + 1 :  room[name] - 1
    }
    })
  }


  
  

  return (
    <div className='Search'>
        
        <div className="searchcontainer">
          <form className='listcontainer'>
          <div className="lists">
            <LocalHotelIcon/>
            <input type="text" name="search" placeholder='Where are you going? '/>
          </div>
          <div className="lists" >
            <CalendarMonthIcon />
            {open &&
            <DateRange

              editableDateInputs={true}
              onChange={item => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className="Dates"
              
            />
          }
            <span onClick={()=>{setOpen(!open);setQopen(false) }}>{`${format(state[0].startDate,"dd/MM/yyyy")} to ${format(state[0].endDate,"dd/MM/yyyy")}`}</span>
          </div>
          <div className="lists">
            <BoyIcon/>
            <span onClick={()=>{setQopen(!qopen) ; setOpen(false)}}>{`${room.adult} adults . ${room.children} children . ${room.room} Room`}</span>
            {qopen &&
            <div className="containerRoom">
              <div className="container">
                
                <span>Adults</span>
                <div className="container1">
                  <button onClick={(e)=>{e.preventDefault(); handleOption("adult","i")}}>+</button>
                  <span>{`${room.adult}`}</span>
                  <button onClick={(e)=>{e.preventDefault(); handleOption("adult","d")}} disabled={room.adult <= 1}>-</button>
                </div>

              </div>
              <div className="container">
                
                <span>Children</span>
                <div className="container1">
                  <button onClick={(e)=>{e.preventDefault(); handleOption("children","i")}}>+</button>
                  <span>{`${room.children}`}</span>
                  <button onClick={(e)=>{e.preventDefault(); handleOption("children","d")}}>-</button>
                </div>
                
              </div>
              <div className="container">
                
                <span>Room</span>
                <div className="container1">
                  <button onClick={(e)=>{e.preventDefault(); handleOption("room","i")}}>+</button>
                  <span>{`${room.room}`}</span>
                  <button onClick={(e)=>{e.preventDefault(); handleOption("room","d")}}>-</button>
                </div>
                
              </div>

            </div>
            }
          </div>
            

            <button className='searchbutton'>Search</button>
            </form>
        </div>
    </div>
  )
}

export default Search