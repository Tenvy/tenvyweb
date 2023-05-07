import { Navbar } from '@/components/Organisms/Navbar'
import React from 'react'
import { AboutDetail } from '@/components/Organisms/AboutDetail'
import { Footer } from '@/components/Organisms/Footer'
import Sidebar from '@/components/Organisms/Sidebar'

const about = () => {
  return (
    <div className=''>
        <Navbar/>
        <Sidebar/>
        <AboutDetail/>
        <Footer/>
    </div>
  )
}

export default about
