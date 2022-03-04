import React from 'react'
import './viwer.css'
import viwerimg from '../assests/images/viewers-disney.png'
import pixarimg from '../assests/images/viewers-pixar.png'
import starimg from '../assests/images/viewers-starwars.png'
import marvelimg from '../assests/images/viewers-marvel.png'
import nationalimg from '../assests/images/viewers-national.png'

const viwer = () => {
  return (
    <div className='viewer'>
    <div className="viewer_img">
        <img src={viwerimg} alt="" />
    </div>
    <div className="viewer_img">
        <img src={marvelimg} alt="" />
    </div>
    <div className="viewer_img">
        <img src={nationalimg} alt="" />
    </div>
    <div className="viewer_img">
        <img src={pixarimg} alt="" />
    </div>
    <div className="viewer_img">
        <img src={starimg} alt="" />
    </div>
    
    </div>
  )
}

export default viwer