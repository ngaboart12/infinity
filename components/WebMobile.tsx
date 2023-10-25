import Image from 'next/image'
import React from 'react'

const WebMobile = () => {
  const divStyle = {
    backgroundImage: `url('../image/webapp2.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className='px-4  realtive w-full sm:px-10 md:px-20 py-20'>
     

       <div className='relative flex w-full flex-col mdl:flex-row items-center justify-center   gap-10 p-4 max-h-[150vh] bg-[#848484]/10 rounded-md '>
          <div className='flex flex-col gap-2 mdl:w-[500px] items-center mdl:items-start'>
            <span className='text-[36px]  text-[#F59620]  font-bold font-outfit text-center mdl:text-start' style={{lineHeight:1}}>Web & mobile app development</span>
            <span className='text-[16] text-black font-bold font-outfit'>Someone is aware of our business.</span>

            <span className='text-[16px] w-[280px] sm:w-[380px] text-center md:text-start overflow-hidden text-[#56697A] font-outfit'> 
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
          <div className='flex  h-full max-w-[400px] items-center justify-center  mt-10'>
            <div className='relative h-[300px] w-[300px] mdl:h-[380px] mdl:w-[480px]  rounded' style={divStyle}>
            <img
                src="/image/webapp1.png"
                  alt="Your Image"
                   style={{ position:'absolute',maxWidth: "60%",  bottom:0,right:-40,borderWidth:10,borderColor:'white' }}
                     />
            
            </div>

            

          </div>
        

       </div>
     
    </div>
  )
}

export default WebMobile

