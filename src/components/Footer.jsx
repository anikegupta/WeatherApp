import React from 'react'
import { useTheme } from '../context/ThemeContext'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { isDark } = useTheme()

  return (
    <footer className={`transition-colors duration-300 ${
      isDark
        ? 'bg-gray-900 bg-opacity-95 border-t border-purple-600'
        : 'bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 border-t border-purple-400'
    } mt-12 md:mt-16`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12'>
          {/* About Section */}
          <div className='text-center md:text-left'>
            <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
              🌞 WeatherForcast
            </h3>
            <p className={`text-xs md:text-sm transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Your real-time weather companion built with React and modern web technologies. Stay informed, stay prepared.
            </p>
          </div>

          {/* Quick Links */}
          <div className='text-center'>
            <h4 className={`text-base md:text-lg font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <a href='/' className={`text-xs md:text-sm transition-colors ${
                  isDark 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}>
                  🏠 Home
                </a>
              </li>
              <li>
                <a href='#about' className={`text-xs md:text-sm transition-colors ${
                  isDark 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}>
                  ℹ️ About
                </a>
              </li>
              <li>
                <a href='#features' className={`text-xs md:text-sm transition-colors ${
                  isDark 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}>
                  ⚡ Features
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Info */}
          <div className='text-center md:text-right'>
            <h4 className={`text-base md:text-lg font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Developer</h4>
            <p className={`font-semibold text-base md:text-lg mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Aniket Gupta</p>
            <p className={`text-xs md:text-sm mb-4 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Full Stack Developer | React Enthusiast</p>
          </div>
        </div>

        {/* Social Links */}
        <div className={`flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-8 mb-6 md:mb-8 py-4 md:py-6 border-t border-b transition-colors ${
          isDark ? 'border-gray-700' : 'border-purple-300'
        }`}>
          <a
            href='https://linkedin.com/in/aniket-gupta'
            target='_blank'
            rel='noopener noreferrer'
            className={`flex items-center gap-2 px-4 md:px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base shadow-lg hover:shadow-xl ${
              isDark
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
            }`}
          >
            <span className='text-lg'>🔗</span>
            <span>LinkedIn</span>
          </a>
          
          <a
            href='mailto:aniket.gupta@example.com'
            className={`flex items-center gap-2 px-4 md:px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base shadow-lg hover:shadow-xl ${
              isDark
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
                : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
            }`}
          >
            <span className='text-lg'>✉️</span>
            <span>Email</span>
          </a>

          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className={`flex items-center gap-2 px-4 md:px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base shadow-lg hover:shadow-xl ${
              isDark
                ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-gray-900'
                : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800'
            }`}
          >
            <span className='text-lg'>💻</span>
            <span>GitHub</span>
          </a>
        </div>

        {/* Copyright */}
        <div className='text-center'>
          <p className={`text-xs md:text-sm mb-2 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} WeatherForcast. All rights reserved.
          </p>
          <p className={`text-xs transition-colors ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            Designed & Developed with ❤️ by Aniket Gupta
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer