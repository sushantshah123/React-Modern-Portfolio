import React from 'react'
import { projects } from '../constants/Data'
import { BsGithub } from 'react-icons/bs'
// import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='px-8 py-20 w-full h-auto' id='projects'>
    <h1 className='text-red-600 text-4xl mb-4'>My Collections.</h1>
    <div className='w-full flex flex-col gap-2 md:flex-row md:flex-wrap justify-around md:gap-4'>
      {
        projects.map((project)=>{
          return(
            <div key={project.id} className='h-2/5 w-full md:w-[30vw] bg-black flex flex-col gap-2 md:gap-3 p-6 border-2'>
             <div className='h-1/2 w-full overflow-hidden'>
              <img src={project.image} alt="" className='h-full w-full'/>
             </div>
             {/* <Link to={project.link}> */}
              <h2><BsGithub size={20} className='hover:text-red-400 duration-300 cursor-pointer'/></h2>
             {/* </Link> */}
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