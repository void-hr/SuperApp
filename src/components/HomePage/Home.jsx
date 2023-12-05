import AllNotes from './AllNotes';
import './home.css'
import NewsCard from './NewsCard';
// import { useEffect, useState } from 'react'


// Image for temp bar

import ProfileCard from './ProfileCard';
import WeatherCard from './WeatherCard';



const Home = () => {


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
        
        </div>
    </div>
  )
}

export default Home