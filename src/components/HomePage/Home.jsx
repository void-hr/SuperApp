import AllNotes from './AllNotes';
import './home.css'
import NewsCard from './NewsCard';
// import { useEffect, useState } from 'react'


// Image for temp bar

import ProfileCard from './ProfileCard';
import WeatherCard from './WeatherCard';
import CountdownTimer from './CountdownTimer';
import { useNavigate } from 'react-router-dom';



const Home = () => {

  const navigate = useNavigate();
  const handleBrowse = (e) => {
      e.preventDefault();
      navigate('/entertainment')
  }

  const dateTime = () => {
    // Date
   const dateObj = new Date();
   const month = dateObj.getUTCMonth() + 1; //months from 1-12
   const day = dateObj.getUTCDate();
   const year = dateObj.getUTCFullYear();

   // Time
   const hours = dateObj.getHours() % 12 ?  dateObj.getHours() % 12 : 12 ;
   const  minutes = dateObj.getMinutes() < 10 ? `0${dateObj.getMinutes()}` : dateObj.getMinutes();
   const ampm = dateObj.getHours() > 12 ? 'PM' : 'AM';
   const strTime = hours  + ':'+  minutes + ' ' + ampm;

   return { 'time': strTime, 'date': day+'-'+month+'-'+year}
}
    
  return (
    <div className='outer_grid_container'>
        <div className="inner_grid_container">
            <ProfileCard />
            <AllNotes />
            <NewsCard dateTime={dateTime}/>
            <WeatherCard dateTime={dateTime}/>
          <div className="timer_container">
            <CountdownTimer />
          </div>
          <div className="btn">
          <button className='btns' onClick={(e)=> handleBrowse(e)}>Browse</button>

          </div>
        </div>
    </div>
  )
}

export default Home