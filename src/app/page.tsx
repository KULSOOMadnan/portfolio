
import React from 'react'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'

import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import Home from './components/Home'
import AboutSection from './components/AboutSection'
function Index () {
  return (
   
    
    <main className='flex min-h-screen flex-col  bg-[#ffffff]' >
      <NavBar/>
      <div className='container mt-24  mx-auto  px-12 py-4'>

      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <EmailSection/>
      <Footer/>
      </div>
    </main>

  
      
      
  )
}

export default Index 