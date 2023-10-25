import Image from 'next/image'
import { Aboutus, CaseStudies, ContactUs, Footer, Hero, Services, WebMobile } from '@/components'

export default function Home() {
  return (
    <main className=' relative w-full mx-auto max-w-screen'>
          <Hero/>
          <Services/>
          <WebMobile/>
          <CaseStudies/>
         
    </main>
  )
}
