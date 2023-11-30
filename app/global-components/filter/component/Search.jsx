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
    <div className='flex w-full'>
      <input className='p-2 w-full'
        type="text"
        placeholder={placeholdertext}
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className='w-1/5 font-bold hover:bg-[#001c5e] hover:text-white hover:rounded-e-md hover:border ease-in duration-500' onClick={handleSearch}>Search</button>
    </div>
  );
};

