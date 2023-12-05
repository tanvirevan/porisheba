'use client'
import Navbar from '@/app/global-components/navbar/Navbar'
import React from 'react'
import Jobs from './components/card';
import SearchBox from '@/app/global-components/filter/component/Search';
import Filter from '../../global-components/filter/Filter';
import Link from 'next/link';
// import find from '../../global-components/button/find'
import Select from '@/app/global-components/select';

async function GetJobs()
  {

    const res = await fetch('http://localhost:4000/jobposts',{
      next:{
        revalidate: 0
    }
  })

    return res.json()
  }

export default async function page({category,time}) {
  const jobs = await GetJobs()
  const AllServicesName = ['All Jobs','Home Service','professional service','Repair Service','Delivery service'];
  const AllTimesNmae = ['Now','1h','2h','3h','4h+'];
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
            {/* <Select id={category} names={['All Jobs','Home Service','professional service','Repair Service','Delivery service']}></Select> */}
            <Select value={category} names={AllServicesName} ></Select>
            

            <div className='flex'>
              <h1 className='font-bold'>Time:</h1>
              <Select value={time} names={AllTimesNmae}></Select>
            </div>
          </div>
      
          <section  className='mt-4 rounded-md text-[#2b3035]'>
            <div className='mt-2'>
              <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'>
                {
                  jobs.map((job) =>(
                    <Jobs key={job.id} job={job} ></Jobs>
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
