import React from 'react'
import './HeaderImage.scss'
function HeaderImage() {
  return (
    <div className='HeaderImage'>
        <div className="headerimagecontainer">
            <div className="imgcon">
                <img className="images" src="https://c4.wallpaperflare.com/wallpaper/819/509/295/beautiful-singapore-city-dock-skyscrapers-clouds-dawn-sunrise-wallpaper-preview.jpg" alt="pic1"/>
                <h2 className='pic1'>Singapore</h2>
                <h3 className='pic2'>23 properties</h3>
            </div>
            <div className="imgcon">
                <img className="images" src="https://c4.wallpaperflare.com/wallpaper/281/458/355/petronas-towers-kuala-lumpur-malaysia-wallpaper-preview.jpg" alt="pic1"/>
                <h2 className='pic1'>Kuala Lumpur</h2>
                <h3 className='pic2'>128 properties</h3>
            </div>
            <div className="imgcon">
                <img className="images" src="https://wallpapercave.com/wp/wp9624827.jpg" alt="pic1"/>
                <h2 className='pic1'>Sabah & Sarawak</h2>
                <h3 className='pic2'>68 properties</h3>
            </div>
        </div>
    </div>
  )
}

export default HeaderImage