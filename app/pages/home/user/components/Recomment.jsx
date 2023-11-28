import React from 'react'
import Dalivary from '../../resorce/Recom.png';
import Repar from '../../resorce/RecomR.png';
import Homeclean from '../../resorce/RecomH.png';
import Carclean from '../../resorce/RecomC.png';
import Image from 'next/image';
import Link from 'next/link';
export default function Recomment() {
  return (
    <main>
      <div className=' overflow-hidden bg-gray-50 rounded-lg mt-10 p-2'>
         <div className='text-[#001b5c] font-bold text-[20px]'>
            <h1>Recommend Services</h1>
         </div>

         <div className='grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='rounded-lg shadow-lg border mt-3  relative hover:bg-[#e4f5ee] duration-300'>
               <Link href="#" className=' place-content-center '>
                  <Image
                     className=" w-[90%] ease-in duration-200  rounded absulute mx-auto mt-5"
                     src={Dalivary}
                     alt="img"
                  />
                  <div>
                     <p className="mt-2 font-normal text-gray-900 text-medium text-center">
                        House Shifting Service
                     </p>
                  </div>
               </Link> 
            </div><div className='rounded-lg shadow-lg border mt-3  relative hover:bg-[#e4f5ee] duration-300'>
               <Link href="#" className=' place-content-center '>
                  <Image
                     className=" w-[90%] ease-in duration-200  rounded absulute mx-auto mt-5"
                     src={Homeclean}
                     alt="img"
                  />
                  <div>
                     <p className="mt-2 font-normal text-gray-900 text-medium text-center">
                        House Shifting Service
                     </p>
                  </div>
               </Link> 
            </div><div className='rounded-lg shadow-lg border mt-3  relative hover:bg-[#e4f5ee] duration-300'>
               <Link href="#" className=' place-content-center '>
                  <Image
                     className=" w-[90%] ease-in duration-200  rounded absulute mx-auto mt-5"
                     src={Repar}
                     alt="img"
                  />
                  <div>
                     <p className="mt-2 font-normal text-gray-900 text-medium text-center">
                        House Shifting Service
                     </p>
                  </div>
               </Link> 
            </div><div className='rounded-lg shadow-lg border mt-3  relative hover:bg-[#e4f5ee] duration-300'>
               <Link href="#" className=' place-content-center '>
                  <Image
                     className=" w-[90%] ease-in duration-200  rounded absulute mx-auto mt-5"
                     src={Carclean}
                     alt="img"
                  />
                  <div>
                     <p className="mt-2 font-normal text-gray-900 text-medium text-center mb-2">
                        House Shifting Service
                     </p>
                  </div>
               </Link> 
            </div>

         </div>
      </div>
      
    </main>
  )
}
