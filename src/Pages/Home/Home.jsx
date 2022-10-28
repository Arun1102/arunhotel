import React from 'react'
import './home.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Headers/Header'
import Headertitle from '../../Components/Headertitle/Headertitle'
import Search from '../../Components/SearchBar/Search.jsx'
import HeaderImage from '../../Components/HeaderImage/HeaderImage'
import Descript from '../../Components/Description/Description'
import ImageSelector from '../../Components/ImageSelector/ImageSelector'
import Bottom from '../../Components/BottomDescription/Bottom'
import BottomImage from '../../Components/BottomImage/BottomImage'
import Footer from '../../Components/Footer/Footer'
function Home() {
  return (
    <div className='Home'>
        <Navbar/>
        <Header/>
        <Headertitle/>
        <Search/>
        <HeaderImage/>
        <Descript/>
        <ImageSelector/>
        <Bottom/>
        <BottomImage/>
        <Footer/>
        
    </div>
  )
}

export default Home