import React from 'react'
import useFetch  from '../../hooks/useFetch.js';
import './BottomImage.scss'
function BottomImage() {




    const {data,loading} = useFetch("/hotel?limit=4")
    const img = [
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://c4.wallpaperflare.com/wallpaper/281/458/355/petronas-towers-kuala-lumpur-malaysia-wallpaper-preview.jpg",
        "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
    console.log({data})
  return (
//     <div className='BottomImage'>
//     <div className="BottomImageContainer">


//         {loading? "is loading" :(
//             <>
//         <div className="imgcon">
//             <img className="images" src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic1"/>
//             <h2 className='pic1'>hello</h2>
//             <h3 className='pic2'></h3>
//             <h2 className='pic3'>Starting from </h2>
//             <span className='pic4'>{data[0]} Excellent </span>
//         </div>
//         <div className="imgcon">
//             <img className="images" src="https://c4.wallpaperflare.com/wallpaper/281/458/355/petronas-towers-kuala-lumpur-malaysia-wallpaper-preview.jpg" alt="pic1"/>
//             <h2 className='pic1'>hello</h2>
//             <h3 className='pic2'>2331 hotels</h3>
//             <h2 className='pic3'>Starting from </h2>
//             <span className='pic4'>8.9 Excellent </span>
//         </div>
//         <div className="imgcon">
//             <img className="images" src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="pic1"/>
//             <h2 className='pic1'>hello</h2>
//             <h3 className='pic2'>150 hotels</h3>
//             <h2 className='pic3'>Starting from </h2>
//             <span className='pic4'>8.9 Excellent </span>
//         </div>
//         <div className="imgcon">
//             <img className="images" src="https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="pic1"/>
//             <h2 className='pic1'>hello</h2>
//             <h3 className='pic2'>180 hotels</h3>
//             <h2 className='pic3'>Starting from </h2>
//             <span className='pic4'>8.9 Excellent </span>
//         </div>
//         </>
//         )}
//     </div>
// </div>
<div className="BottomImage">
<div className="BottomImageContainer">
{loading ? (
  "Loading"
) : (
  <>
    {data.map((item,i) => (
      <div className="imgcon" key={item._id}>
         <img className="images" src={img[i]} alt="pic1"/>
        <span className="pic1">{item.name}</span>
        <span className="pic2">{item.city}</span>
        <span className="pic3">Starting from ${item.cheapestPrice}</span>
        <span className='pic4'>8.9 Excellent </span>
      </div>
    ))}
  </>
)}
</div>
</div>
  )

}

export default BottomImage