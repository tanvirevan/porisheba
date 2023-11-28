import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


export default function NavButton({Buttonlink,ButtonName}) {
  const pathname = usePathname();
  return (
    <Link href={Buttonlink} className={`text-[#3772ff] border rounded-md border-[#3772ff] px-14 py-3 hover:bg-[#3772ff] hover:text-white hover:px-14 py-3 ease-in duration-300 ${pathname === Buttonlink ? 'active': 'bg-[[#001c5e]]'}`}>{ButtonName}
    </Link>
  )
}
