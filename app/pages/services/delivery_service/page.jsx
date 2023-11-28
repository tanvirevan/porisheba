import Navbar from '@/app/global-components/navbar/Navbar'
import React from 'react'

export default function DeliveryService() {
  return (
    <main>
      <Navbar></Navbar>
      <div>
        <div className='w-full h-[80px] bg-gray-100 px-4 shadow-lg mt-10'>
          Category
        </div>

        <div className='w-full bg-blue-100 mt-2 px-4 shadow-lg'>
          Delivery Services
        </div>
      </div>
    </main>
  )
}
