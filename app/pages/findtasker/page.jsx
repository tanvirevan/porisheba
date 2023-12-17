// import Navbar from '../../global-components/navbar/Navbar';
import React from 'react';

import TaskerCard from './components/card';
import SearchBox from '../../global-components/filter/component/Search';
import Filter from '../../global-components/filter/Filter';
import Select from '../../global-components/select';
import Link from 'next/link';


async function GetWorks()
  {
    const res = await fetch('http://localhost:4000/workposts',{
      next:{
          revalidate: 0
        }
    });

    return res.json();
  }

export default async function page({category,ratings}) {
  const works = await GetWorks();
  const AllServicesName = ['All tasker','Home service tasker','Professional service tasker','Repair service tasker','Delivery service tasker'];
  const AllRatingsNmae = ['All','2.5','3.5','4.5+'];

  return (
    <main>
      {/* <Navbar></Navbar> */}

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
            <Select value={category} names={AllServicesName} ></Select>

            <div className='flex'>
              <h1 className='font-bold'>Ratings:</h1>
              <Select value={ratings} names={AllRatingsNmae}></Select>
            </div>

          </div>
     
          
  {/* Tasker main part */}
          <section className=' mt-4 w-full text-[#2b3035]'>
            <div className='mt-2 mb-2'>
              <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                {
                  works.reverse().map((work) =>(
                    <div key={work.id}>
                      <Link  href = {`/pages/findtasker/${work.id}`}>
                        <TaskerCard work={work} ></TaskerCard>
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
