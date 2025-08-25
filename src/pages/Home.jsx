import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'
function Home() {
    const [location,setLocation]=useState("")
    const navigate=useNavigate()

    function handleChange(event)
    {
        setLocation(event.target.value)
    }
  return (
    <div className='h-screen'>
      <div className='flex flex-col items-center  p-10 gap-4'>
    <h1 className='text-3xl font-semibold'>Welcome to my weather App</h1></div>
    <div >
    <p className='flex flex-col gap-2 p-2 ml-2 text-lg'>Stay ahead of the weather with real-time forecasts, accurate updates, and interactive maps. Our React-powered platform gives you instant access to:
<li><span className='text-lg underline font-semibold'>Current Weather</span> – Temperature, humidity, wind speed, and air quality around you.</li>

<li><span className='text-lg underline font-semibold'>Hourly & Weekly Forecasts</span> – Plan your day and week with confidence.</li>

<li><span className='text-lg underline font-semibold'> Location-based Updates </span>– Get personalized weather insights wherever you are.</li>

<li><span className='text-lg underline font-semibold'>Interactive UI</span> – Clean, fast, and responsive design for a smooth experience.</li>

Whether you’re planning a trip, scheduling outdoor activities, or just curious about the climate, WeatherForcast keeps you informed at all times.

    </p>
    </div>
     <div className='flex  gap-2 flex-col py-20 items-center '>
         <label className="px-2 font-semibold text-2xl"htmlFor="Weather"> Enter location</label>
      <input 
      onChange={handleChange}
      type="text" className=' text-black px-2 py-2 w-3/5 rounded bg-gray-400'
      placeholder='Enter Location' />
     
      
        <button 
        onClick={()=>
        {
            if(location.trim()=="")
            {
                toast.error("Please enter a location")
                return
            }
            navigate(`/weather/${location}`)
        }
        }
        className='flex justify-center items-center bg-gray-700 text-white p-2 rounded-lg hover:cursor-pointer hover:bg-gray-500 hover:text-black'>
        Show Weather
      </button>
      </div>
      <Footer/>
    </div>
  )
}

export default Home