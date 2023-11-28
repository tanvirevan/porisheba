import Navbar from '@/app/global-components/navbar/Navbar'
import React from 'react'

export default function DeliveryService() {
  return (
    <main>
      <Navbar></Navbar>
      <div className=''>
        <section className='w-full h-[80px] bg-gray-100 px-4 shadow-lg'>
          Category
        </section>

        <section className='w-full bg-blue-100 mt-2 px-4 shadow-lg'>
          Delivery Services
        </section>
      </div>
    </main>
  )
}
