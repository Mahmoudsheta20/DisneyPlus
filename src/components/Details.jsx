import React,{useEffect, useState} from 'react'
import './detalis.css'
import axios from '../axios_id'
import requests from '../reqests'

import play from '../assests/images/play-icon-black.png'
import play_wi from '../assests/images/play-icon-white.png'
import groub from '../assests/images/group-icon.png'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
const api_key = "011a19f7aef4b91e754cc83d49c0bcd9";
const base_url = "https://image.tmdb.org/t/p/original/";


const Details = () => {
const {id} = useParams();
console.log(id)

const [movise, setmovise] = useState([]);
const [movise_id, setmovise_id] = useState([]);
const [trailr, settrailer ] = useState(true)
useEffect(()=>{

  async function fetchData(){
  const requst = await axios.get(`/movie/${id}?api_key=${api_key}&language=en-US`);
  const trailer = await axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`);

  setmovise(requst.data)
  setmovise_id(trailer.data.results[1]["key"])
  
  
  return requst
  
  }
  fetchData()

  
  },[requests.fetch_id])



const opts = {
  height: '600',
  width: '640',
 
};










  return (
    <div className='details'>
      <div className="detail_background">
<img src={`${base_url}${movise.backdrop_path}`} alt="" />

      </div>
      <div className="details_img">
       
        <h2>{movise?.title || movise?.name || movise?.original_name}</h2>
        
      </div>
      <div className="details_control">
        <button className='play'onClick={()=>settrailer(false)}  > <img src={play} alt="" /> <span>play</span> </button>
       
        <button className='plus'   ><span>+</span></button> 
        <button className='groub'><img src={groub} alt="" /></button> 
        <div className="rate"><p>{movise.vote_average}</p></div>
      </div>
      <div className="descrption">

        <p>{movise.overview}</p>
      </div>
      <div className={`${trailr ?"trailer_activ" :"trailer" }`}>
<button onClick={()=> settrailer(true)} className='exit' >X</button>
      <YouTube className='youtube'     videoId={movise_id} opts={opts}  />  
      </div>
      

      </div>
  )
}

export default Details
