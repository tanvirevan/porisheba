import Navbar from '../../global-components/navbar/Navbar'
import React from 'react'
import { Menu, Transition } from '@headlessui/react';
import TaskerCard from './components/card'
import Expart from '../home/user/components/Expart';
import SearchBox from '@/app/global-components/filter/component/Search';

export default function page() {
  return (
    <main>
      <Navbar></Navbar>
      <div className='flex gap-10'>
{/* Filter section Top part*/}
        <div className='border flex items-center justify-self-center w-2/6  rounded-md text-[#2b3035] text-center aline-center shadow mt-10'>
          <SearchBox placeholdertext='Search your Tasker' ></SearchBox>
        </div>

{/* Tasker Section Top Part*/}
        <div className='flex items-center justify-between h-[40px] w-full  rounded-md text-[#2b3035] px-4 shadow content-center mt-10'>
          <h>All Tasker</h>
          <div className='flex'>
            <h1>Ratings:</h1>
            <select className="mx-1 px-2 rounded-md border-none outline-none" name="" id="">
              <option className=' hover:rounded-lg ' value="">All</option>
              <option className=' hover:rounded-md ' value="">2.5</option>
              <option className=' hover:rounded-md ' value="">3.5</option>
              <option className=' hover:rounded-md ' value="">4.5+</option>
            </select>
          </div>
        </div>
      </div>

{/* Filter section main part */}
      <div className='sm:items-hidden flex gap-10'>
        <section className='px-4 mt-1 w-2/6 h-[700px]  rounded-md text-[#2b3035] shadow-lg'>
          Filter part
        </section>
        
{/* Tasker main part */}
        <section className=' mt-4 w-full text-[#2b3035]'>
          <div className='mt-2 mb-2'>
            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
              <TaskerCard></TaskerCard>
              <TaskerCard></TaskerCard>
              <TaskerCard></TaskerCard>
              <TaskerCard></TaskerCard>
              <TaskerCard></TaskerCard>
              <TaskerCard></TaskerCard>
              <TaskerCard></TaskerCard>
              <TaskerCard></TaskerCard>
              <TaskerCard></TaskerCard>
              <TaskerCard></TaskerCard>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
