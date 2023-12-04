import './home.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


// Image for temp bar
import temp from "../../assets/temp.svg";
import humid from "../../assets/humid.svg";
import wind from "../../assets/wind.svg";



const Home = () => {

   const navigate = useNavigate();
   const [profileData, setProfileData] = useState({});
//    const [ weatherData, setWeatherData] = useState({'weather':  {
//     "id": 711,
//     "main": "Smoke",
//     "description": "smoke",
//     "icon": "50d"
// },'main': {
//     "temp": 296.2,
//     "feels_like": 295.84,
//     "temp_min": 296.2,
//     "temp_max": 296.2,
//     "pressure": 1018,
//     "humidity": 49
// },'wind':{
//     "speed": 2.06,
//     "deg": 320
// }})
const [weatherData, setWeatherData] = useState({'weather':'', 'main':'', 'wind':''})
   const [ movieCat, setMovieCat ] = useState([]);
   useEffect(()=> {
  
    if(!localStorage.getItem('fornData')) {
        navigate('/registration')
    }else{
        setProfileData(JSON.parse(localStorage.getItem('fornData')));
        setMovieCat(localStorage.getItem('categories').split(','))
    }


    const weatherDetails = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${API_KEY}`)
        const weather = await response.json();
        setWeatherData({'weather': weather["weather"][0],'main': weather["main"], 'wind': weather["wind"]})
    }
    weatherDetails();
  
    },[navigate, setWeatherData])



// This is to handle date & time 

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

   return { 'date': strTime, 'time': day+'-'+month+'-'+year}
}


  
    
  return (
    <div className='outer_grid_container'>
        <div className="inner_grid_container">
        <div className="profile_card">
            <div className='profile_img'> </div>
            <div className="profile_data">
                <div className="biodata">
                    <p className='p_name'>{profileData?.["name"]}</p>
                    <p className='p_email'>{profileData?.["email"]}</p>
                    <p className='p_uname'>{profileData?.["username"]}</p>
                </div>
                <div className="profile_cat">
                    {movieCat.map((elem,id)=> <div key={id} className='movies_cat'>{elem}</div>)}
                </div>
            </div>
        </div>
        <div className="news_Card"></div>
        <div className="weather_card">
            <div className="date_time">
                <p>{dateTime()['time']}</p>
                <p>{dateTime()['date']}</p>
            </div>
            <div className="temperature">
                <div className="climate_img"> 
                <img src={`https://openweathermap.org/img/w/${weatherData.weather.icon}.png`} alt='climate' />
                <p>{weatherData.weather.main}</p>
                </div> <div className="divider"></div>
                <div className="tempe_pressure">
                 <p className='celcius'>
                 {(weatherData.main.temp - 273.15).toFixed()}° C
                 </p>
                <span className='pressure'>
                <img src={temp} alt="pressure" />
                <p>{weatherData.main.pressure} mbar Pressure</p>
                </span>
                    </div> <div className="divider"></div>
                <div className="wind_humid">
                  <span className='winds'>
                  <img src={wind} alt="windspeed" />
                   <p>{weatherData.wind.speed+' '}
                km/h wind</p>
                    </span> 
                    <span className='humidity'>

    <img src={humid} alt="humidity" />
                   <p>{weatherData.main.humidity}%</p>
                    </span>
                </div>
            </div>
        </div>




        </div>
    </div>
  )
}

export default Home