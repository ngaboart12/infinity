import Image from "next/image"

const Services = () => {
    const services1 = [
        { id: 1, name: 'Web development', image: '/image/web.svg',disc:'Subtract scrolling polygon reesizing clip undo undo pixel sta' },
        { id: 2, name: 'System analysis', image: '/image/system.svg',disc:'Subtract scrolling polygon reesizing clip undo undo pixel sta' },
        { id: 3, name: 'Data protection', image: '/image/data.svg',disc:'Subtract scrolling polygon reesizing clip undo undo pixel sta' },
       
      ];
    const services2 = [
        { id: 1, name: 'Audit & consultancy', image: '/image/audit.svg',disc:'Subtract scrolling polygon reesizing clip undo undo pixel sta' },
        { id: 2, name: 'Networking', image: '/image/network.svg',disc:'Subtract scrolling polygon reesizing clip undo undo pixel sta' },
        { id: 3, name: 'Graphic design', image: '/image/graphic.svg',disc:'Subtract scrolling polygon reesizing clip undo undo pixel sta' },
       
      ];
  return (
    <div className='p-20 h-[100vh] items-center justify-center' id="service">
        <div className='flex w-full h-[70vh] bg-[#848484]/20 rounded-md overflow-hidden'>
            <div>
                <Image 
                   src={`/image/service.svg`}
                   alt="service"
                   width={194}
                   height={100}
                
                />
            </div>
            <div className="absolute flex gap-6 items-center justify-center h-[70vh] ">
                <div className="flex gap-10 px-6">
                    <div className="flex flex-col px-10">
                        <h1 className="text-[32px] text-[#56697A] font-bold">Our Services</h1>
                        <span className="text-[14px] w-[270px] text-[#606060]">Explore our comprehensive range of services designed 
                        to meet your needs and exceed your expectations. F</span>
                        <a href="#" className="flex py-2 w-[200px] justify-center rounded-md text-white bg-[#F59620] mt-5">Discover More
                        </a>
                    </div>
                    {/* our services */}
                    <div className="flex flex-col gap-6">
                        {/* first line services */}
                        <div className="flex gap-8">
                           {services1.map((item) => (
                                <div key={item.id} className="flex flex-col w-[30vh] gap-2">
                                    <Image src={item.image} alt="img" width={40} height={40}/>
                                     <h1>{item.name}</h1>
                                     <span className=" text-[14px] text-[#848484]">{item.disc}</span>
                                     <a href="#">{`->`}</a>
                                </div>
                          
                            ))}

                        </div>
                        {/* second line services */}
                        <div className="flex gap-8">
                           {services2.map((item) => (
                                 <div key={item.id} className="flex flex-col w-[30vh] gap-2">
                                    <Image src={item.image} alt="img" width={40} height={40}/>
                                     <h1>{item.name}</h1>
                                     <span className=" text-[14px] text-[#848484]">{item.disc}</span>
                                     <a href="#">{`->`}</a>
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

