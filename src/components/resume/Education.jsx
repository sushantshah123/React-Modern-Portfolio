import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from "framer-motion"

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='w-full flex-col flex md:flex-row gap-20 my-6'>
    {/* {LEFT SIDE} */}
    <div  className='w-full md:w-1/2'>
    <div className='my-6 text-3xl'>
      <h2>Education Quality</h2>
    </div>
    <div className='h-screen flex flex-col gap-10 border-s-4'>
      <ResumeCard
        title="Bsc.CSIT from TU"
        subTitle="Sushma Godawari College(2016-2020)"
        desc="My bachelor life in college was really good."
      >
      </ResumeCard>

      <ResumeCard
        title="Isc from NEB"
        subTitle="Sushma Godawari College(2014-2016)"
        desc="My +2 life in college was really good."
      >
      </ResumeCard>

      <ResumeCard
        title="School from SMES"
        subTitle="Siddhartha Memorial English School(2001-2014)"
        desc="My school life in college was really good."
      >
      </ResumeCard>
    </div>
    </div>

    {/* {RIGHT SIDE} */}
    <div className='w-full md:w-1/2'>
    <div className='my-6 text-3xl'>
      <h2>Job Experience</h2>
    </div>
    <div className='h-screen flex flex-col gap-10 border-s-4'>
    <ResumeCard
        title="2023 Ongoing"
        subTitle="Huncha Digital Agency"
        desc="My bachelor life in college was really good."
      >
      </ResumeCard>

      <ResumeCard
        title="2022-2023"
        subTitle="Swoniga Technology"
        desc="My +2 life in college was really good."
      >
      </ResumeCard>

      <ResumeCard
        title="2021-2022"
        subTitle="Trainer/Teacher"
        desc="My school life in college was really good."
      >
      </ResumeCard>
    </div>
    </div>
    </motion.div>
  )
}

export default Education