import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import EmailSection from '../components/EmailSection'

function page() {
  return (
    <div>
        <NavBar/>
        <EmailSection/>
        <Footer/>
    </div>
  )
}

export default page