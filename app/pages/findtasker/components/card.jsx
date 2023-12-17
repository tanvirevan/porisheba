import React from 'react';
import Image from 'next/image';
import Taskerpic from './resorce/Timg.png';
export default function card({work}) {
  return (
    <div>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      {
        <div className=' border p-[10px] rounded-lg shadow-md justify-center items-center hover:bg-gray-200'>
          <div className='flex justify-center items-center gap-2 lg:pt-4'>
            <div className='items-center overflow-hidden w-1/4 '>
              <Image
                className="md:w-[69%] lg:w-[90%] rounded-full" 
                src={Taskerpic}
                alt="img"
              />
            </div>
            <div className=' w-1/2'>
                <h1 className='font-bold mb-2'>{work.name}</h1>
                <h1 className='w-[121px] text-center pl-2 text-[15px] rounded bg-[#e4f5ee] text-[#1f7c5a]'>{work.priority}</h1>
                <h className='pl-2 pr-1 text-[12px] font-bold mt-2'>Worked:{work.total_work} </h>
                <p className='pl-2 text-[15px] font-bold'>Available:</p>
                <div className='pl-1 flex gap-2'>
                  <h className='pl-2 pr-1  text-[12px] font-bold '>Days: <span className='text-[#1f7c5a]'>{work.days}</span>  </h>
                  <h className='pl-2 text-[12px] font-bold '>Time:<span className='pl-1 text-[#1f7c5a]'>{work.time}</span></h>
                </div>
            </div>
            <div className='w-1/4 '>
              <p className='mb-6 text-end text-[15px] font-bold'>{work.price}tk/h</p>
              <div className='flex items-center justify-center'>
                <i className="pl-10 text-[#f3b63c] fa-solid fa-star"></i>
                <p className='pt-[4px] text-end text-[15px] text-[#001c5e] font-bold'>
                  {/* {work.ratings} */}4.9
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
