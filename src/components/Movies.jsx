import React,{useEffect, useState} from 'react'
import './movies.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from '../axios';
import { Link } from 'react-router-dom';

 const base_url = "https://image.tmdb.org/t/p/original/";
const Movies = ({titel, fetchUrl, isLargeRow}) => {
    const [movise, setmovise] = useState([]);
   
    useEffect(()=>{

        async function fetchData(){
        const requst = await axios.get(fetchUrl);
        setmovise(requst.data.results)
        
        return requst
        
        }
        fetchData()
    
        
        }, [fetchUrl])

       


  
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay:true
    
          };

          return (
    
            <div className='row'>
                <h2>{titel}</h2>
         
                
           
            
        
          
       <Slider {...settings}>



       
        
         
                    {movise.map(movie =>(
                        
                       
        
                <div className='row_name'>
              
            <Link to={`/details/movie/${movie.id}`}>
            
             <img   className={`row_postr ${isLargeRow && "row_posterlarg"}`}
                         src={`${base_url}${isLargeRow? movie.poster_path: movie.backdrop_path}`} 
                         alt={movie.name} 
                         key= {movie.id}/>
            </Link>
              
              
                 
                        
                        <p>{movie?.title || movie?.name || movie?.original_name}</p>
                </div>
                        
                         
                 
                      
                     
                         
                       ) ) } 
             </Slider>
                       
                       </div>
              
            
            
               
        
        
         
        
                
        
                    
            
               
                
         
              
                
          )
        }
        

export default Movies