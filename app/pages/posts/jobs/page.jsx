/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore/lite';

export default function CreateForm() {
  
  const router = useRouter();
  const [job_name, setname] = useState('');
  const [category, setcategory] = useState('');
  const [location, setlocation] = useState('');
  const [date, setdate] = useState('');
  const [time, settime] = useState('');
  const [price, setprice] = useState('');
  const [details, setdetails] = useState('');
  // const [priority, setPriority] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //connect to server
  const handleSubmit = async (e) =>{
         e.preventDefault();
         setIsLoading(true);

         const work = {
               job_name,category,location,date,time,price,details,
            };

         const res = await fetch ('http://localhost:4000/jobposts', {
            next:
              {
                revalidate: 0
              },
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(work)
         });
 
         if(res.status === 201){
               router.refresh();

               router.push('/pages/findjobs');
            }
      };


  return (
  <main className='mt-10 items-center justify-items-center border p-5 bg-gray-100 shadow '>
    <h1 className='mb-2 text-center font-bold text-[#001c5e]'>Post you Work</h1>
    <form onSubmit={handleSubmit}>
        <label>
          <span>Work Title:</span>
          <input className='border rounded-lg'
              required
              type="text"
              onChange={(e) => setname(e.target.value)}
              value={job_name}
          />
        </label>

        <div className='flex gap-10'>
          <label className='w-1/2'>
            <span>Category</span>
            <select className='rounded-lg'
                onChange = {(e) => setcategory(e.target.value)}
                // value = {priority} className='border rounded-lg'
            >
                <option value="Service Catagory not added">Select Services</option>
                <option value="Home Service">Home Service</option>
                <option value="Repair Service">Repair Service</option>
                <option value="Professional Service">Professional Service</option>
                <option value="delivery Service">delivery Service</option>
            </select>
          </label>

          <label className='w-1/2'>
            <span>Location</span>
            <select className='rounded-lg'
                onChange = {(e) => setlocation(e.target.value)}
                // value = {priority} className='border rounded-lg'
            >
                <option value="Location not added">Your Location</option>
                <option value="Saidnogor">Saidnogor</option>
                <option value="Notunbazar">Notunbazar</option>
                <option value="Gulsan">Gulsan</option>
                <option value="Bosundhora">Bosundhora</option>
            </select>
          </label>
        </div>

        <div className='flex gap-10'>
          <label className='w-1/2'>
            <span>Date</span>
            <input className='border rounded-lg'
                required
                type="date"
                onChange={(e) => setdate(e.target.value)}
                value={date}
            />
          </label>

          <label className='w-1/2'>
            <span>Time Slot</span>
            <select className='rounded-lg'
                onChange = {(e) => settime(e.target.value)}
                // value = {priority} className='border rounded-lg'
            >
                <option value="Any Time">Time</option>
                <option value="Any Time">(Any Time)</option>
                <option value="8am - 11am">(8am - 11am)</option>
                <option value="12pm - 5pm">(12pm - 5pm)</option>
                <option value="5pm - 11pm">(5pm - 11pm)</option>
                <option value="12am - 4am">(12am - 4am)</option>
            </select>
          </label>
        </div>

        <label>
          <span>Price</span>
          <input className='border rounded-lg'
              required
              type="number"
              onChange={(e) => setprice(e.target.value)}
              value={price}
          />
        </label>

        <label>
          <span>Details</span>
          <textarea className='border rounded-lg'
              required
              type = "text"
              onChange = {(e) => setdetails(e.target.value)}
              value = {details}
          />
        </label>

        <button className="btn-primary" disabled={isLoading}>
              {isLoading && <span>posting...</span>}
              {!isLoading && <span className='bg-[#001c5e] font-bold text-white px-20 py-3 rounded-lg hover:rounded-full ease-in-out duration-300'>Post</span>}
        </button>

    </form>
  </main>
  );
}
