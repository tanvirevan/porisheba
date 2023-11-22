import Navbar from '../../global-components/navbar/Navbar'
import React from 'react'

export default function page() {
  return (
    <main>
      <Navbar></Navbar>
      <div className='flex gap-10 mt-2'>
        <div className='px-4 w-2/6 h-[700px] bg-gray-100 rounded-md text-[#2b3035] shadow-lg'>
          Filter part
        </div>
        
        <div className='px-4 w-full bg-gray-100 rounded-md text-[#2b3035] shadow-lg'>
          Tasker Card
        </div>
      </div>
    </main>
  )
}
