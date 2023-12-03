import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


export default function NavButton({Buttonlink,ButtonName}) {
  const pathname = usePathname();
  return (
    <Link href={Buttonlink} className={`text-gray-950 border-2 text-center rounded-full px-4 py-2 font-bold hover:border-[#467bfa] focus:border-[#467bfa] focus:text-[#467bfa] ease-in duration-300 ${pathname === Buttonlink ? 'active': 'bg-[[#001c5e]]'}`}>{ButtonName}
    </Link>
  )
}