import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import Weather from './pages/Weather'
function App() {
  

  return (
  <BrowserRouter>
  <ToastContainer />
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/weather/:selectedCity' element={<Weather/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
