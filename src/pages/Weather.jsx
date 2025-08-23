import React from 'react'
import bgImage from '../assets/bg.jpg'
import { useState,useEffect,use } from 'react'
import { useParams } from 'react-router'
import { getWeather } from '../services/WeatherServices'
function Weather() {
    const [weatherData,setWeatherData] = useState(undefined)
    const [loading,setLoading]=useState(false)
    const{selectedCity}=useParams()
    const[city,setCity]=useState(selectedCity)
    useEffect(()=>
    {
        async function fetchData()
        {
            const data=await getWeather(city)
            setWeatherData(data)
        }
        fetchData()
    })
  return (
    <div style={{
        backgroundImage:`url(${bgImage})`,
        backgroundSize:'cover',
    }}
    className='p-10 h-screen flex justify-center '
    >
        {
            loading && <h1 className='text-3xl font-bold'>Loading Weather...</h1>
        }
       { weatherData && (
            <div className='flex flex-col gap-4 justify-center items-center '>
                <img src={weatherData.current.condition.icon} 
                className='opacity:1'/>
                <h1 className='text-2xl font-bold'>{
                    weatherData.current.condition.text}</h1>

                    <h1>
                        Location City:{""}
                        <span className='font-bold'>{
                            weatherData.location.name
                        }</span>
                    </h1>
                    <h1 >
                        Location Region:
                        <span className='font-bold'>{
                            weatherData.location.region
                        }</span>
                    </h1>
                    <h1 >
                        Location Country:
                        
                        <span className='font-bold'>{
                            weatherData.location.country
                        }</span>
                    </h1>
                    <h1 >
                        Location Position:
                        
                        <span className='font-bold'>(
                            {weatherData.location.lat},
                            {weatherData.location.lat
                        })</span>
                    </h1>
                    <h1 >
                        Location LocalDate:
                        <span className='font-bold'>{
                            weatherData.location.localtime
                        }</span>
                    </h1>
                    <h1 >
                        Temp in C:{""}
                        <span className='font-bold text-2xl '>{
                            weatherData.current.temp_c
                        }</span>
                    </h1>
                    <h1 >
                        Temp in F:{""}
                        <span className='text-2xl font-bold'>{
                            weatherData.current.temp_f
                        }</span>
                    </h1>
            </div>
        )}

    </div>
  )
}

export default Weather