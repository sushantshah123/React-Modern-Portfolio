import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 px-4 bg-black z-50 h-auto border-t-[1px] border-t-gray-800'>
      <h1 className='text-xl md:text-3xl text-red-500 font-bold'>Sushant Shah</h1>
      <div className='flex gap-2'>
        <BsGithub size={20} className='hover:text-red-400 duration-300 cursor-pointer'/>
        <BsLinkedin size={20} className='hover:text-red-400 duration-300 cursor-pointer'/>
        </div>
      <h6 className='text-xs md:text-sm'>Copyright © 2023 Sushant Shah, All rights reserved.</h6>
    </div>
  )
}

export default Footer