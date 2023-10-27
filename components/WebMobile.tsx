import Image from 'next/image'
import React from 'react'

const WebMobile = () => {
  const divStyle = {
    backgroundImage: `url('../image/webapp2.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className='max-w-6xl mx-auto mt-32 '>
     

       <div className='px-10 sm:px-0 sm:grid-cols-2 gap-20 grid  '>
          <div className='flex flex-col gap-3 pt-10'>
            <h1 className='text-3xl font-bold  text-[#F59620]  font-outfit' style={{lineHeight:1}}>Web & mobile app <br /> development</h1>
            <span className='text-sm font-medium font-outfit'>Someone is aware of our business.</span>

            <p className='text-[16px] font-normal sm-w-[80%] text-[#56697A] font-outfit'> 
              Our mobile application development services provide the proper 
              solutions and resources to assist organizations in creating high-quality,
               user-friendly, and engaging mobile apps. Our skilled app developers 
               and UI/UX designers can assist 
            </p>

            <button className='flex items-center justify-between  text-white py-3.5 px-5 w-fit gap-2 mt-6 group transition-all bg-[#F59620] duration-300'> Learn More {`->`}</button>

          </div>
          <div className='relative pt-8'>
           
              <button   className='flex rounded-tr-xl items-center gap-3 px-5 py-4 absolute   right-0 top-0 bg-[#FFECD5] text-[#F59620]'>
                <Image src={`/image/path.svg`} alt='path' width={18} height={30} />
                UI & UX Desin
                </button>
              <button  className=' flex rounded-tr-xl items-center gap-3 px-5 py-4 absolute sm:-left-14 bottom-0 z-50    bg-[#FFECD5] text-[#F59620]'>
                <Image src={`/image/path.svg`} alt='path' width={18} height={30} />
                UI & UX Desin
                </button>

                <img
                src="/image/webapp2.png"
                  alt="Your Image"
                  className='h-[400px] object-cover rounded-lg'
                     />
            
          

            <img
                src="/image/webapp1.png"
                  alt="Your Image"
                   className=' absolute right-0 bottom-0 border-[15px] border-white'
                     />
            
            </div>
            </div>
            

          </div>
        

       
       
     

  )
}

export default WebMobile

