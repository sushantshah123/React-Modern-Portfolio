import React from 'react'

const ResumeCard = ({title, subTitle, desc}) => {
  return (
    <>
        <div className='w-full h-1/3 group flex'>
        <div className='relative h-[4px] w-[20px] bg-white left-0 top-1/3'>
        <span className='circle-bg absolute flex items-center justify-center h-[18px] w-[18px] rounded-full -left-3 -top-2'>
            <span className='group-hover:bg-red-600 duration-300 absolute h-[10px] w-[10px] bg-gray-400 rounded-full'></span>
        </span>
        </div>
        <div className='card-bg w-full rounded-lg p-4 flex flex-col gap-3 justify-center items-start'>
           <h2 className='text-2xl'>{title}</h2>
           <h6 className='text-lg -mb-3'>{subTitle}</h6>
           <p className='text-xs font-light'>{desc}</p>
        </div>
        </div>
    </>
  )
}

export default ResumeCard