import React from 'react'

import './nav.css'
import logo from '../assests/images/logo.svg'
import home from '../assests/images/home-icon.svg'
import search from '../assests/images/search-icon.svg'
import movie from '../assests/images/movie-icon.svg'
import original from '../assests/images/original-icon.svg'
import series from '../assests/images/series-icon.svg'
import watchlist from '../assests/images/watchlist-icon.svg'
import avtar from '../assests/images/download.jpg'
import { Link } from 'react-router-dom';
import { auth , provider } from '../firebase'

import { selectUserName,selectUserPhoto } from '../features/user/userSlice'
import {useSelector} from "react-redux"


const Nav = () => {
// const userName = useSelector(selectUserName);
// const userPhoto = useSelector(selectUserPhoto);


const singIn = ()=>{

  auth.signInWithPopup(provider)
  .then((result)=>{
console.log(result)

  })

}


  return (
   <div className='nav'>
   
       <img className='nav_logo' src={logo} alt="" />




 <div className="nav_menu">



<img src={home} alt="" />
 <span>home</span> 









<a href="#">
 
<img src={search} alt="" />
 <span>search</span> 
</a>


<a href="#">
 
<img src={original} alt="" />
 <span>original</span> 
</a>
<a href="#">
 
<img src={series} alt="" />
 <span>series</span> 
</a>
<a href="#">
<img src={movie} alt="" />
 <span>movie</span> 
</a>
<a href='#'>
<img src={watchlist} alt="" />
 <span>watchlist</span> 
</a>
<a href="#">
<span onClick={singIn}>login</span>

</a>

       </div>
             
     <div className="nav_user">
       <img src={avtar} alt="" />
       </div>        





      
    
     
  
   </div>
  )
}

export default Nav

