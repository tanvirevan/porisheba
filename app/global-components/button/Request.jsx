import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function NavButton({Buttonlink, ButtonName}) {
  const pathname = usePathname();
  return (
    <Link href={Buttonlink} 
    className={`bg-[#3772ff] text-[15px] border-2 border-[#3772ff] text-white px-8 py-3 rounded hover:text-gray-950 hover:font-bold hover:bg-[#f3f4f6] ease-out duration-300 `}>
      {ButtonName}
    </Link>
  )
}
 