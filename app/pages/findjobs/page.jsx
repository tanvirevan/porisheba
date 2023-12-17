/* eslint-disable react/react-in-jsx-scope */
'use client';
import { useState, useEffect } from 'react';
import JobsCard from './components/card';
import SearchBox from '../../global-components/filter/component/Search';
import Filter from '../../global-components/filter/Filter';
import Select from '../../global-components/select';
import Link from 'next/link';

async function getJobs() {
  const res = await fetch('http://localhost:4000/jobposts', {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState('All jobs');
  const [jobs, setJobs] = useState([]);

  const filterJobsByCategory = () => {
    if (selectedCategory === 'All jobs') {
      return jobs;
    } else {
      return jobs.filter((job) => job.category === selectedCategory);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      const fetchedJobs = await getJobs();
      setJobs(fetchedJobs);
    };

    fetchJobs();
  }, []);

  const allTimesNames = ['Now', '1h', '2h', '3h', '4h+'];

  return (
    <main>
      <div className='flex gap-10 '>
        <div className='w-3/12'></div>
        <div className='w-[22%] fixed'>
          <div className='rounded-md shadow mt-10 '>
            <SearchBox placeholdertext='Search your jobs' />
          </div>

          <section className='px-4 mt-1 rounded-md text-[#2b3035]'>
            <Filter />
          </section>
        </div>

        <div className='w-9/12'>
          <div className='flex items-center justify-between h-[40px] rounded-md text-[#2b3035] px-4 shadow content-center mt-10'>
            <select
              className='mx-1 px-2 rounded-md border-none outline-none font-bold'
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option className='hover:rounded-md font-bold' value='All jobs'>
                All jobs
              </option>
              <option className='hover:rounded-md font-bold' value='Home Service'>
                Home Service
              </option>
              <option className='hover:rounded-md font-bold' value='professional service'>
                Professional Service
              </option>
              <option className='hover:rounded-md font-bold' value='Repair Service'>
                Repair Service
              </option>
              <option className='hover:rounded-md font-bold' value='Delivery service'>
                Delivery Service
              </option>
            </select>

            <div className='flex'>
              <h1 className='font-bold'>Time:</h1>
              <Select value={allTimesNames} names={allTimesNames} />
            </div>
          </div>

          <section className='mt-4 rounded-md text-[#2b3035]'>
            <div className='mt-2'>
              {filterJobsByCategory().length === 0 ? (
                <p className='text-center mt-4 text-gray-500'>No jobs available for the category.</p>
              ) : (
                <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'>
                  {filterJobsByCategory().map((job) => (
                    <div key={job.id}>
                      <Link href={`/pages/findjobs/${job.id}`}>
                        <JobsCard job={job} />
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
