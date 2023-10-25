import Image from 'next/image'
import React from 'react'

const Aboutus = () => {
  return (
    <div className='relative  w-full py-10 flex flex-col'>
        <div className='flex w-full min-h-[60vh] lg:h-[60vh]  bg-[#56697A] overflow-hidden'>
            <div className='flex items-center lg:items-start flex-col lg:flex-row z-20 absolute px-[10vh] py-[6vh] lg:py-[16vh] w-full gap-10'>
                <div className=' flex flex-col min-w-[240px] max-w-[400px] lg:w-1/3 items-center lg:items-start gap-4'>
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
            <div className=' mt-[42vh] lg:mt-[32vh] ml-auto relative w-60 h-60 '>
                <Image src={`/image/aboutus.svg`} alt='aboutus' objectFit='contain' layout='fill'/>
            </div>

        </div>
        {/* WHAT THEY SAY ABOUT US */}
        <div className='flex flex-col gap-10 px-10 py-20'>
        <span className='text-[24px] text-center text-[#F59620] font-[700] font-outfit'>WHAT THEY SAY ABOUT US</span>

        <div className='flex flex-col mdl:flex-row mdl:gap-20 justify-center gap-20  w-full'>
        
            <div className='flex flex-col min-h-[40vh] gap-6 items-center mdl:items-start justify-center'>
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

            </div>
           


            <div className='max-h-[30vh] grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-10 gap-y-10 '>
                {/* start part */}
                <div className='flex gap-2 max-h-[10vh] max-w-[300px]'>
                    <div>
                        <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
                    </div>
                    <div className='flex flex-col justify-evenly py-2'>
                            <span className='text-[16px] font-semibold font-outfit'>Ishimwe Jean</span>
                            <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

                    </div>

                </div>
                <div className='flex gap-4 h-[10vh] max-w-[300px]'>
                    <div>
                        <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
                    </div>
                    <div className='flex flex-col justify-evenly py-1'>
                            <span className='text-[16px] font-semibold font-outfit'>Ishimwe Jean</span>
                            <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

                    </div>

                </div>
                
                <div className='flex gap-4 h-[10vh] max-w-[300px]'>
                    <div>
                        <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
                    </div>
                    <div className='flex flex-col justify-evenly py-1'>
                            <span className='text-[16px]  font-semibold font-outfit'>Ishimwe Jean</span>
                            <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

                    </div>

                </div>
                <div className='flex gap-4 h-[10vh] max-w-[300px]'>
                    <div>
                        <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
                    </div>
                    <div className='flex flex-col justify-evenly py-1'>
                            <span className='text-[16px] font-semibold font-outfit'>Ishimwe Jean</span>
                            <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

                    </div>

                </div>
                <div className='flex gap-4 h-[10vh] max-w-[300px]'>
                    <div>
                        <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
                    </div>
                    <div className='flex flex-col justify-evenly py-1'>
                            <span className='text-[16px] font-semibold font-outfit'>Ishimwe Jean</span>
                            <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

                    </div>

                </div>
                <div className='flex gap-4 h-[10vh] max-w-[300px]'>
                    <div>
                        <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
                    </div>
                    <div className='flex flex-col justify-evenly py-1'>
                            <span className='text-[16px] font-semibold  font-outfit'>Ishimwe Jean</span>
                            <span className='text-[16px] text-[#626262]'>CEO TUZA</span>

                    </div>

                </div>
{/* endding part */}
            </div>
            </div>

     
        </div>
      
    </div>
  )
}

export default Aboutus
