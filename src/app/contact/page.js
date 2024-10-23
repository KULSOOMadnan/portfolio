import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import EmailSection from '../components/EmailSection'

function page() {
  return (
    <div>
        <NavBar/>
        <containe className='container mt-24  mx-auto  px-12 py-4 flex min-h-screen flex-col  bg-[#ffffff]'>
          <EmailSection/>
        </containe>
        <Footer/>
    </div>
  )
}

export default page