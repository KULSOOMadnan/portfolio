import React from 'react'
import AboutSection from '../components/AboutSection'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function about() {
  return (
    <div>
      <NavBar/>
        <AboutSection/>
      <Footer/>  
    </div>
  )
}

export default about