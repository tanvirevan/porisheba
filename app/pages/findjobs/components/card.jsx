import React from 'react'
import Image from 'next/image'
import JoinButton from '../../../global-components/button/JoinButton';
import contact from './Contact.png'
import Link from 'next/link';

export default function card() {
  return (
    <div>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      {/* <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4'> */}
      <Link  href="/">
        <div className='p-4 flex rounded-md shadow-md border hover:bg-gray-200'>
          <div className='w-full'>
            <p className='text-[#061257] font-bold'>Job Name</p>
            <div className='pl-1 flex items-center justify-items-center mt-1 text-[#6a719a]'>
              <i class="pr-2 fa-solid fa-location-dot"></i>
              <p>Location</p>
            </div>

            <div className='pl-1 flex items-center justify-items-center mt-1 text-[#6a719a]'>
              <i class="pr-2 fa-solid fa-calendar-days"></i>
              <p className='text-[#6a719a]'>Date</p>
            </div>

            <div className='pl-1 flex items-center justify-items-center mt-1 text-[#6a719a]'>
              <i class="pr-2 fa-solid fa-clock"></i>
              <p className='text-[#6a719a]'>Time slot</p>
            </div>

            <div className='mt-3 mb-2'>
              <JoinButton Buttonlink='#' ButtonName='Open'></JoinButton>
            </div>
          </div>

          <div className='w-1/4 flex flex-col justify-between'>
            <h1 className='text-end font-bold'>300tk</h1>
            <div className='w-[100%] overflow-hidden rounded-full hover:bg-[#001c5e] ease-in duration-500'>
              <Image className='w-[100%]'
                src={contact}
                alt='img'
              />
            </div>
          </div>
        </div>
      </Link>


      </div>
    // </div>
  )
}
