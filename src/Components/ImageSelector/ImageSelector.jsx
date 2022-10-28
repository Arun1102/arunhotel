import React from 'react'
import './ImageSelector.scss'
function ImageSelector() {
  return (
    <div className='ImageSelector'>
        <div className="ImageSelectorCont">
        <div className="imgcon">
                <img className="images" src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic1"/>
                <h2 className='pic1'>Hotels</h2>
                <h3 className='pic2'>233 hotels</h3>
            </div>
            <div className="imgcon">
                <img className="images" src="https://c4.wallpaperflare.com/wallpaper/281/458/355/petronas-towers-kuala-lumpur-malaysia-wallpaper-preview.jpg" alt="pic1"/>
                <h2 className='pic1'>Apartments</h2>
                <h3 className='pic2'>2331 hotels</h3>
            </div>
            <div className="imgcon">
                <img className="images" src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="pic1"/>
                <h2 className='pic1'>Resorts</h2>
                <h3 className='pic2'>150 hotels</h3>
            </div>
            <div className="imgcon">
                <img className="images" src="https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="pic1"/>
                <h2 className='pic1'>Villas</h2>
                <h3 className='pic2'>180 hotels</h3>
            </div>
            <div className="imgcon">
                <img className="images" src="https://images.pexels.com/photos/974382/pexels-photo-974382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="pic1"/>
                <h2 className='pic1'>Cabins</h2>
                <h3 className='pic2'>68 hotels</h3>
            </div>
        </div>
    </div>
  )
}

export default ImageSelector