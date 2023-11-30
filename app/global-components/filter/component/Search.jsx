"use client"
import React, { useState } from 'react';

export default function SearchBox ({placeholdertext})  {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here using the 'searchTerm'
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <div className='flex relative border rounded-md'>
        <input className='p-2 w-full'
          type="text"
          placeholder={placeholdertext}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className='w-1/6 font-bold hover:bg-[#001c5e] hover:text-white hover:rounded-e-md hover:border ease-in duration-300' onClick={handleSearch}>
        <i class="fa-solid fa-right-to-bracket"></i>
        </button>
      </div>
    </div>
  );
};

