import React from 'react';
import Link from 'next/link';
import { Menu } from '@headlessui/react';


export default function DropdownButton({ Buttonlink, ButtonName }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          href={Buttonlink}
          className={`${
            active ? 'bg-[#001c5e] hover:text-white hover:rounded-md' : 'text-gray-900'
          } block px-3 py-2 text-sm`}
        >
          {ButtonName}
        </Link>
      )}
    </Menu.Item>
  );
}
