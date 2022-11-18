import React,{useState} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Headers/Header'
import './Hotel.scss'
import PlaceIcon from '@mui/icons-material/Place';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
// import Footer from '../../Components/Footer/Footer'
import { positions } from '@mui/system';
import { Google } from '@mui/icons-material';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useSubmit } from 'react-router-dom';
function Hotel() {


    const photo = [
          {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
          },
          {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
          },
          {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
          },
          {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
          },
          {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
          },
          {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
          },
    ]

    const [open,setOpen] = useState(false);
    const [number,setNumber] = useState(0);
    const handleopen = (i)=>{
        setNumber(i);
        setOpen(true);
    }

    const slidernext = (direction)=>{
        let newSlide;
        if(direction === "l"){
           newSlide =  number === 0 ? 5 : number - 1
        }else if (direction === "r"){
            newSlide = number === 5 ? 0 : number + 1
        }

        setNumber(newSlide)
    }

    


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
            {open &&
            <div className="slider">
                <ChevronLeftIcon style={{fontSize:"50px"}} onClick={()=>slidernext("l")}/>
            <img src={photo[number].src} alt='pic1' className='sliderimg'/>
                <CancelPresentationIcon className='cancel' onClick={()=>setOpen(!open)}/>
                <ChevronRightIcon style={{fontSize:"50px"}} onClick={()=>slidernext("r")}/>
            </div>
            }

            <div className="bottom">
               
                <div className="div1">
                    
                    {photo.map((photos,i)=>(
                        <div className="div2">
                    <img className='imgs' src={photos.src} id={photos.id} onClick={()=>handleopen(i)}/>
                    </div>
                ))}
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