import React from 'react'

const Form = () => {
  return (
    <div className='w-[60%] flex flex-col gap-4'>
        <input type="text" className=' bg-[#63798D] h-[56px] rounded-md p-4 outline-none text-white' placeholder='Name' />
        <input type="text" className=' bg-[#63798D] h-[56px] rounded-md p-4 outline-none text-white' placeholder='Name' />
        <textarea name="" className=' bg-[#63798D] h-[130px] rounded-md p-4 outline-none text-white resize-none' placeholder='your email' id="" cols={30} rows={10}></textarea>
        <button className=' bg-[#F59620] h-20 rounded-md p-4 outline-none text-white'>Send Message</button>
     
    </div>
  )
}

export default Form
