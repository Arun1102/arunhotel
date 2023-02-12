import React from 'react';
import useFetch from '../../hooks/useFetch.js';
import './HeaderImage.scss';




function HeaderImage() {

    
  
    const { data, loading } = useFetch(
        "/hotel/countByCity?cities=singapore,sabahsarawak,KL"
      );




  return (
    <div className='HeaderImage'>
        {loading? ("loading please wait"): (<><div className="headerimagecontainer">
            <div className="imgcon">
                <img className="images" src="https://c4.wallpaperflare.com/wallpaper/819/509/295/beautiful-singapore-city-dock-skyscrapers-clouds-dawn-sunrise-wallpaper-preview.jpg" alt="pic1"/>
                <h2 className='pic1'>Singapore</h2>
                <h3 className='pic2'>{data[0]} properties</h3>
            </div>
            <div className="imgcon">
                <img className="images" src="https://c4.wallpaperflare.com/wallpaper/281/458/355/petronas-towers-kuala-lumpur-malaysia-wallpaper-preview.jpg" alt="pic1"/>
                <h2 className='pic1'>Kuala Lumpur</h2>
            <h3 className='pic2'>{data[1]} properties</h3>
            </div>
            <div className="imgcon">
                <img className="images" src="https://wallpapercave.com/wp/wp9624827.jpg" alt="pic1"/>
                <h2 className='pic1'>Sabah & Sarawak</h2>
                <h3 className='pic2'>{data[2]} properties</h3>
            </div>
        </div></>)}
    </div>
  )
}

export default HeaderImage