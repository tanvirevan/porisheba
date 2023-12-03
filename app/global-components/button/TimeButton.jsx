import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


export default function NavButton({Buttonlink,ButtonName}) {
  const pathname = usePathname();
  return (
    <Link href={Buttonlink} className={`bg-gay-500 border text-center rounded-lg py-1 hover:border-[#467bfa] focus:border-[#467bfa] focus:text-[#467bfa] ease-in duration-300 ${pathname === Buttonlink ? 'active': 'bg-[[#001c5e]]'}`}>{ButtonName}
    </Link>
  )
}