import Navbar from '../../global-components/navbar/Navbar'
import React from 'react'
import { Menu, Transition } from '@headlessui/react';
import TaskerCard from './components/card'
import SearchBox from '@/app/global-components/filter/component/Search';
import Filter from '@/app/global-components/filter/Filter';


async function GetWorks()
  {
    const res = await fetch('http://localhost:4000/workposts',{
      next:{
          revalidate: 0
        }
    })

    return res.json()
  }

export default async function page() {
  const works = await GetWorks()

  return (
    <main>
      <Navbar></Navbar>

      <div className='flex gap-10'>
      <div className='w-3/12'>
      </div>
{/* Filter section Top part*/}
        <div className='w-[22%] fixed'>
          <div className='rounded-md shadow mt-10'>
            <SearchBox placeholdertext='Search your Tasker' ></SearchBox>
          </div>

          <div>
            <div className='px-4 mt-1 rounded-md text-[#2b3035]'>
              <Filter></Filter>
            </div>
          </div>
        </div>



{/* Tasker Section Top Part*/}
        <div className='w-9/12'>
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

  {/* Filter section main part */}
        
          
  {/* Tasker main part */}
          <section className=' mt-4 w-full text-[#2b3035]'>
            <div className='mt-2 mb-2'>
              <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                {
                  works.map((work) =>(
                    <TaskerCard key={work.id} work={work} ></TaskerCard>
                  ))
                }
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
