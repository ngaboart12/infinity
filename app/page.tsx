import Image from 'next/image'
import { Aboutus, CaseStudies, ContactUs, Footer, Hero, Services, WebMobile } from '@/components'

export default function Home() {
  return (
    <main className=' container relative w-full mx-auto overflow-x-hidden '>
          <Services/>

          <WebMobile/>
          <CaseStudies/>
          
        
        
       
         
    </main>
  )
}
