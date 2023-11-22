import Navbar from '@/app/global-components/navbar/Navbar'
import React from 'react'

export default function page() {
  return (
    <main>
      <Navbar></Navbar>
      <div className='flex gap-10 mt-2'>
        <div className='px-4 w-2/6 bg-green-400 rounded-md text-white shadow-lg'>
          Filter part
        </div>
        
        <div className='px-4 w-full bg-blue-400 rounded-md text-white shadow-lg'>
          Jobs part
        </div>
      </div>
    </main>
  )
}
