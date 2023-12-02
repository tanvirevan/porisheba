import React from 'react';
import Image from 'next/image';
import Taskerpic from './resorce/Timg.png';
import Star from './resorce/Star.png'
import Link from 'next/link';
export default function card() {
  return (
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
              <p className='mb-6 text-end text-[15px] font-bold text-[]'>250tk/hr</p>
              <p className='text-end text-[15px] text-[#001c5e] font-bold'>
                 4.9
               </p>
            </div>
          </div>

          <div className='w-full justify-center gap-5 items-center mt-[30px] flex md:mb-2'>

              <Link href='' className={`text-[15px] bg-gray-100 px-10 py-2 rounded-full hover:font-bold ease-in duration-500 `}>View Profile & Reviews
              </Link>

              <Link href='' className={`text-[15px] bg-poriseba-blue text-white px-10 py-2 rounded-full hover:text-white hover:font-bold ease-in duration-500 `}>Select & Continue
              </Link>
          </div>
        </div>
      </Link>
  )
}
