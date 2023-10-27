import Image from "next/image"

const Services = () => {
  
    const services1 = [
        { id: 1, name: 'Web development', image: '/image/web.svg',disc:'Subtract scrolling polygon reesizing clip undo undo pixel sta' },
        { id: 2, name: 'System analysis', image: '/image/system.svg',disc:'Subtract scrolling polygon reesizing clip undo undo pixel sta' },
        { id: 3, name: 'Data protection', image: '/image/data.svg',disc:'Subtract scrolling polygon reesizing clip undo undo pixel sta' },
        { id: 4, name: 'Audit & consultancy', image: '/image/audit.svg',disc:'Subtract scrolling polygon reesizing clip undo undo pixel sta' },
        { id: 5, name: 'Networking', image: '/image/network.svg',disc:'Subtract scrolling polygon reesizing clip undo undo pixel sta' },
        { id: 6, name: 'Graphic design', image: '/image/graphic.svg',disc:'Subtract scrolling polygon reesizing clip undo undo pixel sta' }
      ];
  return (
    <div className=' w-full mt-14px px-10   pt-20 sm:px-10  max-h-[160vh] items-center justify-center' id="service">
        <div className='relative py-10  flex-col gap-10 sm:gap-20 overflow-hidden bg-[#EEEEEE] flex max-w-7xl sm:flex-row mx-auto z-50 px-10 sm:px-20 sm:py-20  '>
            <div className="absolute left-0 top-0 -z-10">
                <Image 
                   src={`/image/service.svg`}
                   alt="service"
                   width={194}
                   height={100}
                
                />
            </div>
          
                
                    <div className="flex flex-col gap-1 sm:w-[320px] z-10">
                        <h1 className="text-3xl font-bold text-[#56697A] mb-1 leading-none font-outfit">Our Services</h1>
                        <p className="text-[14px] text-base font-light w-full font-outfit ">Explore our comprehensive range of services designed 
                        to meet your needs and exceed your expectations. F</p>
                        <button className="flex items-start justify-between  gap-2 mt-6 py-2.5 px-4 w-fit max-w-[200px] font-outfit  rounded-md text-white bg-[#F59620] group transition-all duration-300">Discover More
                        </button>
                    </div>
                    {/* our services */}
                   
                        {/* first line services */}
                        <div className=" mt-10 sm:mt-0 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3 grid lg:gap-12 flex-1">
                           {services1.map((item) => (
                                <div key={item.id} className="flex items-start flex-col gap-2 group cursor-pointer ">
                                    <div className="flex h-14 max-w-1/2 items-center justify-center ">
                                    <Image src={item.image} alt="img" width={40} height={40}/>
                                    </div>
                                     <h4 className="text-[#292D32] text-[18px] font-medium mt-2 font-outfit ">{item.name}</h4>
                                     <p className=" text-[14px] font-normal line-clamp-2 w-full font-outfit">{item.disc}</p>
                                     <a href="#"><Image  src={`/image/arrow.png`} alt="sss" width={20}  height={30}/></a>
                                </div>
                          
                            ))}

                        </div>
                     

                    </div>
                </div>

                       
       
      
 
  )
}

export default Services

