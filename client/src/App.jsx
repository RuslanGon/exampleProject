import { useState } from 'react'


import './App.css'
import Register from './pages/Regoster/Register.jsx'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/register" element={<Register />} />

  </Routes>
  )
}

export default App
