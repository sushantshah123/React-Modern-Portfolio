import React from 'react'
import { BiLocationPlus, BiLogoGmail, BiPhone } from 'react-icons/bi'
import { FcManager } from 'react-icons/fc'

const Contact = () => {
 
  return (
    <div className='h-auto px-8 py-16 w-full' id='contact'>
        <h1 className='text-red-600 text-4xl mb-4'>Get In Touch</h1>
        <div className='w-full md:w-2/3 h-auto mx-auto flex justify-center items-center gap-2 md:gap-0 flex-col md:flex-row'>
          {/* LEFT  */}
          <div className='md:w-1/2 h-auto md:h-[320px] p-4 bg-gray-800 flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-sans'>Let's get in touch.</h2>
            <h6 className='text-xs'>We are available 24/7 for any suggestion or conversation. Feel free to talk to us.</h6>
            </div>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex justify-start items-center text-md'><BiLocationPlus size={23} className='mr-2 text-blue-500'/>Address:<span className='text-sm ml-2 font-thin'>Baraha Nagarpalika-4 Sunsari,Nepal</span></div>
              <div className='flex justify-start items-center text-md'><BiPhone size={23} className='mr-2 text-green-500'/>Phone:<span className='text-sm ml-2 font-thin'>+977 9811019222</span></div>
              <div className='flex justify-start items-center text-md'><BiLogoGmail size={23} className='mr-2 text-red-500'/>Email:<span className='text-sm ml-2 font-thin'>kumarshahsushant@gmail.com</span></div>
              <div className='flex justify-start items-center text-md'><FcManager size={23} className='mr-2'/>Website:<span className='text-sm ml-2 font-thin'>sushantshah.vercel.app</span></div>
            </div>
          </div>

          {/* RIGHT  */}
          <div className='md:w-1/2 h-auto md:h-[320px] p-4 bg-gray-900 flex flex-col'>
            <form action="https://formspree.io/f/mdorgywg" method='post' className='flex flex-col gap-2'>
              <input type="text" name='user_name' placeholder='Name' required className='p-2 outline-0 bg-transparent border-b-2 border-slate-700'/>
              <input type="email" name='user_email' placeholder='Email' required className='p-2 outline-0 bg-transparent border-b-2 border-slate-700'/>
              <textarea name="user_message" placeholder='Message' className='p-2 outline-0 bg-transparent border-b-2 border-slate-700'/>
              <button type='submit' className='bg-green-600 py-2 mt-4'>SEND</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact