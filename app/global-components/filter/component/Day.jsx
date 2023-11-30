"use client"
import React from 'react'
import DayButton from '../../../global-components/button/DayButton';
export default function Day() {
  return (
   <div className='card border'>
      <h1 className='mb-3 pl-3 font-bold text-[#001c5e]'>Select Day</h1>
      <div className=' grid grid-cols-1 lg:grid-cols-2 gap-2 '>
            <DayButton Buttonlink='#' ButtonName='Today'></DayButton>
            <DayButton Buttonlink='#' ButtonName='3 days'></DayButton>
            <DayButton Buttonlink='#' ButtonName='a week'></DayButton>
            <DayButton Buttonlink='#' ButtonName='All days'></DayButton>
      </div>
   </div>
  )
}
