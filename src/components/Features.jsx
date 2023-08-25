import React from 'react'
import { features } from '../constants/Data'

const Features = () => {
  return (
    <div className='px-8 py-16 w-full h-auto' id='features'>
    <h1 className='text-red-600 text-4xl mb-4'>What I Do?</h1>
    <div className='flex flex-col gap-2  md:flex-row flex-wrap justify-around md:gap-4'>
      {
        features.map((feature)=>{
          return(
            <div key={feature.id} className='group h-1/4 bg-black flex flex-col gap-3 p-6 border-[1px] border-neutral-800 hover:bg-gray-600 duration-500 md:h-1/2 w-full md:w-[30vw]'>
              <h1 className='text-lg md:text-4xl'>{feature.icon}</h1>
              <h1 className='text-lg group-hover:text-gray-100 md:text-3xl'>{feature.title}</h1>
              <p className='text-xs md:text-sm text-gray-400'>{feature.description}</p>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Features