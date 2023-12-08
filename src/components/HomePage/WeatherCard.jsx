import temp from "../../assets/temp.svg";
import humid from "../../assets/humid.svg";
import wind from "../../assets/wind.svg";
import { useEffect, useState } from 'react'


const WeatherCard = ({dateTime}) => {

 
const [weatherData, setWeatherData] = useState({})
useEffect(()=> {
 
    const weatherDetails = async () => {
            const apiKey = process.env.REACT_APP_WEATHER_KEY
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${apiKey}`)
            const weather = await response.json();
            setWeatherData({'weather': weather["weather"][0],'main': weather["main"], 'wind': weather["wind"]})
        }
        weatherDetails();
        
    },[weatherData])
    
    
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