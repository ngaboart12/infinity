import Image from 'next/image'
import React from 'react'

function WhatSay() {
  return (
    <div className='max-w-screen-xl mx-auto flex max-h-[200vh] justify-center w-full flex-col mdl:flex-row '>
            

    <div className='w-full mdl:max-w-1/2 flex bg-[#E5E5E5] justify-center py-20'>
        



    <div className='flex flex-col  max-h-[100vh] gap-6 items-center mdl:items-start justify-center'>
        <Image src={`/image/pofile.png`} alt='profile' width={130} height={120} />
        <div className='w-[300px] text-center md:text-start md:w-[400px]'>
            <span className='text-[#303030] font-outfit'>
              Editor subtract rectangle auto project flatten content opacity 
            hand horizontal. Effect pen draft subtract style background main
             arrange ipsum. Pen editor arrange pen invite reesizing vertical 
             duplicate. Pixel italic editor main project 
            effect invite share. Hand strikethrough create vertical rectangle inspect auto
            </span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='text-[18px] font-semibold font-outfit'>Ishimwe Jean</span>
            <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>
        </div>
        <div className='flex w-full py-10 '>
            <div className='mx-auto  mdl:mx-0 mdl:ml-auto flex  gap-4'>

            <Image src={`/image/arrow-left.svg`}  alt='Arrow right' width={25} height={25} />
            <Image src={`/image/Arrow - Right .svg`}  alt='Arrow right' width={30} height={30} />
            </div>
        </div>

    </div>
   

</div>

<div className='w-full mdl:max-w-1/2  flex justify-center py-20'>

    <div className=' grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-8 gap-y-8 '>
        {/* start part */}
        <div className='flex gap-2 max-h-[20vh] items-center max-w-[300px]'>
            <div>
                <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
            </div>
            <div className='flex flex-col justify-evenly py-2'>
                    <span className='text-[16px] font-semibold font-outfit'>Ishimwe Jean</span>
                    <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

            </div>

        </div>
        <div className='flex gap-4 max-h-[20vh] items-center max-w-[300px]'>
            <div>
                <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
            </div>
            <div className='flex flex-col justify-evenly py-1'>
                    <span className='text-[16px] font-semibold font-outfit'>Ishimwe Jean</span>
                    <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

            </div>

        </div>
        
        <div className='flex gap-4 max-h-[20vh] items-center max-w-[300px]'>
            <div>
                <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
            </div>
            <div className='flex flex-col justify-evenly py-1'>
                    <span className='text-[16px]  font-semibold font-outfit'>Ishimwe Jean</span>
                    <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

            </div>

        </div>
        <div className='flex gap-4 max-h-[20vh] items-center max-w-[300px]'>
            <div>
                <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
            </div>
            <div className='flex flex-col justify-evenly py-1'>
                    <span className='text-[16px] font-semibold font-outfit'>Ishimwe Jean</span>
                    <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

            </div>

        </div>
        <div className='flex gap-4 max-h-[20vh] items-center max-w-[300px]'>
            <div>
                <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
            </div>
            <div className='flex flex-col justify-evenly py-1'>
                    <span className='text-[16px] font-semibold font-outfit'>Ishimwe Jean</span>
                    <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

            </div>

        </div>
        <div className='flex gap-4 max-h-[20vh] items-center max-w-[300px]'>
            <div>
                <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
            </div>
            <div className='flex flex-col justify-evenly py-1'>
                    <span className='text-[16px] font-semibold  font-outfit'>Ishimwe Jean</span>
                    <span className='text-[16px] text-[#626262]'>CEO TUZA</span>

            </div>

</div>
        </div>

{/* endding part */}
    </div>
    </div>

  )
}

export default WhatSay
