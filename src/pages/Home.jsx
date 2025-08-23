import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
function Home() {
    const [location,setLocation]=useState("")
    const navigate=useNavigate()

    function handleChange(event)
    {
        setLocation(event.target.value)
    }
  return (
    <div className='flex flex-col items-center  h-screen p-10 gap-4'>
      <h1 className='text-3xl font-semibold'>Welcome to my weather App</h1>
     <div className='flex  gap-1 flex-col mt-10'>
         <label className="px-2"htmlFor="Weather"> Enter location</label>
      <input 
      onChange={handleChange}
      type="text" className='mx2 py-2  w-screen rounded bg-gray-400'
      placeholder='Enter Location' />
     </div>
      <div>
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
        className='bg-gray-700 text-white p-2 rounded-lg hover:cursor-pointer hover:bg-gray-500'>
        Show Weather
      </button>
      </div>
    </div>
  )
}

export default Home