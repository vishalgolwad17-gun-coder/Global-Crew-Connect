import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Jobs from './components/Jobs'
import Countries from './components/Countries'
import Whychooseus from './components/Whychooseus'
import Contactus from './components/Countactus'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Aboutus from './pages/Aboutus.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/whychooseus" element={<Whychooseus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  )
}

export default App