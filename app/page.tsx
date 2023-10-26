import Image from 'next/image'
import { Aboutus, CaseStudies,Services, WebMobile } from '@/components'

export default function Home() {
  return (
    <main className=' container relative w-full mx-auto overflow-x-hidden '>
          <WebMobile/>
          <CaseStudies/>
          
       
         
    </main>
  )
}
