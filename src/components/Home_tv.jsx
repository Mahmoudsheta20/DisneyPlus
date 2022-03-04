import React, {useEffect} from 'react'
import'./home.css'
import Sliderimg from './Sliderimg'
import Viwer from './Viwer'
import Movies from './Movies';

import requests from '../reqests';
import Tv from './Tv';



const Home_tv = () => {



 useEffect(()=>{





 },[])


  return (
    <div className='home'>
     
     
     
     
     
     
     <Tv isLargeRow titel="Tranding" fetchUrl = {requests.fetchTrending_tv} />
      <Tv isLargeRow titel="Top Rated" fetchUrl = {requests.fetchTopRated_tv} />
      <Tv isLargeRow titel="NETFLIX ORIGINALS" fetchUrl = {requests.fetchTrending_tv} />
      
      <Tv   titel="top rated" fetchUrl = {requests.fetch_action_tv} />
      <Tv titel="comedy" fetchUrl = {requests.fetch_comdy_tv}/>
      <Tv titel="Documentry" fetchUrl = {requests.fetch_action_tv} />
      <Tv  titel="tv top rated" fetchUrl = {requests.fetch_tv}/>
     






    </div>
  )
}

export default Home_tv