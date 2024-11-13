import React from 'react'
import NavBar from '../components/NavBar'

import Footer from '../components/Footer'
import ProjectsSection2 from '../components/ProjectSection2'

function page() {
  return (
    <div>
        <NavBar/>
        <div className='container mt-24  mx-auto  px-12 py-4 flex min-h-screen flex-col  bg-[#ffffff]'>
        <ProjectsSection2/>
        </div>
        
        <Footer/>

    </div>
  )
}

export default page