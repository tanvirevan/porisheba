/* eslint-disable react/prop-types */
import React from 'react';

export default function Select({ value, names }) {
  return (
    <select className="mx-1 px-2 rounded-md border-none outline-none font-bold">
      {names.map((name, index) => (
        <option key={index} className='hover:rounded-md font-bold' value={value}>{name}</option>
      ))}
    </select>
  );
}
