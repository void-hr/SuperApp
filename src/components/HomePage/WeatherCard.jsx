import temp from "../../assets/temp.svg";
import humid from "../../assets/humid.svg";
import wind from "../../assets/wind.svg";
import { useEffect, useState } from 'react'

export const dummyData ={'weather':  {
    "id": 711,
    "main": "Smoke",
    "description": "smoke",
    "icon": "50d"
},'main': {
    "temp": 296.2,
    "feels_like": 295.84,
    "temp_min": 296.2,
    "temp_max": 296.2,
    "pressure": 1018,
    "humidity": 49
},'wind':{
    "speed": 2.06,
    "deg": 320
}}

const WeatherCard = ({dateTime}) => {

 
const [weatherData, setWeatherData] = useState({})
useEffect(()=> {
    
    if(Object.keys(weatherData).length === 0){
        
        setWeatherData(dummyData)
        
    }else {

        return () => null
    }
    
    // const weatherDetails = async () => {
        //     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${API_KEY}`)
        //     const weather = await response.json();
        //     setWeatherData({'weather': weather["weather"][0],'main': weather["main"], 'wind': weather["wind"]})
        // }
        // weatherDetails();
        
    },[weatherData])
    
    
    



// This is to handle date & time 







    return (
        <div className='weather_card'>      
            <div className="date_time">
            <p>{dateTime().date}</p>
            <p>{dateTime().time}</p>
        </div>
            <div className="temperature">
                <div className="climate_img">
                    <img src={weatherData?.weather?.icon ? `https://openweathermap.org/img/w/${weatherData.weather.icon}.png` : ''} alt='climate' />
                    <p>{weatherData?.weather?.main}</p>
                </div> <div className="divider"></div>
                <div className="tempe_pressure">
                    <p className='celcius'>
                        {(weatherData?.main?.temp - 273.15).toFixed()}° C
                    </p>
                    <span className='pressure'>
                        <img src={temp} alt="pressure" />
                        <p>{weatherData?.main?.pressure} mbar Pressure</p>
                    </span>
                </div> <div className="divider"></div>
                <div className="wind_humid">
                    <span className='winds'>
                        <img src={wind} alt="windspeed" />
                        <p>{weatherData?.wind?.speed + ' '}
                            km/h wind</p>
                    </span>
                    <span className='humidity'>

                        <img src={humid} alt="humidity" />
                        <p>{weatherData?.main?.humidity}%</p>
                    </span>
                </div> 
            </div>
             </div>
    )
}

export default WeatherCard