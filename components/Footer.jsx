import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-2 justify-center px-20 gap-32 pb-20'>
      <div className='flex flex-col gap-2'>
        <Image
            src={`/image/logo2.png`}
            alt="logo"
            width={140}
            height={40}
        
        />
        <span className='flex gap-2 items-center'> <Image
            src={`/image/location.png`}
            alt="logo"
            width={20}
            height={20}
        
        />  <span  className='text-[18px] text-[#56697A] font-semibold font-outfit'>Kk 678 st Kanombe Kicukiro</span></span>
        <span className='flex gap-2 items-center'> <Image
            src={`/image/Time.png`}
            alt="logo"
            width={20}
            height={20}
        
        />  <span className='text-[18px] text-[#56697A] font-semibold font-outfit'>Open 9 AM To 17 PM</span></span>

      </div>
      {/* company */}
      <div className='flex flex-col gap-2'>
        <h1 className='text-[#56697A] font-bold text-[18px] font-outfit'>Company</h1>
        <ul className='flex flex-col gap-2 text-[#56697A] font-outfit'>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">Our work</a>
        </ul>

      </div>
      {/* services */}
      <div className='flex flex-col gap-2'>
        <h1 className='text-[#56697A] font-bold text-[18px] font-outfit'>Services</h1>
        <ul className='flex flex-col gap-2 text-[#56697A] font-outfit'>
            <a href="#">Web development</a>
            <a href="#">System analysis</a>
            <a href="#">Data protection</a>
            <a href="#">Audit &consultancy</a>
            <a href="#">Networking</a>
            <a href="#">Graphic design</a>
        </ul>

      </div>
      {/* technologies */}
      <div className='flex flex-col gap-2'>
        <h1 className='text-[#56697A] font-bold text-[18px] font-outfit'>Technologies</h1>
        <ul className='flex flex-col gap-2 text-[#56697A] font-outfit'>
            <a href="#">React js</a>
            <a href="#">Node js</a>
            <a href="#">Laravel</a>
        </ul>

      </div>

    </div>
  )
}

export default Footer
