'use client'

import Navbar from './Navbar';

const Hero = () => {
    const divStyle = {
        backgroundImage: `url('../image/heroBack.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <div className='h-[100vh] w-full flex flex-col gap-10' style={divStyle}>
      <Navbar/>
      <div className='flex flex-col items-center py-20'>
            <h1 className='text-5xl font-bold text-[#F59620]  text-center w-[400px] font-outfit'>Unlock the Power of Technology"</h1>
            <span className='text-white text-sm font-extralight text-center font-outfit'>Innovate  , Navigate,  Elevate</span>
            <div className=' flex py-10 gap-4'>
            <a href="#" 
            className=" px-6 py-2 border border-[#F59620] text-[#F59620]
             hover:text-white hover:bg-[#F59620]">
                Reach us
            </a>
            <a href="#" 
            className=" px-6 py-2 border border-[#F59620] text-white
            bg-[#F59620] hover:bg-transparent hover:text-[#F59620]">
                Our Work
            </a>
            </div>
            <div className='pt-20'>
            <a href="#service" className='text-center text-white'>Scroll down</a>
            </div>
      </div>

    </div>
  )
}

export default Hero
