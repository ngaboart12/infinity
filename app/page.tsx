import Image from 'next/image'
import { Aboutus, CaseStudies, ContactUs, Footer, Hero, Services, WebMobile } from '@/components'

export default function Home() {
  return (
    <main className=' container mx-auto overflow-x-hidden '>
          <Hero/>
          <Services/>
          <WebMobile/>
          <CaseStudies/>
          <Aboutus />
          <ContactUs/>
          <Footer/>
        
       
         
    </main>
  )
}
