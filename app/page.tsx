import Image from 'next/image'
import { Aboutus, CaseStudies, ContactUs, Footer, Hero, Services, WebMobile } from '@/components'

export default function Home() {
  return (
    <main className=' relative   mx-auto '>
          <Hero/>
          <Services/>
          <WebMobile/>
          <CaseStudies/>
         
    </main>
  )
}
