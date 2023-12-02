"use client"
import React from 'react'
import TimeButton from '../../button/TimeButton';
export default function FilterTime() {
  return (
   <div className='card border'>
   <h1 className='mb-2 pl-2 font-bold text-[#001c5e]'>Select Time</h1>
   <div className='flex flex-col gap-2'>
      <TimeButton Buttonlink='#' ButtonName='All jobs times'></TimeButton>
      <TimeButton Buttonlink='#' ButtonName='Morning (8 - 11)'></TimeButton>
      <TimeButton Buttonlink='#' ButtonName='Afternoon (12 - 5)'></TimeButton>
      <TimeButton Buttonlink='#' ButtonName='Evening (5 - 9:30)'></TimeButton>
   </div>
</div>
  )
}
