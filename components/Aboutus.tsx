import Image from 'next/image'
import React from 'react'

const Aboutus = () => {
  return (
    <div className='relative  w-full pt-10 flex flex-col'>
        <div className='relative flex w-full max-h-[100vh]  bg-[#56697A] overflow-hidden'>
            <div className='flex items-center justify-center lg:items-start flex-col lg:flex-row z-20  px-[10vh]  py-[6vh] lg:py-[6vh] w-full gap-40'>
                <div className=' flex flex-col  max-w-[400px] lg:w-1/3 items-center lg:items-start gap-4'>
                    <span className='text-[24px] md:text-[32px] font-bold text-[#F59620] font-outfit text-center md:text-start lg:items-start' style={{lineHeight:1}}>We assist businesses in telling successful tales.</span>
                    <span className='text-white text-[16px] font-outfit text-center md:text-start lg:items-start'>Providing exceptional bespoke software solutions to 
                        startups, small companies, medium enterprises, and major
                         corporations across all industries.
                    </span>
                </div>
                <div className='flex flex-col  items-center'>
                    <div className='flex'>
                        <div className='flex flex-col w-[140px] md:w-[200px] lg:min-w-[300px]  items-start px-6 justify-center h-[100px] bg-[#5F7487]'>
                            <span className='text-white w-20 font-outfit'>Successful Clients</span>
                            <span className='text-white font-bold text-[24px] font-outfit'>25</span>
                        </div>
                        <div className='flex flex-col w-[140px] md:w-[200px] lg:min-w-[300px]  max-w-[290px] items-start px-6 justify-center h-[100px] bg-[#56697A]'>
                            <span className='text-white w-20 font-outfit'>Customer Reach</span>
                            <span className='text-white font-bold text-[24px] font-outift'>42</span>
                        </div>
                        
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col w-[140px] md:w-[200px]  lg:min-w-[300px]  max-w-[290px] items-start px-6 justify-center h-[100px] '>
                            <span className='text-white w-40 font-outfit'>Projects <br /> Worked So far</span>
                            <span className='text-white font-bold text-[24px] font-outfit'>25</span>
                        </div>
                        <div className='flex flex-col w-[140px] md:w-[200px] lg:min-w-[300px]  max-w-[290px] items-start px-6 justify-center gap-2 h-[100px] bg-[#5F7487]'>
                            <span className='text-white w-20 font-outfit'>Companies</span>
                            <span className='text-white font-bold font-outfit text-[24px]'>42</span>
                        </div>
                        
                    </div>
                    
                    

                </div>

            </div>
            <img
                src="/image/aboutus.svg"
                  alt="Your Image"
                   style={{ position:'absolute',maxWidth: "15%",  bottom:0,right:0 }}
                     />

        </div>
        {/* WHAT THEY SAY ABOUT US */}
        

      
     
        </div>
      
  )
}

export default Aboutus
