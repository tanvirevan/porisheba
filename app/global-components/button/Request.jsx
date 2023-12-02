import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function NavButton({Buttonlink, ButtonName}) {
  const pathname = usePathname();
  return (
    <Link href={Buttonlink} 
    className={`bg-[#1f5d35] border-2 border-[#1f5d35] text-white px-8 py-3 rounded hover:text-gray-950 hover:bg-[#f3f4f6] hover:border-[#1f5d35] ease-out duration-500 `}>
      {ButtonName}
    </Link>
  )
}
