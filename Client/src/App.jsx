import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import { Home } from './pages/Home/Home.jsx'
import {About} from './pages/About/About.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About/>}/>      
        </Routes>
    </div>
  )
}

export default App
