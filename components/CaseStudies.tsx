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
    <div className=' flex justify-center py-5 w-full h-[100vh]'>
        <div className=' flex flex-col items-center gap-6'>
            <div><a href="#" className=' py-2 px-2 bg-[#FBECD8] text-[#F59620] rounded-sm'>Case studies</a></div>
             <h1 className='text-[36px] w-[620px] text-center font-bold' style={{lineHeight:1}}>We develop products that address issues faced by customers.</h1>

             <div className='flex gap-20 '>
            {casestudies.map((item)=>(
                <div key={item.id} className='flex flex-col gap-20'>
                    <div className='h-[40vh]'>
                         <div className=' absolute p-2 rounded-md mt-4 ml-[22vh] bg-[#FBECD8] text-[#F59620]'>
                            <span>{item.date}</span>
                        </div>
                        <Image src={item.image} alt='imag1' width={270} height={400} />
                       
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#56697A] text-[12px]'>CLIENT: <span className='text-black'>{item.client}</span></span>
                        <span className='text-[24px] font-bold'>{item.name}</span>
                        <span className='text-[#56697A] text-[14px]'>{item.type}</span>
                        <span><a href="#">{`->`}</a></span>

                    </div>

                </div>
            ))}

        </div>
        </div>
      
    </div>
  )
}

export default CaseStudies
