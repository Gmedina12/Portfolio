import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useLocation} from 'react-router-dom'
import './App.css'
import { Routes, Route } from 'react-router'
import { Home } from './pages/Home/Home.jsx'
import {About} from './pages/About/About.jsx'
import {ContactPage} from './pages/ContactPage/ContactPage.jsx'
import {NavBar} from './components/NavBar/NavBar.jsx'


function App() {
  const [count, setCount] = useState(0)
  const location = useLocation().pathname
  return (
    <div>
      {(location !== '/')?<NavBar/>:''}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Aboutme' element={<About/>}/>
        <Route path='/Contactme' element={<ContactPage/>}/>      
        </Routes>
    </div>
  )
}

export default App
