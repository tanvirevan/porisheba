import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function NavButton({Buttonlink, ButtonName}) {
  const pathname = usePathname();
  return (
    <Link href={Buttonlink} className={`bg-[#3772ff] text-white px-8 py-3 rounded hover:text-white hover:rounded-xl ease-in duration-200 `}>{ButtonName}
    </Link>
  )
}
 