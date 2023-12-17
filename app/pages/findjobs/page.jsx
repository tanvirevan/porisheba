/* eslint-disable react/react-in-jsx-scope */
'use client';
// import React, { useState, useEffect } from 'react';
// import Navbar from '../../global-components/navbar/Navbar';
import JobsCard from './components/card';
import SearchBox from '../../global-components/filter/component/Search';
import Filter from '../../global-components/filter/Filter';
import Select from '../../global-components/select';
import Link from 'next/link';

async function GetJobs()
  {

    const res = await fetch('http://localhost:4000/jobposts',{
      next:{
        revalidate: 0
    }
  });

    return res.json();
  }

export default async function page({category,time}) {

  // useEffect to fetch jobs when the component mounts
  const jobs = await GetJobs();
  const AllServicesName = ['All jobs','Home Service','professional service','Repair Service','Delivery service'];
  const AllTimesNmae = ['Now','1h','2h','3h','4h+'];
  return (
    <main>
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
            {/* <Select id={category} names={['All jobs','Home Service','professional service','Repair Service','Delivery service']}></Select> */}
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
                  jobs.reverse().map(job =>(
                    <div key={job.id}>
                      <Link href = {`/pages/findjobs/${job.id}`}>
                        <JobsCard job={job}> </JobsCard>
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
