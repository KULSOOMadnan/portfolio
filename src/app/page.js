
import React from 'react'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import Home from './components/Home'
function Index () {
  return (
   
    
    <main className='flex min-h-screen flex-col  bg-[#ffffff]' >
      <NavBar/>
      <containe className='container mt-24  mx-auto  px-12 py-4'>

      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <EmailSection/>
      <Footer/>
      </containe>
    </main>

  
      
      
  )
}

export default Index 