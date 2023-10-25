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
    <div className='px-2 pt-20 sm:px-10  max-h-[140vh] items-center justify-center' id="service">
        <div className='relative flex w-full max-h-[140vh] pb-10 pt-4 bg-[#848484]/20 rounded-md overflow-hidden'>
            <div className="absolute z-1">
                <Image 
                   src={`/image/service.svg`}
                   alt="service"
                   width={194}
                   height={100}
                
                />
            </div>
            <div className=" relative z-10 w-full flex gap-6 items-center justify-center max-h-[150vh]  pb-4">
                <div className="flex flex-col mdl:flex-row items-center mdl:items-start gap-10 px-6">
                    <div className="flex flex-col items-center mdl:items-start px-10  ">
                        <h1 className="text-[32px] text-[#56697A] font-semibold font-outfit">Our Services</h1>
                        <span className="text-[14px] max-w-[270px] text-[#606060] font-outfit text-center mdl:text-start">Explore our comprehensive range of services designed 
                        to meet your needs and exceed your expectations. F</span>
                        <a href="#" className="flex w-full  z-2 py-2 max-w-[200px] font-outfit justify-center rounded-md text-white bg-[#F59620] mt-5">Discover More
                        </a>
                    </div>
                    {/* our services */}
                    <div className="relative justify-center items-center flex flex-col gap-6">
                        {/* first line services */}
                        <div className=" relative grid justify-center items-center  grid-cols-2 mdl :grid-cols-2 lg:grid-cols-3 gap-10">
                           {services1.map((item) => (
                                <div key={item.id} className="flex justify-center items-center mdl:justify-start mdl:items-start  flex-col gap-2 max-w-[20vh] sm:max-w-[25vh] mdl:max-w-[30vh]">
                                    <div className="flex h-14 max-w-1/2 items-center justify-center ">
                                    <Image src={item.image} alt="img" width={40} height={40}/>
                                    </div>
                                     <h1 className="font-outfit text-center">{item.name}</h1>
                                     <span className=" text-[14px] max-w-[20vh] text-center mdl:text-start text-[#848484] font-outfit">{item.disc}</span>
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

