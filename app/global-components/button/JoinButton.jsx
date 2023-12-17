/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';

export default function NavButton({Buttonlink, ButtonName}) {
  return (
    <Link href={Buttonlink} className={`bg-poriseba-blue text-white px-5 py-2 rounded hover:text-white hover:rounded-xl ease-in duration-200 `}>{ButtonName}
    </Link>
  );
}
 