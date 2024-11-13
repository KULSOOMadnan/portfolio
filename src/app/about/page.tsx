import React from 'react'
import AboutSection from '../components/AboutSection'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Container } from 'postcss'

function about() {
  return (
    <div>
      <NavBar/>
      <div  className='container mt-24  mx-auto  px-12 py-4'>
      <AboutSection/>
      </div>        
      <Footer/>  
    </div>
  )
}

export default about