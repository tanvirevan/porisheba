'use client'
import React from 'react'
import Image from 'next/image'
import Contact from '../../resorce/Contact.png';
import ContactButton from '../../../../global-components/button/Contact';
import Request from '@/app/global-components/button/Request';
export default function ContactUS() {
  return (
    <div className= ' bg-gray-100 w-full'>
      <main>
         <div className='grid grid-cols-2'>
            <div className='items-center justify-items-center mx-auto py-24'>
               <p className='text-[#001c5d] font-bold text-[30px] '>Not finding what your looking for?</p>
               <p className='text-sm'>Don’t worry, you can request a service or call us.</p>
               <div className='mt-4 flex gap-2'>
                  <Request Buttonlink='/' ButtonName='Request a Service'></Request>
                  <ContactButton Buttonlink='#' ButtonName='16000'></ContactButton>
               </div>
            </div>
            
     
            <div className=' mx-auto pl-4'>
               <Image src={Contact} alt='img'/>
            </div>
         </div>
      </main>
    </div>
  )
}
