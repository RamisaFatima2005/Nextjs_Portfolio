import React from 'react'
import Home from './home/page'
import About from './about/page'
import ProjectsMainPage from './project/page'
import ContactMe from './contact/page'

function page() {
  return (
    <>
    <div className='bg-black'>
    <Home/>
    <hr className="border-gray-400 my-4" />
    <About/>
    <hr className="border-gray-400 my-4" />
    <ProjectsMainPage/>
    <hr className="border-gray-400 my-4" />
    <ContactMe/>
    </div>
    </>
  )
}

export default page
