import React, {useEffect} from 'react'
import'./home.css'
import Sliderimg from './Sliderimg'
import Viwer from './Viwer'
import Movies from './Movies';

import requests from '../reqests';
import Tv from './Tv';



const Home_movies = () => {



 useEffect(()=>{





 },[])


  return (
    <div className='home'>
     
     
     
     
     
     
     
      <Movies isLargeRow titel="Tranding" fetchUrl = {requests.fetchneflix} />

      
      <Movies movie_id   titel="top rated" fetchUrl = {requests.fetchTrending} />
      <Movies titel="comedy" fetchUrl = {requests.fetch_comdy}/>
      <Movies  titel="Documentry" fetchUrl = {requests.fetch_documantry} />
     
     






    </div>
  )
}

export default Home_movies