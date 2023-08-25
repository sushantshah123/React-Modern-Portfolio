import React, { useState } from 'react'
import Education from './Education'
import Experience from './Experience'
import Achievements from './Achievements'
import Skills from './Skills'
import {motion} from "framer-motion"

const Resume = () => {
  const [education, setEducation] = useState(true)
  const [skills, setSkills] = useState(false)
  const [experience, setExperience] = useState(false)
  const [achievements, setAchievements] = useState(false)
  return (
    <>
    <div className='px-8 py-16'>
    <div className='w-full h-auto' id='resume'>
     <h1 className='text-red-600 text-4xl mb-4'>My Resume.</h1>
     <ul className='flex justify-between items-center border-[1px] border-gray-800 text-sm md:text-xl'>
      <li  className={`${education?"p-2 bg-red-600":"p-2 bg-transparent"} cursor-pointer`} onClick={()=>setEducation(true) & setSkills(false) & setAchievements(false) & setExperience(false)}>Education</li>
      <li className={`${skills?"p-2 bg-red-600":"p-2 bg-transparent"} cursor-pointer`} onClick={()=>setSkills(true) & setEducation(false) & setAchievements(false) & setExperience(false)}>Professional Skills</li>
      <li className={`${experience?"p-2 bg-red-600":"p-2 bg-transparent"} cursor-pointer`} onClick={()=>setExperience(true) & setSkills(false) & setEducation(false) & setAchievements(false)}>Experience</li>
      <li className={`${achievements?"p-2 bg-red-600":"p-2 bg-transparent"} cursor-pointer`} onClick={()=>setAchievements(true) & setSkills(false) & setEducation(false) & setExperience(false)}>Achievements</li>
     </ul>
    </div>

   {/* CARDS */}
   <div>
   {
    education && <Education/>
   }
   {
    skills && <Skills/>
   }
   {
    experience &&  <Experience/>
   }
   {
    achievements && <Achievements/>
   }
   </div>

    </div>
    </>
  )
}

export default Resume