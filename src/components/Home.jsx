import React, {useEffect} from 'react'
import'./home.css'
import Sliderimg from './Sliderimg'
import Viwer from './Viwer'
import Movies from './Movies';

import requests from '../reqests';
import Tv from './Tv';
import Home_movies from './Home_movies';
import Home_tv from './Home_tv';




const Home = () => {



 useEffect(()=>{





 },[])


  return (
    <div className='home'>
      <Sliderimg/>
      <Viwer/>
     
     
     <Home_movies/>
     <Home_tv/>
     
     
     






    </div>
  )
}

export default Home