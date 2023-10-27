'use client'

import Image from 'next/image';
import Navbar from './Navbar';

const Hero = () => {
    const divStyle = {
        backgroundImage: `url('../image/heroBack.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <div className='h-[100vh] pb-10 relative flex flex-col items-center justify-between px-5 ' style={divStyle}>
     <Navbar/>
      <div className='px-2 h-full mx-auto max-w-lg flex gap-[26px] mb-14'>
        <div className='flex flex-col items-center justify-center text-[20px] mt-6' >
           <h1 className='text-[40px] sm:text-[56px] font-bold text-[#F59620]  text-center font-outfit leading-none '>Unlock the Power <br /> of Technology"</h1>
            <p className='text-white mt-2  font-outfit'>Innovate  , Navigate,  Elevate</p>
            <div className=' flex  gap-4 mt-6'>
            <button 
            className=" px-6 py-2 border border-[#F59620] text-[#F59620]
             hover:text-white hover:bg-[#F59620]">
                Reach us
            </button>
            <button  
            className=" px-6 py-2 border border-[#F59620] text-white
            bg-[#F59620]">
                Our Work
            </button>
            </div>
        </div>
           
             </div>
            <div className='pt-[15vh]'>
            <a href="#service" className='text-center text-white'>Scroll down</a>
            </div>
     

    </div>
  )
}

export default Hero
