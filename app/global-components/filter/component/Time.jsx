"use client"
import React from 'react'
import TimeButton from '../../button/TimeButton';
export default function FilterTime() {
  return (
   <div className='card border'>
   <h1 className='mb-3 pl-2 font-bold text-[#001c5e]'>Select Time</h1>
   <div className='flex flex-col gap-2'>
      <TimeButton Buttonlink='#' ButtonName='All jobs times'></TimeButton>
      <TimeButton Buttonlink='#' ButtonName='Morning (8am - 11am)'></TimeButton>
      <TimeButton Buttonlink='#' ButtonName='Afternoon (12pm - 5pm)'></TimeButton>
      <TimeButton Buttonlink='#' ButtonName='Evening (5pm - 9:30pm)'></TimeButton>
   </div>
</div>
  )
}
