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
        <div className={`text-[#3772ff] text-[15px] border-2 rounded-md border-[#3772ff] px-14 py-3 hover:bg-[#3772ff] hover:text-white hover:text-[16px] hover:px-14 py-3 ease-out duration-500`}>
          <i className="pr-1 fa-solid fa-phone"></i>
          {ButtonName}
        </div>
      </Link>
    </div>
  );
}
