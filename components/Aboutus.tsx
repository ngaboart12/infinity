import Image from 'next/image'
import React from 'react'

const Aboutus = () => {
  return (
    <div className='relative  w-full pt-10 flex flex-col'>
        <div className='relative flex w-full max-h-[100vh]  bg-[#56697A] overflow-hidden'>
            <div className='flex items-center lg:items-start flex-col lg:flex-row z-20  px-[10vh]  py-[6vh] lg:py-[6vh] w-full gap-10'>
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
        

        <div className='flex max-h-[200vh] flex-col mdl:flex-row '>
            <div className='w-full mdl:w-1/2 flex bg-[#E5E5E5] justify-center py-20'>


        
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
                <div className='flex w-full  '>
                    <div className='ml-auto flex  gap-4'>

                    <Image src={`/image/arrow-left.svg`}  alt='Arrow right' width={25} height={25} />
                    <Image src={`/image/Arrow - Right .svg`}  alt='Arrow right' width={30} height={30} />
                    </div>
                </div>

            </div>
           

        </div>

        <div className='w-full mdl:w-1/2  flex justify-center py-20'>

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

     
        </div>
      
  )
}

export default Aboutus
