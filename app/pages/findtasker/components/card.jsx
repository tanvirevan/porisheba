import React from 'react';
import Image from 'next/image';
import Taskerpic from './resorce/Timg.png';
import Link from 'next/link';
export default function card() {
  return (
    <div>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <Link href="/">
        <div className=' border p-[10px] rounded-lg shadow-md justify-center items-center hover:bg-gray-200'>
          <div className='flex justify-center items-center gap-2 lg:pt-4'>
            <div className='items-center overflow-hidden w-1/4 '>
              <Image
                className="md:w-[69%] lg:w-[90%]  rounded-full" 
                src={Taskerpic}
                alt="img"
              />
            </div>
            <div className=' w-1/2'>
                <h1 className='font-bold mb-2'>Tasker Name</h1>
                <h1 className='w-[121px] text-center pl-2 text-[15px] rounded bg-[#e4f5ee] text-[#1f7c5a]'>PROFESSIONAL</h1>
                <h className='pl-2 text-[12px] font-bold mt-2'>Worked:300+ </h>
            </div>
            <div className='w-1/4 '>
              <p className='mb-6 text-end text-[15px] font-bold'>250tk/hr</p>
              <div className='flex items-center justify-center'>
                <i class="p-2 text-[#f3b63c] fa-solid fa-star"></i>
                <p className='pt-[4px] text-end text-[15px] text-[#001c5e] font-bold'>
                  4.9
                </p>
              </div>
            </div>
          </div>

          <div className='w-full justify-center gap-5 items-center mt-[30px] flex md:mb-2'>

              <Link href='' className={`text-[15px] bg-gray-100 px-10 py-2 rounded-full hover:bg-poriseba-blue hover:text-white ease-in duration-300 `}>View Profile & Reviews
              </Link>

              <Link href='' className={`text-[15px] bg-poriseba-blue text-white px-10 py-2 rounded-full hover:text-[#2b3035] hover:bg-gray-100 ease-in duration-300 `}>Select & Continue
              </Link>
          </div>
        </div>
      </Link>
    </div>
  )
}
