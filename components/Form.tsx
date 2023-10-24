import React from 'react'

const Form = () => {
  return (
    <div className='w-[90%] flex flex-col gap-4'>
     
        <div className='h-[8vh] bg-[#63798D] rounded-lg px-4'>
            <input type="text" placeholder='Name' className='w-full h-full bg-transparent outline-none text-white' />

        </div>
        <div className='h-[8vh] bg-[#63798D] rounded-lg px-4'>
            <input type="text" placeholder='Name' className='w-full h-full bg-transparent  outline-none text-white' />

        </div>
        <div className='h-[20vh] py-2 bg-[#63798D] rounded-lg px-4'>
            <textarea name="" id="" cols={44} rows={5} className='bg-transparent outline-none text-white' placeholder='Message'>    </textarea>

        </div>
        <div className='flex w-full'>
            <button className='h-[10vh] w-full rounded-md text-white bg-[#F59620]'>send message</button>
        </div>
     
    </div>
  )
}

export default Form
