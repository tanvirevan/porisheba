import Navbar from '@/app/global-components/navbar/Navbar'
import React from 'react'
import Jobs from './components/card';
import SearchBox from '@/app/global-components/filter/component/Search';
import Filter from '../../global-components/filter/Filter';
import Link from 'next/link';

export default function page() {
  return (
    <main>
      <Navbar></Navbar>
      <div className='flex gap-10 '>
        <div className='w-3/12'>
        </div>
        <div className='w-[22%] fixed'>
          <div className='rounded-md shadow mt-10 '>
            <SearchBox placeholdertext='Search your jobs' ></SearchBox>
          </div>
          
          <section className='px-4 mt-1  rounded-md text-[#2b3035]'>
            <Filter></Filter>
          </section>
        </div>
      
        <div className='w-9/12'>
          <div className='flex items-center justify-between h-[40px]  rounded-md text-[#2b3035] px-4 shadow content-center mt-10'>
            <h>All Jobs</h>
            <div className='flex'>
              <h1>Time:</h1>
              <select className="mx-1 px-2 rounded-md border-none outline-none" name="" id="">
                <option className=' hover:rounded-md ' value="">Now</option>
                <option className=' hover:rounded-md ' value="">1h</option>
                <option className=' hover:rounded-md ' value="">2h</option>
                <option className=' hover:rounded-md ' value="">3h</option>
                <option className=' hover:rounded-md ' value="">4h+</option>
              </select>
            </div>
          </div>

          <section className='mt-4 rounded-md text-[#2b3035]'>
            <div className='mt-2'>
              <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
