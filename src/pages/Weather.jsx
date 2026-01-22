import React from 'react'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { getWeather } from '../services/WeatherServices'
import Footer from '../components/Footer'
import { useTheme } from '../context/ThemeContext'

function Weather() { 
    const [weatherData, setWeatherData] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const { selectedCity } = useParams()
    const [city, setCity] = useState(selectedCity)
    const { isDark } = useTheme()

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const data = await getWeather(city)
                setWeatherData(data)
            } catch (error) {
                toast.error('Failed to fetch weather data')
            } finally {
                setLoading(false)
            }
        }
        
        fetchData()
    }, [city])
  return ( 
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900'
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      {/* Back Button */}
      <div className='pt-3 sm:pt-4 px-3 sm:px-6'>
        <Link to='/' className={`inline-block px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base ${
          isDark
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
            : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
        }`}>
          ← Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className='flex-1 flex items-center justify-center p-3 sm:p-6'>
        {loading && (
          <div className='flex flex-col items-center justify-center'>
            <div className='animate-spin text-5xl mb-4'>🌪️</div>
            <h1 className={`text-2xl sm:text-3xl font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Loading Weather...</h1>
          </div>
        )}
        
        {weatherData && !loading && (
          <div className='w-full max-w-2xl'>
            {/* Main Weather Card */}
            <div className={`transition-colors duration-300 rounded-3xl p-6 md:p-10 shadow-2xl mb-6 md:mb-8 text-center ${
              isDark
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                : 'bg-gradient-to-br from-blue-300 to-purple-500 text-white'
            }`}>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>{weatherData.location.name}</h2>
              <p className='text-sm md:text-lg mb-2'>{weatherData.location.region}, {weatherData.location.country}</p>
              <p className='text-xs md:text-sm mb-6 opacity-90'>{weatherData.location.localtime}</p>
              
              <div className='flex justify-center mb-6'>
                <img src={weatherData.current.condition.icon} alt='Weather Icon' className='w-24 md:w-32 h-24 md:h-32' />
              </div>
              
              <div className='flex justify-center items-baseline gap-3 md:gap-4 mb-4 flex-wrap'>
                <span className='text-5xl md:text-6xl font-bold'>{weatherData.current.temp_c}°</span>
                <span className='text-lg md:text-2xl'>C / {weatherData.current.temp_f}°F</span>
              </div>
              
              <h3 className='text-xl md:text-2xl font-semibold mb-4'>{weatherData.current.condition.text}</h3>
            </div>

            {/* Weather Details Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-8'>
              <div className={`transition-colors duration-300 rounded-xl p-3 md:p-4 text-center ${
                isDark
                  ? "bg-gray-800 bg-opacity-70 border border-purple-400 border-opacity-40"
                  : 'bg-white bg-opacity-40 backdrop-blur-md border border-blue-300'
              }`}>
                <p className={`text-xs md:text-sm font-semibold mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>💧 Humidity</p>
                <p className={`text-lg md:text-2xl font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{weatherData.current.humidity}%</p>
              </div>
              
              <div className={`transition-colors duration-300 rounded-xl p-3 md:p-4 text-center ${
                isDark
                  ? 'bg-white bg-opacity-10 backdrop-blur-md border border-purple-500 border-opacity-20'
                  : 'bg-white bg-opacity-40 backdrop-blur-md border border-blue-300'
              }`}>
                <p className={`text-xs md:text-sm font-semibold mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>💨 Wind Speed</p>
                <p className={`text-lg md:text-2xl font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{weatherData.current.wind_kph} km/h</p>
              </div>
              
              <div className={`transition-colors duration-300 rounded-xl p-3 md:p-4 text-center ${
                isDark
                  ? 'bg-white bg-opacity-10 backdrop-blur-md border border-purple-500 border-opacity-20'
                  : 'bg-white bg-opacity-40 backdrop-blur-md border border-blue-300'
              }`}>
                <p className={`text-xs md:text-sm font-semibold mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>🌡️ Feels Like</p>
                <p className={`text-lg md:text-2xl font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{weatherData.current.feelslike_c}°C</p>
              </div>
              
              <div className={`transition-colors duration-300 rounded-xl p-3 md:p-4 text-center ${
                isDark
                  ? 'bg-white bg-opacity-10 backdrop-blur-md border border-purple-500 border-opacity-20'
                  : 'bg-white bg-opacity-40 backdrop-blur-md border border-blue-300'
              }`}>
                <p className={`text-xs md:text-sm font-semibold mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>🌫️ Visibility</p>
                <p className={`text-lg md:text-2xl font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{weatherData.current.vis_km} km</p>
              </div>
            </div>

            {/* Location Details */}
            <div className={`transition-colors duration-300 rounded-xl p-4 md:p-6 ${
              isDark
                ? "bg-gray-800 bg-opacity-70 border border-purple-400 border-opacity-40 text-white"
                : 'bg-white bg-opacity-40 backdrop-blur-md border border-blue-300 text-gray-900'
            }`}>
              <h4 className='text-lg md:text-xl font-bold mb-4'>📍 Location Details</h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm'>
                <div><span className='font-semibold'>Latitude:</span> {weatherData.location.lat}°</div>
                <div><span className='font-semibold'>Longitude:</span> {weatherData.location.lon}°</div>
                <div><span className='font-semibold'>Timezone:</span> {weatherData.location.tz_id}</div>
                <div><span className='font-semibold'>Last Updated:</span> {weatherData.current.last_updated}</div>
              </div>
            </div>
          </div>
        )}

        {!loading && !weatherData && (
          <div className='text-center'>
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>❌ Unable to fetch weather data</h2>
            <p className={`text-base md:text-lg mb-6 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Please check the city name and try again</p>
            <Link to='/' className={`inline-block px-6 md:px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg ${
              isDark
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
            }`}>
              Go Home
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Weather