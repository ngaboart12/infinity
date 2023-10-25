import Image from "next/image"
const Navbar = () => {
  return (
    <div className="py-5 px-6 sm:px-10 md:px-20 w-full flex justify-between">
        <a href=""><Image
            src={`/image/logo.png`}
            alt="logo"
            width={120}
            height={40}
        
        />
        </a>
        <div className="links hidden mdl:flex text-white text-sm  gap-10 font-light items-center font-outfit">
            <a href="#" className="hover:text-[#F59620]">Home</a>
            <a href="/aboutus" className="hover:text-[#F59620]">About us</a>
            <a href="#" className="hover:text-[#F59620]">Services</a>
            <a href="#" className="hover:text-[#F59620]">About Us</a>
            <a href="#" 
            className=" px-6 py-2 border border-[#F59620] text-[#F59620]
             hover:text-white hover:bg-[#F59620]">
                Reach us
            </a>
        </div>
       
        

      
    </div>
  )
}

export default Navbar
