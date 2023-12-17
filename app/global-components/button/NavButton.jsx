/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function NavButton({Buttonlink,ButtonName}) {
  const pathname = usePathname();
  return (
    <Link href={Buttonlink} className={`text-gray-950 hover:bg-[#001c5e] hover:text-white hover:px-4 py-2 hover:rounded-xl ease-in duration-300 ${pathname === Buttonlink ? 'active': 'bg-[[#001c5e]]'}`}>{ButtonName}
    </Link>
  );
}
