import { useState } from 'react'


import './App.css'

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import Register from './pages/Regoster/Register.jsx'


function App() {

  return (
  <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/register" element={<Register />} />
  </Routes>
  )
}

export default App
