"use client";
import React from "react";
export const dynamicParams = true;
async function GitDe(id) {
  //imitate delay.......
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch("http://localhost:4000/workposts/" + id);
  return res.json();
}

export default async function JobDetails({ params }) {
  const git = await GitDe(params.id);
  return (
    <main className="flex justify-center min-h-screen">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <div className="w-1/2">
        <h1 className="mt-5 mb-5 text-[20px] text-gray-950">{git.name}</h1>

        <div className="flex justify-between mb-2 items-center">
          <div className="flex items-center">
            <i className="text-[30px] fa-solid fa-location-dot"></i>
            <div className="pl-2">
              <h1>Location</h1>
              <h1 className="pl-1">{git.location}</h1>
            </div>
          </div>
          <h1 className="">{git.price} taka</h1>
        </div>

        <div className="flex justify-between mb-2 items-center">
          <div className="flex items-center">
          <i className="text-[30px] fa-solid fa-calendar-check"></i>
            <div className="pl-2">
              <h1>{git.priority}</h1>
              <h1 className="pl-1">Work:{git.total_work}</h1>
            </div>
            <div className="">{git.ratings}</div>
          </div>
        </div>

        <div className="flex mb-2 items-center">
          <i className="text-[30px] fa-solid fa-clock"></i>
          <div className="pl-2">
            <h1>Work Day && Time</h1>
            <h1 className="p-1">{git.days}</h1>
            <h1 className="p-1">{git.time}</h1>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-green-600 text-white rounded-lg w-1/2 justify-center mb-4 p-2">
            <span>Hire Now</span>
          </button>
        </div>

        <div>
          <h1 className="text-gray-950 text-center">Details</h1>
          <p className="pl-2 text-gray-500">{git.details}</p>
        </div>
      </div>
    </main>
  );
}
