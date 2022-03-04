import React,{useEffect, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import badag from '../assests/images/slider-badging.jpg'
import './slide.css'
import axios from '../axios';
import requests from '../reqests';
const base_url = "https://image.tmdb.org/t/p/original/";
const Sliderimg = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true

      };
      const [movise, setmovise] = useState([]);

      useEffect(()=>{

        async function fetchData(){
        const requst = await axios.get(requests.fetchTrending);
        setmovise(requst.data.results)
        
        
        return requst
        
        }
        fetchData()
      
        
        },[requests.fetchTopRated])
        console.log(movise)


  return (


    <Slider className='slider' {...settings}>
 {movise.map(movie =>(
                        
                       
        
                  
                  
                    
                      <div className="slider_wrappr">
        <img src={`${base_url}${movie.backdrop_path}`}alt="" />
    </div>
                 
                      
                      
                         
                                
                              
                  
                                
                                 
                         
                              
                             
                                 
                               ) ) } 




  
    
  </Slider>
  )
}

export default Sliderimg