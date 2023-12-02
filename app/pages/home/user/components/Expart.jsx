import React from 'react'
import Image from 'next/image'
import ExpartA from '../../resorce/ExpartA.png'
import star from '../../resorce/star.png'
import Checked from '../../resorce/check-solid.svg'
import Carousel from './Carousel';
import Link from 'next/link'
export default function Expart() {
  return (
      <Link href='/'>
        <div className="border shadow-lg rounded-lg flex hover:bg-[#e4f5ee]">
            <div className="px-4 py-4">
              <Image src={ExpartA} alt="img" />
            </div>
            <div className="card-content px-4 py-3 flex">
              <div>
                <p className="font-bold text-[#191e24] ">Albert Flores</p>
                <p className='text-[#526578]'>Designation here</p>
                <p className='text-[#191e24] '>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </div>
              <div className='place-content-center bg-gray-100 pt-4 p-1 rounded-full shawdow-md'>
                <p className='text-[#4f4f4f] font-bold '>4.9</p>
                <p className='text-[#4f4f4f] font-bold hover:Work'>50</p>
                <div className='w-[20px]'><Image className='text-[#43c489] outline-[none]'  src={Checked} alt="img" /></div>
              </div>
            </div>
        </div>
      </Link>
  )
}