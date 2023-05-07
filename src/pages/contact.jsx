import ContactDetail from '@/components/Organisms/ContactDetail'
import { Footer } from '@/components/Organisms/Footer'
import { Navbar } from '@/components/Organisms/Navbar'
import Sidebar from '@/components/Organisms/Sidebar'
import React from 'react'

const contact = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <ContactDetail/>
      <Footer/>
    </div>
  )
}

export default contact
