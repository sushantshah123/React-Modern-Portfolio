import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { data } from '../constants/Data'
import profile from "../assets/images/macho.png"
// import profile2 from "../assets/images/pp.webp"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
    return (
    <>
    <div className='flex justify-between items-center px-4 bg-black z-50 h-[70px] border-b-[1px] border-b-gray-800 sticky top-0'>
       <div className='group cursor-pointer border-[3px] h-[50px] w-[50px] border-gray-400 flex justify-center items-center rounded-full overflow-hidden'>
          <img src={profile} alt="" className=''/>
          <h1 className='hidden group-hover:block absolute top-[70px] left-8 bg-gray-600 text-gray-400 py-2 px-4'>Sushant Shah</h1>
       </div>
        <ul className='hidden md:flex'>
            
              {
                data.map((items)=>{
                  return(
            <li key={items.id} className='ml-6 text-gray-400 text-sm transition-all ease-in-out cursor-pointer hover:text-red-600 duration-500'>
            <Link 
            activeClass='active' to={items.link} spy={true} smooth={true} offset={-70} duration={500} >
            {items.title}
            </Link>
            </li>
                  )
                })
              }
        </ul>

        <div className='md:hidden'>
          {
          !toggle?
            <svg xmlns="http://www.w3.org/2000/svg"
            onClick={()=>setToggle(true)}
             fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg"
onClick={()=>setToggle(false)}
 fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

}
{
  toggle?
  <ul className='w-1/2 flex flex-col gap-4 justify-start items-center transition-all ease-in-out absolute top-[71px] bg-gray-800 p-4 right-[1px]'>
  {
                data.map((items)=>{
                  return(
            <li key={items.id} className='ml-4 text-gray-400 text-sm transition-all ease-in-out cursor-pointer hover:text-red-600 duration-500 '>
            <Link 
            activeClass='active' to={items.link} spy={true} smooth={true} offset={-70} duration={500} >
            {items.title}
            </Link>
            </li>
                  )
                  
                })
              }
        </ul>
        :null
}
        </div>
    </div>
    </>
  )
}

export default Navbar