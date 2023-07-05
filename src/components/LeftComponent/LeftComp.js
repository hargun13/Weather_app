import React, {useState} from 'react'
import LeftNav from './LeftNav'
import LeftHero from './LeftHero'
import { WEATHER_API_KEY, WEATHER_API_URL } from './cityAPI'



const LeftComp = () => {    

    const[ currentWeather , setCurrentWeather ] = useState(null) 
    const [ forecast , setForecast ] = useState(null);

    const handleOnSearchChange = (searchData) =>{
        const [ lat , lon ] = searchData.value.split(" ");

        const currentWeatherGet = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

        const forecastGet = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

        Promise.all([ currentWeatherGet , forecastGet ])
          .then(async (response) => {
            const weatherResponse = await response[0].json();
            const forecastResponse = await response[1].json(); 

            setCurrentWeather({city: searchData.label , ...weatherResponse});
            setForecast({city: searchData.label , ...forecastResponse});
          })
          .catch( (err) => console.log(err) )
    }


  return (
    <div className=' bg-blue-50 h-full p-5'>
        
        <LeftNav onSearchChange={handleOnSearchChange}/>
        
        <LeftHero />

    </div>
  )
}

export default LeftComp

