import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


export default function NavButton({Buttonlink,ButtonName}) {
  const pathname = usePathname();
  return (
    <Link href={Buttonlink} className={`text-gray-600 hover:bg-[#001c5e] hover:text-white hover:px-2 hover:rounded-xl ease-in duration-300 ${pathname === Buttonlink ? 'active': ''}`}>{ButtonName}
    </Link>
  )
}