import Image from 'next/image'
import React from 'react'

const WebMobile = () => {
  const divStyle = {
    backgroundImage: `url('../image/webapp2.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className='flex w-full items-center px-20 min-h-[100vh]'>
       <div className='flex flex-col mdl:flex-row items-center  max-w-5xl  gap-10 p-4 min-h-[70vh] bg-[#848484]/10 rounded-md '>
          <div className='flex flex-col gap-2 mdl:w-[500px] '>
            <span className='text-[36px] text-[#F59620] font-bold font-outfit' style={{lineHeight:1}}>Web & mobile app development</span>
            <span className='text-[16] text-black font-bold font-outfit'>Someone is aware of our business.</span>

            <span className='text-[16px] overflow-hidden text-[#56697A] font-outfit'> 
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
          <div className='flex  h-full w-[60%]  mt-10'>
            <div className='h-[380px] w-[380px]  rounded' style={divStyle}>
            <div className='flex relative w-[240px]   mt-[46%] ml-60 border-[10px] border-white ' >
            <Image src={`/image/webapp1.png`} alt='' width={400} height={200} />
            </div>
            </div>
          
            

          </div>
        

       </div>
    </div>
  )
}

export default WebMobile

