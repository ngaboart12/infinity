import Image from 'next/image'
import React from 'react'
import Form from './Form'

const ContactUs = () => {
  return (
    <div className='py-[2vh] h-[100vh]'>
        <div className='flex w-full h-[85vh] bg-[#56697A]'>
            <div>
                <Image src={`/image/contactus.svg`} alt='a' width={200} height={200}/>
            </div>
            <div className='flex flex-col absolute gap-4 items-center w-full px-40 py-10'>
                <h1 className='text-[32px] text-[#F59620] font-bold'>Get in touch with us</h1>
                <div className='flex gap-20 mt-10'>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <span className='text-white text-[16px] font-light'>
                            Are you ready to take your company or profession to the next level?
                             Do you have any queries or just want to say hello? Please contact us at:-
                        </span>
                        <div className='flex gap-2 items-center'>
                            <Image src={`/image/call.svg`} alt='call' width={30} height={30} />
                            <span className='text-white text-[16px] font-light'>
                            If you have an urgent business concern, please contact us at +25078**456
                            </span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Image src={`/image/notification.svg`} alt='call' width={30} height={30} />
                            <span className='text-white text-[16px] font-light'>
                            Be the first to hear about new releases, announcements, and updates.
                            </span>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-white'>Follow us</span>
                            <div className='flex gap-6'>

                            <a href="#"><Image src={`/image/twitter.svg`} alt='call' width={30} height={30} /></a>
                            <a href="#"><Image src={`/image/linkedin.svg`} alt='call' width={30} height={30} /></a>
                            <a href="#"><Image src={`/image/instagram.svg`} alt='call' width={30} height={30} /></a>
                            
                            </div>
                        </div>
                    </div>
                    <Form/>
                </div>

            </div>
        </div>
        
      
    </div>
  )
}

export default ContactUs
