import React from 'react'
import { skills } from '../../constants/Data'
import {motion} from "framer-motion"

const Skills = () => {
  return (
    <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5}} className='h-screen w-full md:w-2/3 mx-auto my-8 py-2'>
      <div className='text-2xl md:text-3xl mb-4'>Skills</div>
      {
        skills.map((data)=>(
      <div className='mb-4 md:mb-6' key={data.id}>
        <div className='flex justify-between text-[10px] md:text-xs mb-1'>
          <h6>{data.title}</h6>
          <h6>{data.percentage}</h6>
        </div>
        <div className='h-[8px] w-full rounded-full bg-gray-900 overflow-hidden'>
          <motion.div initial={{x:-100}} animate={{x:0}} transition={{duration:1}} className={`h-full ${data.bar} rounded-full bg-red-600`}></motion.div>
        </div>
      </div>
      ))}
      </motion.div>
    </>
  )
}

export default Skills