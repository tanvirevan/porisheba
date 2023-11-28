import Navbar from '@/app/global-components/navbar/Navbar'
import React from 'react'

export default function RepairService() {
  return (
    <main>
      <Navbar className='mb-10'></Navbar>

      <div className='mt-10'>
        <div className=' w-full h-[80px] bg-gray-900 text-white px-4 shadow-lg'>
          Category
        </div>

        <div className='w-full bg-blue-100 mt-2 px-4 shadow-lg'>
          Repair Services
        </div>
      </div>
    </main>
  )
}
