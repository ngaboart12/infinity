import Image from 'next/image'
import React from 'react'

const WebMobile = () => {
  return (
    <div className='flex items-center px-40 h-[100vh]'>
       <div className='flex w-full gap-20 p-4 h-[70vh] bg-[#848484]/10 rounded-md overflow-hidden'>
          <div className='flex flex-col gap-2 w-[450px]'>
            <span className='text-[36px] text-[#F59620] font-bold' style={{lineHeight:1}}>Web & mobile app development</span>
            <span className='text-[16] text-black'>Someone is aware of our business.</span>

            <span className='text-[16px] text-[#56697A]'> 
              Our mobile application development services provide the proper 
              solutions and resources to assist organizations in creating high-quality,
               user-friendly, and engaging mobile apps. Our skilled app developers 
               and UI/UX designers can assist your company in preparing for the digital
                needs of the tech-savvy world. We will collaborate to create
               great apps that will help you expand your business, fuelled by your ideas 
               and our experience.
            </span>

            <a href="#" className='flex py-4 items-center justify-center text-white rou bg-[#F59620] w-[200px]'> Learn More {`->`}</a>

          </div>
          <div className='flex  h-full w-1/2 '>
            <div className='h-[100%] w-[100%]'>
              <Image src={`/image/webapp2.png`} alt='iii' width={405} height={400} />
            </div>
            <div className='flex absolute h-[40vh] mt-40 ml-40 border-[10px] border-white ' >
            <Image src={`/image/webapp1.png`} alt='' width={300} height={100} />
            </div>
            {/* button top */}
            <a href="#" className='flex absolute justify-center 
            bg-[#FFECD5] text-[#F59620] 
            py-6 px-10 ml-[44vh] mt-[-4vh]'>
              UI &UX Design
            </a>
             {/* button down */}
            <a href="#" className='flex absolute justify-center
             bg-[#FFECD5] text-[#F59620] py-6 px-10 
             mt-[52vh] ml-[-10vh] rounded-l-lg'>
              UI &UX Design
            </a>

          </div>
        

       </div>
    </div>
  )
}

export default WebMobile

