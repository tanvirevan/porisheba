import Navbar from '@/app/global-components/navbar/Navbar'
import React from 'react'

export default function RepairService() {
  return (
    <main>
      <Navbar></Navbar>
      <div className='mt-2'>
        <section className='w-full h-[80px] bg-gray-100 px-4 shadow-lg'>
          Category
        </section>

        <section className='w-full bg-blue-100 mt-2 px-4 shadow-lg'>
          Repair Services
        </section>
      </div>
    </main>
  )
}
