import Image from 'next/image'
import React from 'react'
import Form from './Form'


const ContactUs = () => {

  return (
    <div className=' relative  min-h-[100vh] pb-8  py-10 ' >
      <div className='w-full flex bg-[#56697A]' style={{backgroundImage: `url('../image/contactus.png')`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>

        <div className='flex flex-col w-full py-40 md:p-10 gap-10  bg-transparent  items-center justify-center'>
         <h1 className='text-[#F59620] text-[32px] font-bold font-outfit '>Get In Touch With us</h1>
         <div className='flex flex-col lg:flex-row w-full justify-center items-center gap-10'>
            <div className='flex flex-col w-[80%]  h-full  gap-4'>
               
                <div className='flex gap-2'>
                   
                    <span className='text-[16px] md:text-[18px] text-white'>Are you ready to take your company or profession
                     to the next level? Do you have any queries 
                    or just want to say hello? Please contact us at:-</span>
                </div>
                    <div className='flex gap-2 justify-center '>
                    <Image src={`/image/call.svg`} alt='' width={20} height={20} />
                    <span className='text-[16px] md:text-[18px] text-white'>If you have an urgent business concern, please contact us at +25078**456</span>

                 </div>
                 <div className='flex gap-2'>
                    <Image src={`/image/notification.svg`} alt='' width={20} height={20} />
                    <span className='text-[16px] md:text-[18px] text-white'>If you have an urgent business concern, please contact us at +25078**456</span>

                 </div>

            </div>
            <div className='flex w-full items-center justify-center'>
                <Form  />
            </div>
            
         </div>

            
            
        </div>

        
      </div>
    </div>
  )
}

export default ContactUs
