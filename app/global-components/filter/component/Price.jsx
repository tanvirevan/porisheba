"use client"
import React from 'react'
import DayButton from '../../../global-components/button/DayButton';
export default function Day() {
  return (
   <div>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <div className='card border'>
         <h1 className='mb-3 pl-3 font-bold text-[#001c5e]'>Price Range</h1>
         <div className='flex justify-items-center items-center'>
               <input className='text-center border-2 outline-none w-[20%] focus:text-[#001c5e] focus:border-[#001c5e]'
                  type="text"
                  placeholder='300'
               />
               <i class="pr-1 pl-1 fa-solid fa-arrow-right"></i>
               <input className='text-center border-2 outline-none w-[20%] focus:text-[#001c5e] focus:border-[#001c5e]'
                  type="text"
                  placeholder='10000'
               />
         </div>
      </div>
   </div>
  )
}