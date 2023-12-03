import React from 'react';
import Link from 'next/link';

export default function NavButton({ Buttonlink, ButtonName }) {

  return (
    <div>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <Link
        href={Buttonlink}
      >
        <div className={`text-[#1f5d35] text-[15px] border-2 rounded-md border-[#1f5d35] px-16 py-3 hover:bg-[#1f5d35] hover:text-white  py-3 ease-in duration-500`}>
          <i className="pr-1 fa-solid fa-phone"></i>
          {ButtonName}
        </div>
      </Link>
    </div>
  );
}
