import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import Weather from './pages/Weather'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import 'react-toastify/dist/ReactToastify.css'

function AppContent() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <BrowserRouter>
      <div className={isDark ? 'dark' : ''}>
        <div className={`min-h-screen transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
            : 'bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100'
        }`}>
          <header className={`transition-colors duration-300 ${
            isDark
              ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
              : 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'
          } shadow-lg sticky top-0 z-50`}>
            <nav className='max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center'>
              <Link to='/' className={`text-lg sm:text-2xl font-bold transition-colors ${
                isDark ? 'text-white hover:text-gray-100' : 'text-white hover:text-gray-200'
              }`}>
                🌞 WeatherX
              </Link>
              <ul className='flex gap-4 sm:gap-8 items-center'>
                <li>
                  <Link to='/' className={`font-semibold transition-colors text-sm sm:text-lg ${
                    isDark ? 'text-white hover:text-gray-200' : 'text-white hover:text-gray-300'
                  }`}>
                    Home
                  </Link>
                </li>
                <li>
                  <a href='#about' className={`font-semibold transition-colors text-sm sm:text-lg ${
                    isDark ? 'text-white hover:text-gray-200' : 'text-white hover:text-gray-300'
                  }`}>
                    About
                  </a>
                </li>
                <li>
                  <button
                    onClick={toggleTheme}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 text-sm sm:text-base ${
                      isDark
                        ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                        : 'bg-slate-800 text-white hover:bg-slate-700'
                    }`}
                    title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  >
                    {isDark ? '☀️ Light' : '🌙 Dark'}
                  </button>
                </li>
              </ul>
            </nav>
          </header>
          <ToastContainer position='top-right' autoClose={3000} />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/weather/:selectedCity' element={<Weather/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
