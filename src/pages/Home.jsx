import React, { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import Footer from "../components/Footer"
import { useTheme } from "../context/ThemeContext"

function Home() {
    const [location, setLocation] = useState("")
    const navigate = useNavigate()
    const { isDark } = useTheme()

    function handleChange(event) {
        setLocation(event.target.value)
    }

    function handleSubmit() {
        if(location.trim() === "") {
            toast.error("Please enter a location")
            return
        }
        navigate(`/weather/${location}`)
    }

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDark 
        ? "bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" 
        : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    }`}>
      <div className="flex-1 flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 py-10 md:py-20">
        <div className="text-center max-w-4xl w-full">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg transition-colors ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            🌍 Welcome to WeatherForcast
          </h1>
          <p className={`text-base sm:text-lg md:text-xl mb-8 md:mb-12 leading-relaxed transition-colors ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}>
            Your real-time weather companion delivering accurate forecasts, interactive maps, and instant updates whenever you need them.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className={`transition-all duration-300 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl ${
              isDark
                ? "bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                : "bg-gradient-to-br from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500"
            }`}>
              <div className="text-2xl md:text-3xl mb-2 md:mb-3">🌡️</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Current Weather</h3>
              <p className="text-sm md:text-base text-gray-100">Temperature, humidity, wind speed, and air quality in real-time</p>
            </div>
            <div className={`transition-all duration-300 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl ${
              isDark
                ? "bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                : "bg-gradient-to-br from-purple-300 to-purple-400 hover:from-purple-400 hover:to-purple-500"
            }`}>
              <div className="text-2xl md:text-3xl mb-2 md:mb-3">📅</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Hourly & Weekly Forecasts</h3>
              <p className="text-sm md:text-base text-gray-100">Plan your day and week with confidence and accuracy</p>
            </div>
            <div className={`transition-all duration-300 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl ${
              isDark
                ? "bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700"
                : "bg-gradient-to-br from-pink-300 to-pink-400 hover:from-pink-400 hover:to-pink-500"
            }`}>
              <div className="text-2xl md:text-3xl mb-2 md:mb-3">📍</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Location-Based Updates</h3>
              <p className="text-sm md:text-base text-gray-100">Get personalized weather insights for your exact location</p>
            </div>
            <div className={`transition-all duration-300 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl ${
              isDark
                ? "bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                : "bg-gradient-to-br from-green-300 to-green-400 hover:from-green-400 hover:to-green-500"
            }`}>
              <div className="text-2xl md:text-3xl mb-2 md:mb-3">⚡</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Lightning Fast UI</h3>
              <p className="text-sm md:text-base text-gray-100">Clean, responsive design for seamless experience</p>
            </div>
          </div>
        </div>

        <div className={`transition-colors duration-300 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl w-full max-w-md md:max-w-2xl lg:max-w-md ${
          isDark
            ? "bg-gray-800 bg-opacity-80 border border-purple-400 border-opacity-50"
            : "bg-white bg-opacity-30 border border-blue-300"
        }`}>
          <label htmlFor="location" className={`block text-xl md:text-2xl font-bold mb-4 text-center transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}>
            🔍 Find Your Weather
          </label>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <input
              id="location"
              onChange={handleChange}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              type="text"
              className={`flex-1 px-4 md:px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 transition-colors text-sm md:text-base ${
                isDark
                  ? "bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-400"
                  : "bg-gray-50 text-gray-900 placeholder-gray-600 focus:ring-purple-500 border-2 border-gray-300"
              }`}
              placeholder="Enter city name (e.g., New York)"
              value={location}
            />
            <button
              onClick={handleSubmit}
              className={`px-6 md:px-8 py-3 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base whitespace-nowrap ${
                isDark
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              }`}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
