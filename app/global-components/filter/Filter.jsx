import React from 'react';
import Day from './component/Day';
import Time from './component/Time';
import Price from './component/Price';
import TaskerType from './component/Taksertype';

export default function Filter() {
  return (
    <div>
      <Day></Day>
      <Time></Time>
      <Price></Price>
      <TaskerType></TaskerType>
    </div>
  );
}