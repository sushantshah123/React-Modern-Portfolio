import React from 'react'

const Resume = () => {
  return (
    <div className='px-8 py-20 w-full h-auto' id='resume'>
     <h1 className='text-red-600 text-4xl mb-4'>My Resume.</h1>
     <ul className='flex justify-between items-center border-[1px] border-gray-700'>
      <li className='border-[1px] border-gray-700 p-2 cursor-pointer'>Education</li>
      <li className='border-[1px] border-gray-700 p-2 cursor-pointer'>Professional Skills</li>
      <li className='border-[1px] border-gray-700 p-2 cursor-pointer'>Experience</li>
      <li className='border-[1px] border-gray-700 p-2 cursor-pointer'>Achievements</li>
     </ul>
    </div>
  )
}

export default Resume