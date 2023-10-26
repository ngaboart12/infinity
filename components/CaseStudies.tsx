import Image from 'next/image'
import React from 'react'

const CaseStudies = () => {
    const casestudies = [
        {
            id:1,
            name: 'Tuza podcast',
            client: 'Tuza Rwanda',
            type: 'UI/UX,Developement',
            image: '/image/project1.png',
            date: 'June 2023'
        },
        {
            id:2,
            name: 'Tuza podcast',
            client: 'Tuza Rwanda',
            type: 'UI/UX,Developement',
            image: '/image/project2.png',
            date: 'June 2023'
        },
        {
            id:3,
            name: 'Tuza podcast',
            client: 'Tuza Rwanda',
            type: 'UI/UX,Developement',
            image: '/image/project3.png',
            date: 'June 2023'
        },
    ]
  return (
    <div className=' flex px-10 justify-center py-10 w-full max-h-[260vh]'>
        <div className=' flex flex-col items-center gap-6'>
            <div><a href="#" className=' py-2 px-2 bg-[#FBECD8] text-[#F59620] rounded-sm font-outfit'>Case studies</a></div>
             <h1 className='text-[24px] sm:text-[36px] w-[300px] sm:w-[620px] text-center font-bold font-outfit' style={{lineHeight:1}}>We develop products that address issues faced by customers.</h1>

             <div className='grid grid-cols-1 sm:grid-cols-2 mdl:grid-cols-3 gap-5 md:gap-40 items-center'>
            {casestudies.map((item)=>(
                <div key={item.id} className='relative flex max-w-[100vh] flex-col gap-10'>
                    <div className='max-h-[100vh]'>
                         <div className=' absolute p-2 rounded-md mt-4  right-2 bg-[#FBECD8] text-[#F59620]'>
                            <span className='font-outfit'>{item.date}</span>
                        </div>
                        <Image src={item.image} alt='imag1' width={300} height={400} />
                       
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#56697A] text-[12px] font-outfit'>CLIENT: <span className='text-black'>{item.client}</span></span>
                        <span className='text-[24px] font-bold font-outfit'>{item.name}</span>
                        <span className='text-[#56697A] text-[14px] font-outfit'>{item.type}</span>
                        <a href="#"><Image  src={`/image/arrow.png`} alt="sss" width={20}  height={30}/></a>

                    </div>

                </div>
            ))}

        </div>
        </div>
      
    </div>
  )
}

export default CaseStudies
