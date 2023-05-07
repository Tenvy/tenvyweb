import Modal from '@/components/Molecules/Modal'
import { Footer } from '@/components/Organisms/Footer'
import { Navbar } from '@/components/Organisms/Navbar'
import ProjectDetail from '@/components/Organisms/ProjectDetail'
import Sidebar from '@/components/Organisms/Sidebar'
import { useState } from 'react'

const project = () => {
  let [projectData,setProjectData] = useState(null)
  
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Modal projectData={projectData} setProjectData={setProjectData}/>
        <div className='container mx-auto'>
          <ProjectDetail projectData={projectData} setProjectData={setProjectData}/>
        </div>
        <Footer/>
    </div>
  )
}

export default project
