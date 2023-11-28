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
      <div className=' overflow-hidden bg-gray-50 rounded-lg h-[26rem] mt-10'>
         <div className='text-[#001b5c] font-bold text-[20px] pt-2 pl-2'>
            <h1>Recommend Services</h1>
         </div>

         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-[90]'>
            <div className='bg-[#e4f5ee] rounded-lg shadow-lg border mt-3 h-[0px] relative hover:h-full duration-300'>
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
            </div><div className='bg-[#e4f5ee] rounded-lg shadow-lg border mt-3 h-[0px] relative hover:h-full duration-300'>
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
            </div><div className='bg-[#e4f5ee] rounded-lg shadow-lg border mt-3 h-[0px] relative hover:h-full duration-300'>
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
            </div><div className='bg-[#e4f5ee] rounded-lg shadow-lg border mt-3 h-[0px] relative hover:h-full duration-300'>
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
            </div>
         </div>
      </div>
      
    </main>
  )
}
