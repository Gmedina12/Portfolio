import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useLocation } from 'react-router-dom'
import './App.css'
import { Routes, Route } from 'react-router'
import { Home } from './pages/Home/Home.jsx'
import { About } from './pages/About/About.jsx'
import { ContactPage } from './pages/ContactPage/ContactPage.jsx'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Experience } from './pages/Development/DevExperience.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { ThemeButton } from './components/ThemeButton/ThemeButton.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0)
  const location = useLocation().pathname

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.className = 'dark';
    } else {
      setTheme('light');
      document.body.className = 'light';
    }
  };

  useEffect(() => {
    document.body.className = theme
  }, [])
  return (
    <div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <NavBar />
      <ThemeButton onClick={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Aboutme' element={<About />} />
        <Route path='/Contactme' element={<ContactPage />} />
        <Route path='/Experience' element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
