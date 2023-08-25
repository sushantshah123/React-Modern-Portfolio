import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from "framer-motion"

const Achievements = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='w-full flex-col flex md:flex-row gap-20 my-6'>
    {/* {LEFT SIDE} */}
    <div className='w-full md:w-1/2'>
    <div className='my-6 text-3xl'>
      <h2>Company Achievements</h2>
    </div>
    <div className='h-screen flex flex-col gap-10 border-s-4'>
    <ResumeCard
      title="achivements"
      subTitle="my achievements"
      desc="i am fine thankyou."
      >
      </ResumeCard>

      <ResumeCard
      title="title"
      subTitle="hello! how are you?"
      desc="i am fine thankyou."
      >
      </ResumeCard>

      <ResumeCard
      title="title"
      subTitle="hello! how are you?"
      desc="i am fine thankyou."
      >
      </ResumeCard>
    </div>
    </div>

    {/* {RIGHT SIDE} */}
    <div className='w-full md:w-1/2'>
    <div className='my-6 text-3xl'>
      <h2>Job Achievements</h2>
    </div>
    <div className='h-screen flex flex-col gap-10 border-s-4'>
    <ResumeCard
      title="title"
      subTitle="hello! how are you?"
      desc="i am fine thankyou."
      >
      </ResumeCard>

      <ResumeCard
      title="title"
      subTitle="hello! how are you?"
      desc="i am fine thankyou."
      >
      </ResumeCard>

      <ResumeCard
      title="title"
      subTitle="hello! how are you?"
      desc="i am fine thankyou."
      >
      </ResumeCard>
    </div>
    </div>
    </motion.div>
  )
}

export default Achievements