import React from 'react'
import AutoType from './AutoType'
import {BiLogoFacebook,BiLogoInstagram,BiLogoTiktok,BiLogoLinkedin} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"
import bannerImg from "../assets/images/pp2.png"
import bannerImg2 from "../assets/images/macho.png"

const Banner = () => {
  return (
    <div className='h-auto px-8 py-20 w-full flex flex-col gap-4 md:flex-row' id='home'>
    {/* LEFT PART  */}
    <div className='w-full md:w-1/2'>
    {/* TOP  */}
    <div className='gap-2 flex flex-col md:gap-4'>
        <h5 className='text-gray-400 text-sm md:text-lg font-bold tracking-wider'>WELCOME TO MY WORLD</h5>
        <h1 className='text-xl md:text-5xl font-semi-bold'>Hi, I'm <span className='text-red-600 font-semibold'>Sushant Shah</span></h1>
        <h2 className='text-lg md:text-3xl flex gap-2'>a<span className='flex text-red-600'><AutoType/></span></h2>
        <p className='text-gray-400 text-xs md:text-sm'>“Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.”</p>
    </div>
    {/* BOTTOM  */}
    <div>
    <div className='h-10 w-1/2 bg-white bg-opacity-20 shadow-lg backdrop-blur-lg backdrop-filter bg-blur rounded-full flex justify-around items-center mt-10'>
    <BiLogoFacebook className='hover:text-red-400 duration-300 cursor-pointer'/>
    <BiLogoInstagram className='hover:text-red-400 duration-300 cursor-pointer'/>
    <BiLogoTiktok className='hover:text-red-400 duration-300 cursor-pointer'/>
    <BiLogoLinkedin className='hover:text-red-400 duration-300 cursor-pointer'/>
    <BsGithub className='hover:text-red-400 duration-300 cursor-pointer'/>
    </div>
    <div>
    {/* <a href="" download="Sushant-Shah-cv (2).pdf"><button>Download Resume</button></a> */}
    </div>
    </div>
    </div>
    {/* ----------**************----------- */}
    {/* RIGHT PART  */}
    {/* <div className='w-2/3 h-2/3 flex justify-center items-center md:w-1/2 flex-col'> */}
    <div className='mx-auto cursor-pointer border-[3px] h-2/6 w-2/6 border-gray-400 flex justify-center items-center rounded-lg overflow-hidden'>
        <img src={bannerImg2} alt="" className='w-2/3 h-full object-contain'/>
    </div>
    
    </div>
  )
}

export default Banner