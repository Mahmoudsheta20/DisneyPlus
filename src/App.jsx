import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';
import Login from './components/Login';


import Details from './components/Details';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Details_tv from './components/Details_tv';
import Home_movies from './components/Home_movies';
import Home_tv from './components/Home_tv';


function App() {
    return ( <div className = "App" >
        
<Nav/>
  
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Home_movies />}/>
      <Route path="/tv" element={<Home_tv />}/>
          <Route path='/details/movie/:id/' element ={<Details/> }/>
          <Route path='/login' element ={<Login/> }/>
          <Route path='/details/tv/:id/' element ={<Details_tv/> }/>
   
        
         
         
        
      
    </Routes>
  </BrowserRouter>











     


       

        </div>
        
    );
}

export default App;