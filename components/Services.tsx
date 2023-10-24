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
    <div className='p-10 mdl:p-20 min-h-[100vh] items-center justify-center' id="service">
        <div className='flex w-full min-h-[70vh] pt-4 bg-[#848484]/20 rounded-md overflow-hidden'>
            <div className="absolute z-1">
                <Image 
                   src={`/image/service.svg`}
                   alt="service"
                   width={194}
                   height={100}
                
                />
            </div>
            <div className="z-10 flex gap-6 items-center justify-center min-h-[70vh] ">
                <div className="flex flex-col-reverse mdl:flex-row items-center mdl:items-start gap-10 px-6">
                    <div className="flex flex-col items-center mdl:items-start px-10 w-[80vh] ">
                        <h1 className="text-[32px] text-[#56697A] font-semibold font-outfit">Our Services</h1>
                        <span className="text-[14px] max-w-[270px] text-[#606060] font-outfit">Explore our comprehensive range of services designed 
                        to meet your needs and exceed your expectations. F</span>
                        <a href="#" className="flex w-full mdl:max-w-none z-2 py-2 max-w-[200px] font-outfit justify-center rounded-md text-white bg-[#F59620] mt-5">Discover More
                        </a>
                    </div>
                    {/* our services */}
                    <div className=" relative flex flex-col gap-6">
                        {/* first line services */}
                        <div className="grid grid-cols-3 mdl:grid-cols-3 gap-8">
                           {services1.map((item) => (
                                <div key={item.id} className="flex flex-col gap-2">
                                    <div className="h-14">
                                    <Image src={item.image} alt="img" width={40} height={40}/>
                                    </div>
                                     <h1 className="font-outfit">{item.name}</h1>
                                     <span className=" text-[14px] text-[#848484] font-outfit">{item.disc}</span>
                                     <a href="#"><Image  src={`/image/arrow.png`} alt="sss" width={20}  height={30}/></a>
                                </div>
                          
                            ))}

                        </div>
                     

                    </div>
                </div>
            </div>
                       
        </div>
      
    </div>
  )
}

export default Services

