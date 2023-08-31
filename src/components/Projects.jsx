import React from 'react'
import { projects } from '../constants/Data'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='px-8 py-16 w-full h-auto' id='projects'>
    <h1 className='text-red-600 text-4xl mb-4'>My Collections.</h1>
    <div className='w-full flex flex-col justify-center items-center gap-2 md:flex-row md:flex-wrap md:justify-around md:gap-4'>
      {
        projects.map((project)=>{
          return(
            <div key={project.id} className='h-2/5 w-full md:w-[30vw] bg-black flex flex-col gap-2 md:gap-3 p-6 border-2 border-gray-900'>
             <div className='h-[150px] md:h-[200px] w-full overflow-hidden'>
              <img src={project.image} alt="" className='h-full w-full'/>
             </div>
              <a href={project.links}>
              <h2><BsGithub size={20} className='hover:text-red-400 duration-300 cursor-pointer'/></h2>
              </a>
              <h1 className='text-xl'>{project.title}</h1>
              <p className='text-sm text-gray-400'>{project.description}</p>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Projects