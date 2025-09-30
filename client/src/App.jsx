import { useState } from 'react'


import './App.css'
import Register from './pages/Regoster/Register.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Register />
    </>
  )
}

export default App
