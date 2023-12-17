/* eslint-disable react/react-in-jsx-scope */
// import Navbar from '../../global-components/navbar/Navbar';
'use client';
import { useState, useEffect } from 'react';

import TaskerCard from './components/card';
import SearchBox from '../../global-components/filter/component/Search';
import Filter from '../../global-components/filter/Filter';
import Select from '../../global-components/select';
import Link from 'next/link';

async function GetWorks() {
  const res = await fetch('http://localhost:4000/workposts', {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState('All tasker');
  const [works, setWorks] = useState([]);
  const AllRatingsNmae = ['All', '2.5', '3.5', '4.5+'];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const fetchedWorks = await GetWorks();
        setWorks(fetchedWorks);
      } catch (error) {
        console.error('Error fetching works:', error);
      }
    };

    fetchWorks();
  }, []);

  const filterWorksByCategory = () => {
    if (selectedCategory === 'All tasker') {
      return works;
    } else {
      return works.filter((work) => work.category === selectedCategory);
    }
  };

  return (
    <main>
      <div className='flex gap-10'>
        <div className='w-3/12'></div>
        {/* Filter section Top part*/}
        <div className='w-[22%] fixed'>
          <div className='rounded-md shadow mt-10'>
            <SearchBox placeholdertext='Search your Tasker'></SearchBox>
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
            <select
              className='mx-1 px-2 rounded-md border-none outline-none font-bold'
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option className='hover:rounded-md font-bold' value='All tasker'>
                All tasker
              </option>
              <option className='hover:rounded-md font-bold' value='Home Service'>
                Home Service
              </option>
              <option className='hover:rounded-md font-bold' value='professional service'>
                professional service
              </option>
              <option className='hover:rounded-md font-bold' value='Repair Service'>
                Repair Service
              </option>
              <option className='hover:rounded-md font-bold' value='Delivery service'>
                Delivery service
              </option>
            </select>

            <div className='flex'>
              <h1 className='font-bold'>Ratings:</h1>
              <Select value={AllRatingsNmae} names={AllRatingsNmae}></Select>
            </div>
          </div>

          {/* Tasker main part */}
          <section className=' mt-4 w-full text-[#2b3035]'>
            <div className='mt-2 mb-2'>
              {filterWorksByCategory().length === 0 ? (
                <p className='text-center'>No taskers available for the selected category.</p>
              ) : (
                <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                  {filterWorksByCategory().map((work) => (
                    <div key={work.id}>
                      <Link href={`/pages/findtasker/${work.id}`}>
                        <TaskerCard work={work}></TaskerCard>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
