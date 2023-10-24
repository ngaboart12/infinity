import Image from 'next/image'
import React from 'react'

const Aboutus = () => {
  return (
    <div className='w-full py-10 flex flex-col'>
        <div className='flex w-full h-[60vh] bg-[#56697A] overflow-hidden'>
            <div className='flex z-20 absolute px-[10vh] py-[16vh] w-full gap-10'>
                <div className='flex flex-col w-1/3'>
                    <span className='text-[32px] font-bold text-[#F59620] font-outfit'>We assist businesses in telling successful tales.</span>
                    <span className='text-white font-outfit'>Providing exceptional bespoke software solutions to 
                        startups, small companies, medium enterprises, and major
                         corporations across all industries.
                    </span>
                </div>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <div className='flex flex-col min-w-[240px] max-w-[290px] items-start px-6 justify-center h-[100px] bg-[#5F7487]'>
                            <span className='text-white w-20 font-outfit'>Successful Clients</span>
                            <span className='text-white font-bold text-[24px] font-outfit'>25</span>
                        </div>
                        <div className='flex flex-col min-w-[240px] max-w-[290px] items-start px-6 justify-center h-[100px] bg-[#56697A]'>
                            <span className='text-white w-20 font-outfit'>Customer Reach</span>
                            <span className='text-white font-bold text-[24px] font-outift'>42</span>
                        </div>
                        
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col min-w-[240px] max-w-[290px] items-start px-6 justify-center h-[100px] '>
                            <span className='text-white w-40 font-outfit'>Projects <br /> Worked So far</span>
                            <span className='text-white font-bold text-[24px] font-outfit'>25</span>
                        </div>
                        <div className='flex flex-col min-w-[240px] max-w-[290px] items-start px-6 justify-center gap-2 h-[100px] bg-[#5F7487]'>
                            <span className='text-white w-20 font-outfit'>Companies</span>
                            <span className='text-white font-bold font-outfit text-[24px]'>42</span>
                        </div>
                        
                    </div>
                    
                    

                </div>

            </div>
            <div className=' mt-[22vh] ml-auto relative w-60 h-60 '>
                <Image src={`/image/aboutus.svg`} alt='aboutus' objectFit='contain' layout='fill'/>
            </div>

        </div>
        {/* WHAT THEY SAY ABOUT US */}
        <div className='flex flex-col  w-full px-20 py-32'>
            <div className='flex flex-col min-h-[40vh] gap-6 items-center justify-center'>
                <Image src={`/image/pofile.png`} alt='profile' width={100} height={100} />
                <div className='w-[600px]'>
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
            <div className='min-h-[60vh] grid grid-cols-2 mdl:grid-cols-3 gap-5 mt-40'>
                {/* start part */}
                <div className='flex gap-4 h-[10vh] w-[200px]'>
                    <div>
                        <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
                    </div>
                    <div className='flex flex-col justify-between py-1'>
                            <span className='text-[16px] font-semibold font-outfit'>Ishimwe Jean</span>
                            <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

                    </div>

                </div>
                <div className='flex gap-4 h-[10vh] w-[200px]'>
                    <div>
                        <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
                    </div>
                    <div className='flex flex-col justify-between py-1'>
                            <span className='text-[16px] font-semibold font-outfit'>Ishimwe Jean</span>
                            <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

                    </div>

                </div>
                
                <div className='flex gap-4 h-[10vh] w-[200px]'>
                    <div>
                        <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
                    </div>
                    <div className='flex flex-col justify-between py-1'>
                            <span className='text-[16px] font-semibold font-outfit'>Ishimwe Jean</span>
                            <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

                    </div>

                </div>
                <div className='flex gap-4 h-[10vh] w-[200px]'>
                    <div>
                        <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
                    </div>
                    <div className='flex flex-col justify-between py-1'>
                            <span className='text-[16px] font-semibold font-outfit'>Ishimwe Jean</span>
                            <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

                    </div>

                </div>
                <div className='flex gap-4 h-[10vh] w-[200px]'>
                    <div>
                        <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
                    </div>
                    <div className='flex flex-col justify-between py-1'>
                            <span className='text-[16px] font-semibold font-outfit'>Ishimwe Jean</span>
                            <span className='text-[16px] text-[#626262] font-outfit'>CEO TUZA</span>

                    </div>

                </div>
                <div className='flex gap-4 h-[10vh] w-[200px]'>
                    <div>
                        <Image src={`/image/profile2.png`} alt='profile 2' width={60} height={60}/>
                    </div>
                    <div className='flex flex-col justify-between py-1'>
                            <span className='text-[16px] font-semibold  font-outfit'>Ishimwe Jean</span>
                            <span className='text-[16px] text-[#626262]'>CEO TUZA</span>

                    </div>

                </div>
{/* endding part */}
            </div>

        </div>
      
    </div>
  )
}

export default Aboutus
