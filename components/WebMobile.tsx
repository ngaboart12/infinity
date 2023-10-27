import Image from 'next/image'
import React from 'react'

const WebMobile = () => {
  const divStyle = {
    backgroundImage: `url('../image/webapp2.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className='  realtive max-w-[100%] px-20   py-20'>
     

       <div className='relative flex w-full flex-col mdl:flex-row items-center justify-between    gap-10  max-h-[150vh]  rounded-md '>
          <div className='flex flex-col gap-2 mdl:w-[500px] items-center mdl:items-start'>
            <span className='text-[36px]  text-[#F59620]  font-bold font-outfit text-center mdl:text-start' style={{lineHeight:1}}>Web & mobile app development</span>
            <span className='text-[16] text-black font-bold font-outfit'>Someone is aware of our business.</span>

            <span className='text-[16px] w-[280px] sm:w-[480px] text-center md:text-start overflow-hidden text-[#56697A] font-outfit'> 
              Our mobile application development services provide the proper 
              solutions and resources to assist organizations in creating high-quality,
               user-friendly, and engaging mobile apps. Our skilled app developers 
               and UI/UX designers can assist 
            </span>

            <a href="#" className='flex py-4 items-center justify-center text-white rou bg-[#F59620] w-[200px]'> Learn More {`->`}</a>

          </div>
          <div className='flex  h-full max-w-[400px] items-center justify-center  mt-10'>
            <div className='relative h-[300px] w-[300px] mdl:h-[380px] mdl:w-[480px]  rounded' style={divStyle}>
              <a href="#" className=' absolute right-[-30px] top-[-30px] flex gap-4 py-[26px] px-[27px] bg-[#FFECD5] text-[#F59620]'>
                <Image src={`/image/Path.svg`} alt='path' width={18} height={30} />
                UI & UX Desin
                </a>
              <a href="#" className=' absolute left-[-60px] bottom-0 flex gap-4 py-[26px] px-[27px] bg-[#FFECD5] text-[#F59620]'>
                <Image src={`/image/Path.svg`} alt='path' width={18} height={30} />
                UI & UX Desin
                </a>

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

