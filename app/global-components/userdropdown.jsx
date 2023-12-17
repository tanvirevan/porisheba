/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import DropdownButton from './button/dropdown';

export default function Dropdown({name}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <Menu>
        <div>
          <Menu.Button className='text-base py-0 px-0'>
            {name}
          </Menu.Button>
        </div>

{/* Service Dropdown Start */}
        <Transition show={isDropdownOpen} as={Fragment} enter="transition ease-out duration-400" enterFrom="transform opacity-0 scale-395"  enterTo="transform opacity-100 scale-400" leave="transition ease-in duration-375"leaveFrom="transform opacity-100 scale-400" leaveTo="transform opacity-0 scale-395">

          <Menu.Items className="absolute z-10 mt-5 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

{/* Dropdown Button Start */}
            <div className="py-1">
{/* Home Service Button */}
                <Menu.Item>
                    <DropdownButton Buttonlink="#" ButtonName="Profile" />
                </Menu.Item>

                <Menu.Item>
                    <DropdownButton Buttonlink="#" ButtonName="History" />
                </Menu.Item>  

               <Menu.Item>
                    <DropdownButton Buttonlink="#" ButtonName="Join as a Tasker" />
                </Menu.Item>

{/* Professiona Service Button */}
                <Menu.Item>
                    <DropdownButton Buttonlink="/" ButtonName="logout" />
                </Menu.Item>
                
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}