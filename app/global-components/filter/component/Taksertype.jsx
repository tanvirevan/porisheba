"use client"
import React from 'react'
import TimeButton from '../../button/TimeButton';
export default function FilterTime() {
  return (
   <div className='card border p-2'>
   <h1 className='mb-3 pl-2 font-bold text-[#001c5e]'>Tasker Type</h1>
   <div className='flex flex-col gap-2'>
      <TimeButton Buttonlink='#' ButtonName='Great Value'></TimeButton>
      <TimeButton Buttonlink='#' ButtonName='Elite Tasker'></TimeButton>
      <TimeButton Buttonlink='#' ButtonName='Newbie'></TimeButton>
   </div>
</div>
  )
}