"use client";
import React from 'react';
export const dynamicParams = true;
async function jobDe(id)
   {
      //imitate delay.......
      await new Promise(resolve => setTimeout(resolve,2000));

      const res = await fetch('http://localhost:4000/jobposts/'+id);
      return res.json();
   }

export default async function JobDetails({params}) {
  const job = await jobDe(params.id);
  return (
    <main className="flex justify-center min-h-screen">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <div className="w-1/2">
        <h1 className="mt-5 mb-5 text-[20px] text-gray-950">{job.title}</h1>
        
        <div className="flex justify-between mb-2 items-center">
          <div className="flex items-center">
            <i className="text-[30px] fa-solid fa-user-astronaut"></i>
            <div className="pl-2">
              <h1>Post by</h1>
              <h1 className="pl-1">Tanvir Evan</h1>
            </div>
          </div>
          <h1 className="">{job.price} taka</h1>
        </div>

        <div className="flex justify-between mb-2 items-center">
          <div className="flex items-center">
            <i className="text-[30px] fa-solid fa-location-dot"></i>
            <div className="pl-2">
              <h1>Location</h1>
              <h1 className="pl-1">{job.location}</h1>
            </div>
          </div>
          <div className="">How long ago</div>
        </div>

        <div className="flex mb-2 items-center">
          <i className="text-[30px] fa-solid fa-clock"></i>
          <div className="pl-2">
            <h1>Done on</h1>
            <h1 className='p-1'>{job.date}</h1>
            <h1 className="p-1">{job.time}</h1>
          </div>
        </div>

        <div className='flex justify-center'>
          <button className="bg-green-600 text-white rounded-lg w-1/2 justify-center mb-4 p-2">
              <span>Make an Offer</span>
          </button>
        </div>

        <div>
          <h1 className="text-gray-950 text-center">Details</h1>
          <p className="pl-2 text-gray-500">
            {job.body}
          </p>
        </div>
      </div>
    </main>
  );
}
